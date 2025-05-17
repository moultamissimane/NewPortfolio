import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: 'frontend' | 'backend' | 'fullstack';
}

const projects: Project[] = [
  {
    id: 1,
    title: "Dealkhir",
    description: "Dealkhir is a donation as a service Platform that allows users to donate to various causes and organizations. It features a user-friendly interface, secure payment processing, and a wide range of donation options.",
    image: "data:image/png;base64,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",
    technologies: ["Next.js", "Nest.js", "TailwindCSS", "GraphQl", "AWS"],
    demoUrl: "https://dealkhir.com/fr",
    githubUrl: "https://github.com",
    category: "fullstack"
  },
  {
    id: 2,
    title: "J\'ai testé",
    description: "J'ai testé is a platform that allows users to share and discover restaurants and good deals in a specific city in Morocco. It features a user-friendly interface, real-time chat, and a robust backend for data management.",
    image: "https://impro.usercontent.one/appid/oneComWsb/domain/jaiteste.com/media/jaiteste.com/onewebmedia/J'ai%20test%C3%A9.jpg?etag=W%2F%224696b-624e53f9%22&sourceContentType=image%2Fjpeg&quality=85",
    technologies: ["Next.js", "Rest API", "Node.js", "Express"],
    demoUrl: "https://jaiteste.com/",
    githubUrl: "https://github.com/",
    category: "fullstack"
  },
  {
    id: 3,
    title: "Datetric",
    description: "Datetric is a powerful booking system that allows businesses to manage appointments, bookings, and customer interactions seamlessly.",
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React.js", "TailwindCSS", "PHP", "CodeIgniter", "MySQL"],
    demoUrl: "https://datetric.com/",
    githubUrl: "https://github.com/",
    category: "fullstack"
  },
  // {
  //   id: 4,
  //   title: "API Gateway Service",
  //   description: "A microservice API gateway that handles request routing, composition, and protocol translation.",
  //   image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   technologies: ["Node.js", "Express", "Redis", "Docker", "AWS"],
  //   githubUrl: "https://github.com",
  //   category: "backend"
  // },
  // {
  //   id: 5,
  //   title: "Financial Dashboard",
  //   description: "An interactive financial dashboard with real-time data visualization, expense tracking, and budgeting tools.",
  //   image: "https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   technologies: ["React", "D3.js", "TypeScript", "Node.js", "PostgreSQL"],
  //   demoUrl: "https://example.com",
  //   category: "fullstack"
  // },
  // {
  //   id: 6,
  //   title: "Content Management System",
  //   description: "A modern CMS with a headless architecture, content modeling, and API-first delivery.",
  //   image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   technologies: ["Next.js", "GraphQL", "Node.js", "MongoDB"],
  //   demoUrl: "https://example.com",
  //   githubUrl: "https://github.com",
  //   category: "fullstack"
  // }
];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');
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

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-24 px-6"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div ref={contentRef} className="opacity-0">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text">My Projects</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-purple-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-slate-700 dark:text-slate-300">
              Here's a selection of projects I've worked on. Each one represents different challenges and solutions.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-slate-200 dark:bg-slate-800 rounded-lg">
              {(['all', 'frontend', 'backend', 'fullstack'] as const).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeCategory === category
                    ? 'bg-white dark:bg-slate-700 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                    }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full flex justify-between">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                          aria-label="View Live Demo"
                        >
                          <ExternalLink size={18} className="text-white" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                          aria-label="View Source Code"
                        >
                          <Github size={18} className="text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;