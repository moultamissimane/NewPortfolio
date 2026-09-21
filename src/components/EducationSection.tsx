import { certifications, education, languages } from '../data/background';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-title" className="px-6 py-24">
      <div className="mx-auto max-w-page">
        <Reveal>
          <SectionHeading id="education-title" title="Education & certifications" />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr_0.7fr]">
          <Reveal>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-mist-500">Education</h3>
            <ul className="mt-5 space-y-7">
              {education.map((item) => (
                <li key={item.title}>
                  <p className="font-display text-lg font-semibold text-mist-100">{item.title}</p>
                  <p className="mt-1 text-sm text-glow">
                    {item.period} · {item.place}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-mist-500">{item.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-mist-500">
              Certifications
            </h3>
            <ul className="mt-5 space-y-4">
              {certifications.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-mist-300">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-mist-500">Languages</h3>
            <dl className="mt-5 space-y-4">
              {languages.map(({ name, level }) => (
                <div key={name}>
                  <dt className="font-medium text-mist-100">{name}</dt>
                  <dd className="text-sm text-mist-500">{level}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
