import clsx from "clsx";

const Container = (props) => {
  const { children, className, ...rest } = props;
  const classes = clsx("ui-container", className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Container;
