// utils/sendLeadToCRM.ts

// -------------------- TYPES --------------------
export interface ContactData {
  name: string;
  phone: string;
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
}

export interface CRMResponse {
  success: boolean;
  message?: string;
  error?: string;
  data?: any;
  details?: any;
  methodUsed?: "CRM_GET" | "PHP_MAILER_EMAIL" | "VALIDATION_FAILED";
  status?: number;
}

// -------------------- CRM CONFIG + HELPERS --------------------
// Keep in sync with your working CONTACT API file
export const CRM_CONFIG = {
  BASE_URL: "https://kogents.ai/",
  ENDPOINT: "crm/lead/create/contact",
  TIMEOUT: 30000,
  USER_AGENT: "Kogents-AI-CRM/1.0", // browsers can't set this; we pass user_agent in body
};

export const getCRMUrl = (encodedData: string): string =>
  `${CRM_CONFIG.BASE_URL}${CRM_CONFIG.ENDPOINT}/${encodedData}`;

// Base64 encode with UTF-8 safety for browser env
function base64EncodeUtf8(input: string): string {
  return btoa(unescape(encodeURIComponent(input)));
}

function withTimeout<T>(p: Promise<T>, ms: number, abortController: AbortController): Promise<T> {
  const timer = setTimeout(() => abortController.abort(), ms);
  return p.finally(() => clearTimeout(timer));
}

function byteLength(str: string): number {
  // Rough byte length for URL guard
  return new Blob([str]).size;
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

// Helper to encode any object for CRM GET
function encodeForCRM(obj: Record<string, unknown>) {
  const json = JSON.stringify(obj);
  const base64 = base64EncodeUtf8(json);
  const encoded = encodeURIComponent(base64);
  const url = getCRMUrl(encoded);
  return { encoded, url, urlLength: byteLength(url) };
}

// -------------------- MAIN --------------------
/**
 * Sends lead to CRM via GET (base64 in URL) and to email via POST (form-encoded).
 * - Includes `metadata` in BOTH CRM and Email (per your request).
 * - Logs a WARNING if the CRM URL is large (risk of 414/400), but does not block.
 */
export async function sendLeadToCRM(input: ContactData, timeoutMs = 15000): Promise<CRMResponse> {
  // 1) Validate
  const name = input.name;
  const email = input.email;
  const phone = input.phone ?? input.phone_number;
  if (!name || !email || !phone) {
    return {
      success: false,
      error: "All required fields are mandatory",
      methodUsed: "VALIDATION_FAILED",
    };
  }

  // 2) Normalize / map
  const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "Unknown";
  const message = input.message ?? input.project_need ?? "";
  const stable_session_id = input.stable_session_id ?? input.stableSessionId ?? "";
  const fingerprintdata = input.fingerprintdata ?? input.fingerprintData ?? "";
  const phone_number = phone;

  // 3) Build CRM payload (metadata INCLUDED as requested)
  const crmPayload = compact({
    name,
    phone_number,
    email,
    message, // Laravel expects "message"
    gclid: input.gclid,
    fbclid: input.fbclid,
    igclid: input.igclid,
    ttclid: input.ttclid,
    fingerprint: input.fingerprint,
    stable_session_id,
    // metadata: input.metadata, // ✅ include metadata
    user_agent: input.user_agent ?? userAgent,
    service_id: Number(input.service_id ?? 1),
    link: input.link ?? "https://kogents.ai/contact",
  }) as Record<string, unknown>;

  // Serialize & encode for CRM GET
  let crmResult: any = { attempted: true };
  try {
    const { url, urlLength } = encodeForCRM(crmPayload);

    // Non-blocking warning if URL is getting big (risk varies by infra)
    const SAFE_URL_WARN = 1800; // conservative; many stacks break ~2k
    if (urlLength > SAFE_URL_WARN) {
      // eslint-disable-next-line no-console
      console.warn(
        `[CRM] Warning: Encoded URL length ${urlLength} bytes exceeds ${SAFE_URL_WARN}. ` +
          `Large metadata may cause 414/400 depending on proxies/servers.`
      );
    }

    const aborter = new AbortController();
    const crmFetch = fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
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
    // Do not throw on CRM failure — mailer will still run
  } catch (err: any) {
    crmResult = {
      attempted: true,
      ok: false,
      status: 0,
      statusText: err?.message || "CRM request failed",
      raw: "",
    };
  }

  // 5) PHP Mailer POST — always include full metadata and heavy fields
  try {
    const phpMailerUrl =
      "https://kogents-email-service.vercel.app/api/send-email";
    const toEmail = "info@kogents.ai";

    const emailData = compact({
      name,
      email,
      phone_number,
      message,
      to: toEmail,
      metadata: input.metadata,        // ✅ include metadata
      gclid: input.gclid,
      fbclid: input.fbclid,
      igclid: input.igclid,
      ttclid: input.ttclid,
      fingerprint: input.fingerprint,
      chat: input.chat,
      stable_session_id,
      fingerprintdata,                 // large allowed here
      client_ip: input.client_ip,
      user_agent: input.user_agent ?? userAgent,
      service_id: String(Number(input.service_id ?? 1)),
      link: input.link ?? "https://kogents.ai/contact",
    });

    const params = new URLSearchParams();
    for (const [k, v] of Object.entries(emailData)) {
      params.append(k, typeof v === "object" ? JSON.stringify(v) : String(v));
    }

    const emailRes = await fetch(phpMailerUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    });

    const emailRaw = await emailRes.text();
    let emailJson: any = null;
    try { emailJson = JSON.parse(emailRaw); } catch {}

    const emailOk = emailRes.ok && (emailJson ? emailJson.status === "success" : true);
    if (!emailOk) {
      return {
        success: false,
        error: "Email failed to send",
        details: { email: emailJson ?? emailRaw, crm: crmResult },
        methodUsed: "PHP_MAILER_EMAIL",
        status: emailRes.status,
      };
    }

    // Success response
    return {
      success: true,
      message: "Lead successfully sent (CRM attempted) and email delivered",
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
        email_to: toEmail,
        crm_summary: {
          attempted: crmResult.attempted,
          ok: crmResult.ok,
          status: crmResult.status,
        },
      },
      methodUsed: "PHP_MAILER_EMAIL",
      status: emailRes.status,
    };
  } catch (error: any) {
    return {
      success: false,
      error: "Email request error",
      details: { email: error?.message || String(error), crm: crmResult },
      methodUsed: "PHP_MAILER_EMAIL",
    };
  }
}
