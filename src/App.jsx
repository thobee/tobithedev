import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';

const Home = lazy(() => import('./pages/Home'));
const ProjectsPage = lazy(() => import('./pages/Projects'));
const SkillsPage = lazy(() => import('./pages/Skills'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}

function AppRoutes() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
      if (window.lenis === lenis) delete window.lenis;
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-[var(--color-surface)]" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App min-h-screen bg-[var(--color-surface)]">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
