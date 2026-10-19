import { hobbies } from "../data/resume";

export type NavItem = {
  id: string;
  label: string;
  href: string;
  page?: boolean;
};

export const navItems: NavItem[] = [
  { id: "about", label: "About", href: "/about", page: true },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "projects", label: "Projects", href: "/projects", page: true },
  { id: "skills", label: "Skills", href: "/#skills" },
  ...(hobbies.length > 0
    ? [{ id: "hobbies", label: "Hobbies", href: "/#hobbies" }]
    : []),
  { id: "education", label: "Education", href: "/#education" },
];

export const homeSectionIds = navItems.map((item) => item.id);
