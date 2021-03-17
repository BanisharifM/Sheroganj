import {IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import PaginationIcon from "../../icons/PaginationIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 50,
    height: 50,
    [theme.breakpoints.up("md")]: {
      width: 60,
      height: 60,
    },
  },
  iconSize: {
    width: 15,
    height: 10,
    [theme.breakpoints.up("md")]: {
      width: 18,
      height: 12,
    },
  },
}));

interface IPaginateButtonProps {
  onClick?: () => void;
}
export const NextPageButton: React.FC<IPaginateButtonProps> = (props) => {
  const classes = useStyles();
  return (
    <IconButton {...props} className={`${classes.root} bg-common-white`}>
      <PaginationIcon fillColor='primary' className={`${classes.iconSize} transform rotate-180`} />
    </IconButton>
  );
};

export const PrevPageButton: React.FC<IPaginateButtonProps> = (props) => {
  const classes = useStyles();
  return (
    <IconButton {...props} className={`${classes.root} bg-common-white`}>
      <PaginationIcon fillColor='primary' className={classes.iconSize} />
    </IconButton>
  );
};
