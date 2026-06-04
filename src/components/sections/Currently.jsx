import { ArrowRight, BriefcaseBusiness, Layers3, Sparkles } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const items = [
  {
    icon: BriefcaseBusiness,
    label: "Currently",
    title: "Software Engineer at Prisma Technologies",
    copy: "Shipping frontend workflows, APIs, integrations, and full stack features across live commercial products.",
  },
  {
    icon: Layers3,
    label: "Growing in",
    title: "Frontend architecture and system design",
    copy: "Strengthening both sides of the stack to turn working features into polished, maintainable products.",
  },
  {
    icon: Sparkles,
    label: "Looking for",
    title: "Full stack software engineering opportunities",
    copy: "A collaborative team where I can contribute, learn, and own meaningful work.",
  },
];

export function Currently() {
  return (
    <section className="section-wrap py-16 sm:py-20">
      <Reveal className="mb-7 flex items-end justify-between gap-5">
        <div><p className="mono text-[10px] uppercase tracking-[.18em] text-accent">Quick snapshot</p><h2 className="mt-3 text-2xl font-semibold tracking-[-.04em]">Where I am right now</h2></div>
        <a href="#contact" className="hidden items-center gap-2 text-xs font-semibold sm:flex">Let's talk <ArrowRight size={14} /></a>
      </Reveal>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          return <Reveal key={item.label} delay={index * .06} className="panel rounded-2xl p-5 sm:p-6">
            <div className="grid size-10 place-items-center rounded-xl bg-[var(--bg-soft)] text-accent"><Icon size={17} /></div>
            <p className="mono mt-7 text-[10px] uppercase tracking-[.15em] text-muted">{item.label}</p>
            <h3 className="mt-3 text-base font-semibold leading-6">{item.title}</h3>
            <p className="mt-3 text-xs leading-6 text-muted">{item.copy}</p>
          </Reveal>;
        })}
      </div>
    </section>
  );
}
