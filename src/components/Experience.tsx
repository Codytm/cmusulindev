import { experience } from "../data/resume";

export function Experience() {
  return (
    <section id="experience">
      <h2 className="section-heading">Experience</h2>
      <div className="timeline">
        {experience.map((job) => (
          <div className="timeline-item" key={`${job.company}-${job.start}`}>
            <div className="timeline-dates">
              {job.start} — {job.end}
            </div>
            <div className="timeline-role">
              {job.role} <span className="timeline-company">@ {job.company}</span>
            </div>
            <div className="timeline-location">{job.location}</div>

            <ul className="timeline-highlights">
              {job.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            {job.stack && job.stack.length > 0 && (
              <div className="stack-row">
                {job.stack.map((tech) => (
                  <span className="stack-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
