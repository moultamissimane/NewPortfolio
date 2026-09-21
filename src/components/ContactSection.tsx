import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/profile';
import Reveal from './ui/Reveal';

const details = [
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, Icon: Phone },
  { label: 'Location', value: profile.location, Icon: MapPin },
];

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-6 py-24">
      <Reveal className="mx-auto grid max-w-page gap-12 md:grid-cols-2 md:items-end">
        <h2 id="contact-title" className="font-display text-3xl font-semibold leading-snug text-glow sm:text-4xl">
          Have a project in mind?
          <br />
          Let’s talk.
        </h2>

        <div>
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center justify-between gap-4 border-b border-mist-500 pb-3 text-mist-100 transition-colors hover:border-glow hover:text-glow"
          >
            <span className="flex items-center gap-3 text-sm sm:text-base">
              <Mail size={18} aria-hidden="true" />
              {profile.email}
            </span>
            <ArrowUpRight
              size={20}
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-mist-500">
            {details.map(({ label, value, href, Icon }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon size={15} aria-hidden="true" />
                <span className="sr-only">{label}: </span>
                {href ? (
                  <a href={href} className="transition-colors hover:text-glow">
                    {value}
                  </a>
                ) : (
                  value
                )}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
