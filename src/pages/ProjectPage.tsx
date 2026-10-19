import { projects } from "../data/resume";
import { Link } from "../router";

export function ProjectPage({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <article className="page">
        <h1 className="page-title">Project not found</h1>
        <p className="page-lede">That project isn't in the list.</p>
        <Link href="/projects" className="text-link">
          Back to projects
        </Link>
      </article>
    );
  }

  return (
    <article className="page">
      <Link href="/projects" className="back-link">
        ← Projects
      </Link>
      <p className="page-kicker">{project.status}</p>
      <h1 className="page-title">{project.name}</h1>
      <div className="stack-row">
        {project.stack.map((tech) => (
          <span className="stack-tag" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <section className="page-block">
        <h2 className="section-heading">What it is</h2>
        <p className="prose-line">{project.description}</p>
      </section>

      <section className="page-block">
        <h2 className="section-heading">Why I built it</h2>
        <p className="prose-line">{project.inspiration}</p>
      </section>

      {project.link && (
        <p className="page-block">
          <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
            View source
          </a>
        </p>
      )}
    </article>
  );
}
