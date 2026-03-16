'use client';

import { useEffect } from 'react';

export default function ScrollAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Once visible, no need to keep observing
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const targets = document.querySelectorAll(
      '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-scale'
    );
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Re-run on route changes (children change)
  useEffect(() => {
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );

      const targets = document.querySelectorAll(
        '.animate-on-scroll:not(.is-visible), .animate-on-scroll-left:not(.is-visible), .animate-on-scroll-right:not(.is-visible), .animate-scale:not(.is-visible)'
      );
      targets.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, [children]);

  return <>{children}</>;
}
