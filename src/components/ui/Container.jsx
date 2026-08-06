const Container = ({ children, className = '' }) => (
  <div className={`container-editorial ${className}`}>
    {children}
  </div>
);

export default Container;
