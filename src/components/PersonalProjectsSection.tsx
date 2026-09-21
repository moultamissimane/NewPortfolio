import { ArrowUpRight, Github } from 'lucide-react';
import { personalProjects, type PersonalProject } from '../data/personalProjects';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

function CaseStudy({ project }: { project: PersonalProject }) {
  const { title, kind, summary, highlights, technologies, repoUrl, demoUrl } = project;

  return (
    <article className="grid gap-8 rounded-xl border border-ink-700 bg-gradient-to-b from-ink-800 to-ink-900 p-6 shadow-card transition-colors hover:border-glow/40 sm:p-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-mist-500">{kind}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-mist-100 sm:text-3xl">{title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-mist-300">{summary}</p>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {technologies.map((tech) => (
            <li key={tech} className="rounded-full border border-ink-700 px-2.5 py-0.5 text-[0.7rem] text-mist-300">
              {tech}
            </li>
          ))}
        </ul>

        {(repoUrl || demoUrl) && (
          <div className="mt-6 flex gap-5 text-sm font-medium">
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-mist-100 transition-colors hover:text-glow"
              >
                <Github size={16} aria-hidden="true" /> Source code
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-mist-100 transition-colors hover:text-glow"
              >
                Live demo <ArrowUpRight size={16} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
          </div>
        )}
      </div>

      <div>
        <h4 className="font-display text-sm font-semibold text-glow">What I built</h4>
        <ul className="mt-4 space-y-4">
          {highlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-mist-500">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-glow" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function PersonalProjectsSection() {
  return (
    <section id="personal-projects" aria-labelledby="personal-projects-title" className="px-6 py-24">
      <div className="mx-auto max-w-page">
        <Reveal>
          <SectionHeading
            id="personal-projects-title"
            title="Personal projects"
            intro="Products I designed and built end to end on my own, to go deep on architecture, security and testing."
          />
        </Reveal>

        <div className="mt-12 space-y-8">
          {personalProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 60}>
              <CaseStudy project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
