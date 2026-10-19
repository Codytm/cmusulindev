import { projects } from "../data/resume";
import { Link } from "../router";

export function ProjectsPage() {
  return (
    <article className="page">
      <h1 className="page-title">Projects</h1>
      <p className="page-lede">
        Longer notes on what each project is, and why I started it. Summaries
        also show up on the home page.
      </p>

      <div className="project-list">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="project-card"
          >
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
          </Link>
        ))}
      </div>
    </article>
  );
}
