import { ThemeToggle } from "@/components/theme/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Header with theme toggle */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-surface/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <h1 className="font-bold text-xl text-text-primary">Portfolio</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
              Portfolio
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary">
              Welcome to my personal portfolio
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center border-t border-border">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              About
            </h2>
            <p className="text-text-secondary">Content coming soon</p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center justify-center border-t border-border">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Skills
            </h2>
            <p className="text-text-secondary">Content coming soon</p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen flex items-center justify-center border-t border-border">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Experience
            </h2>
            <p className="text-text-secondary">Content coming soon</p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center border-t border-border">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Projects
            </h2>
            <p className="text-text-secondary">Content coming soon</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center border-t border-border">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Contact
            </h2>
            <p className="text-text-secondary">Content coming soon</p>
          </div>
        </section>
      </main>
    </div>
  );
}
