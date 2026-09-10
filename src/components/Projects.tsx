import { projects } from "../data/resume";

export function Projects() {
  return (
    <section id="projects">
      <h2 className="section-heading">Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project-item" key={project.name}>
            <div className="project-item-inner">
              <div className="project-name-row">
                <span className="project-name">{project.name}</span>
                {project.link && (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View source
                  </a>
                )}
              </div>
              <p className="project-description">{project.description}</p>
              <div className="stack-row">
                {project.stack.map((tech) => (
                  <span className="stack-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
