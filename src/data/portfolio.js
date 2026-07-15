export const profile = {
  name: "Atif Mubashar",
  initials: "AM",
  role: "Full Stack Software Engineer",
  email: "atifmubashar353@gmail.com",
  phone: "+92 309 1560034",
  location: "Lahore, Pakistan",
  linkedin: "https://linkedin.com/in/iamatifmubashar",
  resume: "/Atif-Mubashar-Resume.pdf",
  availability: "Open to full stack engineering roles",
  headline: "Reliable full stack products across UI, APIs, data, and integrations",
  statement:
    "Full stack software engineer with around 2 years of practical experience shipping production features for dashboards, real-time workflows, payment flows, media storage, and role-aware business systems.",
};

export const metrics = [
  { value: "2", label: "years practical experience", detail: "Commercial software plus academic product work" },
  { value: "5+", label: "live products contributed to", detail: "Transport, B2B, commerce, exams, and operations" },
  { value: "30+", label: "production REST APIs", detail: "Auth, RBAC, services, validations, and controllers" },
  { value: "50+", label: "issues resolved", detail: "Frontend, backend, integrations, and production flows" },
];

export const focusAreas = [
  "Node.js and Express API architecture",
  "React and Angular product interfaces",
  "JWT, RBAC, validations, and middleware",
  "MongoDB, PostgreSQL, MySQL data modeling",
  "WebSockets, live tracking, and notifications",
  "Amazon S3, payments, webhooks, and third-party APIs",
];

export const skills = [
  {
    title: "Frontend",
    note: "Product interfaces that stay responsive, readable, and easy to extend.",
    items: ["React.js", "Angular", "JavaScript ES6+", "Tailwind CSS", "Forms", "Dashboards"],
  },
  {
    title: "Backend",
    note: "Secure APIs, clean service layers, and role-aware business workflows.",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "RBAC", "WebSockets"],
  },
  {
    title: "Data and Cloud",
    note: "Data models, file handling, reporting flows, and delivery foundations.",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Amazon S3", "Signed URLs", "CI/CD"],
  },
  {
    title: "Integrations",
    note: "Third-party systems connected with careful state and error handling.",
    items: ["PayFast", "Mollie", "Deposyt", "Webhooks", "Postman", "GitHub"],
  },
];

export const projects = [
  {
    number: "01",
    name: "ScholarWheels",
    type: "School transport operations",
    timeline: "Sep 2025 - Apr 2026",
    role: "Software Engineer",
    accent: "#78c8ff",
    summary:
      "Backend platform for school transport operations across driver onboarding, vehicle assignment, route setup, ride scheduling, and student status tracking.",
    challenge:
      "Transport teams needed connected workflows for routes, rides, drivers, vehicles, and live student movement without brittle one-off logic.",
    impact: ["20+ APIs", "5+ modules", "Real-time status flows"],
    stack: ["Node.js", "Express.js", "MongoDB", "WebSockets"],
    contributions: [
      "Modeled relationships across drivers, vehicles, routes, rides, and students.",
      "Built reusable validation, controller, and error-handling patterns across 15+ operations.",
      "Supported live route coordination and status updates for operational visibility.",
    ],
    preview: ["Drivers", "Vehicles", "Routes", "Rides", "Student status"],
  },
  {
    number: "02",
    name: "Kapasi Glass Network",
    type: "B2B construction workflow",
    timeline: "Mar 2025 - Jun 2026",
    role: "Full Stack Engineer",
    accent: "#a5d86e",
    summary:
      "Connected B2B platform for clients, bids, purchase orders, job tickets, field measurements, documents, uploads, and reporting.",
    challenge:
      "Construction workflows needed data consistency from bid creation through field execution, document handling, and technician measurements.",
    impact: ["25+ APIs", "6+ business modules", "Secure S3 media"],
    stack: ["Node.js", "Relational DB", "Amazon S3", "Frontend Workflows"],
    contributions: [
      "Designed relational flows spanning clients, bids, POs, tickets, and measurements.",
      "Connected bid, job, and document workflows across interface and API layers.",
      "Implemented upload, annotation, signed URL, retrieval, and reporting flows.",
    ],
    preview: ["Clients", "Bids", "POs", "Tickets", "Measurements", "Documents"],
  },
  {
    number: "03",
    name: "Afrivalley Marketplace",
    type: "Commerce and money transfer",
    timeline: "Nov 2025 - Feb 2026",
    role: "Full Stack Engineer",
    accent: "#f6a96f",
    summary:
      "Production multi-role marketplace with seller, buyer, agent, and admin dashboards, secure checkout, payments, and operational workflows.",
    challenge:
      "Payment and order flows needed reliable state handling across UI, APIs, database queries, and third-party gateway responses.",
    impact: ["4 user roles", "Live payments", "Checkout stability"],
    stack: ["React.js", "Node.js", "PayFast", "RBAC"],
    contributions: [
      "Integrated PayFast checkout and payment status handling for order flows.",
      "Improved multi-role dashboards and checkout behavior across React UI and APIs.",
      "Debugged business logic, API responses, and database queries under production pressure.",
    ],
    preview: ["Admin", "User", "Seller", "Agent", "Orders", "Payments"],
  },
  {
    number: "04",
    name: "CAMMS",
    type: "Activity management and reporting",
    timeline: "May 2025 - Dec 2025",
    role: "Product and Full Stack Engineer",
    accent: "#b9a1ff",
    summary:
      "Full stack academic operations product for task tracking, LMS activity reporting, dashboards, alerts, and export workflows.",
    challenge:
      "Academic teams needed a single workflow for instructor activities, progress visibility, productivity reporting, and role-aware access.",
    impact: ["10+ workflows", "8+ modules", "3+ roles"],
    stack: ["React.js", "Node.js", "JWT", "RBAC"],
    contributions: [
      "Built a responsive dashboard for activity, progress, alerts, and notifications.",
      "Implemented secure JWT authentication and role-based access workflows.",
      "Designed reporting screens with Excel and PDF export capabilities.",
    ],
    preview: ["Tasks", "Tickets", "Grades", "Reports", "Exports"],
  },
  {
    number: "05",
    name: "Examencentrum",
    type: "Driving exam practice platform",
    timeline: "Mar 2025 - Jun 2025",
    role: "Software Engineer",
    accent: "#7fd8bd",
    summary:
      "Multi-role quiz and exam platform with question management, secure media handling, admin dashboards, and candidate analytics.",
    challenge:
      "The product needed reliable exam workflows, role-specific management screens, and secure image/media delivery for questions.",
    impact: ["25+ APIs", "5+ admin modules", "3+ analytics features"],
    stack: ["Node.js", "Amazon S3", "RBAC", "Analytics"],
    contributions: [
      "Built authentication, RBAC, question bank, category, difficulty, and exam workflow APIs.",
      "Integrated Amazon S3 with signed URLs, file validation, and optimized upload paths.",
      "Supported admin dashboards and candidate performance analytics.",
    ],
    preview: ["Users", "Questions", "Exams", "Media", "Analytics"],
  },
];

export const experience = {
  role: "Software Engineer",
  company: "Prisma Technologies",
  location: "Lahore, Pakistan",
  period: "March 2025 - Present",
  summary:
    "Shipping full stack features across commercial products with a practical focus on API design, product workflows, integrations, debugging, and maintainable delivery.",
  achievements: [
    "Delivered full stack features across 5+ live products using React.js, Angular, Node.js, Express.js, and database-driven architectures.",
    "Built and integrated responsive dashboards, forms, multi-role workflows, alerts, reporting, and real-time interface updates.",
    "Engineered 30+ production REST APIs covering authentication, RBAC, services, middleware, validations, and controller logic.",
    "Implemented WebSocket notifications, live GPS tracking, payments, Amazon S3 storage, and third-party integrations.",
    "Optimized frontend flows, database queries, indexing, and API responses across 10+ modules.",
    "Resolved 50+ frontend, backend, and integration issues while collaborating with developers, QA, and stakeholders.",
  ],
};

export const process = [
  ["01", "Understand the workflow", "Map roles, states, edge cases, and the exact result users need from the feature."],
  ["02", "Design the contract", "Shape API payloads, validation rules, permissions, data models, and UI states together."],
  ["03", "Build across layers", "Connect interface, state, services, controllers, storage, and integration behavior."],
  ["04", "Harden the path", "Test failure states, improve response handling, debug the full journey, and keep code readable."],
];

export const services = [
  ["API systems", "REST APIs, authentication, RBAC, middleware, validation, controller logic, and service layers."],
  ["Product dashboards", "Responsive React and Angular workflows for operations, reporting, admin tools, and forms."],
  ["Real-time features", "WebSocket notifications, live tracking, status pipelines, and event-driven UI updates."],
  ["Integrations", "Payments, S3 media storage, signed URLs, webhooks, and third-party business systems."],
];

export const principles = [
  ["Clarity before cleverness", "Code should make the next change easier to understand, not harder to admire."],
  ["The full journey matters", "A polished UI and a reliable backend should feel like one coherent product."],
  ["Production is the product", "Validation, edge cases, permissions, and recovery states matter from the first release."],
  ["AI with judgment", "AI tools speed up exploration and boilerplate; engineering judgment owns the final result."],
];
