import { useRef, useState } from 'react';
import { useScrollReveal } from '../hooks';
import PortofolioModal from './Modals/PortofolioModal';
import DiscordBotModal from './Modals/DiscordBotModal';

const PROJECTS = [
  {
    id: 'portofolio',
    image: 'portofolio-snip.png',
    title: 'Portofolio Page',
    description: 'Portofolio page in order to showcase personal programming skills and web design abilities.',
    tags: ['React', 'Tailwind', 'Express', 'Node.js'],
  },
  {
    id: 'discordbot',
    image: 'js-bot.png',
    title: 'Discord Bot',
    description: 'A JavaScript implementation of a Discord bot, with features regarding music and message management.',
    tags: ['JavaScript', 'Discord.js', 'YouTube-dl'],
  },
];

function Projects() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);
  const [openModal, setOpenModal] = useState(null);

  return (
    <section id="projects" ref={sectionRef} className="bg-surface/40 py-20">
      <h2 data-reveal className="text-center font-mono text-4xl sm:text-5xl font-bold text-accent mb-14">
        <span className="text-slate-500">//</span> projects
      </h2>
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            data-reveal
            className="flex flex-col bg-surface border border-edge rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:border-accent/50 hover:-translate-y-1"
          >
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="aspect-video w-full object-cover"
              width="1280"
              height="720"
            />
            <div className="p-6 flex flex-col gap-3 flex-1">
              <h3 className="text-2xl font-bold text-slate-100">{project.title}</h3>
              <p className="text-slate-400 leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs text-slate-400 border border-edge rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="self-start font-mono text-sm bg-accent hover:bg-amber-400 text-ink font-semibold rounded-lg px-5 py-2 transition-colors"
                onClick={() => setOpenModal(project.id)}
              >
                Read more →
              </button>
            </div>
          </article>
        ))}
      </div>

      {openModal === 'portofolio' && <PortofolioModal onClose={() => setOpenModal(null)} />}
      {openModal === 'discordbot' && <DiscordBotModal onClose={() => setOpenModal(null)} />}
    </section>
  );
}

export default Projects;
