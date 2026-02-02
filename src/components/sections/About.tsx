import { portfolio } from "@/data/portfolio";

export default function About() {
  const { about } = portfolio;

  return (
    <section
      id="about"
      className="bg-surface-secondary py-24 md:py-32 px-4 md:px-8 lg:px-16 scroll-mt-16"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-8 md:mb-12 text-center">
          About Me
        </h2>

        {/* About paragraphs */}
        <div className="space-y-4 md:space-y-6">
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base md:text-lg text-text-secondary leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
