import classes from "./Row.module.css";

const Row = (props) => {
  return (
    <div className={classes.row} style={props.style}>
      {props.children}
    </div>
  );
};

export default Row;
