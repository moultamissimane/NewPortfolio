import { Github, Linkedin } from 'lucide-react';
import { profile } from '../data/profile';

const socials = [
  { label: 'GitHub', href: profile.socials.github, Icon: Github },
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="px-6 pb-10">
      <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-4 border-t border-ink-700 pt-6 text-xs text-mist-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <ul className="flex items-center gap-4">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-mist-300 transition-colors hover:text-glow"
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
