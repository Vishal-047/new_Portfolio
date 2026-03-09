import { useState, useEffect, useRef } from "react";

const contactData = [
  { key: "IDENTITY", value: "Vishal Singh", color: "#00ff41" },
  { key: "COMMS", value: "Vishalrw007@gmail.com", color: "#00ff41", href: "mailto:Vishalrw007@gmail.com" },
  { key: "SIGNAL", value: "+91-7355752539", color: "#00ff41", href: "tel:+917355752539" },
  { key: "SOURCE", value: "github.com/Vishal-047", color: "#00ff41", href: "https://github.com/Vishal-047" },
  { key: "NETWORK", value: "linkedin.com/in/vishal0407", color: "#00ff41", href: "https://www.linkedin.com/in/vishal0407" },
  { key: "COORDS", value: "Punjab, India", color: "#00ff41" },
  { key: "STATUS", value: "AVAILABLE FOR INTERNSHIP", color: "#00ff41" },
];

const hackingSteps = [
  "Initializing secure connection...",
  "Bypassing firewall ██████████ OK",
  "Decrypting contact database...",
  "Access granted ✓",
];

// Matrix rain character set
const matrixChars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";

function MatrixRain({ width, height }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#00ff4120";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 45);
    return () => clearInterval(interval);
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute", inset: 0,
        opacity: 0.4, pointerEvents: "none",
      }}
    />
  );
}

function HackingSequence({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < hackingSteps.length) {
      const timer = setTimeout(() => setCurrentStep(s => s + 1), 700);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(onComplete, 500);
      return () => clearTimeout(timer);
    }
  }, [currentStep, onComplete]);

  return (
    <div style={{ fontFamily: "monospace", fontSize: 13 }}>
      {hackingSteps.slice(0, currentStep).map((step, i) => (
        <div
          key={i}
          style={{
            color: i === hackingSteps.length - 1 ? "#00ff41" : "#00ff4180",
            marginBottom: 6,
            animation: "glitchIn 0.3s ease forwards",
          }}
        >
          <span style={{ color: "#00ff4150" }}>[{String(i).padStart(2, "0")}] </span>
          {step}
        </div>
      ))}
      {currentStep < hackingSteps.length && (
        <span className="blink" style={{ color: "#00ff41" }}>█</span>
      )}
    </div>
  );
}

function DataLine({ item, index, show }) {
  const [revealed, setRevealed] = useState(false);
  const [scrambled, setScrambled] = useState(true);
  const [displayValue, setDisplayValue] = useState("");
  const scrambleChars = "!@#$%^&*()_+=[]{}|;:',.<>?/~`";

  useEffect(() => {
    if (!show) return;
    const revealTimer = setTimeout(() => {
      setRevealed(true);
      // Scramble effect
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayValue(
          item.value.split("").map((char, i) => {
            if (i < iteration) return char;
            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          }).join("")
        );
        iteration += 1;
        if (iteration > item.value.length) {
          clearInterval(interval);
          setScrambled(false);
        }
      }, 25);
      return () => clearInterval(interval);
    }, index * 250);
    return () => clearTimeout(revealTimer);
  }, [show, index, item.value]);

  if (!revealed) return <div style={{ height: 38 }} />;

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "8px 0",
      borderBottom: "1px solid #00ff4110",
      fontFamily: "monospace",
      animation: "slideRight 0.3s ease forwards",
    }}>
      <span style={{
        color: "#00ff4160",
        fontSize: 10,
        width: 70,
        flexShrink: 0,
        letterSpacing: "0.1em",
      }}>
        {item.key}
      </span>
      <span style={{ color: "#00ff4130", marginRight: 4 }}>→</span>
      {item.href ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: item.color,
            textDecoration: "none",
            fontSize: 14,
            textShadow: scrambled ? "none" : `0 0 8px ${item.color}60`,
            transition: "text-shadow 0.3s",
          }}
          onMouseEnter={e => e.target.style.textShadow = `0 0 16px ${item.color}`}
          onMouseLeave={e => e.target.style.textShadow = `0 0 8px ${item.color}60`}
        >
          {displayValue || item.value}
        </a>
      ) : (
        <span style={{
          color: item.color,
          fontSize: 14,
          textShadow: scrambled ? "none" : `0 0 8px ${item.color}60`,
        }}>
          {displayValue || item.value}
        </span>
      )}
    </div>
  );
}

export const DevContactFlash = ({ open, onClose }) => {
  const [visible, setVisible] = useState(false);
  const [hackingDone, setHackingDone] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(true);
      setHackingDone(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setHackingDone(false);
      const t = setTimeout(() => setVisible(false), 400);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!visible) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: open ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0)",
        transition: "all 0.4s ease",
        opacity: open ? 1 : 0,
      }}
    >
      {/* Matrix rain background */}
      {open && <MatrixRain width={window.innerWidth} height={window.innerHeight} />}

      {/* Scan lines */}
      <div style={{
        position: "absolute", inset: 0,
        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.03) 2px, rgba(0,255,65,0.03) 4px)",
        pointerEvents: "none",
      }} />

      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "rgba(0,10,0,0.92)",
          border: "1px solid #00ff4130",
          borderRadius: 4,
          width: "min(92vw, 580px)",
          overflow: "hidden",
          transform: open ? "scale(1)" : "scale(0.95)",
          transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
          boxShadow: "0 0 60px rgba(0,255,65,0.1), inset 0 0 60px rgba(0,255,65,0.02)",
          position: "relative",
        }}
      >
        {/* Top bar */}
        <div style={{
          padding: "8px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #00ff4120",
          background: "rgba(0,255,65,0.03)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "#00ff41", fontSize: 11, fontFamily: "monospace", letterSpacing: 2 }}>
              ⟩ SECURE_TERMINAL
            </span>
            <span className="blink" style={{ color: "#00ff41", fontSize: 12 }}>●</span>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "transparent", border: "1px solid #00ff4130",
              color: "#00ff4160", cursor: "pointer", padding: "2px 8px",
              fontFamily: "monospace", fontSize: 11, borderRadius: 2,
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "#00ff41"; e.currentTarget.style.borderColor = "#00ff41"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "#00ff4160"; e.currentTarget.style.borderColor = "#00ff4130"; }}
          >
            [ESC]
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "20px 24px", minHeight: 340 }}>
          {/* Hacking sequence */}
          {open && !hackingDone && (
            <HackingSequence onComplete={() => setHackingDone(true)} />
          )}

          {/* Contact data */}
          {hackingDone && (
            <div>
              <div style={{
                color: "#00ff4140", fontFamily: "monospace",
                fontSize: 10, letterSpacing: "0.2em",
                marginBottom: 16, paddingBottom: 8,
                borderBottom: "1px solid #00ff4115",
              }}>
                ─── DECRYPTED CONTACT DATA ─────────────────
              </div>

              {contactData.map((item, i) => (
                <DataLine key={i} item={item} index={i} show={hackingDone} />
              ))}

              <div style={{
                marginTop: 20, padding: "10px 14px",
                background: "#00ff4108",
                border: "1px solid #00ff4115",
                borderRadius: 3,
                fontFamily: "monospace",
                fontSize: 11,
                color: "#00ff4150",
                textAlign: "center",
              }}>
                ⚠ CONNECTION ENCRYPTED · CLICK LINKS TO CONNECT · ESC TO DISCONNECT
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes glitchIn {
          0% { opacity: 0; transform: translateX(-20px) skewX(-5deg); }
          50% { opacity: 0.8; transform: translateX(3px) skewX(1deg); }
          100% { opacity: 1; transform: translateX(0) skewX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-15px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .blink {
          animation: blinkAnim 1s ease infinite;
        }
        @keyframes blinkAnim {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};
