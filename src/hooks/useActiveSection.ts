import { useEffect, useState } from "react";

export function useActiveSection(ids: string[], watch: string) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const update = () => {
      const present = ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

      if (present.length === 0) return;

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      if (atBottom) {
        setActive(present[present.length - 1].id);
        return;
      }

      const line = window.innerHeight * 0.35;
      let current = present[0].id;
      for (const el of present) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids, watch]);

  return active;
}
