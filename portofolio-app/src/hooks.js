import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Modal keyboard handling: initial focus, Tab cycle trapped inside the
 * dialog, Escape to close, focus restored to the trigger on close, and
 * body scroll locked. Expects `containerRef` to point at the dialog panel
 * (the focusable region), not the overlay wrapper.
 */
export function useFocusTrap(containerRef, onClose) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const previousFocus = document.activeElement;
    const focusables = () =>
      Array.from(container.querySelectorAll('a[href], button:not([disabled])'));
    (focusables()[0] ?? container).focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const els = focusables();
      if (!els.length) return;
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = '';
      previousFocus?.focus?.();
    };
  }, [containerRef, onClose]);
}

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
