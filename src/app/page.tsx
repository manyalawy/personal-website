import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <main>
        {/* Hero Section - full viewport, bg-surface */}
        <Hero />

        {/* About Section - bg-surface-secondary */}
        <About />

        {/* Skills Section - bg-surface */}
        <Skills />

        {/* Experience Section - bg-surface-secondary */}
        <Experience />

        {/* Education Section - bg-surface */}
        <Education />

        {/* Projects Section - bg-surface-secondary */}
        <Projects />

        {/* Contact Section - bg-surface */}
        <Contact />
      </main>
    </div>
  );
}
