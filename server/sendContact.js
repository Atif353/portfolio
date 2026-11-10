const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_URL = "https://api.resend.com/emails";

function clean(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function sendContact(payload, env) {
  const apiKey = env.RESEND_API_KEY;
  const to = env.CONTACT_TO_EMAIL;
  const from = env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return { status: 500, body: { error: "Contact service is not configured." } };
  }

  const name = clean(payload?.name, 120);
  const email = clean(payload?.email, 200);
  const topic = clean(payload?.topic, 80) || "General";
  const message = clean(payload?.message, 5000);

  if (clean(payload?.website, 200)) {
    return { status: 200, body: { ok: true } };
  }

  if (!name || !EMAIL_PATTERN.test(email) || message.length < 10) {
    return { status: 400, body: { error: "Please check the form fields." } };
  }

  const response = await fetch(RESEND_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `${topic} — from ${name}`,
      text: `${message}\n\n— ${name} (${email})\nTopic: ${topic}`,
    }),
  });

  if (!response.ok) {
    return { status: 502, body: { error: "The message could not be delivered." } };
  }

  return { status: 200, body: { ok: true } };
}
