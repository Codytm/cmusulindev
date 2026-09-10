import { profile } from "../data/resume";
import { navItems } from "./navItems";

export function TopNav({ active }: { active: string }) {
  return (
    <div className="topnav">
      <span className="topnav-name">{profile.name}</span>
      <nav className="topnav-links">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={active === item.id ? "active" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
