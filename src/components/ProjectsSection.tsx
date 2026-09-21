import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { categoryLabels, projects, type Project, type ProjectCategory } from '../data/projects';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

type Filter = 'all' | ProjectCategory;

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  ...(Object.keys(categoryLabels) as ProjectCategory[]).map((value) => ({
    value,
    label: categoryLabels[value],
  })),
];

function ProjectCard({ project }: { project: Project }) {
  const { title, description, image, imageFit = 'cover', technologies, category, demoUrl } = project;
  const contain = imageFit === 'contain';

  return (
    <article className="group flex h-full flex-col">
      <div
        className={`aspect-[16/10] overflow-hidden rounded-xl border border-ink-700 shadow-card transition-colors group-hover:border-glow/50 ${
          contain ? 'flex items-center justify-center bg-mist-100 p-8' : 'bg-ink-800'
        }`}
      >
        <img
          src={image}
          alt={`${title} preview`}
          loading="lazy"
          className={
            contain
              ? 'max-h-full max-w-full object-contain'
              : 'h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
          }
        />
      </div>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
        {technologies.map((tech) => (
          <li key={tech} className="rounded-full border border-ink-700 px-2.5 py-0.5 text-[0.7rem] text-mist-300">
            {tech}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs text-mist-500">{categoryLabels[category]}</p>
      <h3 className="mt-1 flex items-center gap-2 font-display text-xl font-semibold text-mist-100">
        {demoUrl ? (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-glow after:absolute after:inset-0"
          >
            {title}
            <ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : (
          title
        )}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-mist-500">{description}</p>
    </article>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>('all');
  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" aria-labelledby="projects-title" className="px-6 py-24">
      <div className="mx-auto max-w-page">
        <Reveal>
          <SectionHeading
            id="projects-title"
            title="Projects"
            intro="A selection of products I’ve designed, built or led, from client sites to enterprise platforms."
          />

          <div role="group" aria-label="Filter projects" className="mt-8 flex flex-wrap gap-2">
            {filters.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                aria-pressed={filter === value}
                onClick={() => setFilter(value)}
                className={`rounded-md border px-4 py-1.5 text-sm font-medium transition-colors ${
                  filter === value
                    ? 'border-glow bg-glow text-ink-950'
                    : 'border-ink-700 text-mist-300 hover:border-glow hover:text-glow'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <li key={project.id} className="relative">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
