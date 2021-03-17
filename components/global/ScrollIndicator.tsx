import {makeStyles} from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  container: {
    // boxShadow: "0 2px 4px rgba(255, 166, 0, 0.3)",
    height: "5px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    zIndex: 10000,
  },
  processBar: {
    transition: "width 0.3s ease-in",
    height: "3px",
    // background: "#e91e63",
    width: (props: {width: number}) => `${props.width}%`,
    boxShadow: "0 2px 6px rgba(255, 123, 0, 0.541)",
  },
}));
const ScrollIndicator: React.FC<{width: number | undefined; totalSections: number}> = ({width, totalSections}) => {
  const classes = useStyles({width: width ? (width / totalSections) * 100 : 0});
  return (
    <div className={`${classes.container} fixed`}>
      <div className={`${classes.processBar} bg-Primary`} />
    </div>
  );
};

export default ScrollIndicator;
