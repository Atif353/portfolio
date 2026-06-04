import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Code2, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "../ui/Button";
import { metrics, profile } from "../../data/portfolio";

const codeLines = [
  ["const", "developer", "=", "{"],
  ["  name:", "'Atif Mubashar',"],
  ["  focus:", "'Full Stack Development',"],
  ["  strongAt:", "['Node.js', 'REST APIs', 'Databases'],"],
  ["  mindset:", "'Build, learn, improve'"],
  ["};"],
];

export function Hero() {
  const [hasPhoto, setHasPhoto] = useState(true);

  return (
    <section id="top" className="section-wrap pt-32 md:pt-40">
      <div className="grid items-center gap-10 lg:min-h-[74vh] lg:grid-cols-[1.15fr_.85fr] lg:gap-12 2xl:min-h-[82vh] 2xl:grid-cols-[1.12fr_.88fr] 2xl:gap-20">
        <div>
          <Motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-5 flex items-center gap-3 text-xs text-muted sm:mb-6 sm:text-sm">
            <span className="size-2 rounded-full bg-[var(--accent)] shadow-[0_0_16px_var(--accent)]" />
            Full Stack Developer / Lahore, Pakistan
          </Motion.div>
          <Motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="hero-title font-semibold leading-[.98] tracking-[-.07em]">
            Hi, I'm Atif.<br /><span className="text-muted">I build full stack products.</span>
          </Motion.h1>
          <Motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mt-7 max-w-2xl text-base leading-8 text-muted md:text-lg 2xl:max-w-3xl 2xl:text-xl 2xl:leading-9">
            A full stack software engineer with around <strong className="text-[var(--text)]">2 years of hands-on experience</strong> building responsive frontend experiences, secure APIs, dashboards, real-time features, and production integrations.
          </Motion.p>
          <Motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} className="mt-8 grid gap-3 min-[430px]:flex min-[430px]:flex-wrap">
            <Button href="#work">View my projects</Button><Button href="/Atif-Mubashar-Resume.html" download variant="secondary">Download resume</Button>
          </Motion.div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted"><span className="flex items-center gap-2"><Code2 size={14} className="text-accent" /> Node.js / React / Angular</span><span className="flex items-center gap-2"><MapPin size={14} className="text-accent" /> Open to remote opportunities</span></div>
          <div className="mt-7 flex gap-3"><a aria-label="LinkedIn" className="social-button" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /></a><a aria-label="Email" className="social-button" href={`mailto:${profile.email}`}><Mail size={16} /></a></div>
        </div>

        <Motion.div initial={{ opacity: 0, scale: .96, rotate: 1 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: .2, duration: .7 }} className="panel mx-auto w-full max-w-xl overflow-hidden rounded-3xl lg:max-w-none 2xl:rounded-[2rem]">
          <div className="profile-stage relative grid min-h-64 place-items-center overflow-hidden border-b hairline bg-[var(--bg-soft)] p-5 sm:min-h-72">
            <div className="grid-bg absolute inset-0 opacity-25" />
            <div className="profile-orbit absolute rounded-full border hairline" />
            {hasPhoto ? <img src="/profile-photo.jpeg" onError={() => setHasPhoto(false)} alt="Atif Mubashar" className="profile-photo relative rounded-full object-cover" /> : <div className="relative grid size-40 place-items-center rounded-full border-4 border-[var(--panel)] bg-[var(--accent)] text-4xl font-extrabold text-[#111] shadow-2xl sm:size-44">AM</div>}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-[var(--bg)]/90 px-3 py-1.5 text-[10px] font-semibold backdrop-blur"><span className="size-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" /> Available for opportunities</div>
          </div>
          <div className="flex items-center gap-2 border-b hairline px-5 py-4"><span className="size-2.5 rounded-full bg-[#ff6b6b]" /><span className="size-2.5 rounded-full bg-[#ffd166]" /><span className="size-2.5 rounded-full bg-[var(--accent)]" /><span className="mono ml-3 text-[10px] text-muted">about-me.js</span></div>
          <div className="mono overflow-x-auto p-4 text-[10px] leading-6 sm:p-6 sm:text-[11px] sm:leading-7 md:p-7 md:text-[12px] 2xl:p-9 2xl:text-sm 2xl:leading-8">
            {codeLines.map((parts, i) => <div key={i} className="flex min-w-max gap-3 sm:gap-4"><span className="select-none text-muted">{String(i + 1).padStart(2, "0")}</span><span><span className="text-signal">{parts[0]}</span> <span className={i === 0 ? "text-accent" : ""}>{parts.slice(1).join(" ")}</span></span></div>)}
            <div className="mt-6 border-t hairline pt-4 text-muted"><span className="text-accent">&gt;</span> shipping production features at Prisma Technologies</div>
          </div>
        </Motion.div>
      </div>
      <div className="mt-12 grid gap-3 border-y hairline py-6 sm:grid-cols-2 lg:grid-cols-4 2xl:mt-16 2xl:gap-6 2xl:py-8">{metrics.map((item) => <div key={item.label} className="border-l-2 border-[var(--accent)] pl-4 2xl:pl-6"><strong className="text-2xl 2xl:text-3xl">{item.value}</strong><p className="mt-1 text-[11px] text-muted 2xl:text-xs">{item.label}</p></div>)}</div>
    </section>
  );
}
