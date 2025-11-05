import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";   // SMTP needs Node, not Edge
export const dynamic = "force-dynamic";
export const maxDuration = 30;     // 30 seconds for Vercel/serverless (Pro plan allows up to 60s)

interface EmailRequestBody {
    html?: string;
}

export async function POST(req: NextRequest) {
    const startTime = Date.now();

    try {
        console.log("📧 Contact Form API Request Received");

        const body: EmailRequestBody = await req.json();
        console.log("📝 Request Body:", {
            html: body.html,
        });

        // Environment variables check
        console.log("🔍 Checking Environment Variables...");
        const host = process.env.SMTP_HOST;
        const port = Number(process.env.SMTP_PORT || 465);
        const secure = (process.env.SMTP_SECURE || "true").toLowerCase() === "true" || port === 465;
        const user = process.env.SMTP_USER;
        const pass = process.env.SMTP_PASS;

        console.log("SMTP Config:", {
            host: host ? "✅ Set" : "❌ Missing",
            port,
            secure,
            user: user ? "✅ Set" : "❌ Missing",
            pass: pass ? "✅ Set (hidden)" : "❌ Missing",
        });

        if (!host || !user || !pass) {
            console.error("❌ SMTP Configuration Error: Missing required environment variables");
            return NextResponse.json(
                {
                    error: "SMTP configuration is incomplete. Please check server environment variables.",
                    details: "Missing: " + (!host ? "SMTP_HOST " : "") + (!user ? "SMTP_USER " : "") + (!pass ? "SMTP_PASS" : "")
                },
                { status: 500 }
            );
        }

        console.log("🔧 Creating Nodemailer Transporter...");
        const transporter = nodemailer.createTransport({
            host,
            port,
            secure,
            auth: { user, pass },
            tls: {
                minVersion: "TLSv1.2",
                rejectUnauthorized: false,
            },
            connectionTimeout: 10000,  // Reduced for faster failure in production
            greetingTimeout: 10000,
            socketTimeout: 15000,
        });

        // Verify transporter connection (but with timeout)
        console.log("🔐 Verifying SMTP Connection...");
        try {
            await Promise.race([
                transporter.verify(),
                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error("SMTP verification timeout")), 8000)
                )
            ]);
            console.log("✅ SMTP Connection Verified Successfully");
        } catch (verifyError: any) {
            console.error("❌ SMTP Verification Failed:");
            console.error("- Error Code:", verifyError.code);
            console.error("- Error Message:", verifyError.message);

            return NextResponse.json(
                {
                    error: "SMTP connection failed",
                    code: verifyError.code || "VERIFY_TIMEOUT",
                    details: verifyError.message,
                },
                { status: 500 }
            );
        }


        // Try sending to info@kogents.ai
        const mailOptions = {
            from: `"Kogents" <${user}>`,
            to: "info@kogents.ai",
            // replyTo: body.email,
            subject: "New Brief Form Submission",
            html: body.html,
        };

        console.log("📤 Sending Email...");
        console.log("- From:", mailOptions.from);
        console.log("- To:", mailOptions.to);
        // console.log("- ReplyTo:", mailOptions.replyTo);
        console.log("- Subject:", mailOptions.subject);

        // Send email with timeout
        const info = await Promise.race([
            transporter.sendMail(mailOptions),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Email sending timeout")), 20000)
            )
        ]) as any;

        console.log("📧 Raw SMTP Response Details:");
        console.log("- Full Info Object:", JSON.stringify({
            messageId: info.messageId,
            accepted: info.accepted,
            rejected: info.rejected,
            pending: info.pending,
            response: info.response,
            envelope: info.envelope
        }, null, 2));

        const duration = Date.now() - startTime;
        console.log("✅ Email Sent Successfully!");
        console.log("- Message ID:", info.messageId);
        console.log("- Response:", info.response);
        console.log("- Accepted Recipients:", info.accepted);
        console.log("- Rejected Recipients:", info.rejected);
        console.log("- Pending Recipients:", info.pending);
        console.log("- Duration:", duration + "ms");

        // Check if email was actually accepted by SMTP server
        if (info.accepted && info.accepted.length > 0) {
            console.log("✅ Email accepted by SMTP server for:", info.accepted.join(", "));
        }
        if (info.rejected && info.rejected.length > 0) {
            console.error("❌ Email REJECTED by SMTP server for:", info.rejected.join(", "));
        }
        if (info.pending && info.pending.length > 0) {
            console.warn("⚠️ Email PENDING for:", info.pending.join(", "));
        }

        // Also check the envelope to see what addresses were actually sent to
        if (info.envelope) {
            console.log("📮 Envelope Details:");
            console.log("- From:", info.envelope.from);
            console.log("- To:", info.envelope.to);
        }

        // Warning if info@kogents.ai is not in accepted array
        const infoEmailAccepted = info.accepted?.includes("info@kogents.ai");
        if (!infoEmailAccepted) {
            console.warn("⚠️ WARNING: info@kogents.ai is NOT in accepted recipients!");
            console.warn("- This means SMTP server may not deliver the email");
            console.warn("- Check SMTP server restrictions or domain verification");
        }

        return NextResponse.json({
            message: "Email sent successfully",
            messageId: info.messageId,
            accepted: info.accepted || [],
            rejected: info.rejected || [],
            pending: info.pending || [],
            response: info.response || "No response from SMTP server",
            envelope: info.envelope || null,
            warning: !infoEmailAccepted ? "info@kogents.ai not in accepted recipients - may not be delivered" : undefined
        });
    } catch (err: any) {
        const duration = Date.now() - startTime;
        console.error("❌ ERROR SENDING BRIEF FORM EMAIL:");
        console.error("==================================");
        console.error("- Duration:", duration + "ms");
        console.error("- Error Type:", err?.constructor?.name || typeof err);
        console.error("- Error Message:", err?.message);
        console.error("- Error Code:", err?.code);
        console.error("- Error Response:", err?.response);
        console.error("- Full Error:", JSON.stringify(err, Object.getOwnPropertyNames(err || {}), 2));
        console.error("==================================");

        let errorMessage = "Failed to send email";
        let errorDetails = err?.message || String(err);
        let errorCode = err?.code || "UNKNOWN";

        if (err?.message?.includes("timeout")) {
            errorMessage = "Request timeout - SMTP server took too long to respond";
            errorCode = "ETIMEDOUT";
        } else if (err?.code === "EAUTH") {
            errorMessage = "Authentication failed. Please check SMTP credentials.";
            errorDetails = "Invalid username or password";
        } else if (err?.code === "ECONNECTION") {
            errorMessage = "Connection failed. Please check SMTP host and port.";
            errorDetails = "Could not connect to SMTP server";
        }

        return NextResponse.json(
            {
                error: errorMessage,
                code: errorCode,
                details: errorDetails,
            },
            { status: 500 }
        );
    }
}