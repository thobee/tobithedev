import { Link, useLocation } from 'react-router-dom';

const MegaFooter = ({ inverted = false }) => {
  const { pathname } = useLocation();
  const bg = inverted ? 'bg-white' : 'bg-black';
  const nameColor = inverted ? 'text-black' : 'text-white';
  const tagColor = inverted ? 'text-black/70' : 'text-white/80';
  const btn = inverted
    ? 'bg-black text-white'
    : 'bg-white text-black';
  const copyColor = inverted ? 'text-black/40' : 'text-white/35';

  const goTopOrHome = (e) => {
    if (pathname === '/') {
      e.preventDefault();
      if (window.lenis) {
        window.lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className={`${bg} pt-14 md:pt-20 pb-8 md:pb-10 overflow-hidden`}>
      <div className="container-editorial">
        <div className="flex justify-end mb-10 md:mb-14">
          <Link
            to="/"
            onClick={goTopOrHome}
            className={`flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full text-base md:text-lg hover:scale-105 transition-transform ${btn}`}
            aria-label={pathname === '/' ? 'Back to top' : 'Back to home'}
          >
            ↗
          </Link>
        </div>

        <p className={`mega-footer-tag ${tagColor}`}>
          Creative engineer & builder
        </p>
        <p className={`mega-footer-name font-bold lowercase ${nameColor}`}>
          tobiiiiiiii.
        </p>

        <p className={`mt-8 md:mt-10 text-xs ${copyColor}`}>
          © {new Date().getFullYear()} Mubarak Tobi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default MegaFooter;
