import { profile } from "../data/resume";
import { useActiveSection } from "../hooks/useActiveSection";
import { Link, useRouter } from "../router";
import { homeSectionIds, navItems } from "./navItems";

export function TopNav() {
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
    <div className="topnav">
      <Link href="/" className="topnav-name">
        {profile.name}
      </Link>
      <nav className="topnav-links">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={active === item.id ? "active" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
