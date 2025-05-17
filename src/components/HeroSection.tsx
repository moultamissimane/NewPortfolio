import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      containerRef.current.style.setProperty('--mouse-x', `${x}`);
      containerRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-primary-400/20 dark:bg-primary-500/10"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(40px)',
              opacity: Math.random() * 0.5,
              transform: 'translate(-50%, -50%)',
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-6 py-24 max-w-7xl mx-auto flex flex-col items-center">
        <div 
          className="text-center"
          style={{
            transform: `translate(
              calc(var(--mouse-x, 0.5) * -20px), 
              calc(var(--mouse-y, 0.5) * -20px)
            )`
          }}
        >
          <h5 className="text-primary-400 tracking-widest mb-4 font-mono animate-fade-in">FULL STACK DEVELOPER</h5>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="block">Hi, I'm</span>
            <span className="bg-gradient-to-r from-primary-400 via-accent-500 to-accent-600 text-transparent bg-clip-text animate-gradient-x">
              Moultamiss Imane
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl opacity-80 mb-8">
            I craft elegant, efficient solutions with JavaScript and modern web technologies. Bringing your digital ideas to life with code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium
                         hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full border border-slate-300 dark:border-slate-700 
                         hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" className="text-slate-400 hover:text-primary-400 transition-colors duration-300">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;