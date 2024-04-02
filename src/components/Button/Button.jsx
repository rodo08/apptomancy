import "../Button/Button.css";

/* eslint-disable react/prop-types */
const Button = ({
  icon: IconComponent,
  text,
  onClick,
  type = "button",
  className,
}) => {
  return (
    <button className="button" onClick={onClick} type={type}>
      {IconComponent && <IconComponent />}
      {text}
      {className}
    </button>
  );
};

export default Button;
