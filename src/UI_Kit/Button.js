import clsx from "clsx";

const Button = (props) => {
  const { children, className, ...rest } = props;
  const classes = clsx("ui-button", className);
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
