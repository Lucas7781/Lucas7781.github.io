const SOCIALS = [
  { href: 'https://github.com/Lucas7781', src: 'github-mark-white.svg', alt: 'GitHub profile' },
  { href: 'https://www.linkedin.com/in/spataruluca/', src: 'linkedin-icon-2.svg', alt: 'LinkedIn profile' },
  { href: 'mailto:spataruluca@gmail.com?subject=Contact from portofolio', src: 'gmail-icon.svg', alt: 'Send an email' },
  { href: 'CV.pdf', src: 'cv-icon.png', alt: 'Download curriculum vitae', download: true },
];

function Bottom() {
  return (
    <footer className="border-t border-edge bg-surface/40">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-mono text-accent font-semibold text-xl">VLS</div>
        <div className="flex gap-6">
          {SOCIALS.map(({ href, src, alt, download }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              download={download ? '' : undefined}
              aria-label={alt}
              className="opacity-70 hover:opacity-100 hover:scale-110 transition"
            >
              <img className="h-7 object-scale-down" src={src} alt="" width="28" height="28" />
            </a>
          ))}
        </div>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Vlad Luca Spătaru
        </p>
      </div>
    </footer>
  );
}

export default Bottom;
