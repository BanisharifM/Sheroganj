import {Avatar, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";
import clsx from "clsx";
import React from "react";

interface LogoProps {}
const useStyles = makeStyles(() => ({
  listItem_root: {
    paddingTop: "50px",
    paddingBottom: "50px",
    borderBottom: "2px solid #f6f6f6",
    paddingLeft:'50px',
  },
  avatar_root: {
    width: "60px",
    height: "60px",
    marginRight:'20px'
  },
  listItemText_root: {
    fontFamily: "18px",
  },
}));
const Logo: React.FC<LogoProps> = (props) => {
  const classes = useStyles();
  return (
    <ListItem classes={{root: classes.listItem_root}} component='div'>
      <ListItemIcon classes={{root: classes.avatar_root}}>
        <Avatar variant='square' src='/images/logo.png' classes={{root: classes.avatar_root}} />
      </ListItemIcon>
      <ListItemText
        primary='پنل مدیریت شعر و گنج'
        classes={{primary: clsx(classes.listItemText_root, "text-secondary-main", "font-bold")}}
      />
    </ListItem>
  );
};

export default Logo;
