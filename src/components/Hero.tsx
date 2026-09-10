import { useEffect, useState } from "react";
import { profile } from "../data/resume";

export function Hero() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setTyped(profile.tagline);
      setDone(true);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(profile.tagline.slice(0, i));
      if (i >= profile.tagline.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 18);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="hero" aria-label="Introduction">
      <div className="hero-prompt">$ whoami</div>
      <h1>{profile.name}</h1>
      <p className="hero-tagline">
        {typed}
        {!done && <span className="cursor" aria-hidden="true" />}
      </p>
      <div className="hero-meta">
        {profile.role} · {profile.location}
      </div>
    </section>
  );
}
