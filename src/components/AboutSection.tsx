import React, { useEffect, useRef } from 'react';
import Image from '../public/me2.jpg'

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

  return (
    <section 
      id="about" 
      className="py-24 px-6"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div 
          ref={contentRef}
          className="opacity-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative p-1 rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 via-accent-500 to-accent-300 rounded-lg blur opacity-20"></div>
            <div className="relative h-full rounded-4xl bg-slate-100 dark:bg-slate-900 overflow-hidden p-8">
              <div className="aspect-square w-full relative rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img 
                  src={Image}
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute bottom-4 right-4 p-3 bg-white dark:bg-slate-900 shadow-lg rounded-lg">
                <p className="text-xs font-medium text-slate-600 dark:text-slate-400">3+ Years Experience</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-primary-400 to-accent-500 text-transparent bg-clip-text">About Me</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary-400 to-accent-500 mb-6"></div>
            
            <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">
              I'm Moultamiss Imane, a Full Stack JavaScript developer with over 3 years of professional experience building
              performant web and mobile applications. I work across the stack — from polished, accessible front-ends to
              scalable back-end systems and cloud-native infrastructure.
            </p>

            <p className="text-lg mb-8 text-slate-700 dark:text-slate-300">
              My primary tools include React.js, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, GraphQL, Docker and AWS.
              I also implement CI/CD pipelines using GitHub Actions and focus on maintainable, testable code and strong UX.
            </p>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Education</h3>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li><strong>Full Stack JavaScript Development</strong> — Youcode, Safi (2021–2023)</li>
                <li><strong>Master: Computer Science</strong> — Heriot-Watt University (Sep 2025 – May 2027)</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                <p className="font-medium">Frontend Developer</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                <p className="font-medium">Next JS/React JS/Node JS Specialist</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                <p className="font-medium">Backend Developer</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                <p className="font-medium">UI/UX Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;