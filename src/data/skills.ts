export interface KeySkill {
  name: string;
  level: number;
  description: string;
}

/** Headline skills, shown as progress rings. */
export const keySkills: KeySkill[] = [
  {
    name: 'React & Next.js',
    level: 90,
    description: 'Component architecture, SSR/ISR and performance-tuned front-ends.',
  },
  {
    name: 'TypeScript',
    level: 90,
    description: 'Strictly typed code across front-end, back-end and shared models.',
  },
  {
    name: 'Node.js & Express',
    level: 92,
    description: 'REST and GraphQL APIs designed for scale and clear contracts.',
  },
  {
    name: 'Databases',
    level: 85,
    description: 'PostgreSQL and MongoDB: schema design, queries and migrations.',
  },
  {
    name: 'Testing & CI/CD',
    level: 85,
    description: 'Jest, Cypress and GitHub Actions pipelines that catch regressions early.',
  },
  {
    name: 'AWS & Docker',
    level: 75,
    description: 'Containerised services and cloud-native deployments.',
  },
];

/** Supporting stack, shown as chips. */
export const alsoUsing: string[] = [
  'HTML5 & CSS3',
  'Tailwind CSS',
  'React Native',
  'Nest.js',
  'GraphQL',
  'REST API design',
  'Git & GitHub',
  'Firebase',
  'Responsive design',
  'Agile',
];
