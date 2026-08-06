import { motion } from 'framer-motion';

const CircleCTA = ({ href, onClick, children = 'Get in touch', className = '' }) => {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`btn-circle-cta ${className}`}
    >
      {children}
    </Component>
  );
};

export default CircleCTA;
