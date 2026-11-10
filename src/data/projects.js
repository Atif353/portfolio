export const projectKinds = [
  { kind: "client", label: "Client work" },
  { kind: "personal", label: "Personal" },
  { kind: "academic", label: "Academic" },
];

export const teamflow = {
  number: "01",
  context: "Personal project",
  title: "TeamFlow",
  tagline: "Jira-style project management platform",
  description:
    "A full stack project management and team collaboration platform, architected from workspace administration down to issue tracking — a typed React client, a FastAPI backend, and automated tests across unit, integration and end-to-end layers.",
  repo: "https://github.com/Atif353/TeamFlow",
  features: [
    { title: "Workspace admin & RBAC", description: "Roles and permissions per workspace" },
    { title: "JWT with rotating refresh", description: "Token rotation for secure sessions" },
    { title: "Agile boards & sprints", description: "Backlogs, sprint planning, issue tracking" },
    { title: "Timelines & calendars", description: "Planning views across projects" },
    { title: "Reports & dashboards", description: "Docs, automation, notifications" },
    { title: "Tested end to end", description: "pytest, Vitest and Playwright" },
  ],
  stack: [
    "Python",
    "FastAPI",
    "MongoDB",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Zustand",
    "TanStack Query",
    "pytest",
    "Vitest",
    "Playwright",
  ],
  board: [
    {
      name: "Backlog",
      status: "idle",
      cards: [
        { title: "Calendar view", id: "TF-41" },
        { title: "Automation rules", id: "TF-38" },
      ],
    },
    {
      name: "In sprint",
      status: "idle",
      cards: [
        { title: "Sprint planning", id: "TF-33" },
        { title: "Issue timelines", id: "TF-29" },
      ],
    },
    {
      name: "Review",
      status: "review",
      cards: [
        { title: "Refresh token rotation", id: "TF-24" },
        { title: "Workspace RBAC", id: "TF-21" },
      ],
    },
    {
      name: "Done",
      status: "done",
      cards: [
        { title: "Playwright e2e suite", id: "TF-17" },
        { title: "Reports dashboard", id: "TF-12" },
      ],
    },
  ],
};

export const projects = [
  {
    id: "supportpilot",
    kind: "personal",
    area: "Agentic AI",
    metric: { value: "LangGraph", label: "specialist-agent routing" },
    title: "SupportPilot AI",
    tagline: "Agentic customer support platform",
    dates: "Aug – Sep 2026",
    context: "Personal project",
    description:
      "Customer chat, order requests, refund approvals and human handoff. LangGraph workflows route requests to specialist agents via tool calling, with user confirmation before any order change, plus knowledge retrieval and execution logs.",
    flow: ["Chat", "Router", "Specialist agent", "Confirm", "Handoff"],
    stack: ["TypeScript", "React", "Node.js", "Express", "MongoDB", "LangChain", "LangGraph", "Gemini"],
    repo: "https://github.com/Atif353/SupportPilot",
  },
  {
    id: "docmind",
    kind: "personal",
    area: "RAG",
    metric: { value: "Cited", label: "answers with page references" },
    title: "DocMind AI",
    tagline: "Document Q&A assistant (RAG)",
    dates: "Jun – Jul 2026",
    context: "Personal project",
    description:
      "Upload PDFs and ask questions across documents, with source citations and page references. Context relevance checks, optional web-search fallback, streaming responses, auth and saved chat history.",
    flow: ["Upload", "Chunk", "Embed", "FAISS", "Cited answer"],
    stack: ["Python", "FastAPI", "LangChain", "Gemini", "FAISS", "React", "Supabase"],
    repo: "https://github.com/Atif353/DocMind",
  },
  {
    id: "kapasi",
    kind: "client",
    area: "B2B workflow",
    metric: { value: "25+", label: "REST APIs · 6+ modules" },
    title: "Kapasi Glass Network",
    tagline: "B2B construction workflow platform",
    dates: "Dec 2024 – Jul 2026",
    context: "Prisma Technologies",
    description:
      "25+ REST APIs across 6+ modules for clients, bids, jobs, purchase orders and job tickets. Technicians upload and annotate field measurements on documents and images, stored via AWS S3 signed URLs.",
    flow: ["Client", "Bid", "Purchase order", "Job ticket", "Measurement"],
    stack: ["Node.js", "Express.js", "Relational schema", "AWS S3"],
    isPrivate: true,
  },
  {
    id: "afrivalley",
    kind: "client",
    area: "eCommerce · Fintech",
    metric: { value: "4", label: "role-based dashboards" },
    title: "Afrivalley Marketplace",
    tagline: "eCommerce & money transfer platform",
    dates: "Nov 2025 – Feb 2026",
    context: "Prisma Technologies",
    description:
      "Backend work on a multi-role platform with Admin, User, Seller and Agent dashboards. Integrated PayFast for transaction handling and payment status updates; refactored modules for API reliability.",
    flow: ["Checkout", "PayFast", "Transaction", "Status update"],
    stack: ["Node.js", "Express.js", "REST APIs", "PayFast"],
    live: "https://www.afrivalley-marketplace.com/",
  },
  {
    id: "camms",
    kind: "academic",
    area: "Full stack",
    metric: { value: "8+", label: "backend modules · 3 roles" },
    title: "CAMMS",
    tagline: "Course Activity Management & Monitoring",
    dates: "May – Dec 2025",
    context: "Final year project",
    description:
      "Automates instructor workflows, task tracking and LMS activity reporting. 8+ backend modules secured with JWT and RBAC for three roles, and a React dashboard with Excel/PDF export.",
    flow: ["Activity", "Tickets", "Grading", "Reports"],
    stack: ["React.js", "Node.js", "Express.js", "JWT", "RBAC"],
    repo: "https://github.com/Atif353/CAMMS",
  },
];

export const workIndex = [
  { number: "01", title: "TeamFlow", tagline: "Jira-style project management platform", context: "Personal" },
  { number: "02", title: "SupportPilot AI", tagline: "Agentic customer support platform", context: "Personal" },
  { number: "03", title: "Kapasi Glass Network", tagline: "B2B construction workflow platform", context: "Client · Prisma" },
  { number: "04", title: "Afrivalley Marketplace", tagline: "eCommerce & money transfer — live", context: "Client · Prisma" },
];
