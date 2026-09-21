import { Github, Linkedin } from 'lucide-react';
import { profile } from '../data/profile';
import Button from './ui/Button';

/** Decorative corner-bracket frame echoing a viewfinder / blueprint crop mark. */
function CropMarks({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute hidden h-40 w-40 border border-ink-700/70 lg:block ${className}`}
    >
      <span className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-glow/60" />
      <span className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-glow/60" />
    </div>
  );
}

const socials = [
  { label: 'GitHub', href: profile.socials.github, Icon: Github },
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: Linkedin },
];

export default function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28">
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <CropMarks className="left-[6%] top-[48%]" />
      <CropMarks className="right-[6%] top-[48%]" />

      <div className="relative mx-auto flex w-full max-w-page flex-col items-center text-center">
        <p className="font-display text-lg font-medium text-mist-100 sm:text-xl">Hi, I’m {profile.name}</p>

        <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.1] text-glow sm:text-6xl">
          {profile.role}
        </h1>
        <p className="mt-4 font-display text-sm font-medium text-mist-300 sm:text-base">{profile.headline}</p>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-mist-500 sm:text-base">{profile.tagline}</p>

        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink-700 px-3 py-1 text-xs font-medium text-mist-100">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-glow" />
          {profile.availability}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="#experience">View my work</Button>
          <Button href="#contact" variant="outline">
            Get in touch
          </Button>
        </div>

        <div className="mt-16 flex items-center gap-4 text-xs text-mist-300">
          <span>Find me online</span>
          <span aria-hidden="true" className="dotted-rule h-px w-16" />
          <ul className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-ink-700 text-mist-100 transition-colors hover:border-glow hover:text-glow"
                >
                  <Icon size={15} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
