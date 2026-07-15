import { motion as Motion } from "framer-motion";
import { Braces, CheckCircle2, Database, LayoutDashboard, ServerCog } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { process } from "../../data/portfolio";

const layers = [
  { icon: LayoutDashboard, label: "Step 01", title: "User action", detail: "A form, dashboard action, upload, status update, or report request", color: "var(--accent)" },
  { icon: Braces, label: "Step 02", title: "Frontend workflow", detail: "React or Angular screen state, validation, loading, and error handling", color: "var(--signal)" },
  { icon: ServerCog, label: "Step 03", title: "Backend API", detail: "Node and Express endpoints, auth, RBAC, services, and business rules", color: "var(--warm)" },
  { icon: Database, label: "Step 04", title: "Reliable result", detail: "Database updates, S3 files, payments, WebSockets, or reports returned safely", color: "#b9a1ff" },
];

export function FullStack() {
  return (
    <section className="section-wrap section-space">
      <SectionHeader
        number="04"
        eyebrow="Feature delivery"
        title="How I turn a product request into a working full-stack feature."
        copy="This section shows the path I usually work through: what the user does, what the interface needs, what the API must enforce, and what reliable result the system should return."
      />
      <Reveal className="fullstack-stage panel relative mt-9 overflow-hidden rounded-[1.7rem] p-4 sm:mt-12 sm:p-6 md:p-10">
        <div className="grid-bg absolute inset-0 opacity-25" />
        <div className="relative flex flex-wrap items-center justify-between gap-3 border-b hairline pb-6">
          <div><p className="mono text-[10px] uppercase text-accent">Example feature flow</p><h3 className="mt-2 text-xl font-semibold">From button click to saved result</h3></div>
          <span className="flex items-center gap-2 rounded-full border hairline px-3 py-2 text-[10px] text-muted"><span className="size-1.5 animate-pulse rounded-full bg-[var(--accent)]" /> All layers connected</span>
        </div>
        <div className="delivery-rail relative mt-6 grid gap-0 overflow-hidden rounded-2xl border hairline lg:mt-8 lg:grid-cols-4">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <Motion.div key={layer.title} whileHover={{ y: -3 }} className="layer-card">
                <div className="flex items-start justify-between"><div className="grid size-10 place-items-center rounded-xl border hairline" style={{ color: layer.color }}><Icon size={18} /></div><span className="mono text-[9px] text-muted">0{index + 1}</span></div>
                <p className="mono mt-8 text-[9px] uppercase text-muted">{layer.label}</p>
                <h4 className="mt-2 font-semibold">{layer.title}</h4>
                <p className="mt-2 text-[11px] leading-5 text-muted">{layer.detail}</p>
              </Motion.div>
            );
          })}
        </div>
        <div className="relative mt-7 flex items-center gap-2 text-sm font-semibold">
          <CheckCircle2 size={16} className="text-accent" />
          My delivery checklist
        </div>
        <div className="delivery-checklist relative mt-4 grid gap-0 overflow-hidden rounded-2xl border hairline md:grid-cols-4">
          {process.map(([number, title, copy]) => (
            <div key={number} className="delivery-step text-xs">
              <span className="mono text-[9px] text-accent">{number}</span>
              <h4 className="mt-3 font-semibold">{title}</h4>
              <p className="mt-2 leading-5 text-muted">{copy}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
