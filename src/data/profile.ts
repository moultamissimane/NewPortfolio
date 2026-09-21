export const profile = {
  name: 'Imane Moultamiss',
  role: 'Full Stack Developer',
  headline: '.NET • Java • Python • JavaScript / TypeScript • Cloud & AI',
  tagline:
    'Three years in production with React, Next.js, Node.js and AWS, plus a Master’s in Software Engineering & AI at Heriot-Watt University.',
  availability: 'Available immediately',
  yearsOfExperience: 3,
  email: 'moultamissimane01@gmail.com',
  phone: '+212 673 309 342',
  location: 'Casablanca, Morocco',
  socials: {
    github: 'https://github.com/moultamissimane',
    linkedin: 'https://www.linkedin.com/in/imane-moultamiss',
  },
  about: [
    'Passionate full stack developer and technical polyglot, combining 3 years of production experience (React, Next.js, Node.js, AWS) with a strong academic background: a Master’s in Software Engineering & AI at Heriot-Watt University. A fast learner with great intellectual agility, I pick up any ecosystem or new paradigm with ease, as my recent projects show: ASP.NET Core 8 / C#, Java 17 / Spring Boot 3, and Python / FastAPI for generative-AI architectures (RAG, pgvector, Gemini).',
    'I design end-to-end software solutions (ERP, CRM, AI document platforms, high-traffic distributed systems) and care about architectural resilience, application security (RBAC, rotating JWTs, audit logs), automated integration testing (Testcontainers, Playwright) and cloud-native DevOps (Docker, Azure, AWS). Proactive and focused on business impact, I’m available immediately to take on ambitious technical challenges.',
  ],
} as const;

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#personal-projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] as const;
