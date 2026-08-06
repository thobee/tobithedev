import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from './ui/Container';
import ProjectTile from './ui/ProjectTile';
import { featuredProjects } from '../data/projects';

const FeaturedWorks = () => (
  <section className="section-light section-padding pt-0">
    <Container>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-10 md:mb-16">
        <h2 className="heading-section heading-editorial lowercase">
          impressive works
        </h2>
        <p className="label-mono max-w-xs md:text-right">
          A selection of recent builds — clean UI, solid engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-12">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true, margin: '-40px' }}
          >
            <ProjectTile {...project} />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <Link to="/projects" className="btn-pill">
          explore more
        </Link>
      </div>
    </Container>
  </section>
);

export default FeaturedWorks;
