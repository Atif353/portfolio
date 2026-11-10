import { sendContact } from "../server/sendContact.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const { status, body } = await sendContact(req.body, process.env);
    return res.status(status).json(body);
  } catch {
    return res.status(500).json({ error: "Unexpected error." });
  }
}
