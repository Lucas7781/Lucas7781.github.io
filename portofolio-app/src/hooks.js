import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade-up reveal for every [data-reveal] element inside the given ref's subtree,
 * triggered when the section scrolls into view. No-op under prefers-reduced-motion.
 */
export function useScrollReveal(ref) {
  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.from('[data-reveal]', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
        // Clear inline styles once played so a replayed or killed tween can
        // never leave elements stuck at opacity 0.
        clearProps: 'opacity,transform',
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
      });
    }, ref);

    // Recalculate trigger positions once fonts/images settle; a layout shift
    // after init leaves stale starts and content stuck hidden.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    document.fonts?.ready.then(refresh).catch(() => {});

    return () => {
      window.removeEventListener('load', refresh);
      ctx.revert();
    };
  }, [ref]);
}
