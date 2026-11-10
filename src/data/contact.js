import { profile } from "./site";

export const contactIntro =
  "Open to full-time remote engineering roles and selected freelance projects — backend systems, full stack product work, and LLM-powered features.";

export const topics = ["Full-time role", "Freelance project", "Contract work", "Just saying hi"];

export const contactRows = [
  { label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin, external: true },
  { label: "GitHub", value: profile.githubLabel, href: profile.github, external: true },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, external: false },
];

