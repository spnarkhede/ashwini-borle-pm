import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'none';
  variant?: 'default' | 'bordered' | 'elevated' | 'glass';
  as?: React.ElementType;
  onClick?: () => void;
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const variantClasses = {
  default:
    'bg-white dark:bg-[#1e293b] border border-[#e5e7eb] dark:border-[#334155] rounded-2xl shadow-sm',
  bordered:
    'bg-transparent border-2 border-[#e5e7eb] dark:border-[#334155] rounded-2xl',
  elevated:
    'bg-white dark:bg-[#1e293b] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]',
  glass:
    'bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-white/30 dark:border-white/10 rounded-2xl',
};

export default function Card({
  children,
  className,
  hover = false,
  padding = 'md',
  variant = 'default',
  as: Component = 'div',
  onClick,
}: CardProps) {
  return (
    <Component
      className={cn(
        variantClasses[variant],
        paddingClasses[padding],
        hover &&
          'transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] cursor-pointer',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}
