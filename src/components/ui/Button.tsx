import React from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'accent';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  as?: 'button' | 'a';
  children: React.ReactNode;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#1a2b4a] text-white hover:bg-[#243d6b] dark:bg-[#3b82f6] dark:hover:bg-[#2563eb] shadow-sm hover:shadow-md',
  secondary:
    'bg-[#0ea5a0] text-white hover:bg-[#0891b2] dark:bg-[#14b8a6] dark:hover:bg-[#0d9488] shadow-sm hover:shadow-md',
  ghost:
    'bg-transparent text-[#1f2937] dark:text-[#f8fafc] hover:bg-[#f9fafb] dark:hover:bg-[#1e293b] border border-[#e5e7eb] dark:border-[#334155]',
  outline:
    'bg-transparent text-[#0ea5a0] dark:text-[#14b8a6] border-2 border-[#0ea5a0] dark:border-[#14b8a6] hover:bg-[#0ea5a0] hover:text-white dark:hover:bg-[#14b8a6] dark:hover:text-white',
  accent:
    'bg-[#d4af37] text-[#1a2b4a] hover:bg-[#c49e28] shadow-sm hover:shadow-md font-semibold',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-md gap-1.5',
  md: 'px-6 py-3 text-base rounded-lg gap-2',
  lg: 'px-8 py-4 text-lg rounded-xl gap-2.5',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  as,
  children,
  loading = false,
  icon,
  iconPosition = 'left',
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center font-semibold',
    'transition-all duration-200 ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0ea5a0]',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    'select-none whitespace-nowrap',
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!loading && icon && iconPosition === 'left' && (
        <span className="flex-shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
      {!loading && icon && iconPosition === 'right' && (
        <span className="flex-shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );

  if (href || as === 'a') {
    return (
      <a href={href} className={baseClasses} aria-disabled={disabled}>
        {content}
      </a>
    );
  }

  return (
    <button className={baseClasses} disabled={disabled || loading} {...props}>
      {content}
    </button>
  );
}
