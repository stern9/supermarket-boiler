import clsx from "clsx";

const Link = (props) => {
  const { children, className, ...rest } = props;
  const classes = clsx("ui-link", className);
  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  );
};

export default Link;
