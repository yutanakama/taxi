export const PrimaryButton = (props) => {
  const { children, onClick, href, disabled } = props;

  if(href) {
    return (
      <div className='common-btn01'>
        <a href={href}>{children}</a>
      </div>
    );
  }

  return (
    <div className='common-btn01'>
      <button onClick={onClick} disabled={disabled}>{children}</button>
    </div>
  );
}