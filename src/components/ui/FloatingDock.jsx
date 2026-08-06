import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { pageLinks, socialLinks, logo, resumePdf } from '../../data/site';

function DockItem({ label, active, children, as: Component, wrapClass = '', ...props }) {
  return (
    <div className={`floating-dock-wrap group ${wrapClass}`}>
      <span className="floating-dock-label">{label}</span>

      <Component
        {...props}
        className={`floating-dock-item ${active ? 'floating-dock-item--active' : ''}`}
        aria-label={label}
      >
        {children}
      </Component>
    </div>
  );
}

const FloatingDock = ({ scrollHref, dark = false, fixed = false }) => {
  const { pathname } = useLocation();

  const handleResume = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Mubarak-Oyewole-Full-Stack-Engineer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className={`flex flex-col items-center gap-3 md:gap-4 max-w-[calc(100vw-1.25rem)] ${
        fixed ? 'fixed bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-40' : ''
      }`}
    >
      <div className={`floating-dock ${dark ? 'floating-dock--on-dark' : ''}`}>
        {pageLinks.map(({ to, icon: Icon, label }) => {
          const active = pathname === to;
          return (
            <DockItem key={label} as={Link} to={to} label={label} active={active}>
              <Icon className="floating-dock-icon" strokeWidth={active ? 2.25 : 1.75} />
            </DockItem>
          );
        })}

        <span className="floating-dock-avatar" aria-hidden>
          <img src={logo} alt="" />
        </span>

        <span className="floating-dock-divider" aria-hidden />

        {socialLinks.map(({ href, icon: Icon, label, download }) => {
          const isHash = href.startsWith('#');
          return (
            <DockItem
              key={label}
              as="a"
              href={download ? '#' : href}
              onClick={
                download
                  ? handleResume
                  : isHash
                    ? (e) => {
                        e.preventDefault();
                        const el = document.querySelector(href);
                        if (!el) return;
                        if (window.lenis) window.lenis.scrollTo(el, { offset: -20 });
                        else el.scrollIntoView({ behavior: 'smooth' });
                      }
                    : undefined
              }
              target={!download && !isHash && href.startsWith('http') ? '_blank' : undefined}
              rel={!download && !isHash && href.startsWith('http') ? 'noopener noreferrer' : undefined}
              label={label}
              wrapClass={
                label === 'Resume' || label === 'X' ? 'floating-dock-optional' : ''
              }
            >
              <Icon className="floating-dock-icon" />
            </DockItem>
          );
        })}
      </div>

      {scrollHref && (
        <motion.a
          href={scrollHref}
          className={`hero-scroll-btn ${dark ? 'hero-scroll-btn--dark' : ''}`}
          aria-label="Scroll down"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.a>
      )}
    </motion.div>
  );
};

export default FloatingDock;
