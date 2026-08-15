import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks';

// Override with VITE_BACKEND_URL in portofolio-app/.env for local dev (e.g. http://localhost:8080)
// Trailing slashes stripped so `${BACKEND_URL}/email` can't become `//email`.
const BACKEND_URL = (import.meta.env.VITE_BACKEND_URL || "https://portofolio-backend.selfhaven.eu").replace(/\/+$/, '');

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Contact() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorField, setErrorField] = useState(null); // 'email' | 'message' | null
  const [errorText, setErrorText] = useState("");
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const resetAfterDelay = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setStatus('idle'), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!EMAIL_REGEX.test(email)) {
      setStatus('idle');
      setErrorField('email');
      setErrorText("Please enter a valid email address.");
      return;
    }
    if (!message.trim()) {
      setStatus('idle');
      setErrorField('message');
      setErrorText("Please write a message.");
      return;
    }
    // Clear any stale reset timer so a previous request's timer can't
    // re-enable the button while this request is still in flight.
    clearTimeout(timerRef.current);
    setErrorField(null);
    setErrorText("");
    setStatus('sending');

    const sentEmail = email;
    const sentMessage = message;

    const req = new XMLHttpRequest();
    req.open("POST", `${BACKEND_URL}/email`);
    req.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    // Safety net: a request that neither completes nor errors must not
    // leave the form stuck on "Sending…" forever.
    req.timeout = 15000;
    req.send(JSON.stringify({ email, message }));

    req.onload = () => {
      if (req.readyState === 4 && req.status === 201) {
        setStatus('success');
        // Only clear fields if the user hasn't typed new text while the
        // request was in flight.
        setEmail(prev => (prev === sentEmail ? '' : prev));
        setMessage(prev => (prev === sentMessage ? '' : prev));
      } else {
        setStatus('error');
      }
      resetAfterDelay();
    };
    req.onerror = () => {
      setStatus('error');
      resetAfterDelay();
    };
    req.ontimeout = () => {
      setStatus('error');
      resetAfterDelay();
    };
  };

  const inputClass = (error) =>
    `mt-1 w-full rounded-lg bg-ink border border-edge px-4 py-2.5 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition ${error ? 'border-red-500' : ''}`;

  return (
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div data-reveal>
          <h2 className="font-mono text-4xl sm:text-5xl font-bold text-accent mb-6">
            <span className="text-slate-500">//</span> contact
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Have a question, an opportunity, or just want to say hi?
            Drop a message — it lands straight in my inbox.
          </p>
          <a
            href="mailto:spataruluca@gmail.com"
            className="inline-block font-mono text-sm text-slate-300 border border-edge hover:border-accent hover:text-accent rounded-lg px-5 py-2.5 transition-colors"
          >
            spataruluca@gmail.com
          </a>
        </div>

        <form
          data-reveal
          className="bg-surface border border-edge rounded-xl p-6 shadow-xl"
          onSubmit={handleSubmit}
          noValidate
        >
          <label htmlFor="email" className="block text-sm font-semibold text-slate-300">
            Your email
          </label>
          <input
            id="email"
            type="email"
            className={inputClass(errorField === 'email')}
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (errorField === 'email') { setErrorText(""); setErrorField(null); } }}
            placeholder="you@example.com"
            required
          />

          <label htmlFor="message" className="block mt-5 text-sm font-semibold text-slate-300">
            Your message
          </label>
          <textarea
            id="message"
            className={`${inputClass(errorField === 'message')} min-h-40 resize-y`}
            value={message}
            onChange={(e) => { setMessage(e.target.value); if (errorField === 'message') { setErrorText(""); setErrorField(null); } }}
            placeholder="Write your message here"
            required
          />

          {errorText && <p className="mt-3 text-sm text-red-400" role="alert">{errorText}</p>}
          {status === 'success' && <p className="mt-3 text-sm text-green-400" role="status">Email sent — thanks for reaching out!</p>}
          {status === 'error' && <p className="mt-3 text-sm text-red-400" role="alert">Something went wrong — please try again.</p>}

          <button
            type="submit"
            disabled={status === 'sending'}
            className={`mt-6 w-full font-mono font-semibold rounded-lg px-4 py-3 transition-colors ${
              status === 'sending'
                ? 'bg-accent/60 text-ink cursor-not-allowed'
                : 'bg-accent hover:bg-amber-400 text-ink'
            }`}
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
