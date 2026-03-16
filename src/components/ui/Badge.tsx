import React from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'neutral';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  size?: 'sm' | 'md';
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-[#1a2b4a]/10 text-[#1a2b4a] dark:bg-[#3b82f6]/20 dark:text-[#93c5fd]',
  secondary: 'bg-[#0ea5a0]/10 text-[#0ea5a0] dark:bg-[#14b8a6]/20 dark:text-[#5eead4]',
  accent: 'bg-[#d4af37]/15 text-[#92700a] dark:bg-[#d4af37]/20 dark:text-[#fbbf24]',
  success: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  warning: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  error: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  neutral:
    'bg-[#f9fafb] text-[#6b7280] dark:bg-[#334155] dark:text-[#94a3b8] border border-[#e5e7eb] dark:border-[#475569]',
};

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-xs',
};

export default function Badge({ children, variant = 'primary', className, size = 'md' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-semibold tracking-wide uppercase',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}
