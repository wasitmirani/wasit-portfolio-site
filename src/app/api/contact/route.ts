import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, _honeypot, _timestamp } = body;

    // Bot detection: honeypot field must be empty
    if (_honeypot) {
      return NextResponse.json({ success: true });
    }

    // Bot detection: form must take at least 3 seconds to fill
    const submittedAt = Number(_timestamp);
    if (submittedAt && Date.now() - submittedAt < 3000) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        subject: `[Portfolio] ${subject}`,
        message,
        from_name: "Portfolio Contact Form",
        replyto: email,
      }),
    });

    const result = await res.json();

    if (!result.success) {
      return NextResponse.json(
        { error: result.message || "Failed to send message." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
