import { useState, useEffect, useRef } from "react";
import { StaggerReveal } from "@/components/StaggerReveal";

const skills = [
  { label: "Full Stack Dev", value: 82, icon: "⚡" },
  { label: "DSA / LeetCode", value: 75, icon: "🧠" },
  { label: "Cybersecurity", value: 65, icon: "🛡️" },
  { label: "React / Next.js", value: 85, icon: "⚛️" },
  { label: "Node / Express", value: 80, icon: "🔧" },
  { label: "Databases", value: 72, icon: "🗄️" },
];

function CircularSkill({ skill, index, animate }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const progress = animate ? (skill.value / 100) * circumference : 0;
  const dash = circumference - progress;

  return (
    <div
      className="flex flex-col items-center gap-2"
      style={{
        animation: animate ? "fadeUp 0.6s ease forwards" : "none",
        animationDelay: `${index * 0.1}s`,
        opacity: 0,
      }}
    >
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg className="absolute top-0 left-0 w-full h-full -rotate-90" viewBox="0 0 88 88">
          <circle cx="44" cy="44" r={radius} fill="none" stroke="#D4C9A8" strokeWidth="7" />
          <circle
            cx="44" cy="44" r={radius} fill="none"
            stroke="#C8860A" strokeWidth="7" strokeOpacity="0.2"
            strokeDasharray={circumference} strokeDashoffset={dash}
            style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)" }}
          />
          <circle
            cx="44" cy="44" r={radius} fill="none"
            stroke="#C8860A" strokeWidth="4" strokeLinecap="round"
            strokeDasharray={circumference} strokeDashoffset={dash}
            style={{
              transition: "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)",
              filter: "drop-shadow(0 0 6px rgba(200,134,10,0.4))",
            }}
          />
        </svg>
        <div className="flex flex-col items-center z-10">
          <span style={{ fontSize: "1.3rem" }}>{skill.icon}</span>
          <span className="font-mono font-bold text-primary" style={{ fontSize: "0.95rem" }}>
            {skill.value}%
          </span>
        </div>
      </div>
      <span className="font-mono text-xs text-muted-foreground font-semibold tracking-wider text-center">
        {skill.label}
      </span>
    </div>
  );
}

export const About = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Watermark */}
      <span className="watermark -top-8 left-4 md:left-12">02</span>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <StaggerReveal className="space-y-8">
            <div>
              <span className="section-label">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-ink">
              Building secure, scalable web experiences —
              <span className="font-serif italic font-normal text-rust">
                {" "}one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Vishal Singh, a B.Tech CSE student passionate about full-stack
                development and cybersecurity. I build user-centered web applications
                using React.js, Next.js, Node.js, and MongoDB — focused on solving
                real problems with clean, scalable, and secure code.
              </p>
              <p>
                My cybersecurity background gives me a unique edge — I don't just
                build features, I build systems that are reliable and safe by design.
                I've competed in national-level hackathons and worked across 10+ tech
                stacks — turning complex problems into clean, scalable solutions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                solving problems on LeetCode, or learning something new.
              </p>
            </div>

            <div className="border border-primary/30 bg-card p-6">
              <p className="text-lg font-serif italic text-ink">
                "My goal is simple — write code that works today, scales tomorrow,
                and never breaks at 3AM"
              </p>
            </div>
          </StaggerReveal>

          {/* Right Column - Skill Graph */}
          <div
            ref={ref}
            style={{
              background: "linear-gradient(135deg, #EDE6D3 0%, #F5EFE0 50%, #EDE6D3 100%)",
              border: "1px solid #D4C9A8",
              borderRadius: 0,
              padding: "2.5rem 2rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background grid */}
            <div style={{
              position: "absolute", inset: 0, opacity: 0.06,
              backgroundImage: "linear-gradient(#C8860A 1px, transparent 1px), linear-gradient(90deg, #C8860A 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              pointerEvents: "none",
            }} />

            {/* Header */}
            <div className="text-center mb-8" style={{ position: "relative" }}>
              <div style={{
                display: "inline-block",
                background: "rgba(200,134,10,0.1)",
                border: "1px solid rgba(200,134,10,0.3)",
                padding: "4px 16px",
                marginBottom: "0.75rem",
              }}>
                <span className="font-mono text-primary" style={{ fontSize: "0.7rem", letterSpacing: "0.15em" }}>
                  ● SKILL MATRIX
                </span>
              </div>
              <h3 className="font-mono text-ink font-bold" style={{ fontSize: "1.1rem", letterSpacing: "0.05em" }}>
                Technical Proficiency based on my current Work/Project
              </h3>
            </div>

            {/* Skill Circles */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem 1rem", position: "relative",
            }}>
              {skills.map((skill, i) => (
                <CircularSkill key={i} skill={skill} index={i} animate={animate} />
              ))}
            </div>

            {/* Footer Stats */}
            <div style={{
              marginTop: "2rem", borderTop: "1px solid #D4C9A8",
              paddingTop: "1.5rem", display: "flex",
              justifyContent: "center", gap: "2.5rem",
            }}>
              {[["200+", "LeetCode"], ["15+", "APIs Built"], ["10+", "Tech Stacks"]].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div className="font-mono font-bold text-primary" style={{ fontSize: "1.2rem" }}>{num}</div>
                  <div className="font-mono text-muted-foreground" style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};