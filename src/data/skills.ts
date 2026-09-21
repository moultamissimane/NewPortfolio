export interface SkillGroup {
  name: string;
  items: string[];
}

/** Grouped exactly as on the CV. */
export const skillGroups: SkillGroup[] = [
  {
    name: 'Programming languages',
    items: ['TypeScript', 'JavaScript', 'Java 17', 'C# (.NET 8)', 'Python 3', 'SQL', 'PHP'],
  },
  {
    name: 'Front-end & mobile',
    items: ['React.js', 'Next.js', 'React Native', 'Redux Toolkit', 'Tailwind CSS', 'Shadcn/UI', 'Material UI', 'Figma'],
  },
  {
    name: 'Back-end & enterprise frameworks',
    items: ['Node.js', 'Express', 'ASP.NET Core 8', 'Spring Boot 3', 'FastAPI', 'SQLAlchemy', 'REST API', 'GraphQL', 'Prisma'],
  },
  {
    name: 'Cloud & DevOps',
    items: ['Docker', 'Azure', 'AWS', 'GitHub Actions (CI/CD)', 'Vercel', 'Firebase', 'Nginx'],
  },
  {
    name: 'Testing, security & best practices',
    items: [
      'Playwright (E2E)',
      'Testcontainers',
      'JUnit 5',
      'Pytest',
      'RBAC & OWASP security',
      'Append-only audit logs',
      'Clean Code & hexagonal architecture',
    ],
  },
];
