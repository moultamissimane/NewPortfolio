import type { ReactNode } from 'react';

interface SectionHeadingProps {
  id: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  action?: ReactNode;
}

export default function SectionHeading({ id, title, intro, align = 'left', action }: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div className={`flex items-end justify-between gap-6 ${centered ? 'justify-center text-center' : ''}`}>
      <div className={centered ? 'mx-auto' : ''}>
        <h2 id={id} className="font-display text-3xl font-semibold text-glow sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist-500 sm:text-base">{intro}</p>}
      </div>
      {action}
    </div>
  );
}
