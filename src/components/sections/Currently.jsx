import { ArrowRight, BriefcaseBusiness, Layers3, Radar, ServerCog } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const items = [
  {
    icon: BriefcaseBusiness,
    label: "Currently",
    title: "Software Engineer at Prisma Technologies",
    copy: "Shipping commercial features across dashboards, API services, integrations, and role-aware systems.",
  },
  {
    icon: ServerCog,
    label: "Strongest lane",
    title: "Node.js APIs and full stack workflows",
    copy: "Comfortable moving from UI state to backend contracts, database behavior, and external services.",
  },
  {
    icon: Radar,
    label: "Proof areas",
    title: "Real-time, payments, S3, RBAC",
    copy: "Practical production work across features where reliability and edge cases matter.",
  },
  {
    icon: Layers3,
    label: "Next step",
    title: "More ownership in product engineering",
    copy: "Looking for a team where I can keep growing while owning meaningful full stack delivery.",
  },
];

export function Currently() {
  return (
    <section className="section-wrap py-12 sm:py-16">
      <Reveal className="mb-7 flex items-end justify-between gap-5">
        <div>
          <p className="mono text-[10px] uppercase text-accent">Quick signal</p>
          <h2 className="mt-3 text-2xl font-semibold">What a hiring team should know first.</h2>
        </div>
        <a href="#work" className="hidden items-center gap-2 text-xs font-semibold sm:flex">See project proof <ArrowRight size={14} /></a>
      </Reveal>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.label} delay={index * 0.05} className="proof-card rounded-2xl p-5 sm:p-6">
              <div className="grid size-10 place-items-center rounded-xl bg-[var(--bg-soft)] text-accent"><Icon size={17} /></div>
              <p className="mono mt-7 text-[10px] uppercase text-muted">{item.label}</p>
              <h3 className="mt-3 text-base font-semibold leading-6">{item.title}</h3>
              <p className="mt-3 text-xs leading-6 text-muted">{item.copy}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
