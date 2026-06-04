import { BriefcaseBusiness } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

const achievements = [
  "Delivered full stack features across 5+ live products using React.js, Angular, Node.js, Express.js, and database-driven architectures.",
  "Built and integrated responsive dashboards, forms, multi-role workflows, alerts, reporting, and real-time interface updates.",
  "Built 30+ production REST APIs covering authentication, RBAC, services, middleware, validation, and controller logic.",
  "Implemented WebSocket notifications, live GPS tracking, payments, Amazon S3 storage, and third-party integrations.",
  "Optimized frontend flows, database queries, indexing, and API responses across 10+ modules.",
  "Resolved 50+ frontend, backend, and integration issues while collaborating with developers, QA, and stakeholders.",
];

export function Experience() {
  return (
    <section id="experience" className="section-wrap section-space">
      <SectionHeader number="05" eyebrow="Experience" title="Two years of building, debugging, and shipping across the stack." copy="My experience is early-career but practical: I have delivered user-facing workflows, backend services, integrations, and data-driven features across several business domains." />
      <Reveal className="panel mt-9 rounded-2xl p-5 sm:mt-12 sm:rounded-3xl sm:p-6 md:p-9">
        <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]">
          <div><div className="grid size-12 place-items-center rounded-2xl bg-[var(--accent)] text-[#111]"><BriefcaseBusiness size={20} /></div><h3 className="mt-6 text-2xl font-semibold">Software Engineer</h3><p className="mt-2 text-sm text-accent">Prisma Technologies</p><p className="mt-1 text-xs text-muted">March 2025 - Present / On-site, Lahore</p></div>
          <div className="grid gap-3">{achievements.map((item, i) => <div key={item} className="experience-item grid gap-3 rounded-xl bg-[var(--bg-soft)] p-4 text-sm leading-6 sm:grid-cols-[auto_1fr]"><span className="mono text-[10px] text-accent">0{i + 1}</span><span>{item}</span></div>)}</div>
        </div>
      </Reveal>
    </section>
  );
}
