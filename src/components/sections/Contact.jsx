import { useState } from "react";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../../data/portfolio";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || `https://formsubmit.co/ajax/${profile.email}`;

export function Contact() {
  const [status, setStatus] = useState("idle");
  const submit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))) });
      if (!response.ok) throw new Error("Unable to send");
      event.currentTarget.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };
  return (
    <section id="contact" className="section-wrap section-space">
      <Reveal className="panel overflow-hidden rounded-2xl sm:rounded-[2.4rem]">
        <div className="grid lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative overflow-hidden border-b hairline p-5 sm:p-7 md:p-12 lg:border-b-0 lg:border-r">
            <div className="grid-bg absolute inset-0 opacity-35" />
            <div className="relative"><p className="mono text-[10px] uppercase tracking-[.2em] text-signal">Get in touch</p><h2 className="mt-6 text-3xl font-semibold leading-[1.05] tracking-[-.06em] sm:mt-8 sm:text-4xl md:text-6xl">Have a role or project in mind?</h2><p className="mt-5 max-w-md text-sm leading-7 text-muted sm:mt-6">I'm open to full stack software engineering opportunities where I can shape polished interfaces, reliable systems, and useful products.</p>
              <div className="mt-9 space-y-4 text-xs sm:mt-14"><a className="flex min-w-0 items-center gap-3" href={`mailto:${profile.email}`}><Mail size={15} className="shrink-0 text-accent" /><span className="min-w-0 break-all">{profile.email}</span></a><a className="flex min-w-0 items-center gap-3" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} className="shrink-0 text-accent" /><span className="min-w-0 break-all">linkedin.com/in/iamatifmubashar</span></a><p className="flex items-center gap-3"><MapPin size={15} className="shrink-0 text-accent" />{profile.location}</p></div>
            </div>
          </div>
          <form onSubmit={submit} className="p-5 sm:p-7 md:p-12">
            <div className="grid gap-5 sm:grid-cols-2"><label className="text-xs text-muted">Your name<input required name="name" className="mt-2 w-full rounded-xl border hairline bg-transparent px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]" /></label><label className="text-xs text-muted">Email address<input required type="email" name="email" className="mt-2 w-full rounded-xl border hairline bg-transparent px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]" /></label></div>
            <label className="mt-5 block text-xs text-muted">What are you building?<textarea required name="message" rows="6" className="mt-2 w-full resize-none rounded-xl border hairline bg-transparent px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]" /></label>
            <input type="hidden" name="_subject" value="New portfolio inquiry" /><input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />
            <div className="mt-6 flex flex-wrap items-center gap-4"><Button type="submit">{status === "sending" ? "Sending..." : "Send message"}</Button><p className="text-xs text-muted" aria-live="polite">{status === "sent" && "Message sent. I’ll get back to you soon."}{status === "error" && <>Couldn’t send. Email me at <a className="text-accent" href={`mailto:${profile.email}`}>{profile.email}</a>.</>}</p></div>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
