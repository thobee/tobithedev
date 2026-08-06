const ProjectTile = ({ title, image, href, isPlaceholder = false }) => {
  const Wrapper = isPlaceholder ? 'div' : 'a';
  const wrapperProps = isPlaceholder
    ? { className: 'group block cursor-default' }
    : {
        href,
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'group block',
      };

  return (
    <Wrapper {...wrapperProps}>
      <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-[var(--color-surface-muted)]">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
            isPlaceholder ? 'opacity-30 grayscale' : ''
          }`}
        />
      </div>
      <p className="project-label">
        <span className="project-arrow" aria-hidden>→</span>
        {title}
      </p>
    </Wrapper>
  );
};

export default ProjectTile;
