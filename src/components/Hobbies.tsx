import { hobbies } from "../data/resume";

export function Hobbies() {
  return (
    <section className="hobbies" id="hobbies">
      <h2 className="section-heading">Hobbies</h2>
      <div className="hobby-list">
        {hobbies.map((hobby) => (
          <div className="hobby-item" key={hobby.name}>
            <div className="hobby-name">{hobby.name}</div>
            <p className="hobby-blurb">{hobby.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
