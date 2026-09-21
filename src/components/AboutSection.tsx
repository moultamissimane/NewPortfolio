import { profile } from '../data/profile';
import { personalProjects } from '../data/personalProjects';
import { projects } from '../data/projects';
import { skillGroups } from '../data/skills';
import { useCountUp } from '../hooks/useCountUp';
import { useInView } from '../hooks/useInView';
import portrait from '../assets/me2.jpg';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

interface StatProps {
  value: number;
  label: string;
  active: boolean;
}

function Stat({ value, label, active }: StatProps) {
  const shown = useCountUp(value, active);

  return (
    <div className="flex items-baseline gap-5">
      <dd className="w-28 font-display text-4xl font-semibold tabular-nums text-mist-100">
        {shown}
        <span className="text-glow">+</span>
      </dd>
      <dt className="text-sm text-mist-300">{label}</dt>
    </div>
  );
}

const technologyCount = skillGroups.reduce((total, group) => total + group.items.length, 0);

const stats = [
  { value: profile.yearsOfExperience, label: 'Years of professional experience' },
  { value: projects.length + personalProjects.length, label: 'Projects built' },
  { value: technologyCount, label: 'Technologies and practices' },
];

export default function AboutSection() {
  const [statsRef, statsVisible] = useInView<HTMLDListElement>(0.4);

  return (
    <section id="about" aria-labelledby="about-title" className="px-6 py-24">
      <div className="mx-auto grid max-w-page gap-16 md:grid-cols-[1fr_auto] md:items-start">
        <Reveal>
          <SectionHeading id="about-title" title="About me" />
          <div className="mt-6 max-w-xl space-y-4 text-sm leading-relaxed text-mist-500 sm:text-[0.95rem]">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="md:w-[22rem]">
          <img
            src={portrait}
            alt={`Portrait of ${profile.name}`}
            width={352}
            height={352}
            loading="lazy"
            className="aspect-square w-full rounded-xl border border-ink-700 object-cover shadow-card"
          />
          <dl ref={statsRef} className="mt-8 space-y-4">
            {stats.map((stat, i) => (
              <div key={stat.label}>
                {i > 0 && <div aria-hidden="true" className="dotted-rule mb-4 h-px w-full" />}
                <Stat {...stat} active={statsVisible} />
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
