// ---------------------------------------------------------------------------
// This is the only file you should need to touch to update your content.
// Fill in your real details — everything on the site is pulled from here.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Cody Musulin",
  role: "Software Engineer",
  location: "Pinckney, MI",
  tagline: "I build fast, reliable web apps and enjoy the last 10% nobody sees.",
  bio: "I'm a software engineer who likes turning ambiguous problems into small, well-tested pieces of software. Most of my work lives in the browser, but I'm just as comfortable a few layers down — schema design, query performance, deploy pipelines. Outside of work I'm usually rebuilding something that already worked fine, just to understand it better.",
  email: "jordan@example.com",
  github: "https://github.com/jordanavery",
  linkedin: "https://linkedin.com/in/jordanavery",
  resumePdf: "/resume.pdf", // drop a PDF in /public and point here, or leave as-is
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string; // "Present" is fine
  location: string;
  highlights: string[];
  stack?: string[];
};

export const experience: Experience[] = [
  {
    company: "Northline Systems",
    role: "Software Engineer",
    start: "2023",
    end: "Present",
    location: "Remote",
    highlights: [
      "Led migration of a legacy monolith to a service-based architecture, cutting deploy time from 40 minutes to under 5.",
      "Built an internal analytics dashboard used daily by 3 teams to track pipeline health.",
      "Mentored two junior engineers through onboarding and their first production releases.",
    ],
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
  },
  {
    company: "Fieldstone Labs",
    role: "Frontend Engineer",
    start: "2021",
    end: "2023",
    location: "Detroit, MI",
    highlights: [
      "Owned the component library adopted across 4 product teams, reducing UI inconsistencies.",
      "Improved Lighthouse performance scores from 61 to 94 on the primary customer dashboard.",
    ],
    stack: ["React", "JavaScript", "Sass"],
  },
];

export type Project = {
  name: string;
  description: string;
  link?: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "routewise",
    description:
      "A route-planning tool for delivery drivers that factors in real-time traffic and delivery windows.",
    link: "https://github.com/jordanavery/routewise",
    stack: ["TypeScript", "React", "Mapbox"],
  },
  {
    name: "pgwatch",
    description:
      "A lightweight CLI for monitoring slow Postgres queries and surfacing them in Slack.",
    link: "https://github.com/jordanavery/pgwatch",
    stack: ["Rust", "PostgreSQL"],
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Rust"] },
  { category: "Frontend", items: ["React", "Vite", "CSS", "Accessibility"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "REST APIs"] },
  { category: "Tools", items: ["Git", "Docker", "CI/CD"] },
];

export type Hobby = {
  name: string;
  blurb: string;
};

export const hobbies: Hobby[] = [
  {
    name: "Rock climbing",
    blurb: "Mostly bouldering on weekends — still working up to my first V5.",
  },
  {
    name: "Home coffee roasting",
    blurb: "Small-batch roasts on a stovetop popcorn popper. Ethiopian naturals are my favorite right now.",
  },
  {
    name: "Woodworking",
    blurb: "Built most of my own furniture over the last two years, mistakes included.",
  },
];

export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
  location: string;
};

export const education: Education[] = [
  {
    school: "University of Michigan",
    degree: "B.S. in Computer Science",
    start: "2017",
    end: "2021",
    location: "Ann Arbor, MI",
  },
];
