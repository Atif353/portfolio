export const bio = [
  "I'm a full stack engineer at Prisma Technologies in Lahore. Over two years I've shipped features across five-plus production platforms — a B2B construction workflow tool, a marketplace with money transfer, school transport and exam systems — working from schema design to frontend integration.",
  "My strength is the backend: REST APIs, JWT authentication, role-based access, WebSocket real-time features, payment gateways and cloud storage. Alongside client work I build LLM applications — agentic workflows with LangGraph and RAG pipelines with LangChain, Gemini and FAISS.",
];

export const principles = [
  {
    number: "01",
    title: "Backend-first thinking",
    description: "Start from the data model and API contract; the interface is easier to get right when the foundation is.",
  },
  {
    number: "02",
    title: "Secure by default",
    description: "JWT, role-based access, validated requests and signed URLs are part of the first version, not a later patch.",
  },
  {
    number: "03",
    title: "AI with guardrails",
    description: "User confirmation before actions, cited sources, relevance checks and logs — so LLM features stay trustworthy.",
  },
];

const core = (name) => ({ name, core: true });
const skill = (name) => ({ name, core: false });

export const skills = [
  {
    number: "01",
    category: "Backend & APIs",
    items: [
      core("Node.js"),
      core("Express.js"),
      core("RESTful APIs"),
      skill("FastAPI"),
      core("Middleware & service layers"),
      skill("Validation & error handling"),
    ],
  },
  {
    number: "02",
    category: "AI & LLM engineering",
    items: [
      skill("LangGraph"),
      skill("LangChain"),
      skill("Agentic AI"),
      skill("RAG"),
      skill("Tool calling"),
      skill("Embeddings"),
      skill("FAISS"),
      skill("Gemini"),
    ],
  },
  {
    number: "03",
    category: "Frontend",
    items: [core("React.js"), core("TypeScript"), skill("Next.js"), skill("Tailwind CSS"), skill("Responsive UI")],
  },
  {
    number: "04",
    category: "Databases",
    items: [
      core("MongoDB"),
      core("PostgreSQL"),
      skill("MySQL"),
      skill("Supabase"),
      skill("Schema design"),
      skill("Indexing & query optimization"),
    ],
  },
  {
    number: "05",
    category: "Auth & integrations",
    items: [
      core("JWT"),
      core("RBAC"),
      core("WebSockets / Socket.io"),
      skill("Webhooks"),
      skill("Payment gateways"),
      skill("Third-party APIs"),
    ],
  },
  {
    number: "06",
    category: "Cloud & tools",
    items: [
      core("AWS S3"),
      core("Git & GitHub"),
      skill("Docker (fundamentals)"),
      skill("Render"),
      skill("Vercel"),
      skill("CI/CD workflows"),
    ],
  },
  {
    number: "07",
    category: "Languages & practice",
    items: [
      core("JavaScript (ES6+)"),
      skill("Python"),
      skill("SQL"),
      skill("Agile / Scrum"),
      skill("Automated testing"),
      skill("Cursor · Claude · Codex"),
    ],
  },
];

export const education = {
  degree: { title: "BS Computer Science", school: "Virtual University of Pakistan", grade: "CGPA 3.62 / 4.00" },
  earlier: [
    { title: "Intermediate, Pre-Engineering", school: "Punjab College, Lahore" },
    { title: "Matriculation, Science", school: "Govt. Central Model School, Lahore" },
  ],
};

export const certifications = {
  issuer: "Anthropic",
  items: ["Claude Platform 101", "Building with the Claude API", "Claude 101", "AI Capabilities and Limitations"],
};
