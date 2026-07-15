import { ArrowUpRight, Check, GitBranch, Layers3 } from "lucide-react";
import { projects } from "../../data/portfolio";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

function ProjectPreview({ project }) {
  return (
    <div className="case-preview" style={{ "--case-accent": project.accent }}>
      <div className="flex items-center gap-1.5 border-b hairline px-3 py-2">
        <span className="size-1.5 rounded-full bg-[#ff6b6b]" />
        <span className="size-1.5 rounded-full bg-[#ffd166]" />
        <span className="size-1.5 rounded-full bg-[var(--case-accent)]" />
        <span className="mono ml-auto text-[8px] text-muted">system / {project.number}</span>
      </div>
      <div className="grid gap-3 p-4">
        <div className="case-preview-grid grid grid-cols-[.8fr_1.2fr] gap-3">
          <div className="rounded-xl border hairline bg-[var(--bg)]/60 p-3">
            <div className="mb-3 h-2 w-12 rounded-full bg-[var(--case-accent)]" />
            <div className="space-y-2">
              {project.preview.slice(0, 4).map((item) => <div key={item} className="h-2 rounded-full bg-[var(--line)]" />)}
            </div>
          </div>
          <div className="rounded-xl border hairline bg-[var(--bg)]/60 p-3">
            <div className="grid grid-cols-2 gap-2">
              {project.preview.slice(0, 4).map((item, index) => (
                <div key={item} className="rounded-lg border hairline p-2">
                  <div className="mb-2 h-1.5 w-8 rounded-full" style={{ background: index === 0 ? project.accent : "var(--line)" }} />
                  <p className="truncate text-[9px] text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-xl border hairline bg-[var(--bg)]/60 p-3">
          <div className="mb-3 flex items-center gap-2 text-[10px] text-muted"><GitBranch size={13} className="text-accent" /> API to UI workflow</div>
          <div className="grid grid-cols-5 items-center gap-2">
            {[0, 1, 2, 3, 4].map((item) => <div key={item} className="h-2 rounded-full" style={{ background: item % 2 === 0 ? project.accent : "var(--line)", opacity: item % 2 === 0 ? 0.82 : 1 }} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="work" className="section-wrap section-space">
      <SectionHeader
        number="02"
        eyebrow="Selected work"
        title="Case studies from real products, not just technology lists."
        copy="These projects show how I contributed across APIs, dashboards, database flows, media handling, payments, real-time updates, debugging, and production delivery."
      />
      <div className="mt-9 grid gap-5 sm:mt-12">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.04} className="case-card rounded-[1.6rem] p-4 sm:p-6 lg:p-8 2xl:p-10">
            <div className="grid gap-8 lg:grid-cols-[.88fr_1.12fr] 2xl:gap-14">
              <div>
                <div className="flex items-center gap-3">
                  <span className="mono text-[10px] text-accent">{project.number}</span>
                  <span className="h-px flex-1 bg-[var(--line)]" />
                  <span className="mono text-[9px] uppercase text-muted">{project.timeline}</span>
                </div>
                <p className="mono mt-6 text-[10px] uppercase text-muted">{project.type}</p>
                <h3 className="mt-3 text-3xl font-semibold sm:text-4xl 2xl:text-5xl">{project.name}</h3>
                <p className="mt-3 text-xs text-muted">{project.role}</p>
                <p className="mt-6 text-sm leading-7 text-muted">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="tech-pill">{item}</span>)}</div>
                <ProjectPreview project={project} />
              </div>

              <div className="grid content-start gap-5">
                <div className="rounded-2xl border hairline bg-[var(--bg-soft)] p-5">
                  <div className="mb-3 flex items-center gap-2 text-xs font-semibold"><Layers3 size={15} className="text-accent" /> Challenge</div>
                  <p className="text-sm leading-7 text-muted">{project.challenge}</p>
                </div>

                <div className="grid gap-3">
                  {project.contributions.map((item) => (
                    <div key={item} className="flex gap-3 rounded-xl border hairline bg-[var(--bg)]/45 p-4 text-sm leading-6">
                      <Check size={15} className="mt-1 shrink-0 text-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 border-t hairline pt-5 md:grid-cols-3">
                  {project.impact.map((item) => <span key={item} className="rounded-xl bg-[var(--bg-soft)] px-3 py-3 text-xs font-semibold text-accent">{item}</span>)}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-2 text-xs text-muted"><ArrowUpRight size={14} /> Full implementation details are available during technical interviews.</div>
    </section>
  );
}
