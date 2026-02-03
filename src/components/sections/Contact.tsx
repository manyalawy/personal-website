"use client";

import { portfolio } from "@/data/portfolio";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export default function Contact() {
  const { contact } = portfolio;

  return (
    <section
      id="contact"
      className="bg-surface py-24 md:py-32 px-4 md:px-8 lg:px-16 scroll-mt-16"
    >
      <ScrollReveal className="max-w-4xl mx-auto">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 md:mb-8 text-center">
          Get in Touch
        </h2>

        {/* CTA paragraph */}
        <p className="text-base md:text-lg text-text-secondary text-center mb-10 md:mb-12 max-w-2xl mx-auto">
          I'm always open to new opportunities and interesting projects. Let's connect!
        </p>

        {/* Contact links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {/* Email link */}
          <a
            href={`mailto:${contact.email}`}
            className="group flex flex-col items-center justify-center bg-surface-secondary rounded-lg p-4 md:p-6 min-w-[160px] border-2 border-transparent transition-all duration-300 hover:border-accent hover:scale-105 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="text-3xl md:text-4xl mb-2 transition-transform duration-300 group-hover:scale-110">✉️</div>
            <span className="text-accent font-medium text-sm md:text-base">
              Email
            </span>
            <span className="text-text-secondary text-xs mt-1">
              {contact.email}
            </span>
          </a>

          {/* GitHub link */}
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center bg-surface-secondary rounded-lg p-4 md:p-6 min-w-[160px] border-2 border-transparent transition-all duration-300 hover:border-accent hover:scale-105 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="text-3xl md:text-4xl mb-2 transition-transform duration-300 group-hover:scale-110">💻</div>
            <span className="text-accent font-medium text-sm md:text-base">
              GitHub
            </span>
            <span className="text-text-secondary text-xs mt-1">
              View Profile
            </span>
          </a>

          {/* LinkedIn link */}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center bg-surface-secondary rounded-lg p-4 md:p-6 min-w-[160px] border-2 border-transparent transition-all duration-300 hover:border-accent hover:scale-105 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="text-3xl md:text-4xl mb-2 transition-transform duration-300 group-hover:scale-110">🔗</div>
            <span className="text-accent font-medium text-sm md:text-base">
              LinkedIn
            </span>
            <span className="text-text-secondary text-xs mt-1">
              Connect
            </span>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
