import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FloatingDock from './ui/FloatingDock';
import Container from './ui/Container';
import { logo } from '../data/site';

const Hero = () => (
  <section className="hero-section hero-section--warm relative min-h-screen flex flex-col">
    <div className="flex-1 flex flex-col items-center justify-center pt-20 pb-32 sm:pt-24 sm:pb-36 md:pt-28 md:pb-40">
      <Container>
        <div className="relative flex flex-col items-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="heading-hero heading-editorial lowercase text-center relative z-10 w-full hero-headline-top text-white"
          >
            developer
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="hero-logo-frame relative z-20 -my-1 md:-my-3 w-full max-w-[min(58vw,14rem)] sm:max-w-[min(70vw,16rem)] md:max-w-[min(50vw,18rem)] aspect-[3/4] overflow-visible"
          >
            <motion.img
              src={logo}
              alt="Mubarak Tobi"
              className="hero-logo-img w-full h-full object-cover block"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <Link
              to="/projects"
              className="hero-circle-arrow hero-circle-arrow--on-warm absolute top-[22%] left-full ml-6 sm:ml-10 md:ml-14 hidden sm:flex"
              aria-label="View projects"
            >
              ↗
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="heading-hero heading-editorial lowercase text-center relative z-10 w-full hero-headline-bottom text-white"
          >
            <span className="text-white/55">&</span> designer
          </motion.h1>
        </div>
      </Container>

      <div className="absolute bottom-5 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-30 w-full flex justify-center px-2">
        <FloatingDock scrollHref="#about" dark />
      </div>
    </div>
  </section>
);

export default Hero;
