import clsx from "clsx";

const Input = (props) => {
  const { className, type = "text", ...rest } = props;
  const classes = clsx("ui-textfield", className);
  return <input className={classes} type={type} {...rest} />;
};

export default Input;
