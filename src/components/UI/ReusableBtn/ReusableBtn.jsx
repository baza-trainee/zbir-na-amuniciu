const ReusableBtn = ({ text, href, type, onClick, ...props }) => {
  const component = href ? 'a' : 'button';

  if (href) {
    return (
      <div className="reuseBtn">
        <a
        
          component={component}
          href={href}
          target="_blank"
          rel="noreferrer"
          {...props}
        >
          <p>{text}</p>
        </a>
      </div>
    );
  }
  return (
    <button className="reuseBtn" component={component} type={type} onClick={onClick} {...props}>
      <p>{text}</p>
    </button>
  );
};

export default ReusableBtn;