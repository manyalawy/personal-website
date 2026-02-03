"use client";

import { portfolio } from "@/data/portfolio";
import { IconType } from "react-icons";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiDocker,
  SiFigma,
} from "react-icons/si";

// Map skill icon names to their corresponding react-icons components
const iconMap: Record<string, IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwindcss: SiTailwindcss,
  html5: SiHtml5,
  css3: SiCss3,
  framer: SiFramer,
  nodejs: SiNodedotjs,
  express: SiExpress,
  python: SiPython,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  graphql: SiGraphql,
  git: SiGit,
  docker: SiDocker,
  figma: SiFigma,
  // vscode doesn't have a logo in react-icons/si, will use fallback
};

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
      <ScrollReveal className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-16">
          Skills
        </h2>

        <div className="space-y-12">
          {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
            <ScrollReveal key={category} delay={categoryIndex * 0.1}>
              <h3 className="text-xl font-semibold text-text-secondary mb-6">
                {category}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {skills.map((skill) => {
                  // Get the icon component from the map, or null if not found
                  const IconComponent = iconMap[skill.icon];

                  return (
                    <div
                      key={skill.name}
                      className="group flex flex-col items-center justify-center p-3 md:p-4 bg-surface-secondary border border-border rounded-lg transition-all duration-300 hover:border-accent hover:scale-105 hover:-translate-y-1"
                    >
                      {/* Display actual technology logo or fallback to 2-letter placeholder */}
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/10 flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                        {IconComponent ? (
                          <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-accent" />
                        ) : (
                          <span className="text-accent font-bold text-sm md:text-base">
                            {skill.name.substring(0, 2).toUpperCase()}
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-text-primary text-center font-medium">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
