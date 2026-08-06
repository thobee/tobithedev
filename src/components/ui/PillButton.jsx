const PillButton = ({ children, onClick, href, dark = false, className = '' }) => {
  const classes = `btn-pill ${dark ? 'btn-pill-dark' : ''} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default PillButton;
