import { useRef, useState } from "react";
import { Download, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../../data/portfolio";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

const contactEndpoint = `https://formsubmit.co/${profile.email}`;

export function Contact() {
  const formRef = useRef(null);
  const submittedRef = useRef(false);
  const [status, setStatus] = useState("idle");

  const handleSubmit = () => {
    submittedRef.current = true;
    setStatus("sending");
  };

  const handleResponse = () => {
    if (!submittedRef.current) return;
    submittedRef.current = false;
    formRef.current?.reset();
    setStatus("sent");
  };

  return (
    <section id="contact" className="section-wrap section-space">
      <iframe className="hidden" name="contact-submit-frame" title="Contact form response" onLoad={handleResponse} />
      <Reveal className="contact-panel overflow-hidden rounded-[1.7rem]">
        <div className="grid lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative overflow-hidden border-b hairline p-5 sm:p-7 md:p-12 lg:border-b-0 lg:border-r">
            <div className="grid-bg absolute inset-0 opacity-30" />
            <div className="relative">
              <p className="mono text-[10px] uppercase text-signal">Get in touch</p>
              <h2 className="mt-6 text-3xl font-semibold leading-[1.05] sm:mt-8 sm:text-4xl lg:text-6xl">Have a role or product problem in mind?</h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-muted sm:mt-6">I am open to full stack software engineering opportunities where I can contribute to useful products, reliable systems, and thoughtful user workflows.</p>
              <div className="mt-9 space-y-4 text-xs sm:mt-14">
                <a className="flex min-w-0 items-center gap-3 transition hover:text-[var(--text)]" href={`mailto:${profile.email}`}><Mail size={15} className="shrink-0 text-accent" /><span className="min-w-0 break-all">{profile.email}</span></a>
                <a className="flex min-w-0 items-center gap-3 transition hover:text-[var(--text)]" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} className="shrink-0 text-accent" /><span className="min-w-0 break-all">linkedin.com/in/iamatifmubashar</span></a>
                <a className="flex min-w-0 items-center gap-3 transition hover:text-[var(--text)]" href={profile.resume} download><Download size={15} className="shrink-0 text-accent" /><span>Download PDF resume</span></a>
                <p className="flex items-center gap-3"><MapPin size={15} className="shrink-0 text-accent" />{profile.location}</p>
              </div>
            </div>
          </div>

          <form ref={formRef} action={contactEndpoint} method="POST" target="contact-submit-frame" onSubmit={handleSubmit} className="p-5 sm:p-7 md:p-12">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-xs text-muted">Your name<input required name="name" autoComplete="name" className="form-field mt-2" /></label>
              <label className="text-xs text-muted">Email address<input required type="email" name="email" autoComplete="email" className="form-field mt-2" /></label>
            </div>
            <label className="mt-5 block text-xs text-muted">What are you building or hiring for?<textarea required name="message" rows="6" className="form-field mt-2 resize-none" /></label>
            <input type="hidden" name="_subject" value="New portfolio inquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button type="submit">{status === "sending" ? "Sending..." : "Send message"}</Button>
              <p className="text-xs text-muted" aria-live="polite">
                {status === "sending" && "Securely sending your message..."}
                {status === "sent" && "Message submitted successfully. I will get back to you soon."}
              </p>
            </div>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
