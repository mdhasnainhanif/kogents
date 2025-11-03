import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;     // 30 seconds for Vercel/serverless (Pro plan allows up to 60s)

interface EmailRequestBody {
    to: string;
}

export async function POST(req: NextRequest) {
    try {
        console.log("📧 Newsletter API Request Received");

        const body: EmailRequestBody = await req.json();
        console.log("📝 Request Body:", { to: body.to });

        if (!body?.to) {
            console.error("❌ Validation Error: Email (to) is missing");
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        // Environment variables with same config as contactForm
        const host = process.env.SMTP_HOST!;
        const port = Number(process.env.SMTP_PORT || 465);
        const secure = (process.env.SMTP_SECURE || "true").toLowerCase() === "true" || port === 465;
        const user = process.env.SMTP_USER!;
        const pass = process.env.SMTP_PASS!;

        console.log("🔍 SMTP Config:", {
            host: host ? "✅ Set" : "❌ Missing",
            port,
            secure,
            user: user ? "✅ Set" : "❌ Missing",
            pass: pass ? "✅ Set (hidden)" : "❌ Missing",
        });

        if (!host || !user || !pass) {
            console.error("❌ SMTP Configuration Error: Missing required environment variables");
            return NextResponse.json(
                { error: "SMTP configuration is incomplete. Please check server environment variables." },
                { status: 500 }
            );
        }

        console.log("🔧 Creating Nodemailer Transporter...");
        const transporter = nodemailer.createTransport({
            host,
            port,
            secure, // true for 465 (SMTPS)
            auth: { user, pass },
            tls: {
                minVersion: "TLSv1.2",
                rejectUnauthorized: false, // Fix for self-signed certificate error
            },
            connectionTimeout: 10000,  // Reduced for faster failure in production
            greetingTimeout: 10000,
            socketTimeout: 15000,
        });

        // Verify transporter connection (with timeout)
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
                    code: verifyError.code,
                    details: verifyError.message,
                },
                { status: 500 }
            );
        }

        // Email content
        console.log("📨 Preparing Newsletter Email...");
        const mailOptions = {
            from: `"Kogents" <${user}>`,
            to: body.to,
            cc: user,
            replyTo: user,
            subject: "Thank You for Getting in Touch!",
            html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6;color:#222">
          <h2 style="color:#5d51af;margin:0 0 16px">Hi,</h2>
          <p>Thank you for reaching out to us! We truly appreciate your interest.</p>
          <p>Our team will get back to you shortly.</p>
          <br/>
          <p>Warm regards,</p>
          <p><strong>Kogents Team</strong></p>
        </div>
      `,
        };

        console.log("📤 Sending Newsletter Email...");
        console.log("- From:", mailOptions.from);
        console.log("- To:", mailOptions.to);
        console.log("- Subject:", mailOptions.subject);

        // Send the email with timeout
        const info = await Promise.race([
            transporter.sendMail(mailOptions),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Email sending timeout")), 20000)
            )
        ]) as any;

        console.log("✅ Newsletter Email Sent Successfully!");
        console.log("- Message ID:", info.messageId);
        console.log("- Response:", info.response);

        return NextResponse.json({
            message: "Email sent successfully",
            messageId: info.messageId,
        });
    } catch (error: any) {
        console.error("❌ ERROR SENDING NEWSLETTER EMAIL:");
        console.error("==================================");
        console.error("- Error Type:", error.constructor.name);
        console.error("- Error Message:", error.message);
        console.error("- Error Code:", error.code);
        console.error("- Error Response:", error.response);
        console.error("- Error ResponseCode:", error.responseCode);
        console.error("- Full Error:", JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
        console.error("==================================");

        // Detailed error message
        let errorMessage = "Failed to send email";
        let errorDetails = error.message || "Unknown error";

        if (error.code === "EAUTH") {
            errorMessage = "Authentication failed. Please check SMTP credentials.";
            errorDetails = "Invalid username or password";
        } else if (error.code === "ECONNECTION") {
            errorMessage = "Connection failed. Please check SMTP host and port.";
            errorDetails = "Could not connect to SMTP server";
        } else if (error.code === "ETIMEDOUT") {
            errorMessage = "Connection timeout. SMTP server not responding.";
            errorDetails = "Request timed out";
        } else if (error.response) {
            errorDetails = error.response;
        }

        return NextResponse.json(
            {
                error: errorMessage,
                code: error.code || "UNKNOWN",
                details: errorDetails,
            },
            { status: 500 }
        );
    }
}
