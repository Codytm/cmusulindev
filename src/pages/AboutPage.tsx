import { about, experience, profile, projects } from "../data/resume";
import { Link } from "../router";

export function AboutPage() {
  const currentRole = experience.find((job) => job.end === "Present");
  const currentProject = projects.find((project) => project.status === "In progress");

  return (
    <article className="page">
      <h1 className="page-title">About me</h1>
      <p className="page-lede">
        {profile.role} · {profile.location}
      </p>

      <div className="prose">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <section className="page-block">
        <h2 className="section-heading">Right now</h2>
        {currentRole && (
          <p className="prose-line">
            {`${currentRole.role} at ${currentRole.company} in ${currentRole.location}, ${currentRole.start} — ${currentRole.end}.`}
          </p>
        )}
        {currentProject && (
          <p className="prose-line">
            On my own time I'm building{" "}
            <Link href={`/projects/${currentProject.slug}`} className="text-link">
              {currentProject.name}
            </Link>
            .
          </p>
        )}
        <p className="prose-line">
          <Link href="/#experience" className="text-link">
            See experience
          </Link>
        </p>
      </section>
    </article>
  );
}
