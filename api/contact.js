import { Resend } from "resend";

export default async function handler(req, res) {
  // CORS Headers for API calls
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Only accept POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed. Only POST requests are supported."
    });
  }

  try {
    const { name, email, subject, message, botcheck } = req.body || {};

    // 1. Spam honeypot validation
    if (botcheck) {
      return res.status(200).json({
        success: true,
        message: "Message processed successfully."
      });
    }

    // 2. Input validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields (name, email, and message are required)."
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address provided."
      });
    }

    const cleanName = String(name).trim().slice(0, 100);
    const cleanEmail = String(email).trim().slice(0, 100);
    const cleanSubject = String(subject || "New Portfolio Inquiry").trim().slice(0, 200);
    const cleanMessage = String(message).trim().slice(0, 5000);

    const recipientEmail = process.env.MY_EMAIL || "msaadbjs7@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return res.status(500).json({
        success: false,
        message: "Email service is not configured yet. Please configure RESEND_API_KEY."
      });
    }

    // 3. Initialize Resend
    const resend = new Resend(resendApiKey.trim());

    const formattedTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short"
    });

    // 4. Executive Branded HTML Email Template
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Message</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; margin: 0 auto; background-color: #1e293b; border-radius: 16px; overflow: hidden; border: 1px solid #334155; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);">
    
    <!-- Top Gradient Bar -->
    <tr>
      <td height="4" style="background: linear-gradient(90deg, #3b82f6, #06b6d4, #10b981); font-size: 0; line-height: 0;">&nbsp;</td>
    </tr>

    <!-- Header -->
    <tr>
      <td style="padding: 32px 32px 24px; text-align: center; background-color: #1e293b; border-bottom: 1px solid #334155;">
        <div style="display: inline-block; background: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.3); padding: 5px 14px; border-radius: 20px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">
          Saad.dev Portfolio Notification
        </div>
        <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">
          🚀 New Lead / Inquiry Received
        </h1>
        <p style="color: #94a3b8; font-size: 13px; margin: 6px 0 0 0;">
          Submitted on ${formattedTime} (IST)
        </p>
      </td>
    </tr>

    <!-- Main Content -->
    <tr>
      <td style="padding: 28px 32px; background-color: #1e293b;">
        
        <!-- Sender Meta Table -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #0f172a; border-radius: 12px; border: 1px solid #334155; margin-bottom: 24px;">
          <tr>
            <td style="padding: 12px 18px; border-bottom: 1px solid #1e293b; color: #64748b; font-size: 11px; font-weight: 700; text-transform: uppercase; width: 85px;">
              Sender
            </td>
            <td style="padding: 12px 18px; border-bottom: 1px solid #1e293b; color: #f8fafc; font-size: 14px; font-weight: 600;">
              ${cleanName}
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 18px; border-bottom: 1px solid #1e293b; color: #64748b; font-size: 11px; font-weight: 700; text-transform: uppercase;">
              Email
            </td>
            <td style="padding: 12px 18px; border-bottom: 1px solid #1e293b; color: #38bdf8; font-size: 14px; font-weight: 500;">
              <a href="mailto:${cleanEmail}" style="color: #38bdf8; text-decoration: none;">${cleanEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 18px; color: #64748b; font-size: 11px; font-weight: 700; text-transform: uppercase;">
              Subject
            </td>
            <td style="padding: 12px 18px; color: #f8fafc; font-size: 14px; font-weight: 500;">
              ${cleanSubject}
            </td>
          </tr>
        </table>

        <!-- Message Box -->
        <div style="background-color: #0f172a; border-left: 4px solid #3b82f6; border-radius: 0 12px 12px 0; padding: 20px 22px; margin-bottom: 28px; border-top: 1px solid #334155; border-right: 1px solid #334155; border-bottom: 1px solid #334155;">
          <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #60a5fa; letter-spacing: 0.5px; margin-bottom: 8px;">
            💬 Message Content
          </div>
          <div style="color: #e2e8f0; font-size: 14px; line-height: 1.7; white-space: pre-wrap; font-family: inherit;">${cleanMessage}</div>
        </div>

        <!-- Call to Action Button -->
        <div style="text-align: center; margin: 28px 0 12px;">
          <a href="mailto:${cleanEmail}?subject=Re: ${encodeURIComponent(cleanSubject)}" 
             style="display: inline-block; background: linear-gradient(135deg, #2563eb, #1d4ed8); color: #ffffff !important; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-weight: 700; font-size: 14px; box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4); text-align: center;">
            ✉️ Quick Reply to ${cleanName}
          </a>
        </div>

      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 20px 32px; background-color: #0f172a; text-align: center; border-top: 1px solid #334155;">
        <p style="color: #64748b; font-size: 11px; margin: 0; line-height: 1.5;">
          This message was delivered automatically from your personal portfolio at 
          <a href="https://github.com/Saad2607" style="color: #60a5fa; text-decoration: none;">Mohammed Saad Shaikh (Saad.dev)</a>.
        </p>
      </td>
    </tr>

  </table>
</body>
</html>
    `;

    // 5. Send mail via Resend API
    const { data, error } = await resend.emails.send({
      from: `${cleanName} (via Saad.dev) <onboarding@resend.dev>`,
      to: [recipientEmail],
      reply_to: cleanEmail,
      subject: `💼 [Portfolio] ${cleanSubject} - from ${cleanName}`,
      html: htmlContent,
      text: `New message from ${cleanName} (${cleanEmail}):\n\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}`
    });

    if (error) {
      console.error("Resend API Error:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Failed to dispatch email via Resend."
      });
    }

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
      id: data?.id
    });
  } catch (error) {
    console.error("Error in contact serverless handler:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to process contact request."
    });
  }
}
