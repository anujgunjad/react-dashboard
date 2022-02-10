import classes from "./C50.module.css";
const C50 = (props) => {
  return (
    <div
      className={props.res ? classes.c_25 : classes.c_50}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default C50;
