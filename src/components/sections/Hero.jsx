import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { metrics, profile } from "../../data/portfolio";

const stack = ["Node.js", "React", "Angular", "PostgreSQL", "MongoDB", "S3", "RBAC"];

function PhotoCard() {
  const [hasPhoto, setHasPhoto] = useState(true);

  return (
    <Motion.div
      className="hero-photo-card"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="hero-photo-inner">
        {hasPhoto ? (
          <img src="/profile-photo.jpeg" onError={() => setHasPhoto(false)} alt={profile.name} />
        ) : (
          <div className="grid h-full w-full place-items-center bg-[var(--accent)] text-5xl font-extrabold text-[#10140f]">{profile.initials}</div>
        )}
        <div className="hero-available"><span />Available for opportunities</div>
      </div>
      <div className="hero-photo-meta">
        <div>
          <p>Focus</p>
          <strong>API-first delivery</strong>
        </div>
        <div>
          <p>Access</p>
          <strong>RBAC & auth</strong>
        </div>
      </div>
    </Motion.div>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero-reference">
      <div className="hero-top-strip">
        <span className="hero-badge"><span />{profile.availability}</span>
        <span className="hero-badge hero-badge-muted"><MapPin size={12} />{profile.location}</span>
      </div>

      <p className="hero-eyebrow">Full Stack Software Engineer</p>

      <div className="hero-split">
        <PhotoCard />

        <Motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h1>Building <span>reliable</span> APIs, dashboards, and production integrations.</h1>
          <p className="hero-lede">{profile.statement}</p>

          <div className="hero-cta-row">
            <a className="hero-btn-solid" href="#work">View case studies <ArrowUpRight size={14} /></a>
            <a className="hero-btn-ghost" href={profile.resume} download>Download resume <Download size={14} /></a>
          </div>

          <div className="hero-stack-row">
            {stack.map((item) => <span key={item}>{item}</span>)}
          </div>
        </Motion.div>
      </div>

      <Motion.div
        className="hero-practical-card"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22, duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="hero-practical-grid">
          {metrics.map((item) => (
            <div key={item.label} className="hero-practical-item">
              <strong>{item.value}</strong>
              <p>{item.label}</p>
              <span>{item.detail}</span>
            </div>
          ))}
        </div>
      </Motion.div>
    </section>
  );
}
