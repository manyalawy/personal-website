import { portfolio } from "@/data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 md:py-32 bg-surface"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-16">
          Education
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {portfolio.education.map((edu, index) => (
            <div
              key={index}
              className="bg-surface-secondary rounded-lg p-6 md:p-8 border border-border hover:border-accent transition-colors"
            >
              <h3 className="text-lg md:text-xl font-bold text-text-primary mb-2">
                {edu.degree}
              </h3>
              <p className="text-text-secondary font-medium mb-1">
                {edu.institution}
              </p>
              <p className="text-sm text-text-secondary">
                {edu.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
