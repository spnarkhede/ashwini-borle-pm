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
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    function observeAll() {
      document.querySelectorAll<Element>(SELECTOR).forEach((el) => {
        if (!el.classList.contains('is-visible')) io.observe(el);
      });
    }

    // Observe elements already in the DOM after the first paint
    const raf = requestAnimationFrame(observeAll);

    // Watch for new page elements added during client-side navigation
    let debounceTimer: ReturnType<typeof setTimeout>;
    const mo = new MutationObserver(() => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(observeAll, 50);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(debounceTimer);
      io.disconnect();
      mo.disconnect();
    };
  }, []); // run once — MutationObserver handles subsequent navigation

  return <>{children}</>;
}
