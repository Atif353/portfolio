import { skills } from "../../data/portfolio";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export function Skills() {
  return (
    <section id="stack" className="section-wrap section-space">
      <SectionHeader
        number="03"
        eyebrow="Technical stack"
        title="The tools I use to turn requirements into shipped product behavior."
        copy="My value is in connecting these pieces: responsive UI, secure APIs, data models, permissions, integrations, and the debugging needed to make the full journey hold together."
      />
      <div className="mt-9 grid gap-4 sm:mt-12 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05} className="skill-card rounded-2xl p-5 sm:p-6">
            <span className="mono text-[10px] text-accent">0{i + 1}</span>
            <h3 className="mt-6 text-xl font-semibold">{group.title}</h3>
            <p className="mt-3 text-xs leading-6 text-muted">{group.note}</p>
            <div className="mt-7 flex flex-wrap gap-2">{group.items.map((item) => <span className="tech-pill" key={item}>{item}</span>)}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
