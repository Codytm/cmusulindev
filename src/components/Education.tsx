import { education } from "../data/resume";

export function Education() {
  return (
    <section id="education">
      <h2 className="section-heading">Education</h2>
      {education.map((entry) => (
        <div className="education-item" key={entry.school}>
          <div>
            <div className="education-school">{entry.school}</div>
            <div className="education-degree">{entry.degree}</div>
          </div>
          <div className="education-dates">
            {entry.start} — {entry.end}
          </div>
        </div>
      ))}
    </section>
  );
}
