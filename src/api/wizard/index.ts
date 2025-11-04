// utils/sendLeadToCRM.ts

import { handleBriefForm } from "@/services/briefFormService";

// -------------------- TYPES --------------------
export interface ContactData {
  name: string;
  phone?: string;
  email: string;

  // Optional message fields (either can be used)
  project_need?: string;
  message?: string;

  // Big/optional fields
  metadata?: any;

  // Tracking
  gclid?: string;
  fbclid?: string;
  igclid?: string;
  ttclid?: string;

  // Fingerprinting / session
  fingerprint?: string;
  chat?: string;
  stable_session_id?: string;
  stableSessionId?: string;      // alt
  fingerprintdata?: string;
  fingerprintData?: string;      // alt

  // Misc
  client_ip?: string;
  user_agent?: string;           // if you have server-side override
  service_id?: number | string;
  link?: string;

  // Alt name for phone
  phone_number?: string;
  botname?: string;
}

export interface CRMResponse {
  success: boolean;
  message?: string;
  error?: string;
  data?: any;
  details?: any;
  methodUsed?: "CRM_POST" | "VALIDATION_FAILED";
  status?: number;
}

// -------------------- CRM CONFIG + HELPERS --------------------
// Keep in sync with your working CONTACT API file
export const CRM_CONFIG = {
  BASE_URL: "https://portal.kogents.ai/",
  ENDPOINT: "crm/lead/create/briefform",
  TIMEOUT: 30000,
  USER_AGENT: "Kogents-AI-CRM/1.0", // browsers can't set this; we pass user_agent in body
};


function withTimeout<T>(p: Promise<T>, ms: number, abortController: AbortController): Promise<T> {
  const timer = setTimeout(() => abortController.abort(), ms);
  return p.finally(() => clearTimeout(timer));
}


// Trim object keys with empty/undefined values (TS-safe)
function compact<T extends Record<string, unknown>>(obj: T): Partial<T> {
  const out: Partial<T> = {};
  (Object.keys(obj) as (keyof T)[]).forEach((k) => {
    const v = obj[k];
    if (v !== undefined && v !== null && v !== "") {
      out[k] = v;
    }
  });
  return out;
}


// -------------------- MAIN --------------------
/**
 * Sends lead to CRM via POST (JSON in body).
 * - Includes `metadata` in CRM payload.
 * - Email functionality removed as CRM handles email sending.
 */
export async function sendLeadToCRM(input: ContactData, timeoutMs = 15000): Promise<CRMResponse> {
  // 1) Validate
  const name = input.name;
  const email = input.email;
  const phone = input.phone ?? input.phone_number;
  const botname = input.botname;
  if (!name || !email) {
    return {
      success: false,
      error: "Name and email are required fields",
      methodUsed: "VALIDATION_FAILED",
    };
  }

  // 2) Normalize / map
  const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "Unknown";
  const message = input.message ?? input.project_need ?? "";
  const stable_session_id = input.stable_session_id ?? input.stableSessionId ?? "";
  const fingerprintdata = input.fingerprintdata ?? input.fingerprintData ?? "";
  const phone_number = phone || ""; // Allow empty phone number

  // 3) Build CRM payload (metadata INCLUDED as requested)
  const crmPayload = compact({
    name,
    phone_number,
    email,
    message, // Laravel expects "message"
    metadata: {
      ...input.metadata,
      gclid: input.gclid,
      fbclid: input.fbclid,
      igclid: input.igclid,
      ttclid: input.ttclid,
      fingerprint: input.fingerprint,
      stable_session_id,
      fingerprintdata,
    },
    user_agent: input.user_agent ?? userAgent,
    service_id: Number(input.service_id ?? 1),
    link: input.link ?? "https://kogents.ai/contact",
  }) as Record<string, unknown>;

  // Serialize & send to CRM via POST
  let crmResult: any = { attempted: true };
  try {
    const crmUrl = `${CRM_CONFIG.BASE_URL}${CRM_CONFIG.ENDPOINT}`;

    const aborter = new AbortController();
    const crmFetch = fetch(crmUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(crmPayload),
      signal: aborter.signal,
    });

    const crmResponse = await withTimeout(crmFetch, Math.min(timeoutMs, CRM_CONFIG.TIMEOUT), aborter);
    const raw = await crmResponse.text();

    crmResult = {
      attempted: true,
      ok: crmResponse.ok,
      status: crmResponse.status,
      statusText: crmResponse.statusText,
      raw,
    };
    console.log("✅ CRM submission result:", { ok: crmResult.ok, status: crmResult.status });
    // Do not throw on CRM failure — mailer will still run
  } catch (err: any) {
    crmResult = {
      attempted: true,
      ok: false,
      status: 0,
      statusText: err?.message || "CRM request failed",
      raw: "",
    };
    console.error("❌ CRM submission failed:", err.message);
  }

  // 4) Send email notification to info@kogents.ai - ALWAYS ATTEMPT THIS
  console.log("📧 ===== EMAIL SENDING PROCESS STARTING =====");
  console.log("📧 CRM result:", crmResult);
  console.log("📧 Will send email regardless of CRM status");


  const emailResult: any = { attempted: false };
  //   try {
  //     console.log("📧 Step 1: Starting email sending process...");
  //     console.log("📧 Step 1.5: Email inputs:", { name, email, phone_number, hasMetadata: !!input.metadata });

  //     // Format brief form data for email (HTML template)
  //     const botName = input.metadata?.form_steps?.[0]?.fields?.[0]?.a || input.botname || "N/A";

  //     console.log("📧 Step 2: Building HTML email template...");

  //     // Build HTML email template
  //     let emailHTML = `
  // <!DOCTYPE html>
  // <html>
  // <head>
  //   <meta charset="UTF-8">
  //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //   <title>New Brief Form Submission</title>
  // </head>
  // <body style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.6; color: #222; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
  //   <div style="background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
  //     <h1 style="color: #5d51af; margin-top: 0; border-bottom: 2px solid #5d51af; padding-bottom: 10px;">🤖 New Brief Form Submission</h1>

  //     <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0;">
  //       <h2 style="color: #333; margin-top: 0; font-size: 18px;">👤 Contact Information</h2>
  //       <table style="width: 100%; border-collapse: collapse;">
  //         <tr>
  //           <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Name:</td>
  //           <td style="padding: 8px 0; color: #222;">${name}</td>
  //         </tr>
  //         <tr>
  //           <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
  //           <td style="padding: 8px 0; color: #222;"><a href="mailto:${email}" style="color: #5d51af; text-decoration: none;">${email}</a></td>
  //         </tr>
  //         <tr>
  //           <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
  //           <td style="padding: 8px 0; color: #222;">${phone_number || "Not provided"}</td>
  //         </tr>
  //       </table>
  //     </div>`;

  //     if (input.metadata?.form_steps && input.metadata.form_steps.length > 0) {
  //       emailHTML += `
  //     <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0;">
  //       <h2 style="color: #333; margin-top: 0; font-size: 18px;">⚙️ Bot Configuration</h2>`;

  //       input.metadata.form_steps.forEach((step: any, index: number) => {
  //         if (step.fields && step.fields.length > 0) {
  //           step.fields.forEach((field: any) => {
  //             emailHTML += `
  //       <div style="margin: 10px 0; padding: 10px; background-color: #ffffff; border-left: 3px solid #5d51af; border-radius: 4px;">
  //         <strong style="color: #5d51af;">${field.q}:</strong>
  //         <span style="color: #333; margin-left: 10px;">${field.a || "N/A"}</span>
  //       </div>`;
  //           });
  //         }
  //         if (step.selected_options) {
  //           emailHTML += `
  //       <div style="margin: 10px 0; padding: 10px; background-color: #ffffff; border-left: 3px solid #5d51af; border-radius: 4px;">
  //         <strong style="color: #5d51af;">Selected Options:</strong>
  //         <span style="color: #333; margin-left: 10px;">${step.selected_options.join(", ")}</span>
  //       </div>`;
  //         }
  //         if (step.training_method) {
  //           emailHTML += `
  //       <div style="margin: 10px 0; padding: 10px; background-color: #ffffff; border-left: 3px solid #5d51af; border-radius: 4px;">
  //         <strong style="color: #5d51af;">Training Method:</strong>
  //         <span style="color: #333; margin-left: 10px;">${step.training_method}</span>
  //       </div>`;
  //         }
  //         if (step.website_url) {
  //           emailHTML += `
  //       <div style="margin: 10px 0; padding: 10px; background-color: #ffffff; border-left: 3px solid #5d51af; border-radius: 4px;">
  //         <strong style="color: #5d51af;">Website URL:</strong>
  //         <a href="${step.website_url}" style="color: #5d51af; margin-left: 10px; text-decoration: none;">${step.website_url}</a>
  //       </div>`;
  //         }
  //         if (step.files && step.files.length > 0) {
  //           emailHTML += `
  //       <div style="margin: 10px 0; padding: 10px; background-color: #ffffff; border-left: 3px solid #5d51af; border-radius: 4px;">
  //         <strong style="color: #5d51af;">Files Uploaded:</strong>
  //         <span style="color: #333; margin-left: 10px;">${step.files.map((f: any) => f.name).join(", ")}</span>
  //       </div>`;
  //         }
  //         if (step.accent_color) {
  //           emailHTML += `
  //       <div style="margin: 10px 0; padding: 10px; background-color: #ffffff; border-left: 3px solid #5d51af; border-radius: 4px;">
  //         <strong style="color: #5d51af;">Accent Color:</strong>
  //         <span style="color: #333; margin-left: 10px;">${step.accent_color}</span>
  //       </div>`;
  //         }
  //       });

  //       emailHTML += `
  //     </div>`;
  //     }

  //     if (message) {
  //       emailHTML += `
  //     <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0;">
  //       <h2 style="color: #333; margin-top: 0; font-size: 18px;">💬 Message</h2>
  //       <p style="color: #333; white-space: pre-wrap; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
  //     </div>`;
  //     }

  //     emailHTML += `
  //     <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #888; font-size: 14px;">
  //       <p style="margin: 0;">This email was sent from the Kogents AI Brief Form</p>
  //       <p style="margin: 5px 0 0 0;">Date: ${new Date().toLocaleString()}</p>
  //     </div>
  //   </div>
  // </body>
  // </html>`;

  //     // Also create plain text version for fallback
  //     let emailMessage = `New Brief Form Submission\n\n`;
  //     emailMessage += `Name: ${name}\n`;
  //     emailMessage += `Email: ${email}\n`;
  //     emailMessage += `Phone: ${phone_number || "Not provided"}\n\n`;

  //     if (input.metadata?.form_steps) {
  //       emailMessage += `Bot Configuration:\n`;
  //       input.metadata.form_steps.forEach((step: any) => {
  //         if (step.fields && step.fields.length > 0) {
  //           step.fields.forEach((field: any) => {
  //             emailMessage += `- ${field.q}: ${field.a}\n`;
  //           });
  //         }
  //         if (step.selected_options) {
  //           emailMessage += `- Selected Options: ${step.selected_options.join(", ")}\n`;
  //         }
  //         if (step.training_method) {
  //           emailMessage += `- Training Method: ${step.training_method}\n`;
  //         }
  //         if (step.website_url) {
  //           emailMessage += `- Website URL: ${step.website_url}\n`;
  //         }
  //         if (step.files && step.files.length > 0) {
  //           emailMessage += `- Files: ${step.files.map((f: any) => f.name).join(", ")}\n`;
  //         }
  //         if (step.accent_color) {
  //           emailMessage += `- Accent Color: ${step.accent_color}\n`;
  //         }
  //       });
  //     }

  //     if (message) {
  //       emailMessage += `\nMessage: ${message}`;
  //     }

  //     console.log("📧 Step 3: HTML template built, length:", emailHTML.length);
  //     console.log("📧 Step 4: Preparing email API call...");

  //     // Send email via Next.js API route (server-side, more reliable)
  //     const phpMailerUrl = "https://kogents-email-service.vercel.app/api/contact-email";
  //     const toEmail = "info@kogents.ai";
  //     const emailPayload = {
  //       name,
  //       email,
  //       phone_number,
  //       message,
  //       metadata: input.metadata || {},
  //       user_agent: input.user_agent || userAgent,
  //       service_id: input.service_id ?? 2,
  //       link: input.link || "https://kogents.ai/chatbot/brief",
  //       gclid: input.gclid || "",
  //       fbclid: input.fbclid || "",
  //       igclid: input.igclid || "",
  //       ttclid: input.ttclid || "",
  //       fingerprint: input.fingerprint || "",
  //       stable_session_id: stable_session_id || "",
  //       stableSessionId: stable_session_id || "",
  //       fingerprintdata: fingerprintdata || "",
  //       fingerprintData: fingerprintdata || "",
  //       client_ip: input.client_ip || "",
  //     };

  //     console.log("📧 Step 6: Calling email API route...", phpMailerUrl);
  //     console.log("📧 Step 6.5: Email payload keys:", Object.keys(emailPayload));

  //     const emailRes = await fetch(phpMailerUrl, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(emailPayload),
  //     });

  //     console.log("📧 Step 7: Email API response received!");
  //     console.log("📧 Email API response status:", emailRes.status);
  //     console.log("📧 Email API response ok:", emailRes.ok);

  //     console.log("📧 Step 8: Parsing email API response...");
  //     const emailRaw = await emailRes.text();
  //     console.log("📧 Step 8.5: Email raw response length:", emailRaw.length);

  //     let emailJson: any = null;
  //     try {
  //       emailJson = JSON.parse(emailRaw);
  //       console.log("📧 Step 8.6: Email JSON parsed:", emailJson);
  //     } catch (parseError) {
  //       console.log("📧 Step 8.6: Non-JSON response (this is OK)");
  //     }

  //     emailResult = {
  //       attempted: true,
  //       ok: emailRes.ok && (emailJson ? emailJson.success === true : true),
  //       status: emailRes.status,
  //       raw: emailRaw,
  //       json: emailJson,
  //     };

  //     console.log("📧 Step 9: Email result:", { ok: emailResult.ok, status: emailResult.status });

  //     if (emailResult.ok) {
  //       console.log("✅ ✅ ✅ Email sent successfully to info@kogents.ai ✅ ✅ ✅");
  //     } else {
  //       console.error("❌ ❌ ❌ Email sending failed! ❌ ❌ ❌");
  //       console.error("❌ Email status:", emailResult.status);
  //       console.error("❌ Email response:", emailRaw);
  //       if (emailJson) {
  //         console.error("❌ Email JSON error:", emailJson.error);
  //         console.error("❌ Email JSON details:", emailJson.details);
  //       }
  //     }
  //   } catch (emailError: any) {
  //     emailResult = {
  //       attempted: true,
  //       ok: false,
  //       status: 0,
  //       error: emailError?.message || "Email sending failed",
  //     };
  //     // Don't fail the entire request if email fails
  //     console.error("❌ Email sending error:", emailError);
  //     console.error("❌ Email error stack:", emailError?.stack);
  //   }

  // 5) Return result based on CRM response
  if (crmResult.ok) {
    await handleBriefForm(crmResult.raw)
    return {
      success: true,
      message: "Lead successfully sent to CRM" + (emailResult.ok ? " and email sent" : ""),
      data: {
        name,
        email,
        phone_number,
        message,
        metadata: input.metadata ? "Present" : "Not present",
        tracking: {
          gclid: input.gclid ?? "Not present",
          fbclid: input.fbclid ?? "Not present",
          igclid: input.igclid ?? "Not present",
          ttclid: input.ttclid ?? "Not present",
          fingerprint: input.fingerprint ? "Present" : "Not present",
          stable_session_id: stable_session_id || "Not present",
        },
        crm_summary: {
          attempted: crmResult.attempted,
          ok: crmResult.ok,
          status: crmResult.status,
        },
        email_summary: {
          attempted: emailResult.attempted,
          ok: emailResult.ok,
          status: emailResult.status,
        },
      },
      methodUsed: "CRM_POST",
      status: crmResult.status,
    };
  } else {
    return {
      success: false,
      error: `CRM request failed (Status: ${crmResult.status})`,
      details: { crm: crmResult, email: emailResult },
      methodUsed: "CRM_POST",
      status: crmResult.status,
    };
  }
}
