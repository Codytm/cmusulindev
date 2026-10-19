import { profile } from "../data/resume";
import { Link } from "../router";

export function About() {
  return (
    <section id="about" className="about">
      <div className="section-heading-row">
        <h2 className="section-heading">About</h2>
        <Link href="/about" className="text-link">
          More about me →
        </Link>
      </div>
      <p>{profile.bio}</p>
    </section>
  );
}
