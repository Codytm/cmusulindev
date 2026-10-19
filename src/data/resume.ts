
export const profile = {
  name: "Cody Musulin",
  role: "Software Developer",
  location: "Pinckney, MI",
  tagline: "I build automation and data tools, with a background in computer science, biomedical science, and healthcare operations.",
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
      "Collaborating with systems administrators on on-premises and off-premises server infrastructure tasks, including server rack decommissioning, equipment relocation, and network cabling.",
      "Supporting data processing and manipulation using Python and Pandas to assist with internal data workflows.",
      "Supporting enterprise IT operations using Microsoft technologies including Azure, Intune, Entra ID, and Microsoft 365.",
      "Contributing to enterprise cloud administration and infrastructure initiatives using Microsoft Azure, with expanding responsibilities in cloud resource management and configuration.",
      "Troubleshoot hardware, software, endpoint, and account issues using Zendesk and ScreenConnect in an enterprise IT environment.",
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

export const about = {
  paragraphs: [
    "I hold a B.S. in Computer Science from Eastern Michigan University and a B.S. in Biomedical Sciences from Central Michigan University. That mix is why I look for work that sits between software and operations, especially anywhere health data has to be handled carefully.",
    "I'm drawn to building software that removes manual work: automation, data pipelines, and tools that make an operational process easier to run the same way every time. The problems I like are usually the unglamorous ones — moving files correctly, provisioning a laptop consistently, or loading a dataset so it can be queried again tomorrow.",
    "Most recently that's meant PowerShell automation and cloud administration in an enterprise IT role, and building a healthcare analytics platform from the database up in my own time.",
  ],
};

export type Project = {
  slug: string;
  name: string;
  status: string;
  summary: string;
  description: string;
  inspiration: string;
  link?: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "healthcare-analytics-platform",
    name: "healthcare-analytics-platform",
    status: "In progress",
    summary:
      "A PostgreSQL database and Python ETL pipeline for public health data, structured so it can grow into a REST API on Azure.",
    description:
      "A normalized PostgreSQL database modeling patients, clinical visits, ICD-10 diagnoses, and demographic health data, paired with a Python ETL pipeline (Pandas, SQLAlchemy, psycopg2) that extracts, transforms, and bulk-loads CDC public mortality datasets with idempotent upsert logic. Built with a modular backend architecture to support REST API development and future deployment on Azure.",
    inspiration:
      "Clinical work showed me how much of healthcare depends on records that have to be right: sample identity, inventory, and where a product is going. I wanted a software project in that domain that I owned from the schema up, instead of starting at a dashboard. CDC public mortality data is open, documented, and large enough that a sloppy load shows immediately, so it was a useful first dataset. The database and ETL are what I'm building now. The backend stays modular because the next pieces are a REST API and an Azure deployment, and I don't want to redo the schema when those land.",
    stack: ["Python", "PostgreSQL", "Pandas", "SQLAlchemy", "FastAPI", "Azure"],
  },
  {
    slug: "finite-state-machine-workbench",
    name: "finite-state-machine-workbench",
    status: "Completed",
    summary:
      "An open-source automata editor extended with clearer diagrams and Regex, NFA, and DFA conversion workflows.",
    description:
      "Enhanced an open-source finite state machine editor by redesigning the dashboard and simplifying the UI to improve usability. Implemented and refined automata workflows including Regex → NFA/DFA conversion, DFA minimization, and DFA → Regex export, while preserving the project's GPL-3.0 licensing and attribution requirements.",
    inspiration:
      "Automata clicked for me once I could see the machine, not just the definition. I found an open-source editor that already drew state diagrams and extended it instead of rebuilding that part. The work I cared about was the workflow: turning a regular expression into an NFA and a DFA, minimizing the DFA, and exporting a DFA back to a regex, on a dashboard that stayed out of the way. The project is GPL-3.0, so the license and original attribution stay intact.",
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