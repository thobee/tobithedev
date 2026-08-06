import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiCss3,
  SiBootstrap,
  SiFramer,
  SiGreensock,
  SiDocker,
  SiGooglecloud,
  SiVercel,
  SiPostman,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiGithub,
  SiGit,
  SiFigma,
} from 'react-icons/si';
import MinimalHeader from '../components/MinimalHeader';
import ContactCTA from '../components/ContactCTA';
import MegaFooter from '../components/MegaFooter';
import FloatingDock from '../components/ui/FloatingDock';
import Container from '../components/ui/Container';
import BentoCard from '../components/ui/BentoCard';
import { BIO } from '../data/site';

const icon = (Icon, color) => ({ Icon, color });

const columnLeft = [
  {
    title: 'Front-End Development',
    description:
      'Building engaging and user-friendly web interfaces using modern frameworks and technologies with expertise.',
    icons: [
      icon(SiHtml5, '#E34F26'),
      icon(SiJavascript, '#F7DF1E'),
      icon(SiTypescript, '#3178C6'),
      icon(SiNextdotjs),
      icon(SiRedux, '#764ABC'),
      icon(SiReact, '#61DAFB'),
    ],
  },
  {
    title: 'Back-End Development',
    description:
      'Developing robust server-side logic and APIs to power dynamic and scalable web applications.',
    icons: [icon(SiNodedotjs, '#339933'), icon(SiExpress)],
  },
  {
    title: 'Core Computer Science Concepts',
    description:
      'Demonstrating a strong foundation in core computer science principles, including problem-solving, system design, and efficient computing techniques.',
    tags: [
      'Operating Systems',
      'Computer Networks',
      'Object-Oriented Programming',
      'DSA',
      'System Design',
    ],
  },
  {
    title: 'Personal Development',
    description:
      'Committed to continuous learning and personal growth to excel in both professional and collaborative environments.',
    tags: ['Time Management', 'Problem Solving', 'Communication', 'Leadership'],
  },
];

const columnCenter = [
  {
    title: 'Styling & Design',
    description:
      'Crafting visually appealing and responsive designs with advanced styling tools and frameworks.',
    icons: [
      icon(SiTailwindcss, '#06B6D4'),
      icon(SiCss3, '#1572B6'),
      icon(SiBootstrap, '#7952B3'),
    ],
  },
  {
    title: 'Web Animations',
    description:
      'Creating seamless animations and transitions to enhance user engagement and interactivity.',
    icons: [icon(SiFramer), icon(SiGreensock, '#88CE02')],
  },
  {
    title: 'Cloud & Deployment',
    description:
      'Experience in deploying and managing applications on leading cloud platforms and tools.',
    icons: [
      icon(SiDocker, '#2496ED'),
      icon(SiGooglecloud, '#4285F4'),
      icon(SiVercel),
    ],
  },
  {
    title: 'Testing & Debugging',
    description:
      'Ensuring code quality and reliability through rigorous testing and debugging processes.',
    icons: [icon(SiPostman, '#FF6C37')],
  },
];

const columnRight = [
  {
    title: 'Database Management',
    description:
      'Designing and managing databases to ensure secure and efficient data storage and retrieval.',
    icons: [
      icon(SiMysql, '#4479A1'),
      icon(SiPostgresql, '#4169E1'),
      icon(SiMongodb, '#47A248'),
      icon(SiFirebase, '#FFCA28'),
    ],
  },
  {
    pair: [
      {
        title: 'Mobile App Development',
        description:
          'Creating cross-platform mobile apps with sleek designs and robust functionality.',
        icons: [icon(SiReact, '#61DAFB')],
        compact: true,
      },
      {
        title: 'Version Control & Collaboration',
        description:
          'Effectively managing code and collaborating on projects to ensure seamless teamwork.',
        icons: [icon(SiGithub), icon(SiGit, '#F05032')],
        compact: true,
      },
    ],
  },
  {
    title: 'UI/UX Design',
    description:
      'Designing user-centric interfaces that are intuitive, visually appealing, and easy to navigate.',
    icons: [icon(SiFigma, '#F24E1E')],
    tags: ['Prototyping', 'Wireframing'],
  },
];

const allSkills = [
  ...columnLeft,
  ...columnCenter,
  ...columnRight.flatMap((item) => (item.pair ? item.pair : [item])),
];

const fade = (i) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay: Math.min(i * 0.05, 0.4), ease: [0.22, 1, 0.36, 1] },
});

function Column({ items, startIndex }) {
  let index = startIndex;

  return (
    <div className="skills-column flex flex-col gap-3 md:gap-4">
      {items.map((item) => {
        if (item.pair) {
          const pairIndex = index;
          index += 2;
          return (
            <div key="pair" className="grid grid-cols-2 gap-3 md:gap-4">
              {item.pair.map((skill) => (
                <motion.div key={skill.title} {...fade(pairIndex)}>
                  <BentoCard {...skill} />
                </motion.div>
              ))}
            </div>
          );
        }

        const motionProps = fade(index);
        index += 1;
        return (
          <motion.div key={item.title} {...motionProps}>
            <BentoCard {...item} />
          </motion.div>
        );
      })}
    </div>
  );
}

const SkillsPage = () => (
  <div className="relative bg-black min-h-screen">
    <MinimalHeader dark />

    <main className="relative pt-24 md:pt-28 pb-28 md:pb-20">
      <Container>
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-14 max-w-3xl mx-auto text-center px-1"
        >
          <p className="font-mono text-[0.75rem] md:text-sm font-medium tracking-[0.14em] uppercase text-white/45 mb-4 md:mb-5">
            Tech stack & craft
          </p>
          <h1 className="heading-section heading-editorial lowercase text-white mb-4 md:mb-5">
            skills that fuel my passion
          </h1>
          <p className="text-[0.95rem] md:text-[clamp(0.95rem,1.5vw,1.1rem)] leading-relaxed text-white/45">
            {BIO}
          </p>
        </motion.header>

        {/* Desktop dock sits above the grid */}
        <div className="hidden md:flex justify-center mb-12 md:mb-16">
          <FloatingDock dark />
        </div>

        {/* Desktop: 3-column masonry */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 items-start">
          <Column items={columnLeft} startIndex={0} />
          <Column items={columnCenter} startIndex={columnLeft.length} />
          <Column items={columnRight} startIndex={columnLeft.length + columnCenter.length} />
        </div>

        {/* Mobile: single column */}
        <div className="md:hidden flex flex-col gap-3">
          {allSkills.map((skill, index) => (
            <motion.div key={skill.title} {...fade(index)}>
              <BentoCard {...skill} />
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Mobile fixed dock */}
      <div className="md:hidden">
        <FloatingDock dark fixed />
      </div>
    </main>

    <ContactCTA dark />
    <MegaFooter inverted />
  </div>
);

export default SkillsPage;
