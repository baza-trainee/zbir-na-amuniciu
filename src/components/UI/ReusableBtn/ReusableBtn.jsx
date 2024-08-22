const ReusableBtn = ({ text, href, type, onClick, className, ...props }) => {
  const component = href ? 'a' : 'button';

  if (href) {
    return (
      <div className={className}>
        <a
          component={component}
          href={href}
          onClick={onClick}
          target="_blank"
          rel="noreferrer"
          {...props}
        >
          {text}
        </a>
      </div>
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
