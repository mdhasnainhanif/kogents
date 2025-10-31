// utils/sendLeadToCRM.ts

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

  // 5) Return result based on CRM response
  if (crmResult.ok) {
    return {
      success: true,
      message: "Lead successfully sent to CRM",
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
      },
      methodUsed: "CRM_POST",
      status: crmResult.status,
    };
  } else {
    return {
      success: false,
      error: `CRM request failed (Status: ${crmResult.status})`,
      details: { crm: crmResult },
      methodUsed: "CRM_POST",
      status: crmResult.status,
    };
  }
}
