const ReusableBtn = ({ text, href, type, onClick, className, ...props }) => {
  const component = href ? 'a' : 'button';

  if (href) {
    return (
      <a
        component={component}
        href={href}
        className={className}
        onClick={onClick}
        target="_blank"
        rel="noreferrer"
        {...props}
      >
        {text}
      </a>
    );
  }
  return (
    <button
      className={className}
      component={component}
      type={type}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default ReusableBtn;
