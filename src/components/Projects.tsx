import { projects } from "../data/resume";
import { Link } from "../router";

export function Projects() {
  return (
    <section id="projects">
      <div className="section-heading-row">
        <h2 className="section-heading">Projects</h2>
        <Link href="/projects" className="text-link">
          All projects →
        </Link>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="project-item"
          >
            <div className="project-item-inner">
              <div className="project-name-row">
                <span className="project-name">{project.name}</span>
                <span className="project-status">{project.status}</span>
              </div>
              <p className="project-description">{project.summary}</p>
              <div className="stack-row">
                {project.stack.map((tech) => (
                  <span className="stack-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
