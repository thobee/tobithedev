import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from './ui/Container';

const About = () => (
  <section id="about" className="section-light">
    <div className="pt-16 md:pt-[var(--section-py)] lg:pt-[var(--section-py-lg)] pb-10 md:pb-14">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="heading-editorial lowercase text-[clamp(1.15rem,3.5vw,1.875rem)] leading-[1.4] tracking-[-0.02em] max-w-xl">
              Guided by curiosity and design, I merge technology and aesthetics to
              create intuitive, visually compelling digital products. Driven by
              continuous learning, I am always discovering new ways to innovate.
              <br />
              <br />
              @tobithedev.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:pt-4"
          >
            <p className="body-text-lg mb-6">
              A Computer Science graduate from Sokoto State University and a
              Full Stack Web Developer. I bring ideas to life by pairing practical engineering with clean,
              user-centric design to build scalable web products.
            </p>
            <p className="body-text mb-8">
              Outside of coding, I'm into movies, anime, and music — always learning,
              staying consistent, and improving my craft from Abuja, Nigeria.
            </p>
            <Link to="/projects" className="link-arrow">
              more about my work
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mt-14 md:mt-20 pt-8 md:pt-10 border-t border-[var(--color-border)] font-mono text-sm md:text-base tracking-[0.08em] lowercase text-[var(--color-text-muted)]"
        >
          build. learn. elevate.
        </motion.p>
      </Container>
    </div>
  </section>
);

export default About;
