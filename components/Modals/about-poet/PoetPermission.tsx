import React from "react";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 255,
    height: 245,
    [theme.breakpoints.up("md")]: {
      width: 290,
      height: 279,
    },
    borderRadius: 20,
  },
}));

export default function PoetPermission() {
  const classes = useStyles();
  return <Paper elevation={0} className={`${classes.root} bg-primary-light`} />;
}
