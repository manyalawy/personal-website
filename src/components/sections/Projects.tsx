import { portfolio } from "@/data/portfolio";

export default function Projects() {
  const { projects } = portfolio;

  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-4 md:px-8 lg:px-16 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-12 md:mb-16 text-center">
          Projects
        </h2>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-surface-secondary rounded-xl overflow-hidden p-5 md:p-6 flex flex-col"
            >
              {/* Project logo/icon */}
              {project.logo ? (
                <div className="w-12 h-12 mb-4 rounded-lg overflow-hidden bg-surface flex items-center justify-center">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <div className="w-6 h-6 rounded bg-accent/30" />
                </div>
              )}

              {/* Project title */}
              <h3 className="font-bold text-lg text-text-primary mb-3">
                {project.title}
              </h3>

              {/* Project description */}
              <p className="text-sm text-text-secondary mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-flex items-center bg-surface border border-border rounded-full px-2 py-1 text-xs text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links row */}
              <div className="flex gap-4 mt-auto">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm font-medium hover:opacity-80 transition-opacity"
                  >
                    Live Demo
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm font-medium hover:opacity-80 transition-opacity"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
