import { skillGroups } from '../data/skills';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="px-6 py-24">
      <div className="mx-auto max-w-page">
        <Reveal>
          <SectionHeading id="skills-title" title="Technical skills" align="center" />
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal as="li" key={group.name} delay={i * 70}>
              <article className="h-full rounded-xl border border-ink-700 bg-gradient-to-b from-ink-800 to-ink-900 p-6 shadow-card transition-colors hover:border-glow/40">
                <h3 className="font-display text-lg font-semibold text-glow">{group.name}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-md bg-ink-950/60 px-2.5 py-1 text-xs text-mist-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
