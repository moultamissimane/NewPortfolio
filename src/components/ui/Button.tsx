import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: 'solid' | 'outline';
}

const variants = {
  solid: 'bg-glow text-ink-950 hover:bg-white',
  outline: 'border border-ink-700 text-mist-100 hover:border-glow hover:text-glow',
} as const;

/** Link styled as a button. Everything here navigates, so it renders an anchor. */
export default function Button({ variant = 'solid', className = '', children, ...props }: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
