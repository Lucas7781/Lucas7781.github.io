import '@testing-library/jest-dom/vitest';

// jsdom does not implement matchMedia; GSAP's ScrollTrigger queries it on init.
window.matchMedia = window.matchMedia || ((query) => ({
  matches: false,
  media: query,
  addEventListener: () => {},
  removeEventListener: () => {},
  addListener: () => {},
  removeListener: () => {},
  dispatchEvent: () => false,
}));

// jsdom does not implement IntersectionObserver; the nav scroll-spy uses it.
window.IntersectionObserver = window.IntersectionObserver || class {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() { return []; }
};
