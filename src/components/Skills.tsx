import { skills } from "../data/resume";

export function Skills() {
  return (
    <section id="skills">
      <h2 className="section-heading">Skills</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-group" key={group.category}>
            <div className="skill-group-name">{group.category}</div>
            <div className="skill-items">
              {group.items.map((item) => (
                <span className="stack-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
