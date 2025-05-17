import React, { useEffect, useRef } from 'react';

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
          <div className="relative p-1 rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 via-accent-500 to-accent-600 rounded-lg blur opacity-20"></div>
            <div className="relative h-full rounded-lg bg-slate-100 dark:bg-slate-900 overflow-hidden p-8">
              <div className="aspect-square w-full relative rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800">
                {/* <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-slate-300 dark:text-slate-700">MI</div> */}
                {/* This is where an actual image would go */}
                <img 
                  src="https://kinsta.com/wp-content/uploads/2021/11/what-is-a-full-stack-developer-1200x675.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute bottom-4 right-4 p-3 bg-white dark:bg-slate-900 shadow-lg rounded-lg">
                <p className="text-xs font-medium text-slate-600 dark:text-slate-400">1+ Years Experience</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-primary-400 to-accent-500 text-transparent bg-clip-text">About Me</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary-400 to-accent-500 mb-6"></div>
            
            <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">
              I'm Moultamiss Imane, a passionate full-stack developer with a dedication to crafting elegant solutions to complex problems. 
              My journey in web development began with a curiosity for how things work on the internet, and has evolved into a career 
              creating intuitive, user-focused applications.
            </p>
            
            <p className="text-lg mb-8 text-slate-700 dark:text-slate-300">
              I specialize in JavaScript ecosystem technologies, building everything from responsive front-end interfaces to 
              scalable back-end systems. My approach combines technical precision with creative problem-solving to deliver 
              solutions that not only work flawlessly but provide exceptional user experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                <p className="font-medium">JavaScript Developer</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                <p className="font-medium">Next/React JS Specialist</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                <p className="font-medium">Node.js Developer</p>
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