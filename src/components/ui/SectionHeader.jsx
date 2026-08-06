import { motion } from 'framer-motion';

/** @deprecated Use SectionHeading — kept for backward compatibility during migration */
const SectionHeader = ({ label, title, description, align = 'center' }) => {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-80px' }}
      className={`mb-14 md:mb-16 ${alignClass}`}
    >
      {label && <p className="label-mono mb-3">{label}</p>}
      <h2 className="heading-section heading-editorial lowercase mb-4">{title}</h2>
      {description && (
        <p className={`body-text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
