// utils/sendContact.ts

// -------------------- CRM CONFIG + HELPER --------------------
export const CRM_CONFIG = {
  BASE_URL: "https://kogents.ai/",
  ENDPOINT: "crm/lead/create/contact",
  TIMEOUT: 30000,
  USER_AGENT: "Kogents-AI-CRM/1.0", // kept for parity, but browsers can't set this header
};

export const getCRMUrl = (encodedData: string): string => {
  return `${CRM_CONFIG.BASE_URL}${CRM_CONFIG.ENDPOINT}/${encodedData}`;
};

// -------------------- TYPES --------------------
export type SendContactInput = {
  name: string;
  phone: string;
  email: string;
  project_need: string;

  gclid?: string;
  fbclid?: string;
  igclid?: string;
  ttclid?: string;

  fingerprint?: string;
  chat?: string;
  stable_session_id?: string;
  fingerprintdata?: string;

  // Optional extras to mirror server behavior
  client_ip?: string; // If you fetch IP client-side, pass it here; otherwise PHP can use REMOTE_ADDR
  to?: string;        // Defaults to info@kogents.ai
  service_id?: string | number; // Defaults to 1
  link?: string;      // Defaults to https://kogents.ai/contact
};

export type SendContactResult = {
  status: "success" | "error";
  message: string;
  details?: any;
  crm?: {
    attempted: boolean;
    ok?: boolean;
    status?: number;
    statusText?: string;
    raw?: string;
  };
  email?: {
    ok: boolean;
    raw: string;
    json?: any;
  };
};

// -------------------- UTILS --------------------
// Base64 encode with UTF-8 safety for browser environment
function base64EncodeUtf8(input: string): string {
  // encodeURIComponent -> UTF-8 percent-encoding; unescape -> raw string; btoa -> base64
  return btoa(unescape(encodeURIComponent(input)));
}

function withTimeout<T>(p: Promise<T>, ms: number, abortController: AbortController): Promise<T> {
  const timer = setTimeout(() => abortController.abort(), ms);
  return p.finally(() => clearTimeout(timer));
}

// -------------------- MAIN FUNCTION --------------------
/**
 * Fully client-side function that:
 * 1) Validates input
 * 2) Sends CRM GET (base64-encoded payload) — failure is logged in result but does not abort
 * 3) Sends PHP mailer POST (required)
 */
export async function sendContact(input: SendContactInput): Promise<SendContactResult> {
  // ---- 1) Validation (same required fields) ----
  const { name, email, phone, project_need } = input;
  if (!name || !email || !phone || !project_need) {
    return {
      status: "error",
      message: "All required fields are mandatory",
    };
    }

  // Gather user agent from browser (mirrors server route sending user_agent in body)
  const userAgent =
    typeof navigator !== "undefined" ? navigator.userAgent : "Unknown";

  // ---- 2) Build contactData (same mapping as server) ----
  const contactData = {
    name: input.name,
    phone_number: input.phone,
    email: input.email,
    message: input.project_need, // project_need -> message (Laravel expects message)
    gclid: input.gclid || "",
    fbclid: input.fbclid || "",
    igclid: input.igclid || "",
    ttclid: input.ttclid || "",
    fingerprint: input.fingerprint || "",
    chat: input.chat || "",
    stable_session_id: input.stable_session_id || "",
    fingerprintdata: input.fingerprintdata || "",
    client_ip: input.client_ip || "", // optional; server can infer if empty
    user_agent: userAgent,
    service_id: Number(input.service_id ?? 1),
    link: input.link ?? "https://kogents.ai/contact",
  };

  // ---- 3) CRM Request (base64 + encodeURIComponent) ----
  let crmResult: SendContactResult["crm"] = { attempted: true };
  try {
    const jsonData = JSON.stringify(contactData);
    const base64Data = base64EncodeUtf8(jsonData);
    const encodedData = encodeURIComponent(base64Data);
    const crmUrl = getCRMUrl(encodedData);

    const crmAbort = new AbortController();
    const crmFetch = fetch(crmUrl, {
      method: "GET",
      // NOTE: Browser forbids setting 'User-Agent' header. We pass user_agent in body above.
      headers: {
        "Content-Type": "application/json",
      },
      signal: crmAbort.signal,
    });

    const crmResponse = await withTimeout(crmFetch, CRM_CONFIG.TIMEOUT, crmAbort);

    const raw = await crmResponse.text();
    crmResult = {
      attempted: true,
      ok: crmResponse.ok,
      status: crmResponse.status,
      statusText: crmResponse.statusText,
      raw,
    };

    // If CRM fails, we continue (parity with server: "log and continue").
  } catch (err: any) {
    crmResult = {
      attempted: true,
      ok: false,
      status: 0,
      statusText: err?.message || "CRM request failed",
      raw: "",
    };
  }

  // ---- 4) PHP Mailer POST (required) ----
  try {
    const phpMailerUrl = "https://kogents-email-service.vercel.app/api/contact-email";
    const toEmail = input.to ?? "info@kogents.ai";

    const params = new URLSearchParams({
      name: input.name,
      email: input.email,
      phone_number: input.phone,
      message: input.project_need,
      to: toEmail,
      gclid: input.gclid || "",
      fbclid: input.fbclid || "",
      igclid: input.igclid || "",
      ttclid: input.ttclid || "",
      fingerprint: input.fingerprint || "",
      chat: input.chat || "",
      stable_session_id: input.stable_session_id || "",
      fingerprintdata: input.fingerprintdata || "",
      client_ip: input.client_ip || "", // optional; backend can infer IP
      user_agent: userAgent,
      service_id: String(contactData.service_id),
      link: contactData.link,
    });

    const emailRes = await fetch(phpMailerUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    });

    const emailRaw = await emailRes.text();
    let emailJson: any = null;
    try {
      emailJson = JSON.parse(emailRaw);
    } catch {
      // Non-JSON response is acceptable, server code handled that too
    }

    const emailOk = emailRes.ok && (emailJson ? emailJson.success === true:true);

    if (!emailOk) {
      return {
        status: "error",
        message: "Email failed to send",
        details: emailJson ?? emailRaw,
        crm: crmResult,
        email: { ok: false, raw: emailRaw, json: emailJson ?? undefined },
      };
    }

    // Success (parity with server response semantics)
    return {
      status: "success",
      message: "Form submitted successfully!",
      details: {
        data: {
          name: input.name,
          email: input.email,
          phone: input.phone,
          project_need: input.project_need,
          tracking: {
            gclid: input.gclid || "Not present",
            fbclid: input.fbclid || "Not present",
            igclid: input.igclid || "Not present",
            ttclid: input.ttclid || "Not present",
            fingerprint: input.fingerprint ? "Present" : "Not present",
            stable_session_id: input.stable_session_id || "Not present",
          },
          email_to: toEmail,
        },
      },
      crm: crmResult,
      email: { ok: true, raw: emailRaw, json: emailJson ?? undefined },
    };
  } catch (error: any) {
    return {
      status: "error",
      message: "Email request error",
      details: error?.message || String(error),
      crm: crmResult,
    };
  }
}

// -------------------- EXAMPLE USAGE --------------------
// (Call from your component or handler)
// const res = await sendContact({
//   name: "John Doe",
//   phone: "+1234567890",
//   email: "john@example.com",
//   project_need: "Website redesign",
//   gclid: "...",
//   fbclid: "...",
//   fingerprint: "...",
//   // client_ip: "1.2.3.4", // optional (or let PHP infer)
// });
// console.log(res);
