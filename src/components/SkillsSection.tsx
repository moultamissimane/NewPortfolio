import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
  icon: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'HTML5 & CSS3', level: 95, category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'JavaScript (ES6+)', level: 95, category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', level: 90, category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', level: 90, category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  // { name: 'Vue.js', level: 85, category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Next.js', level: 90, category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Responsive Design', level: 90, category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  
  // Backend
  { name: 'Node.js', level: 92, category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', level: 90, category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', level: 85, category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', level: 80, category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'REST API Design', level: 90, category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'GraphQL', level: 80, category: 'backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  
  // Tools & Others
  { name: 'Git & GitHub', level: 90, category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Docker', level: 75, category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  // { name: 'AWS', level: 70, category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { name: 'CI/CD', level: 80, category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  { name: 'Testing (Jest, Cypress)', level: 85, category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
  { name: 'Agile Methodologies', level: 85, category: 'tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' }
];

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = React.useState<'all' | 'frontend' | 'backend' | 'tools'>('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && contentRef.current) {
          contentRef.current.classList.add('animate-fade-in-up');
          contentRef.current.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section 
      id="skills" 
      className="py-24 px-6 bg-slate-100 dark:bg-slate-900"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div ref={contentRef} className="opacity-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text">My Skills</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-purple-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-slate-700 dark:text-slate-300">
              I've developed expertise across the full stack. Here are the technologies and skills I work with.
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-slate-200 dark:bg-slate-800 rounded-lg">
              {(['all', 'frontend', 'backend', 'tools'] as const).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeCategory === category 
                      ? 'bg-white dark:bg-slate-700 shadow-sm' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <div 
                key={skill.name}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-8 h-8 mr-3"
                  />
                  <h3 className="font-medium">{skill.name}</h3>
                </div>
                <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-pink-400 to-purple-600"
                    style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                  ></div>
                </div>
                <div className="mt-2 text-right text-sm text-slate-500 dark:text-slate-400">
                  {skill.level}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;