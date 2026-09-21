import { alsoUsing, keySkills } from '../data/skills';
import { useInView } from '../hooks/useInView';
import ProgressRing from './ui/ProgressRing';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function SkillsSection() {
  // One observer for the whole grid so every ring starts filling together.
  const [gridRef, gridVisible] = useInView<HTMLUListElement>(0.2);

  return (
    <section id="skills" aria-labelledby="skills-title" className="px-6 py-24">
      <div className="mx-auto max-w-page">
        <Reveal>
          <SectionHeading
            id="skills-title"
            title="Key skills"
            align="center"
            intro="Ratings are my honest self-assessment of day-to-day confidence, not a certification."
          />
        </Reveal>

        <ul ref={gridRef} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {keySkills.map((skill, i) => (
            <Reveal as="li" key={skill.name} delay={i * 70}>
              <article className="h-full rounded-xl border border-ink-700 bg-gradient-to-b from-ink-800 to-ink-900 p-6 shadow-card transition-colors hover:border-glow/40">
                <ProgressRing value={skill.level} active={gridVisible} label={`${skill.name} proficiency`} />
                <h3 className="mt-5 font-display text-lg font-semibold text-mist-100">{skill.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-500">{skill.description}</p>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 text-center">
          <p className="text-sm text-mist-500">Also working with</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {alsoUsing.map((name) => (
              <li key={name} className="rounded-full border border-ink-700 px-3 py-1 text-xs text-mist-300">
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
