import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks';

const SUBTITLE = 'Backend Engineer @ TomTom';
const LOGOS = ['image1.png', 'image2.png', 'image3.png', 'image4.png', 'image5.png', 'image6.png'];
const CTAS = [
  { href: '#aboutme', label: 'About Me' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

function Intro() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section id="intro" ref={sectionRef} className="hero-grid min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <p data-reveal className="font-mono text-sm sm:text-base text-slate-500 mb-4">
        <span className="text-green-400">~$</span> whoami
      </p>
      <NameComponent />
      <TypewriterSubtitle />
      <div data-reveal className="flex flex-wrap justify-center gap-4 mt-12">
        {CTAS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="font-mono text-sm sm:text-base border border-edge hover:border-accent hover:text-accent text-slate-300 rounded-lg px-6 py-2.5 transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
      <div data-reveal className="w-full mt-16 mb-10 overflow-hidden">
        <div className="flex w-max animate-marquee items-center opacity-70 hover:opacity-100 transition-opacity transform-gpu motion-reduce:animate-none">
          {[...LOGOS, ...LOGOS].map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h-12 w-12 object-contain mr-14"
              width="48"
              height="48"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const NameComponent = () => {
  const name = "Vlad Luca Spătaru";
  const characters = name.split('');
  const characterRefs = useRef([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from(characterRefs.current, {
        y: 50,
        opacity: 0,
        stagger: 0.05,
        delay: 0.02,
        duration: 0.5,
        ease: 'power2.out'
      });
    });
    // revert on unmount so StrictMode's double-invoked effect can't leave
    // a second from-tween capturing the first's mid-flight opacity as its target
    return () => ctx.revert();
  }, []);

  return (
    <h1 className="text-amber-600 text-center text-3xl md:text-6xl lg:text-7xl font-bold px-6" data-reveal>
      {characters.map((character, index) => (
        <span
          key={index}
          ref={el => (characterRefs.current[index] = el)}
          className={`inline-block ${character === ' ' ? 'ml-2 md:ml-4' : ''}`}
        >
          {character}
        </span>
      ))}
    </h1>
  );
};

const TypewriterSubtitle = () => {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTyped(SUBTITLE);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(SUBTITLE.slice(0, i));
      if (i >= SUBTITLE.length) clearInterval(id);
    }, 60);
    return () => clearInterval(id);
  }, []);

  return (
    <p data-reveal className="mt-6 font-mono text-slate-400 text-sm sm:text-lg">
      <span className="text-accent">$</span> {typed}
      <span className="ml-1 inline-block w-2.5 h-5 bg-slate-300 align-middle animate-blink motion-reduce:animate-none" />
    </p>
  );
};

export default Intro;
