export const profile = {
  name: "Atif Mubashar",
  role: "Full Stack Software Engineer",
  email: "atifmubashar353@gmail.com",
  phone: "+92 309 1560034",
  location: "Lahore, Pakistan",
  linkedin: "https://linkedin.com/in/iamatifmubashar",
  statement: "I build full stack products with thoughtful interfaces, reliable Node.js backends, and clean, maintainable architecture.",
};

export const metrics = [
  { value: "2", label: "years of practical experience" },
  { value: "5+", label: "live products contributed to" },
  { value: "10+", label: "frontend and backend modules" },
  { value: "100+", label: "REST APIs built across projects" },
];

export const skills = [
  { title: "Frontend Engineering", index: "01", note: "Responsive interfaces and product workflows", items: ["React.js", "Angular", "JavaScript ES6+", "Tailwind CSS", "Component Architecture", "Responsive UI"] },
  { title: "Backend Engineering", index: "02", note: "Secure APIs and application logic", items: ["Node.js", "Express.js", "REST APIs", "JWT & RBAC", "WebSockets", "Middleware"] },
  { title: "Database & Cloud", index: "03", note: "Data modeling and delivery", items: ["MongoDB", "PostgreSQL", "MySQL", "Amazon S3", "CI/CD"] },
  { title: "Tools & Integrations", index: "04", note: "How I ship and connect products", items: ["Git & GitHub", "Postman", "PayFast", "Mollie", "Cursor & Codex"] },
];

export const projects = [
  {
    number: "01", name: "ScholarWheels", type: "School transport operations", timeline: "Sep 2025 - Apr 2026", color: "#78c8ff",
    summary: "A transport management product coordinating drivers, vehicles, routes, rides, and live student status.",
    role: "Software Engineer", stack: ["Node.js", "Express.js", "MongoDB", "WebSockets"], metrics: ["20+ APIs", "5+ modules", "Real-time workflows"],
    decisions: ["Modeled relationships across drivers, vehicles, routes, and rides", "Built reusable validation and controller patterns across 15+ operations", "Supported real-time status updates and route coordination"],
  },
  {
    number: "02", name: "Kapasi Glass Network", type: "B2B construction workflow", timeline: "Mar 2025 - Jun 2026", color: "#a8e86b",
    summary: "A connected B2B product for bids, purchase orders, job tickets, field measurements, and documents.",
    role: "Full Stack Engineer", stack: ["Node.js", "Frontend Workflows", "Relational DB", "Amazon S3"], metrics: ["25+ APIs", "6+ modules", "Secure media"],
    decisions: ["Designed relational models spanning bids through field execution", "Connected document and measurement workflows across interface and API layers", "Implemented upload, annotation, signed URL, and reporting flows"],
  },
  {
    number: "03", name: "Afrivalley Marketplace", type: "Commerce & money transfer", timeline: "Nov 2025 - Feb 2026", color: "#ffb07c",
    summary: "A multi-role marketplace with responsive dashboards, secure checkout, transactions, and operational workflows.",
    role: "Full Stack Engineer", stack: ["React.js", "Node.js", "PayFast", "Multi-role RBAC"], metrics: ["4 user roles", "Live payments", "Cross-stack fixes"],
    decisions: ["Integrated PayFast checkout and payment status handling", "Improved multi-role dashboard and checkout flows across React UI and APIs", "Diagnosed failures across components, business logic, and database queries"],
  },
  {
    number: "04", name: "CAMMS", type: "Activity management & reporting", timeline: "May 2025 - Dec 2025", color: "#c1a8ff",
    summary: "A full stack academic operations product with responsive dashboards, activity workflows, and automated reporting.",
    role: "Product & Full Stack Engineer", stack: ["React.js", "Node.js", "JWT", "RBAC"], metrics: ["10+ workflows", "8+ modules", "3+ roles"],
    decisions: ["Built a responsive React dashboard for activity and progress visibility", "Implemented real-time progress, alerts, notifications, and role-aware workflows", "Designed reporting screens with Excel and PDF export capabilities"],
  },
  {
    number: "05", name: "Examencentrum", type: "Driving exam practice platform", timeline: "Mar 2025 - Jun 2025", color: "#7fd8bd",
    summary: "A multi-role quiz and exam product with secure media, question management, dashboards, and analytics.",
    role: "Software Engineer", stack: ["Node.js", "Amazon S3", "RBAC", "Analytics"], metrics: ["25+ APIs", "5+ admin modules", "3+ analytics features"],
    decisions: ["Built role-aware question bank and exam workflows", "Added signed URLs, validation, and optimized media uploads", "Supported admin dashboards and candidate performance analytics"],
  },
];

export const services = [
  ["01", "Modern frontend experiences", "Responsive React and Angular interfaces, dashboards, product workflows, and reusable UI components."],
  ["02", "Full stack web applications", "Features delivered across interface, API, business logic, database, and deployment layers."],
  ["03", "Backend and real-time systems", "REST APIs, authentication, RBAC, WebSockets, live tracking, and reliable status pipelines."],
  ["04", "Complex integrations", "Payments, cloud storage, webhooks, and third-party APIs connected with care."],
];

export const principles = [
  ["User experience and system behavior", "A polished interface and a reliable backend should feel like one coherent product."],
  ["Clarity over cleverness", "Components, APIs, and data models should make the next change easier to understand."],
  ["Production is the product", "Responsive behavior, edge cases, validation, and reliability matter from the start."],
  ["AI with judgment", "Agents accelerate exploration and execution; engineering judgment owns the result."],
];
