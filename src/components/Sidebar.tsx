import { profile } from "../data/resume";
import { navItems } from "./navItems";

export function Sidebar({ active }: { active: string }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-name">{profile.name}</div>
        <div className="sidebar-role">{profile.role}</div>

        <nav className="sidebar-nav">
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

      <div className="sidebar-foot">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </aside>
  );
}
