import { makeStyles, Theme } from "@material-ui/core";
import React from "react";

interface MatteLayerProps {}
const useStyles = makeStyles((theme: Theme) => ({
  rectangle1: {
    width: "100px",
    height: "671px",
    objectFit: "contain",
    backgroundImage: "linear-gradient(to left , rgba(255, 249, 242, 0), #fff9f2)",
    left: "-1px",
    top: "15px",
  },
  rectangle2: {
    width: "100px",
    height: "671px",
    objectFit: "contain",
    backgroundImage: "linear-gradient(to right, rgba(255, 249, 242, 0), #fff9f2)",
    right: "-1px",
    top: "15px",
  },
  largmode_rectangle1: {
    width: "150px",
    height: "281",
    objectFit: "contain",
    backgroundImage: "linear-gradient(to left, rgba(255, 249, 242, 0), #fff9f2)",
    left: "-1px",
    top: "15px", 
  },
  largmode_rectangle2: {
    width: "150px",
    height: "281",
    objectFit: "contain",
    backgroundImage: "linear-gradient(to right, rgba(255, 249, 242, 0), #fff9f2)",
    right: "-1px",
    top: "15px"
  },
}));
const MatteLayer: React.FC<MatteLayerProps> = (props) => {
  const classes = useStyles();
  return (
    <>
      <img
        src='/images/rectangle-right.svg'
        className={`${classes.rectangle1} block md:hidden absolute z-10`}
        alt='rectangle'
      />
      <img
        src='/images/rectangle-left.svg'
        className={`${classes.rectangle2} ablock md:hidden absolute z-10`}
        alt='rectangle'
      />
      <img
        src='/images/largmode-rectangle-right.svg'
        className={`${classes.largmode_rectangle1} hidden md:block absolute z-10`}
        alt='rectangle'
      />
      <img
        src='/images/largmode-rectangle-left.svg'
        className={`${classes.largmode_rectangle2} hidden md:block absolute z-10`}
        alt='rectangle'
      />
    </>
  );
};

export default MatteLayer;
