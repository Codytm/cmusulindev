
export const profile = {
  name: "Cody Musulin",
  role: "Software Developer",
  location: "Pinckney, MI",
  tagline: "Aspiring developer attempting to bridge healthcare and enterprise IT with automation and data-driven systems.",
  bio: "I hold a B.S. in Computer Science and a B.S. in Biomedical Sciences, which has given me a unique combination of software engineering knowledge, healthcare domain experience, and enterprise IT experience. I'm drawn to work where I can build scalable software, automate workflows, and design data-driven solutions to real operational problems. Most recently that's meant PowerShell automation and cloud administration in an enterprise IT role, and building a healthcare analytics platform from the database up in my own time.",
  email: "",
  github: "https://github.com/Codytm/",
  linkedin: "https://www.linkedin.com/in/cody-musulin-705760219/",
  resumePdf: "/resume.pdf",
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  highlights: string[];
  stack?: string[];
};

export const experience: Experience[] = [
  {
    company: "Soil and Materials Engineers",
    role: "Information Technology Intern",
    start: "May 2026",
    end: "Present",
    location: "Plymouth, MI",
    highlights: [
      "Developing PowerShell scripts to automate large-scale file migration tasks, reducing manual effort and improving consistency.",
      "Building and enhancing automation scripts to streamline Windows laptop provisioning and deployment through Microsoft Intune.",
      "Contributing to data collection and manipulation through Python using Pandas.",
      "Supporting enterprise IT operations using Microsoft technologies including Azure, Intune, Entra ID, and Microsoft 365.",
      "Collaborating on Azure administration tasks, gaining experience with cloud identity, endpoint management, and enterprise infrastructure.",
      "Troubleshooting hardware, software, and account issues while supporting end users through Zendesk and ScreenConnect.",
    ],
    stack: ["PowerShell", "Python", "Azure", "Intune", "Entra ID"],
  },
  {
    company: "Versiti Blood Center of Michigan",
    role: "Blood Distribution Specialist",
    start: "Jul 2025",
    end: "May 2026",
    location: "Farmington Hills, MI",
    highlights: [
      "Managed the safe, timely distribution of blood products to hospitals, clinics, and emergency departments under FDA, AABB, and organizational regulations.",
      "Verified, selected, and prepared blood components based on physician orders and patient compatibility requirements.",
      "Monitored inventory levels and stock rotation to reduce waste and maintain product viability.",
      "Coordinated urgent and routine deliveries, prioritizing critical patient needs and emergency requests.",
      "Used laboratory information systems (WellSky) and tracking software (EliteExtra) to maintain accurate records of handling, storage, and distribution.",
    ],
  },
  {
    company: "Strata Oncology",
    role: "Clinical Laboratory Accessioner",
    start: "Mar 2022",
    end: "Dec 2023",
    location: "Ann Arbor, MI",
    highlights: [
      "Ensured quality of incoming samples and verified medical record matches for each patient sample.",
      "Managed daily handling of sensitive patient information with strict adherence to confidentiality protocols, contributing to a 0% data breach incident rate.",
      "Conducted precise microdissection of patient samples and maintained laboratory equipment as part of core lab operations.",
      "Led company-wide archiving of patient samples, retrieving and storing thousands of samples spanning 2019–present as requested.",
    ],
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
    name: "healthcare-analytics-platform (Current)",
    description:
      "A normalized PostgreSQL database modeling patients, clinical visits, ICD-10 diagnoses, and demographic health data, paired with a Python ETL pipeline (Pandas, SQLAlchemy, psycopg2) that extracts, transforms, and bulk-loads CDC public mortality datasets with idempotent upsert logic. Built with a modular backend architecture to support REST API development and future deployment on Azure.",
    stack: ["Python", "PostgreSQL", "Pandas", "SQLAlchemy", "FastAPI", "Azure"],
  },
  {
    name: "finite-state-machine-workbench",
    description:
      "Enhanced an open-source finite state machine editor by redesigning the dashboard and simplifying the UI to improve usability. Implemented and refined automata workflows including Regex → NFA/DFA conversion, DFA minimization, and DFA → Regex export, while preserving the project's GPL-3.0 licensing and attribution requirements.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Konva"],
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { category: "Programming", items: ["Python", "Java", "SQL", "PowerShell", "TypeScript", "PHP"] },
  { category: "Frameworks & Development", items: ["React", "FastAPI", "Spring Boot", "REST APIs"] },
  { category: "Data Engineering", items: ["PostgreSQL", "ETL", "Pandas", "SQLAlchemy"] },
  { category: "Cloud & Infrastructure", items: ["Azure", "AWS", "Git", "Linux"] },
  { category: "Enterprise IT", items: ["Intune", "Entra ID", "Microsoft 365", "PowerShell Automation"] },
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
    school: "Eastern Michigan University",
    degree: "B.S. in Computer Science",
    start: "2023",
    end: "2026",
    location: "Ypsilanti, MI",
  },
  {
    school: "Central Michigan University",
    degree: "B.S. in Biomedical Sciences",
    start: "2016",
    end: "2020",
    location: "Mount Pleasant, MI",
  },
];

export type Hobby = {
  name: string;
  blurb: string;
};
export const hobbies: Hobby[] = [];