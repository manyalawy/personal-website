import { portfolio } from "@/data/portfolio";

export default function Skills() {
  // Group skills by category
  const categories = ["Frontend", "Backend", "Tools", "Other"] as const;
  const skillsByCategory = categories.reduce((acc, category) => {
    const categorySkills = portfolio.skills.filter(
      (skill) => skill.category === category
    );
    if (categorySkills.length > 0) {
      acc[category] = categorySkills;
    }
    return acc;
  }, {} as Record<string, typeof portfolio.skills>);

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-surface"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-16">
          Skills
        </h2>

        <div className="space-y-12">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-text-secondary mb-6">
                {category}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-3 md:p-4 bg-surface-secondary border border-border rounded-lg hover:border-accent transition-colors"
                  >
                    {/* Icon placeholder - uses first 2 letters of skill name */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                      <span className="text-accent font-bold text-sm md:text-base">
                        {skill.name.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-sm text-text-primary text-center font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
