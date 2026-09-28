import {hobbies} from "../data/resume";

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  ...(hobbies.length > 0 ? [{ id: "hobbies", label: "Hobbies" }] : []),
  { id: "education", label: "Education" },
//  { id: "contact", label: "Contact" },
];
