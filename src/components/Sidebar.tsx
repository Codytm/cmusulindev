import { profile } from "../data/resume";
import { useActiveSection } from "../hooks/useActiveSection";
import { Link, useRouter } from "../router";
import { homeSectionIds, navItems } from "./navItems";

export function Sidebar() {
  const { path } = useRouter();
  const section = useActiveSection(homeSectionIds, path);
  const active =
    path === "/about"
      ? "about"
      : path.startsWith("/projects")
        ? "projects"
        : path === "/"
          ? section
          : "";

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <Link href="/" className="sidebar-name">
          {profile.name}
        </Link>
        <div className="sidebar-role">{profile.role}</div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={active === item.id ? "active" : undefined}
            >
              {item.label}
              {item.page && (
                <span className="nav-more" aria-hidden="true">
                  →
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>

      <div className="sidebar-foot">
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
