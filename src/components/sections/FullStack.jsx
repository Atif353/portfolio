import { motion as Motion } from "framer-motion";
import { Braces, Database, LayoutDashboard, MoveRight, ServerCog } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

const layers = [
  { icon: LayoutDashboard, label: "Experience", title: "Responsive UI", detail: "React / Angular / Tailwind", color: "var(--accent)" },
  { icon: Braces, label: "Connection", title: "State & API flows", detail: "Forms / Dashboards / Auth", color: "var(--signal)" },
  { icon: ServerCog, label: "Application", title: "Services & APIs", detail: "Node / Express / WebSockets", color: "var(--warm)" },
  { icon: Database, label: "Foundation", title: "Data & Storage", detail: "MongoDB / PostgreSQL / S3", color: "#c1a8ff" },
];

export function FullStack() {
  return (
    <section className="section-wrap section-space">
      <SectionHeader number="03" eyebrow="Full stack approach" title="I connect the screen users see with the systems that make it work." copy="My role is not limited to one layer. I can shape a responsive interface, connect it to application state and APIs, implement backend logic, and design how data is stored and delivered." />
      <Reveal className="fullstack-stage panel relative mt-9 overflow-hidden rounded-2xl p-4 sm:mt-12 sm:rounded-[2rem] sm:p-6 md:p-10">
        <div className="grid-bg absolute inset-0 opacity-30" />
        <div className="relative flex flex-wrap items-center justify-between gap-3 border-b hairline pb-6">
          <div><p className="mono text-[10px] uppercase tracking-[.16em] text-accent">Feature delivery pipeline</p><h3 className="mt-2 text-xl font-semibold">From user action to reliable result</h3></div>
          <span className="flex items-center gap-2 rounded-full border hairline px-3 py-2 text-[10px] text-muted"><span className="size-1.5 animate-pulse rounded-full bg-[var(--accent)]" /> All layers connected</span>
        </div>
        <div className="relative mt-6 grid gap-3 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            return <Motion.div key={layer.title} whileHover={{ y: -6 }} className="relative rounded-2xl border hairline bg-[var(--bg)]/70 p-5 backdrop-blur">
              <div className="flex items-start justify-between"><div className="grid size-10 place-items-center rounded-xl border hairline" style={{ color: layer.color }}><Icon size={18} /></div><span className="mono text-[9px] text-muted">0{index + 1}</span></div>
              <p className="mono mt-8 text-[9px] uppercase tracking-[.16em] text-muted">{layer.label}</p><h4 className="mt-2 font-semibold">{layer.title}</h4><p className="mt-2 text-[11px] leading-5 text-muted">{layer.detail}</p>
              {index < layers.length - 1 && <MoveRight size={16} className="absolute -right-5 top-1/2 z-10 hidden text-accent lg:block" />}
            </Motion.div>;
          })}
        </div>
        <div className="relative mt-7 grid gap-3 sm:grid-cols-3">
          {[["01", "Design the workflow"], ["02", "Build every required layer"], ["03", "Test the complete experience"]].map(([number, title]) => <div key={number} className="flex items-center gap-3 rounded-xl bg-[var(--bg-soft)] p-3 text-xs"><span className="mono text-[9px] text-accent">{number}</span>{title}</div>)}
        </div>
      </Reveal>
    </section>
  );
}
