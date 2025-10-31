import { NextRequest, NextResponse } from 'next/server';

const PHP_MAILER_URL = "https://kogents-email-service.vercel.app/api/contact-email";

export async function POST(request: NextRequest) {
  try {
    console.log("📧 Brief email API route called");
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email) {
      console.error("❌ Validation failed: Name or email missing");
      return NextResponse.json(
        {
          success: false,
          error: "Name and email are required fields",
        },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      phone_number = "",
      message = "",
      metadata = {},
      user_agent = "",
      service_id = 2,
      link = "https://kogents.ai/chatbot/brief",
    } = body;

    console.log("📝 Email data:", { name, email, phone_number, hasMetadata: !!metadata });

    // Build HTML email template
    let emailHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Brief Form Submission</title>
</head>
<body style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.6; color: #222; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
  <div style="background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h1 style="color: #5d51af; margin-top: 0; border-bottom: 2px solid #5d51af; padding-bottom: 10px;">🤖 New Brief Form Submission</h1>
    
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0;">
      <h2 style="color: #333; margin-top: 0; font-size: 18px;">👤 Contact Information</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Name:</td>
          <td style="padding: 8px 0; color: #222;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
          <td style="padding: 8px 0; color: #222;"><a href="mailto:${escapeHtml(email)}" style="color: #5d51af; text-decoration: none;">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
          <td style="padding: 8px 0; color: #222;">${escapeHtml(phone_number || "Not provided")}</td>
        </tr>
      </table>
    </div>`;

    // Add bot configuration if metadata has form_steps
    if (metadata?.form_steps && Array.isArray(metadata.form_steps)) {
      emailHTML += `
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0;">
      <h2 style="color: #333; margin-top: 0; font-size: 18px;">⚙️ Bot Configuration</h2>`;
      
      metadata.form_steps.forEach((step: any) => {
        if (step.fields && Array.isArray(step.fields)) {
          step.fields.forEach((field: any) => {
            emailHTML += `
      <div style="margin: 10px 0; padding: 10px; background-color: #ffffff; border-left: 3px solid #5d51af; border-radius: 4px;">
        <strong style="color: #5d51af;">${escapeHtml(field.q || "Field")}:</strong>
        <span style="color: #333; margin-left: 10px;">${escapeHtml(field.a || "N/A")}</span>
      </div>`;
          });
        }
        if (step.selected_options && Array.isArray(step.selected_options)) {
          emailHTML += `
      <div style="margin: 10px 0; padding: 10px; background-color: #ffffff; border-left: 3px solid #5d51af; border-radius: 4px;">
        <strong style="color: #5d51af;">Selected Options:</strong>
        <span style="color: #333; margin-left: 10px;">${escapeHtml(step.selected_options.join(", "))}</span>
      </div>`;
        }
        if (step.training_method) {
          emailHTML += `
      <div style="margin: 10px 0; padding: 10px; background-color: #ffffff; border-left: 3px solid #5d51af; border-radius: 4px;">
        <strong style="color: #5d51af;">Training Method:</strong>
        <span style="color: #333; margin-left: 10px;">${escapeHtml(step.training_method)}</span>
      </div>`;
        }
        if (step.website_url) {
          emailHTML += `
      <div style="margin: 10px 0; padding: 10px; background-color: #ffffff; border-left: 3px solid #5d51af; border-radius: 4px;">
        <strong style="color: #5d51af;">Website URL:</strong>
        <a href="${escapeHtml(step.website_url)}" style="color: #5d51af; margin-left: 10px; text-decoration: none;">${escapeHtml(step.website_url)}</a>
      </div>`;
        }
        if (step.files && Array.isArray(step.files) && step.files.length > 0) {
          const fileNames = step.files.map((f: any) => f.name || "Unknown").join(", ");
          emailHTML += `
      <div style="margin: 10px 0; padding: 10px; background-color: #ffffff; border-left: 3px solid #5d51af; border-radius: 4px;">
        <strong style="color: #5d51af;">Files Uploaded:</strong>
        <span style="color: #333; margin-left: 10px;">${escapeHtml(fileNames)}</span>
      </div>`;
        }
        if (step.accent_color) {
          emailHTML += `
      <div style="margin: 10px 0; padding: 10px; background-color: #ffffff; border-left: 3px solid #5d51af; border-radius: 4px;">
        <strong style="color: #5d51af;">Accent Color:</strong>
        <span style="color: #333; margin-left: 10px;">${escapeHtml(step.accent_color)}</span>
      </div>`;
        }
      });
      
      emailHTML += `
    </div>`;
    }
    
    if (message) {
      emailHTML += `
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0;">
      <h2 style="color: #333; margin-top: 0; font-size: 18px;">💬 Message</h2>
      <p style="color: #333; white-space: pre-wrap; margin: 0;">${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    </div>`;
    }
    
    emailHTML += `
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #888; font-size: 14px;">
      <p style="margin: 0;">This email was sent from the Kogents AI Brief Form</p>
      <p style="margin: 5px 0 0 0;">Date: ${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>`;

    // Prepare parameters for PHP mailer
    const params = new URLSearchParams({
      name: name,
      email: email,
      phone_number: phone_number || "",
      message: emailHTML, // Send HTML formatted email
      to: "info@kogents.ai",
      gclid: body.gclid || "",
      fbclid: body.fbclid || "",
      igclid: body.igclid || "",
      ttclid: body.ttclid || "",
      fingerprint: body.fingerprint || "",
      chat: "",
      stable_session_id: body.stable_session_id || body.stableSessionId || "",
      fingerprintdata: body.fingerprintdata || body.fingerprintData || "",
      client_ip: body.client_ip || request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || "",
      user_agent: user_agent || request.headers.get('user-agent') || "",
      service_id: String(service_id),
      link: link,
    });

    console.log("📤 Sending email to PHP mailer service...");
    console.log("📧 To: info@kogents.ai");
    console.log("📧 From:", email);
    console.log("📧 PHP Mailer URL:", PHP_MAILER_URL);

    // Send email via PHP mailer service (server-side) with timeout
    const controller = new AbortController();
    const timeoutMs = 20000; // 20 second timeout
    const timeoutId = setTimeout(() => {
      console.warn("⏱️ Email request taking too long, aborting...");
      controller.abort();
    }, timeoutMs);

    let emailRes: Response;
    try {
      console.log("📤 Attempting to connect to PHP mailer service...");
      const startTime = Date.now();
      
      emailRes = await fetch(PHP_MAILER_URL, {
        method: "POST",
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "Kogents-Brief-Form/1.0",
        },
        body: params,
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      const duration = Date.now() - startTime;
      console.log(`✅ Email request completed in ${duration}ms`);
    } catch (fetchError: any) {
      clearTimeout(timeoutId);
      if (fetchError.name === 'AbortError') {
        console.error(`❌ Email request timed out after ${timeoutMs}ms`);
        console.error("❌ This might indicate PHP mailer service is slow or unavailable");
        throw new Error(`Email request timeout - PHP mailer service did not respond within ${timeoutMs}ms`);
      }
      console.error("❌ Fetch error details:", {
        name: fetchError.name,
        message: fetchError.message,
        code: fetchError.code,
        errno: fetchError.errno,
        syscall: fetchError.syscall,
      });
      throw fetchError;
    }

    const emailRaw = await emailRes.text();
    console.log("📧 PHP mailer response status:", emailRes.status);
    console.log("📧 PHP mailer response:", emailRaw);

    let emailJson: any = null;
    try {
      emailJson = JSON.parse(emailRaw);
      console.log("📧 Parsed JSON response:", emailJson);
    } catch {
      console.log("📧 Non-JSON response received");
    }

    const emailOk = emailRes.ok && (emailJson ? emailJson.success === true : true);

    if (emailOk) {
      console.log("✅ Brief form email sent successfully to info@kogents.ai");
      return NextResponse.json({
        success: true,
        message: "Email sent successfully",
        status: emailRes.status,
      });
    } else {
      // Log error but return success (email is secondary to CRM submission)
      console.error("❌ Brief form email failed:", emailRaw);
      console.error("❌ Email details:", emailJson || emailRaw);
      console.warn("⚠️ Email failed but CRM submission succeeded - continuing...");
      
      // Return success with warning (don't fail the entire request)
      return NextResponse.json({
        success: true,
        message: "Email sending attempted but may have failed",
        warning: "Email service returned error",
        details: emailJson || emailRaw,
        status: emailRes.status,
      });
    }
  } catch (error: any) {
    console.error("❌ Error in send-brief-email API route:", error);
    console.error("❌ Error message:", error.message);
    console.error("❌ Error name:", error.name);
    console.error("❌ Error stack:", error.stack);
    console.warn("⚠️ Email sending failed but CRM submission succeeded - continuing...");
    
    // Return success with warning (don't fail the entire request)
    // Email is secondary - CRM submission is more important
    return NextResponse.json({
      success: true,
      message: "Email sending failed but CRM submission succeeded",
      warning: error.message || "Email service unavailable",
      details: {
        error: error.message,
        name: error.name,
        type: error.name === 'AbortError' ? 'timeout' : 'network_error'
      },
    });
  }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  if (!text) return "";
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

