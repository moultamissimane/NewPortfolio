import { experience } from '../data/experience';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="px-6 py-24">
      <div className="mx-auto max-w-page">
        <Reveal>
          <SectionHeading id="experience-title" title="Professional experience" />
        </Reveal>

        <ol className="mt-12">
          {experience.map((job) => (
            <Reveal as="li" key={job.id} className="border-t border-ink-700 py-10 first:border-t-0 first:pt-0">
              <article className="grid gap-4 md:grid-cols-[11rem_1fr] md:gap-10">
                <p className="font-display text-sm font-medium text-glow md:pt-1.5">{job.period}</p>

                <div>
                  <h3 className="font-display text-xl font-semibold text-mist-100">
                    {job.role} <span className="text-mist-500">·</span> {job.company}
                  </h3>
                  <p className="mt-2 text-sm italic text-mist-300">Project: {job.project}</p>

                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tools">
                    {job.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-full border border-ink-700 px-2.5 py-0.5 text-[0.7rem] text-mist-300"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 space-y-3">
                    {job.achievements.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-mist-500">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-glow" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
