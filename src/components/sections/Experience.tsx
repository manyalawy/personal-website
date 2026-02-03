"use client";

import { portfolio } from "@/data/portfolio";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export default function Experience() {
  // Format date for display (e.g., "2022-03" -> "Mar 2022")
  const formatDate = (dateString: string): string => {
    if (dateString === "Present") return "Present";

    const [year, month] = dateString.split("-");
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const monthIndex = parseInt(month, 10) - 1;
    return `${monthNames[monthIndex]} ${year}`;
  };

  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-surface-secondary"
    >
      <ScrollReveal className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-16">
          Experience
        </h2>

        <div className="space-y-12">
          {portfolio.workExperience.map((job, index) => (
            <div key={index} className="relative">
              {/* Timeline connector - visible on desktop */}
              {index !== portfolio.workExperience.length - 1 && (
                <div className="hidden md:block absolute left-32 top-16 bottom-0 w-0.5 bg-accent/30" />
              )}

              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                {/* Date column */}
                <div className="md:w-32 flex-shrink-0">
                  <div className="text-sm text-text-secondary font-medium">
                    {formatDate(job.startDate)} - {formatDate(job.endDate)}
                  </div>
                </div>

                {/* Timeline dot - visible on desktop */}
                <div className="hidden md:flex items-start pt-1">
                  <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-surface-secondary" />
                </div>

                {/* Experience card */}
                <div className="flex-1 bg-surface rounded-lg shadow-md p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-bold text-text-primary mb-1">
                    {job.title}
                  </h3>
                  <p className="text-accent font-medium mb-4">
                    {job.company}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-text-secondary">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="leading-relaxed">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
