import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { useState } from "react";

const certifications = [
  {
    title: "Packet Switching Networks and Algorithms",
    issuer: "Coursera",
    date: "October 2023",
    description:
      "Gained in-depth understanding of how data packets are routed across networks, switching algorithms, and network performance optimization — directly applicable to building reliable, networked web applications.",
    badge: "🌐",
    color: "#0056D2",
    courseLink: "https://www.coursera.org/learn/packet-switching-networks-algorithms",
    verifyLink: "https://www.coursera.org/account/accomplishments", // Replace with your certificate link
  },
  {
    title: "Crash Course in Python",
    issuer: "Technical Course",
    date: "March 2024",
    description:
      "Completed a comprehensive Python programming course covering core syntax, data structures, OOPs, and scripting — strengthening backend and automation skills used in AI-powered projects.",
    badge: "🐍",
    color: "#3776AB",
    courseLink: "https://www.coursera.org/learn/python-crash-course",
    verifyLink: "https://www.coursera.org/account/accomplishments", // Replace with your certificate link
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL Certification",
    date: "May 2025",
    description:
      "Earned NPTEL certification in Cloud Computing covering cloud architecture, virtualization, deployment models, and cloud security — supporting scalable application deployment on platforms like Firebase and Vercel.",
    badge: "☁️",
    color: "#FF9900",
    courseLink: "https://nptel.ac.in/courses/106104079",
    verifyLink: "https://nptel.ac.in/noc/E_Certificate/linkedin/noc", // Replace with your certificate link
  },
  {
    title: "C++ Programming — OOPs & Data Structures",
    issuer: "Training Program",
    date: "July 2025",
    description:
      "Completed intensive C++ training focused on Object-Oriented Programming and Data Structures. Applied concepts by building a hospital ER triage system using Binary Heap with real-world features.",
    badge: "⚙️",
    color: "#00599C",
    courseLink: "#",
    verifyLink: "#", // Add your certificate link here
  },
];

const handleVerifyClick = (verifyLink) => {
  if (verifyLink && verifyLink !== "#") {
    window.open(verifyLink, "_blank");
  }
};


export const Certifications = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % certifications.length);
  const previous = () => setActiveIdx((prev) => (prev - 1 + certifications.length) % certifications.length);

  const cert = certifications[activeIdx];

  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Credentials that{" "}
            <span className="font-serif italic font-normal text-white">
              back the work.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Every certificate represents a skill I actively use — not just a badge to collect.
          </p>
        </div>

        {/* Certification Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">

            {/* Card */}
            <div
              key={activeIdx}
              className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200"
              style={{ borderTop: `3px solid ${cert.color}` }}
            >
              {/* Badge */}
              <div
                className="absolute -top-5 left-8 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                style={{ background: cert.color }}
              >
                {cert.badge}
              </div>

              {/* Issuer + Date */}
              <div className="flex items-center justify-between mb-6 pt-4">
                <span
                  className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ background: `${cert.color}20`, color: cert.color }}
                >
                  {cert.issuer}
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Award className="w-4 h-4" /> {cert.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                {cert.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-base leading-relaxed">
                {cert.description}
              </p>

              {/* Links */}
              <div className="flex gap-3 mt-6">
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all"
                  style={{ background: `${cert.color}20`, color: cert.color, border: `1px solid ${cert.color}40` }}
                >
                  <Award className="w-3 h-3" /> Verify Certificate
                </a>
                <a
                  href={cert.courseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-muted-foreground transition-all hover:text-white"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  View Course →
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {certifications.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>

            {/* Counter */}
            <p className="text-center text-sm text-muted-foreground mt-4">
              {activeIdx + 1} / {certifications.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};