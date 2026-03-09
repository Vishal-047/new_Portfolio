import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
];

export const Navbar = ({ onContactClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 py-5 z-50"
      style={{
        background: "linear-gradient(to bottom, #0d1320 40%, transparent 100%)",
      }}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl tracking-tight hover:text-primary"
        >
          Vishal Singh<span className="text-primary"></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={onContactClick}
            className="px-4 py-2 text-sm font-mono font-semibold rounded-md cursor-pointer transition-all duration-300"
            style={{
              background: "rgba(0,255,65,0.08)",
              border: "1px solid #00ff4140",
              color: "#00ff41",
              textShadow: "0 0 8px rgba(0,255,65,0.3)",
              letterSpacing: "0.05em",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,255,65,0.15)'; e.currentTarget.style.boxShadow = '0 0 16px rgba(0,255,65,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,255,65,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            ⟩ Contact Details
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => { setIsMobileMenuOpen(false); onContactClick(); }}
              className="w-full px-4 py-3 text-sm font-mono font-semibold rounded-md cursor-pointer transition-all duration-300"
              style={{
                background: "rgba(0,255,65,0.08)",
                border: "1px solid #00ff4140",
                color: "#00ff41",
                textShadow: "0 0 8px rgba(0,255,65,0.3)",
                letterSpacing: "0.05em",
              }}
            >
              ⟩ Contact Details
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
