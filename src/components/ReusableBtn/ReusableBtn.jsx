import '../../styles/components/_reusableBtn.scss';
// 
// export const Button = () => {
    // return (
      // <>
       {/* <button className='button'>Донатити</button> */}
       {/* <button className='button'>Поділитись</button> */}
      {/* </> */}
    // );
// };


const ReusableBtn = ({
  text,
  href,
  target,
  rel,
  type,
  onClick,
  ...props
}) => {
  const className = href ? `${styles.reuseLinkBtn}` : `${styles.reuseBtn}`;

  if (href) {
    return (
      <div className={className}>
        <a href={href} target={target} rel={rel} {...props}>
          <p>{text}</p>
        </a>
      </div>
    );
  }
  return (
    <button type={type} onClick={onClick} className={className} {...props}>
      <p>{text}</p>
    </button>
  );
};

export default ReusableBtn;