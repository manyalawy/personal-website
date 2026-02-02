export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <main>
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 scroll-mt-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Portfolio
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-text-secondary">
              Welcome to my personal portfolio
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-[70vh] flex items-center justify-center px-4 md:px-8 lg:px-16 bg-surface-secondary scroll-mt-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              About
            </h2>
            <p className="text-text-secondary text-sm md:text-base lg:text-lg">Content coming soon</p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-[70vh] flex items-center justify-center px-4 md:px-8 lg:px-16 scroll-mt-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Skills
            </h2>
            <p className="text-text-secondary text-sm md:text-base lg:text-lg">Content coming soon</p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-[70vh] flex items-center justify-center px-4 md:px-8 lg:px-16 bg-surface-secondary scroll-mt-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Experience
            </h2>
            <p className="text-text-secondary text-sm md:text-base lg:text-lg">Content coming soon</p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-[70vh] flex items-center justify-center px-4 md:px-8 lg:px-16 scroll-mt-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Projects
            </h2>
            <p className="text-text-secondary text-sm md:text-base lg:text-lg">Content coming soon</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-[70vh] flex items-center justify-center px-4 md:px-8 lg:px-16 bg-surface-secondary scroll-mt-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Contact
            </h2>
            <p className="text-text-secondary text-sm md:text-base lg:text-lg">Content coming soon</p>
          </div>
        </section>
      </main>
    </div>
  );
}
