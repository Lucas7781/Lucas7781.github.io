import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'intro', label: 'Home' },
  { id: 'aboutme', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function NavigationBar() {
  const [active, setActive] = useState('intro');
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    for (const { id } of SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    // A fixed band never reaches the last section on tall viewports
    // (Contact stays below the band at max scroll) — pin it at the bottom.
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        setActive(SECTIONS[SECTIONS.length - 1].id);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const linkClass = (id) =>
    `relative py-2 font-bold transition-colors hover:text-accent after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 ${
      active === id ? 'text-accent after:scale-x-100' : 'text-slate-300'
    }`;

  return (
    <nav className="flex items-center justify-between px-6 py-3 text-sm sm:text-base">
      <a href="#intro" className="font-mono text-2xl font-semibold text-accent" aria-label="VLS — back to top">
        VLS
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex gap-8 font-bold">
        {SECTIONS.map(({ id, label }) => (
          <a key={id} href={`#${id}`} className={linkClass(id)}>
            {label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col justify-center gap-1.5 p-2"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`block h-0.5 w-6 bg-slate-300 transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
        <span className={`block h-0.5 w-6 bg-slate-300 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block h-0.5 w-6 bg-slate-300 transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-ink/95 backdrop-blur border-b border-edge px-6 py-4 flex flex-col gap-4">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`font-bold ${active === id ? 'text-accent' : 'text-slate-300'}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default NavigationBar;
