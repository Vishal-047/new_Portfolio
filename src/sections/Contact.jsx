import { useState, useEffect, useRef } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/Button";
import emailjs from "@emailjs/browser";

const commands = [
  { cmd: "whoami", label: "Name", out: "Vishal Singh", color: "#f0883e" },
  { cmd: "cat email.txt", label: "Email", out: "Vishalrw007@gmail.com", color: "#79c0ff", href: "mailto:Vishalrw007@gmail.com" },
  { cmd: "cat phone.txt", label: "Phone", out: "+91-7355752539", color: "#79c0ff", href: "tel:+917355752539" },
  { cmd: "open github", label: "GitHub", out: "github.com/Vishal-047", color: "#3fb950", href: "https://github.com/Vishal-047" },
  { cmd: "open linkedin", label: "LinkedIn", out: "linkedin.com/in/vishal0407", color: "#3fb950", href: "https://www.linkedin.com/in/vishal0407" },
  { cmd: "locate user", label: "Location", out: "Punjab, India 📍", color: "#d2a8ff" },
  { cmd: "status --check", label: "Status", out: "● Available for Internship", color: "#3fb950" },
];


function TerminalLine({ line, delay }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (!visible) return null;

  return (
    <div style={{ marginBottom: 10, animation: "slideIn 0.3s ease forwards" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ color: "#3fb950", fontWeight: "bold" }}>vishal@dev</span>
        <span style={{ color: "#8b949e" }}>:</span>
        <span style={{ color: "#58a6ff" }}>~</span>
        <span style={{ color: "#8b949e" }}>$</span>
        <span style={{ color: "#e6edf3" }}>{line.cmd}</span>
      </div>
      <div style={{ paddingLeft: 16, marginTop: 3, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "#8b949e", fontSize: 11 }}>→</span>
        {line.href ? (
          <a
            href={line.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: line.color, textDecoration: "none", fontSize: 13,
              borderBottom: `1px dashed ${line.color}60`,
              transition: "border-color 0.2s",
            }}
            onMouseEnter={e => e.target.style.borderBottomColor = line.color}
            onMouseLeave={e => e.target.style.borderBottomColor = `${line.color}60`}
          >
            {line.out}
          </a>
        ) : (
          <span style={{ color: line.color, fontSize: 13 }}>{line.out}</span>
        )}
      </div>
    </div>
  );
}

export const Contact = () => {
  const [started, setStarted] = useState(false);
  const bottomRef = useRef();

  // Form state
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [started]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your environment variables.");
      }

      await emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }, publicKey);

      setSubmitStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({ type: "error", message: err.text || "Failed to send message. Please try again later." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build something{" "}
            <span className="font-serif italic font-normal text-white">
              great together.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Open to internship opportunities, collaborations, and exciting projects.
            Run the terminal or drop me a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT — Contact Form */}
          <div className="glass p-8 md:p-10 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                {isLoading ? <>Sending...</> : (<>Send Message <Send className="w-5 h-5" /></>)}
              </Button>

              {submitStatus.type && (
                <div className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success"
                  ? "bg-green-500/10 border border-green-500/20 text-green-400"
                  : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}>
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* RIGHT — Terminal */}
          <div className="animate-fade-in animation-delay-400" style={{
            background: "#0d1117",
            border: "1px solid #30363d",
            borderRadius: 14,
            overflow: "hidden",
            fontFamily: "'Courier New', monospace",
            fontSize: 13,
            boxShadow: "0 0 40px rgba(0,0,0,0.5)",
          }}>
            {/* Title bar */}
            <div style={{
              background: "#161b22", padding: "10px 16px",
              display: "flex", alignItems: "center", gap: 8,
              borderBottom: "1px solid #30363d",
            }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
              <span style={{ color: "#8b949e", fontSize: 12, marginLeft: 8, letterSpacing: 1 }}>
                contact_info.sh
              </span>
            </div>

            {/* Terminal body */}
            <div style={{ padding: 20, minHeight: 380, maxHeight: 450, overflowY: "auto" }}>
              <div style={{ color: "#8b949e", marginBottom: 14, fontSize: 12 }}>
                # Run contact lookup script
              </div>

              {!started ? (
                <div>
                  <div style={{ color: "#e6edf3", marginBottom: 16 }}>
                    <span style={{ color: "#3fb950" }}>vishal@dev</span>
                    <span style={{ color: "#8b949e" }}>:~$ </span>
                    <span>./contact_info.sh</span>
                  </div>
                  <button
                    onClick={() => setStarted(true)}
                    style={{
                      background: "transparent",
                      border: "1px solid #3fb950",
                      color: "#3fb950", padding: "8px 20px",
                      fontFamily: "monospace", fontSize: 12,
                      cursor: "pointer", borderRadius: 6,
                      letterSpacing: 2,
                      boxShadow: "0 0 12px rgba(63,185,80,0.2)",
                    }}
                  >
                    ▶ RUN SCRIPT
                  </button>
                </div>
              ) : (
                <div>
                  <div style={{ color: "#e6edf3", marginBottom: 16 }}>
                    <span style={{ color: "#3fb950" }}>vishal@dev</span>
                    <span style={{ color: "#8b949e" }}>:~$ </span>
                    <span>./contact_info.sh</span>
                  </div>
                  <div style={{ color: "#58a6ff", marginBottom: 14, fontSize: 12 }}>
                    Fetching developer contact details...
                  </div>

                  {commands.map((line, i) => (
                    <TerminalLine key={i} line={line} delay={i * 400 + 300} />
                  ))}

                  <div ref={bottomRef} />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};
