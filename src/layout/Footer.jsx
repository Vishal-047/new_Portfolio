import { Github, Linkedin, Mail, Heart, Code2, Trophy } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/vishal-047", label: "GitHub"},
  { icon: Linkedin, href: "https://www.linkedin.com/in/vishal0407", label: "LinkedIn"},
  { icon: Code2, href: "https://leetcode.com/u/Vishal407/", label: "LeetCode"},
  { icon: Trophy, href: "https://www.geeksforgeeks.org/profile/vishal407", label: "GFG"},
  { icon: Mail, href: "mailto:vishalrw007@gmail.com", label: "Mail"},
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl tracking-tight">
              VS<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Vishal Singh. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
