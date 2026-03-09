import { useState, useEffect, useRef } from "react";

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
        animation: animate ? `fadeUp 0.6s ease forwards` : "none",
        animationDelay: `${index * 0.1}s`,
        opacity: 0,
      }}
    >
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg className="absolute top-0 left-0 w-full h-full -rotate-90" viewBox="0 0 88 88">
          <circle cx="44" cy="44" r={radius} fill="none" stroke="#1a2a1a" strokeWidth="7" />
          <circle
            cx="44" cy="44" r={radius} fill="none"
            stroke="#00ff6a" strokeWidth="7" strokeOpacity="0.15"
            strokeDasharray={circumference} strokeDashoffset={dash}
            style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)" }}
          />
          <circle
            cx="44" cy="44" r={radius} fill="none"
            stroke="#00e05a" strokeWidth="4" strokeLinecap="round"
            strokeDasharray={circumference} strokeDashoffset={dash}
            style={{
              transition: "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)",
              filter: "drop-shadow(0 0 6px #00e05a)",
            }}
          />
        </svg>
        <div className="flex flex-col items-center z-10">
          <span style={{ fontSize: "1.3rem" }}>{skill.icon}</span>
          <span style={{ color: "#00e05a", fontWeight: 700, fontSize: "0.95rem", fontFamily: "monospace" }}>
            {skill.value}%
          </span>
        </div>
      </div>
      <span style={{
        color: "#c8ffd4", fontSize: "0.75rem", fontWeight: 600,
        letterSpacing: "0.05em", textAlign: "center", fontFamily: "'Courier New', monospace",
      }}>
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
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building secure, scalable web experiences —
              <span className="font-serif italic font-normal text-white">
                {" "}one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
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

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is simple — write code that works today, scales tomorrow,
                and never breaks at 3AM"
              </p>
            </div>
          </div>

          {/* Right Column - Skill Graph */}
          <div
            ref={ref}
            style={{
              background: "linear-gradient(135deg, #040d04 0%, #0a1a0a 50%, #040d04 100%)",
              border: "1px solid #1a3a1a",
              borderRadius: "1.5rem",
              padding: "2.5rem 2rem",
              boxShadow: "0 0 60px rgba(0,200,80,0.07), inset 0 1px 0 rgba(0,255,100,0.05)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background grid */}
            <div style={{
              position: "absolute", inset: 0, opacity: 0.04,
              backgroundImage: "linear-gradient(#00ff6a 1px, transparent 1px), linear-gradient(90deg, #00ff6a 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              pointerEvents: "none",
            }} />

            {/* Header */}
            <div className="text-center mb-8" style={{ position: "relative" }}>
              <div style={{
                display: "inline-block",
                background: "rgba(0,224,90,0.1)",
                border: "1px solid rgba(0,224,90,0.3)",
                borderRadius: "999px",
                padding: "4px 16px",
                marginBottom: "0.75rem",
              }}>
                <span style={{ color: "#00e05a", fontSize: "0.7rem", fontFamily: "monospace", letterSpacing: "0.15em" }}>
                  ● SKILL MATRIX
                </span>
              </div>
              <h3 style={{
                color: "#e8ffe8", fontFamily: "'Courier New', monospace",
                fontSize: "1.2rem", fontWeight: 700, margin: 0, letterSpacing: "0.05em",
              }}>
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
              marginTop: "2rem", borderTop: "1px solid #1a3a1a",
              paddingTop: "1.5rem", display: "flex",
              justifyContent: "center", gap: "2.5rem",
            }}>
              {[["200+", "LeetCode"], ["15+", "APIs Built"], ["10+", "Tech Stacks"]].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div style={{ color: "#00e05a", fontWeight: 700, fontSize: "1.2rem", fontFamily: "monospace" }}>{num}</div>
                  <div style={{ color: "#5a8a5a", fontSize: "0.7rem", fontFamily: "monospace", letterSpacing: "0.1em" }}>{label}</div>
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