import { portfolio } from "@/data/portfolio";

export default function Hero() {
  const { name, title, tagline } = portfolio.personalInfo;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 scroll-mt-16 overflow-hidden"
    >
      {/* Background gradient overlay for visual interest */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, var(--color-accent) 0%, transparent 70%)`,
          opacity: 0.05,
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Name - Large and prominent */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-text-primary mb-4 md:mb-6">
          {name}
        </h1>

        {/* Professional title */}
        <p className="text-xl md:text-2xl lg:text-3xl text-text-secondary mb-6 md:mb-8">
          {title}
        </p>

        {/* Tagline */}
        <p className="text-base md:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed">
          {tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary CTA - View Projects */}
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-semibold text-white bg-accent rounded-lg hover:opacity-90 transition-opacity duration-200 min-w-[200px]"
          >
            View Projects
          </a>

          {/* Secondary CTA - Get in Touch */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-semibold text-text-primary border-2 border-border rounded-lg hover:border-accent hover:text-accent transition-all duration-200 min-w-[200px]"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
