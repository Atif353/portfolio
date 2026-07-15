import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import { experience } from "../../data/portfolio";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="section-wrap section-space">
      <SectionHeader
        number="05"
        eyebrow="Experience"
        title="Early-career experience with real production surface area."
        copy="The work is practical: building features, connecting APIs, debugging flows, improving reliability, and collaborating with QA, developers, and stakeholders across active products."
      />
      <Reveal className="experience-panel mt-9 rounded-[1.7rem] p-5 sm:mt-12 sm:p-6 md:p-9">
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <div className="grid size-12 place-items-center rounded-2xl bg-[var(--accent)] text-[#111]"><BriefcaseBusiness size={20} /></div>
            <h3 className="mt-6 text-2xl font-semibold">{experience.role}</h3>
            <p className="mt-2 text-sm text-accent">{experience.company}</p>
            <p className="mt-1 text-xs text-muted">{experience.period} / On-site, {experience.location}</p>
            <p className="mt-7 text-sm leading-7 text-muted">{experience.summary}</p>
          </div>
          <div className="grid gap-3">
            {experience.achievements.map((item, i) => (
              <div key={item} className="experience-item grid gap-3 rounded-xl bg-[var(--bg-soft)] p-4 text-sm leading-6 sm:grid-cols-[auto_1fr]">
                <span className="mono text-[10px] text-accent">0{i + 1}</span>
                <span className="flex gap-3"><CheckCircle2 size={15} className="mt-1 shrink-0 text-accent sm:hidden" />{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
