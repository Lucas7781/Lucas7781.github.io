import { useEffect } from 'react';

function DiscordBotModal({ onClose }) {
  // Close on Escape; lock body scroll while open.
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.documentElement.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4"
      role="dialog"
      aria-modal="true"
      aria-label="JavaScript Discord Bot project details"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative w-full max-w-3xl my-6 bg-surface border border-edge rounded-xl shadow-2xl">
        <div className="flex items-center justify-between px-6 pt-5">
          <h3 className="text-2xl font-bold text-accent">JavaScript Discord Bot</h3>
          <a href="https://github.com/Matei9721/js-discord-bot" target="_blank" rel="noreferrer" aria-label="Discord bot source on GitHub">
            <img className="h-8 object-scale-down hover:brightness-150 transition" src="github-mark-white.svg" alt="" />
          </a>
        </div>
        <div className="px-6 py-4 text-slate-200 text-base leading-relaxed">
          <p>
            Co-creator of a JavaScript Discord bot whose main feature is the
            music player. The project was a way to get familiar with JavaScript
            development and with customizing bot features for personal use.
            It was also a chance to migrate to slash commands shortly after
            their release.
          </p>
          <p className="mt-4">Stack:</p>
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li>JavaScript</li>
            <li>Youtube-dl library</li>
            <li>Discord.js library</li>
          </ul>
        </div>
        <div className="flex justify-end p-4">
          <button
            type="button"
            className="font-mono text-sm bg-accent hover:bg-amber-400 text-ink font-semibold rounded-lg px-5 py-2 transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default DiscordBotModal;
