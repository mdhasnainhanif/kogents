// utils/sendNewsletterConfirmation.ts

// -------------------- CONFIG --------------------
export const NEWSLETTER_CONFIG = {
  PHP_MAILER_URL: "https://kogents-email-service.vercel.app/api/contact-email",
  TIMEOUT: 30000,
};

// -------------------- TYPES --------------------
export type NewsletterConfirmationInput = {
  email: string;
  name?: string;
};

export type NewsletterConfirmationResult = {
  status: "success" | "error";
  message: string;
  details?: any;
  email?: {
    ok: boolean;
    raw: string;
    json?: any;
  };
};

// -------------------- MAIN FUNCTION --------------------
/**
 * Sends newsletter confirmation email to the subscriber
 */
export async function sendNewsletterConfirmation(
  input: NewsletterConfirmationInput
): Promise<NewsletterConfirmationResult> {
  // Validation
  if (!input.email) {
    return {
      status: "error",
      message: "Email is required for newsletter confirmation",
    };
  }

  try {
    const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "Unknown";
    const subscriberName = input.name || "Newsletter Subscriber";

    // Prepare newsletter confirmation email data
    const params = new URLSearchParams({
      name: subscriberName,
      email: input.email,
      phone_number: "", // Not required for newsletter
      message: `Welcome to Kogents AI Newsletter! 🚀\n\nThank you for subscribing to our newsletter. You'll receive the latest updates about AI agents, platform integrations, and industry insights.\n\nBest regards,\nKogents AI Team`,
      to: input.email, // Send confirmation to the subscriber
      gclid: "",
      fbclid: "",
      igclid: "",
      ttclid: "",
      fingerprint: "",
      chat: "",
      stable_session_id: "",
      fingerprintdata: "",
      client_ip: "",
      user_agent: userAgent,
      service_id: "3", // Different service ID for newsletter confirmations
      link: "https://kogents.ai/newsletter-confirmation"
    });

    console.log("📧 Sending newsletter confirmation email to:", input.email);
    console.log("📧 Email service URL:", NEWSLETTER_CONFIG.PHP_MAILER_URL);
    console.log("📧 Email parameters:", Object.fromEntries(params.entries()));

    const emailRes = await fetch(NEWSLETTER_CONFIG.PHP_MAILER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    });

    console.log("📧 Email service response status:", emailRes.status);
    console.log("📧 Email service response headers:", Object.fromEntries(emailRes.headers.entries()));

    const emailRaw = await emailRes.text();
    let emailJson: any = null;
    
    try {
      emailJson = JSON.parse(emailRaw);
    } catch {
      // Non-JSON response is acceptable
    }

    const emailOk = emailRes.ok && (emailJson ? emailJson.success === true : true);

    if (!emailOk) {
      console.error("❌ Newsletter confirmation email failed:", emailRaw);
      return {
        status: "error",
        message: "Newsletter confirmation email failed to send",
        details: emailJson ?? emailRaw,
        email: { ok: false, raw: emailRaw, json: emailJson ?? undefined },
      };
    }

    console.log("✅ Newsletter confirmation email sent successfully to:", input.email);

    return {
      status: "success",
      message: "Newsletter confirmation email sent successfully!",
      details: {
        subscriber_email: input.email,
        subscriber_name: subscriberName,
        email_sent: true,
      },
      email: { ok: true, raw: emailRaw, json: emailJson ?? undefined },
    };

  } catch (error: any) {
    console.error("❌ Newsletter confirmation error:", error);
    return {
      status: "error",
      message: "Newsletter confirmation request error",
      details: error?.message || String(error),
    };
  }
}
