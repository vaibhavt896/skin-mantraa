import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, concern, message, website } = body;

    // Honeypot check - bots fill the `website` field
    if (website) {
      return NextResponse.json({ ok: true }); // silently reject
    }

    // Validate required fields
    if (!name || !phone || !concern) {
      return NextResponse.json(
        { error: "Name, phone and concern are required." },
        { status: 400 },
      );
    }

    // Log appointment request (replace with Resend/SMTP when keys are ready)
    console.log("[Appointment Request]", {
      name,
      phone,
      email: email || "Not provided",
      concern,
      message: message || "No additional message",
      timestamp: new Date().toISOString(),
    });

    // TODO: Add Resend email trigger here when RESEND_API_KEY is set in .env.local
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ ... });

    return NextResponse.json({
      ok: true,
      message: "Appointment request received.",
    });
  } catch (err) {
    console.error("[Contact API Error]", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
