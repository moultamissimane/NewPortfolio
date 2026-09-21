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
    role: 'Tech Lead (React.js / Node.js)',
    company: 'Visionyze',
    period: 'May 2025 – Jul 2026',
    project: 'Confidential: strategic architecture, scalability and technical leadership',
    tools: ['Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'AWS', 'GitHub Actions', 'Shadcn/UI'],
    achievements: [
      'Led the technical strategy and the architectural migration to Next.js (SSR/ISR), improving SEO and cutting load time by 35%.',
      'Architected and supervised a high-performance Node.js backend on AWS, supporting a critical load of more than 100,000 concurrent active users.',
      'Managed a team of developers, defined Clean Code standards and set up rigorous code reviews, ensuring a 99.2% delivery stability rate.',
      'Made technology trade-offs and worked closely with Product Owners to turn business needs into scalable, maintainable technical solutions.',
    ],
  },
  {
    id: 'dealkhir',
    role: 'Full Stack JavaScript Developer',
    company: 'Dealkhir',
    period: 'Mar 2023 – Apr 2025',
    project: 'Dealkhir & Jaitesté: web development, mobile app, API and design',
    tools: ['React.js', 'React Native', 'TypeScript', 'Redux', 'Tailwind CSS', 'WordPress', 'REST API', 'Figma'],
    achievements: [
      'Built the Jaitesté platform end to end: mobile app, website, API architecture and UI/UX design in Figma.',
      'Led the development of robust TypeScript applications, reducing production bugs by 25%.',
      'Coached new team members on the codebase and development workflows (Git, code review).',
      'Consistently met deadlines and quality standards, contributing to a 40% increase in customer satisfaction.',
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
      'Designed and built a LinkedIn profile management platform on the MERN stack.',
      'Improved API query efficiency, cutting user-data processing time by 30%.',
      'Created a reusable component library with Shadcn UI, reducing redundant development effort by 25%.',
    ],
  },
];
