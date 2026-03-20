import { useState } from "react";
import { StaggerReveal } from "@/components/StaggerReveal";

const skillsData = [
    // Programming
    { name: "C++", percentage: 80, category: "ProgrammingLanguages", abbr: "C++" },
    { name: "Python", percentage: 75, category: "ProgrammingLanguages", abbr: "Py" },
    { name: "Java", percentage: 70, category: "ProgrammingLanguages", abbr: "Ja" },
    { name: "C", percentage: 70, category: "ProgrammingLanguages", abbr: "C" },
    
    // Cybersecurity
    { name: "Wireshark", percentage: 70, category: "Cybersecurity", abbr: "WS" },
    { name: "Burp Suite", percentage: 65, category: "Cybersecurity", abbr: "BP" },
    { name: "Nmap", percentage: 60, category: "Cybersecurity", abbr: "NM" },
    { name: "Metasploit", percentage: 65, category: "Cybersecurity", abbr: "MS" },
    { name: "Packet Tracer", percentage: 85, category: "Cybersecurity", abbr: "PT" },
    { name: "SETOOLKIT", percentage: 65, category: "Cybersecurity", abbr: "SE" },

    // Frontend
    { name: "React.js", percentage: 80, category: "Frontend", abbr: "Re" },
    { name: "HTML", percentage: 95, category: "Frontend", abbr: "HT" },
    { name: "JavaScript", percentage: 80, category: "Frontend", abbr: "JS" },
    { name: "Tailwind CSS", percentage: 80, category: "Frontend", abbr: "TW" },
    { name: "CSS", percentage: 85, category: "Frontend", abbr: "CS" },
    { name: "Bootstrap", percentage: 80, category: "Frontend", abbr: "BS" },

    // Backend
    { name: "Node.js", percentage: 75, category: "Backend", abbr: "No" },
    { name: "Express.js", percentage: 70, category: "Backend", abbr: "Ex" },
    { name: "REST APIs", percentage: 68, category: "Backend", abbr: "API" },
    { name: "JWT Auth", percentage: 75, category: "Backend", abbr: "JWT" },

    // Databases
    { name: "MongoDB", percentage: 80, category: "Databases", abbr: "MDB" },
    { name: "Mongoose", percentage: 80, category: "Databases", abbr: "MG" },

    // Tools
    { name: "Git", percentage: 85, category: "Tools", abbr: "Git" },
    { name: "GitHub", percentage: 85, category: "Tools", abbr: "GH" },
    { name: "Firebase", percentage: 60, category: "Tools", abbr: "FB" },
    { name: "Vercel", percentage: 85, category: "Tools", abbr: "Ver" },
];

const categories = ["ProgrammingLanguages", "Frontend", "Backend", "Databases", "Tools", "Cybersecurity"];

export const Skills = () => {
    const [activeTab, setActiveTab] = useState("ProgrammingLanguages");

    const filteredSkills =
        activeTab === "All Skills"
            ? skillsData
            : skillsData.filter((s) => s.category === activeTab);

    return (
        <section id="skills" className="py-28 relative overflow-hidden bg-background">
            <span className="watermark -top-8 left-4 md:left-12">03</span>

            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
                <StaggerReveal className="flex flex-col items-center">

                    {/* Header */}
                    <div className="text-center mb-10 w-full relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-ink mb-6 font-serif relative inline-block">
                            Technical Arsenal
                            <div className="absolute left-1/2 -bottom-2 w-1/3 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent -translate-x-1/2" />
                        </h2>
                        <p className="text-muted-foreground text-sm">
                            A showcase of technologies I've mastered on my journey as a developer.
                        </p>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14 w-full relative z-10">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`px-4 md:px-5 py-2 rounded-full text-[0.7rem] md:text-xs font-mono tracking-wider transition-all duration-300 ${activeTab === cat
                                        ? "bg-primary text-primary-foreground font-bold shadow-[0px_4px_12px_rgba(200,134,10,0.3)]"
                                        : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-ink"
                                    }`}
                                data-hover
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Card Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full relative z-10">
                        {filteredSkills.map((skill, idx) => (
                            <div
                                key={`${activeTab}-${idx}`}
                                className="bg-card border border-border p-5 rounded-2xl flex flex-col transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(200,134,10,0.15)] animate-fade-in"
                                style={{ animationDelay: `${(idx % 12) * 50}ms` }}
                            >
                                {/* Top Row: Icon, Name, % */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        {/* Icon Box */}
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-primary text-xs shrink-0 bg-primary/10 border border-primary/20"
                                        >
                                            {skill.abbr}
                                        </div>
                                        {/* Name */}
                                        <h3 className="font-bold text-ink font-sans text-base">
                                            {skill.name}
                                        </h3>
                                    </div>
                                    {/* Percentage */}
                                    <span className="text-muted-foreground text-xs font-mono font-medium">
                                        {skill.percentage}%
                                    </span>
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full bg-border/50 h-1.5 rounded-full mb-3 overflow-hidden relative">
                                    <div
                                        className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out bg-primary"
                                        style={{ width: `${skill.percentage}%` }}
                                    />
                                </div>

                                {/* Bottom Row: Category */}
                                <div className="text-right mt-auto">
                                    <span className="text-[0.6rem] text-muted-foreground uppercase tracking-widest font-mono">
                                        {skill.category}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Coding Profiles */}
                    <div className="mt-14 w-full relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px flex-1 bg-border" />
                            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Coding Profiles</span>
                            <div className="h-px flex-1 bg-border" />
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            {/* LeetCode */}
                            <a
                                href="https://leetcode.com/u/Vishal407/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-5 py-3 bg-card border border-border rounded-xl hover:border-primary/50 hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(200,134,10,0.15)] transition-all duration-300 group"
                                data-hover
                            >
                                <img src="/leetcode.png" alt="LeetCode" className="w-6 h-6 object-contain opacity-80 group-hover:opacity-100 transition-opacity dark:invert" />
                                <div className="flex flex-col leading-tight">
                                    <span className="font-bold text-ink text-sm font-sans">LeetCode</span>
                                    <span className="text-[0.6rem] text-muted-foreground font-mono tracking-wider uppercase">@Vishal407</span>
                                </div>
                            </a>
                            {/* GeeksforGeeks */}
                            <a
                                href="https://www.geeksforgeeks.org/profile/vishal407"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-5 py-3 bg-card border border-border rounded-xl hover:border-primary/50 hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(200,134,10,0.15)] transition-all duration-300 group"
                                data-hover
                            >
                                <img src="/gfg.svg" alt="GeeksforGeeks" className="w-6 h-6 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                                <div className="flex flex-col leading-tight">
                                    <span className="font-bold text-ink text-sm font-sans">GeeksforGeeks</span>
                                    <span className="text-[0.6rem] text-muted-foreground font-mono tracking-wider uppercase">@vishal407</span>
                                </div>
                            </a>
                        </div>
                    </div>

                </StaggerReveal>
            </div>
        </section>
    );
};
