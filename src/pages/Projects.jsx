import { motion } from 'framer-motion';
import MinimalHeader from '../components/MinimalHeader';
import ContactCTA from '../components/ContactCTA';
import MegaFooter from '../components/MegaFooter';
import FloatingDock from '../components/ui/FloatingDock';
import Container from '../components/ui/Container';
import ProjectTile from '../components/ui/ProjectTile';
import { projects } from '../data/projects';

const ProjectsPage = () => (
  <>
    <MinimalHeader />
    <main className="section-light min-h-screen pt-24 md:pt-28 pb-28 md:pb-24">
      <Container>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="heading-section heading-editorial lowercase max-w-4xl mb-10 md:mb-20"
        >
          welcome to my realm of wild projects and awesome creations.
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
            >
              <ProjectTile {...project} />
            </motion.div>
          ))}
        </div>
      </Container>

      <FloatingDock fixed />
    </main>
    <ContactCTA />
    <MegaFooter />
  </>
);

export default ProjectsPage;
