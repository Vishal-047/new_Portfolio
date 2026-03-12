import { useState } from "react";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Certifications } from "@/sections/Certifications";
import { Contact } from "@/sections/Contact";
import { DevContactFlash } from "@/components/DevContactFlash";
import { Footer } from "./layout/Footer";
import { GeometricMesh } from "@/components/GeometricMesh";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Global UI layers */}
      <GeometricMesh />
      <CustomCursor />
      <ScrollProgress />

      <Navbar onContactClick={() => setIsContactOpen(true)} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <DevContactFlash
        open={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;
