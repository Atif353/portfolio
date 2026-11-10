export const profile = {
  name: "Atif Mubashar",
  role: "Full Stack Software Engineer",
  shortRole: "Software Engineer",
  email: "atifmubashar353@gmail.com",
  phone: "+92 309 1560034",
  phoneHref: "tel:+923091560034",
  location: "Lahore, PK · UTC+5",
  resume: "/Atif_Mubashar_Resume.pdf",
  resumeFile: "Atif_Mubashar_Resume.pdf",
  photo: "/atif-mubashar.jpg",
  linkedin: "https://www.linkedin.com/in/atifmubashar-dev/",
  linkedinLabel: "in/atifmubashar-dev",
  github: "https://github.com/Atif353",
  githubLabel: "github.com/Atif353",
};

export const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/work", label: "Work" },
  { to: "/experience", label: "Experience" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const socialLinks = [
  { label: "LinkedIn", href: profile.linkedin, external: true },
  { label: "GitHub", href: profile.github, external: true },
  { label: "Email", href: `mailto:${profile.email}`, external: false },
];

export const hero = {
  availability: "Available for remote roles & freelance",
  kicker: "Atif Mubashar — Full Stack Software Engineer, Backend & AI Engineering",
  headline: "Backends that hold up. Interfaces that make sense.",
  headlineAccent: "AI that knows its limits.",
  intro:
    "Two years shipping production platforms at Prisma Technologies — secure APIs, real-time features, payments and the React interfaces on top. On my own time I build agentic workflows and RAG systems with the same discipline: tests, logs and guardrails.",
};

export const metrics = [
  { value: "2 yrs", label: "Professional experience" },
  { value: "5+", label: "Production platforms delivered" },
  { value: "50+", label: "REST APIs built across platforms" },
  { value: "4+", label: "Third-party integrations" },
];

export const services = [
  {
    number: "01",
    tag: "Core",
    title: "Backend & APIs",
    description:
      "REST APIs, JWT auth and RBAC, WebSocket real-time features, payment gateways and cloud storage — designed to stay maintainable.",
  },
  {
    number: "02",
    tag: "End to end",
    title: "Full stack product",
    description:
      "React and TypeScript interfaces wired cleanly to the schemas and services behind them, from first model to shipped feature.",
  },
  {
    number: "03",
    tag: "Applied",
    title: "LLM applications",
    description:
      "Agentic workflows with LangGraph and RAG pipelines — with confirmations, citations and relevance checks built in.",
  },
];

export const stackPrimary = [
  "Node.js",
  "Express.js",
  "TypeScript",
  "React.js",
  "Next.js",
  "MongoDB",
  "PostgreSQL",
  "FastAPI",
  "Python",
  "Socket.io",
  "AWS S3",
  "Tailwind CSS",
];

export const stackSecondary = [
  "LangGraph",
  "LangChain",
  "Gemini",
  "FAISS",
  "RAG",
  "Tool calling",
  "JWT · RBAC",
  "WebSockets",
  "Webhooks",
  "Supabase",
  "Docker",
  "Vercel",
];
