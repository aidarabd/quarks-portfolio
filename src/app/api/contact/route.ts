import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("Telegram env vars are not configured.");
    return NextResponse.json(
      { ok: false, error: "Server is not configured." },
      { status: 500 }
    );
  }

  let data: ContactPayload;
  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = data.name?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const message = data.message?.trim() ?? "";

  // Required fields mirror the form (name, email, subject, message are required there).
  if (!name || !email || !data.subject?.trim() || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 }
    );
  }

  const lines = [
    "<b>New contact request</b>",
    "",
    `<b>Name:</b> ${escapeHtml(name)}`,
    `<b>Email:</b> ${escapeHtml(email)}`,
    data.phone?.trim() ? `<b>Phone:</b> ${escapeHtml(data.phone.trim())}` : null,
    data.company?.trim()
      ? `<b>Company:</b> ${escapeHtml(data.company.trim())}`
      : null,
    `<b>Topic:</b> ${escapeHtml(data.subject!.trim())}`,
    "",
    "<b>Message:</b>",
    escapeHtml(message),
  ].filter(Boolean);

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: lines.join("\n"),
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      }
    );

    if (!tgRes.ok) {
      const detail = await tgRes.text();
      console.error("Telegram API error:", tgRes.status, detail);
      return NextResponse.json(
        { ok: false, error: "Failed to deliver message." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Telegram request failed:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to deliver message." },
      { status: 502 }
    );
  }
}
