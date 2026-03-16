'use client';

import { useEffect } from 'react';

const SELECTOR =
  '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-scale';

export default function ScrollAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let rafId: number;
    let observer: IntersectionObserver;

    // requestAnimationFrame fires right after the browser paints the frame,
    // so the observer immediately detects elements already in the viewport.
    rafId = requestAnimationFrame(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05 }
      );

      document.querySelectorAll<Element>(SELECTOR).forEach((el) => {
        if (!el.classList.contains('is-visible')) {
          observer.observe(el);
        }
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, [children]);

  return <>{children}</>;
}
