const BentoCard = ({ title, description, icons, tags, compact = false }) => (
  <div className={`bento-card group h-full flex flex-col ${compact ? 'bento-card--compact' : ''}`}>
    {icons?.length > 0 && (
      <div className="flex flex-wrap items-center gap-2.5 mb-5">
        {icons.map(({ Icon, color }, i) => (
          <span key={i} className="bento-icon-pop">
            <Icon
              className="w-5 h-5 md:w-[1.35rem] md:h-[1.35rem]"
              style={color ? { color } : { color: 'rgba(255,255,255,0.9)' }}
            />
          </span>
        ))}
      </div>
    )}

    {tags?.length > 0 && !icons?.length && (
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag) => (
          <span key={tag} className="bento-pill">
            {tag}
          </span>
        ))}
      </div>
    )}

    <h3 className={`font-bold text-white tracking-tight mb-2.5 ${compact ? 'text-base' : 'text-lg'}`}>
      {title}
    </h3>

    {description && (
      <p className={`text-white/45 leading-relaxed flex-1 ${compact ? 'text-xs' : 'text-sm'}`}>
        {description}
      </p>
    )}

    {tags?.length > 0 && icons?.length > 0 && (
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag) => (
          <span key={tag} className="bento-pill">
            {tag}
          </span>
        ))}
      </div>
    )}
  </div>
);

export default BentoCard;
