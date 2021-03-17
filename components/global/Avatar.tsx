import {Avatar as MuiAvatar, makeStyles, Theme} from "@material-ui/core";
import React from "react";

type AvatarProps = React.ComponentProps<typeof MuiAvatar> & {size: "60" | "40" | "200" | "145"};
const useStyles = makeStyles((theme: Theme) => ({
  "60": {
    width: "60px",
    height: "60px",
  },
  "40": {
    width: "40px",
    height: "40px",
  },
  "200": {
    width: "200px",
    height: "200px",
  },
  "145": {
    width: "145px",
    height: "145px",
  },
  "70": {
    width: "70px",
    height: "70px",
  },
  rounded: {
    borderRadius: "20px",
  },
}));
const Avatar: React.FC<AvatarProps> = ({size, ...props}) => {
  const classes = useStyles();
  return <MuiAvatar {...props} className={classes[size]} classes={{rounded: classes.rounded}} />;
};

export default Avatar;
// 60 145 200 40 circle squere
