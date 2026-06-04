import { skills } from "../../data/portfolio";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export function Skills() {
  return (
    <section className="section-wrap section-space">
      <SectionHeader number="02" eyebrow="My toolkit" title="Building across the complete web application stack." copy="I create responsive frontend experiences with React and Angular, connect them to secure Node.js services, model the data behind them, and carry features through integration and delivery." />
      <div className="mt-9 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2">
        {skills.map((group, i) => <Reveal key={group.title} delay={i * .05} className="panel skill-card rounded-2xl p-5 sm:rounded-3xl sm:p-6 md:p-8">
          <div className="flex items-start justify-between"><div><h3 className="text-xl font-semibold">{group.title}</h3><p className="mt-1 text-xs text-muted">{group.note}</p></div><span className="mono rounded-lg bg-[var(--bg-soft)] px-2.5 py-1.5 text-[10px] text-accent">{group.index}</span></div>
          <div className="mt-7 flex flex-wrap gap-2">{group.items.map((item) => <span className="rounded-lg border hairline bg-[var(--bg-soft)] px-3 py-2 text-xs" key={item}>{item}</span>)}</div>
        </Reveal>)}
      </div>
    </section>
  );
}
