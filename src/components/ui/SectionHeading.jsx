import { motion } from 'framer-motion';

const SectionHeading = ({
  title,
  description,
  align = 'left',
  lowercase = true,
  className = '',
}) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-60px' }}
      className={`mb-12 md:mb-16 ${alignClass} ${className}`}
    >
      <h2 className={`heading-section heading-editorial ${lowercase ? 'lowercase' : ''}`}>
        {title}
      </h2>
      {description && (
        <p
          className={`body-text-lg mt-5 max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
