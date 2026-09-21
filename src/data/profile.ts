export const profile = {
  name: 'Moultamiss Imane',
  role: 'Full Stack JavaScript Developer',
  tagline:
    'I build fast, accessible web and mobile products with React, Next.js and Node.js, and ship them on AWS with tested, maintainable code.',
  yearsOfExperience: 3,
  email: 'moultamissimane01@gmail.com',
  phone: '+212 673309342',
  location: 'Casablanca, Morocco',
  socials: {
    github: 'https://github.com/moultamissimane',
    linkedin: 'https://www.linkedin.com/in/imane-moultamiss-07a307231/',
  },
  about: [
    'I’m a Full Stack JavaScript developer with over three years of professional experience building performant web and mobile applications. I work across the stack, from polished, accessible front-ends to scalable back-end systems and cloud-native infrastructure.',
    'My daily tools are React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, GraphQL, Docker and AWS. I automate delivery with GitHub Actions and care about maintainable, testable code and a strong user experience.',
  ],
  education: [
    { title: 'Master’s in Computer Science', place: 'Heriot-Watt University', period: '2025 – 2027' },
    { title: 'Full Stack JavaScript Development', place: 'YouCode, Safi', period: '2021 – 2023' },
  ],
} as const;

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;
