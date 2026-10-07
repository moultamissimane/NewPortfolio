export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  project: string;
  tools: string[];
  achievements: string[];
}

export const experience: Experience[] = [
  {
    id: 'visionyze',
    role: 'Full Stack Developer',
    company: 'Visionyze',
    period: 'May 2025 – Sep 2026',
    project: 'Full-stack development of business web applications',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', '.NET 8', 'ASP.NET Core', 'EF Core', 'Java 17', 'Spring Boot 3', 'PostgreSQL', 'Docker', 'AWS', 'GitHub Actions'],
    achievements: [
      'Built a full-stack web application from the ground up, using Next.js and TypeScript for the front end and .NET 8 / ASP.NET Core for the back end.',
      'Developed responsive interfaces with Tailwind CSS and integrated REST APIs.',
      'Designed ASP.NET Core APIs and business logic, including authentication and data access with Entity Framework Core and PostgreSQL.',
      'Developed a second business application with Java 17, Spring Boot 3, Spring Security, JPA/Hibernate and PostgreSQL.',
      'Designed database schemas, managed Flyway migrations, and implemented access controls and authentication.',
      'Containerised applications with Docker and contributed to GitHub Actions CI/CD workflows and AWS deployments.',
      'Worked with product teams to turn functional requirements into maintainable, scalable features.',
    ],
  },
  {
    id: 'dealkhir',
    role: 'Full Stack JavaScript Developer',
    company: 'Dealkhir',
    period: 'Mar 2023 – Apr 2025',
    project: 'Dealkhir & Jaitesté: web development, mobile app, API and design',
    tools: ['React.js', 'Next.js', 'React Native', 'TypeScript', 'Node.js', '.NET', 'GraphQL', 'Redux', 'Tailwind CSS', 'WordPress', 'Shopify', 'Magento', 'Docker', 'AWS', 'CI/CD', 'Figma'],
    achievements: [
      'Delivered the Dealkhir platform from the Next.js front end to Node.js / GraphQL APIs, deploying to production with Docker, CI/CD and AWS.',
      'Developed and published the Jaitesté mobile application with React Native and .NET on Google Play and the Apple App Store.',
      'Built donation plugins and extensions for WordPress, Shopify and Magento.',
      'Delivered three WordPress projects for clients, from integration through production deployment.',
      'Used Docker, Git and CI/CD to automate development workflows and deployments; collaborated with business teams on UI/UX in Figma.',
    ],
  },
  {
    id: 'x-fantome',
    role: 'Full Stack JavaScript Developer',
    company: 'X Fantôme',
    period: 'Jul 2022 – Sep 2022',
    project: 'LinkedSync: LinkedIn profile management platform',
    tools: ['React.js', 'Node.js', 'Express', 'MongoDB', 'LinkedIn API'],
    achievements: [
      'Designed and built a cross-platform LinkedIn profile management application using the MERN stack and Electron.',
      'Improved API query efficiency, cutting user-data processing time by 30%.',
      'Created a reusable Shadcn UI component library, reducing duplicated development effort by 35%.',
    ],
  },
];
