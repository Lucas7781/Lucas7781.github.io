import { useRef } from 'react';
import { useScrollReveal } from '../hooks';

const TERMINAL_LINES = [
  "I'm Luca, a Software Engineer at TomTom, specializing in back-end development, AI-driven tooling, and large-scale infrastructure. My work focuses on building and maintaining core services for electric vehicles and developing automation solutions, including LLM-based tools that streamline company-wide processes.",
  "Having studied Computer Science and Engineering at TU Delft, I developed strong problem-solving skills and a solid technical foundation. My focus lies in delivering efficient, scalable software that powers real-world, impactful projects.",
  "I thrive on tackling complex engineering challenges and continuously improving software performance and reliability. With a keen eye for innovation, I enjoy collaborating with teams to create impactful technology solutions.",
  "Feel free to explore my projects and reach out to discuss exciting opportunities.",
];

const SKILLS = [
  'React', 'Node.js', 'Express', 'Tailwind CSS',
  'JavaScript', 'Docker', 'Git', 'GSAP', 'Discord.js', 'Linux',
];

function AboutMe() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section id="aboutme" ref={sectionRef} className="bg-ink border-y border-edge py-20">
      <h2 data-reveal className="text-center font-mono text-4xl sm:text-5xl font-bold text-accent mb-14">
        <span className="text-slate-500">//</span> about me
      </h2>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Terminal card */}
        <div data-reveal className="bg-surface border border-edge rounded-xl shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-edge">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-orange-300" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-3 font-mono text-xs text-slate-500">luca@portfolio: ~</span>
          </div>
          <div className="p-5 font-mono text-sm leading-relaxed text-slate-300">
            {TERMINAL_LINES.map((line, i) => (
              <div key={i} className="mb-3 flex">
                <span className="text-green-400 shrink-0">computer:~$</span>
                <p className="pl-2">{line}</p>
              </div>
            ))}
            <div className="flex">
              <span className="text-green-400 shrink-0">computer:~$</span>
              <span className="pl-2 animate-blink text-slate-300 motion-reduce:animate-none">|</span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div data-reveal>
          <h3 className="font-mono text-accent text-lg mb-4">// skills & tools</h3>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="font-mono text-sm text-slate-300 bg-surface border border-edge hover:border-accent/60 hover:text-accent rounded-full px-4 py-1.5 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="mt-8 text-slate-400 leading-relaxed">
            Currently building reliable services for electric vehicles at TomTom —
            optimizing critical infrastructure for scale and performance.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
