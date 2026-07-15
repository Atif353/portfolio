import { CheckCircle2 } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

const dayToDay = [
  "Building responsive React and Angular dashboards",
  "Creating reusable components, forms, and role-aware UI flows",
  "Designing and building secure REST APIs",
  "Connecting frontend state with backend services",
  "Integrating payments, S3, WebSockets, and third-party APIs",
  "Debugging and improving complete user journeys",
];

export function About() {
  return (
    <section id="about" className="section-wrap section-space">
      <SectionHeader
        number="08"
        eyebrow="About"
        title="A full stack developer growing through real product work."
        copy="I enjoy turning complicated requirements into clear, working systems. My strongest energy is in the middle of the product: where user workflows, API contracts, permissions, data, and integrations all need to agree."
      />
      <div className="mt-9 grid gap-4 sm:mt-12 lg:grid-cols-[1fr_1fr]">
        <Reveal className="panel rounded-2xl p-5 sm:p-7 md:p-9">
          <h3 className="text-xl font-semibold">My path so far</h3>
          <div className="mt-8 space-y-7 border-l hairline pl-6">
            <div><span className="mono text-[10px] text-accent">2022 - 2025</span><h4 className="mt-2 font-semibold">Built the foundation</h4><p className="mt-2 text-sm leading-6 text-muted">Studied Computer Science, built CAMMS as a full stack final-year project, and developed a strong interest in backend architecture.</p></div>
            <div><span className="mono text-[10px] text-accent">2025 - PRESENT</span><h4 className="mt-2 font-semibold">Shipping commercial software</h4><p className="mt-2 text-sm leading-6 text-muted">Working at Prisma Technologies across transport, construction, eCommerce, payments, exams, and real-time product features.</p></div>
            <div><span className="mono text-[10px] text-accent">NEXT</span><h4 className="mt-2 font-semibold">Growing into stronger ownership</h4><p className="mt-2 text-sm leading-6 text-muted">Deepening backend design, frontend architecture, system thinking, testing habits, and AI-assisted development workflows.</p></div>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="panel rounded-2xl p-5 sm:p-7 md:p-9">
          <h3 className="text-xl font-semibold">What I work on day to day</h3>
          <div className="mt-7 grid gap-3">
            {dayToDay.map((item) => <div key={item} className="flex items-center gap-3 rounded-xl bg-[var(--bg-soft)] p-3.5 text-sm"><CheckCircle2 size={16} className="shrink-0 text-accent" />{item}</div>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
