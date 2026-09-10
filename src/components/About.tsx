import { profile } from "../data/resume";

export function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-heading">About</h2>
      <p>{profile.bio}</p>
    </section>
  );
}
