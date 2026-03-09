const experiences = [
  {
    period: "February 2026",
    role: "Backend Project",
    company: "URL Shortener",
    description:
      "Built a fast, lightweight URL shortening service that converts long URLs into clean, shareable short links. Implemented redirect logic, link storage, and instant resolution — strengthening core backend fundamentals like routing, middleware, and database operations.",
    technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "EJS"],
    current: false,
  },
  {
    period: "July 2025",
    role: "Full-Stack Project",
    company: "Eco-Retail",
    description:
      "Designed and implemented scalable backend architecture with JWT-based authentication, role-based access control, and 15+ REST APIs. Optimized MongoDB queries using indexing and pagination, reducing average API response time by ~25ms.",
    technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "Firebase", "YOLOv8", "JWT"],
    current: false,
  },
  {
    period: "July 2025",
    role: "C++ & DSA Training",
    company: "Self-Learning",
    description:
      "Completed structured C++ programming training focused on OOPs and Data Structures. Built a hospital ER triage system using Binary Heap (Priority Queue) with treat-next, remove, and CSV export features — available as both a web app and C++ console version.",
    technologies: ["C++", "HTML", "CSS", "JavaScript", "STL"],
    current: false,
  },
  {
  period: "June 2025",
  role: "National Hackathon Finalist",
  company: "Google Office, Gurgaon — National Level Hackathon",
  description:
    "Advanced to the final round among 20 teams competing nationwide out of 4000+ participants. Demonstrated strong problem-solving, full-stack development, and teamwork skills under pressure at Google's office, Gurgaon.",
  technologies: ["Problem Solving", "Full-Stack", "Team Collaboration", "Rapid Prototyping"],
  current: false,
},
  {
    period: "May 2025",
    role: "Full-Stack Project",
    company: "Medicare-AI",
    description:
      "Built a secure healthcare management system with patient records, appointment scheduling, and OCR-based document processing. Integrated Stripe payments and Twilio notifications with responsive UI across desktop and mobile.",
    technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Stripe", "Twilio", "OCR"],
    current: false,
  },
  {
  period: "February 2024",
  role: "Hackathon Finalist",
  company: "College Level Hackathon — Lovely Professional University",
  description:
    "Competed in a college-level hackathon and advanced to the final round, showcasing problem-solving and rapid development skills. Built and delivered a functional web project under tight time constraints.",
  technologies: ["HTML", "CSS", "JavaScript"],
  current: false,
},
  {
    period: "Since August 2023",
    role: "B.Tech CSE Student",
    company: "Lovely Professional University, Punjab",
    description:
      "Pursuing Computer Science Engineering with an open minor in Cybersecurity. Maintaining a CGPA of 7.78 while actively building projects, competing in hackathons, and solving 200+ problems on LeetCode.",
    technologies: ["Full-Stack", "Cybersecurity", "DSA", "DBMS", "Cloud Computing"],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks volumes.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            From national hackathons to hands-on projects — a timeline of how
            I've grown as a developer, one challenge at a time.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};