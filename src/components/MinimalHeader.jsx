import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BIO } from '../data/site';

const MinimalHeader = ({ dark = false, scrollTarget }) => {
  const [onLightSection, setOnLightSection] = useState(false);
  const [headerOpacity, setHeaderOpacity] = useState(1);

  // Fade brand + bio out as user scrolls
  useEffect(() => {
    const onScroll = () => {
      setHeaderOpacity(Math.max(0, 1 - window.scrollY / 140));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Switch to dark text when a light section enters view (Home hero → About)
  useEffect(() => {
    if (!scrollTarget) return;

    const el = document.querySelector(scrollTarget);
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOnLightSection(entry.isIntersecting),
      { rootMargin: '-72px 0px 0px 0px', threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [scrollTarget]);

  const lightHeader = !dark || onLightSection;
  const fadeStyle = {
    opacity: headerOpacity,
    transition: 'opacity 0.15s ease, color 0.3s ease',
    pointerEvents: headerOpacity < 0.05 ? 'none' : 'auto',
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="container-editorial flex items-start justify-between pt-5 md:pt-8">
        <Link
          to="/"
          className={`site-brand pointer-events-auto transition-colors duration-300 hover:opacity-70 ${
            lightHeader ? 'text-[var(--color-text)]' : 'text-white/90'
          }`}
          style={fadeStyle}
        >
          tobithedev.
        </Link>
        <p
          className={`hidden md:block max-w-[26rem] text-right text-sm leading-relaxed pointer-events-auto transition-colors duration-300 ${
            lightHeader ? 'text-[var(--color-text-muted)]' : 'text-white/80'
          }`}
          style={fadeStyle}
        >
          {BIO}
        </p>
      </div>
    </header>
  );
};

export default MinimalHeader;
