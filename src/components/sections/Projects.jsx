import { ArrowUpRight, Check } from "lucide-react";
import { projects } from "../../data/portfolio";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

function ProjectPreview({ color, number }) {
  return (
    <div className="project-preview mt-7 overflow-hidden rounded-2xl border hairline" style={{ "--preview-color": color }}>
      <div className="flex items-center gap-1.5 border-b hairline px-3 py-2"><span className="size-1.5 rounded-full bg-[#ff6b6b]" /><span className="size-1.5 rounded-full bg-[#ffd166]" /><span className="size-1.5 rounded-full bg-[var(--preview-color)]" /><span className="mono ml-auto text-[8px] text-muted">product / {number}</span></div>
      <div className="grid grid-cols-[.32fr_1fr]">
        <div className="space-y-2 border-r hairline p-3"><div className="h-2 w-8 rounded-full bg-[var(--preview-color)] opacity-70" />{[1, 2, 3, 4].map((item) => <div key={item} className="h-1.5 rounded-full bg-[var(--line)]" />)}</div>
        <div className="p-3"><div className="grid grid-cols-3 gap-2">{[1, 2, 3].map((item) => <div key={item} className="h-8 rounded-md bg-[var(--line)]" />)}</div><div className="mt-3 h-14 rounded-lg border hairline bg-[var(--bg-soft)]"><div className="m-3 h-1.5 w-2/3 rounded-full bg-[var(--preview-color)] opacity-60" /><div className="mx-3 h-1.5 w-1/2 rounded-full bg-[var(--line)]" /></div></div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="work" className="section-wrap section-space">
      <SectionHeader number="04" eyebrow="Projects" title="The products and features I've helped build." copy="These are real projects from my professional experience and final-year work. My contributions span responsive interfaces, product workflows, backend services, integrations, debugging, and complete full stack feature delivery." />
      <div className="mt-9 grid gap-4 sm:mt-12 sm:gap-5">
        {projects.map((project, i) => <Reveal key={project.name} delay={i * .04} className="panel project-card rounded-2xl p-4 sm:rounded-3xl sm:p-6 md:p-8 2xl:p-10">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-[.75fr_1.25fr] 2xl:gap-14">
            <div>
              <div className="flex items-center gap-3"><span className="mono text-[10px] text-accent">{project.number}</span><span className="h-px flex-1 bg-[var(--line)]" /></div>
              <p className="mono mt-6 text-[10px] uppercase tracking-[.14em] text-muted">{project.type}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-.05em] sm:text-3xl 2xl:text-4xl">{project.name}</h3>
              <p className="mt-3 text-xs text-muted">{project.timeline} / {project.role}</p>
              <div className="mt-7 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-lg border hairline px-2.5 py-1.5 text-[10px]">{item}</span>)}</div>
              <ProjectPreview color={project.color} number={project.number} />
            </div>
            <div>
              <p className="text-sm leading-7 text-muted">{project.summary}</p>
              <div className="mt-6 grid gap-3">{project.decisions.map((item) => <div key={item} className="flex gap-3 text-sm leading-6"><Check size={15} className="mt-1 shrink-0 text-accent" />{item}</div>)}</div>
              <div className="mt-7 flex flex-wrap gap-3 border-t hairline pt-5">{project.metrics.map((item) => <span key={item} className="text-xs font-semibold text-accent">{item}</span>)}</div>
            </div>
          </div>
        </Reveal>)}
      </div>
      <div className="mt-6 flex items-center gap-2 text-xs text-muted"><ArrowUpRight size={14} /> More details are available in my resume and during an interview.</div>
    </section>
  );
}
