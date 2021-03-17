import {ListItem, ListItemIcon, ListItemText, makeStyles, Theme} from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import {UrlObject} from "url";
import {useActiveLink} from "../../../utils/hooks/useActiveLink";
import Link from "../Link";

const useStyles = makeStyles((theme: Theme) => ({
  image: {
    width: "24px",
    height: "24px",
    objectFit: "contain",
    opacity: "0.5",
  },
  listitem_root: {
    position: "relative",
    marginTop: "25px",
    paddingLeft: "50px",
  },
  activeSpan: {
    width: "4px",
    height: "30px",
    borderRadius: "2px",
    opacity: "1",
  },
  text_root: {
    fontSize: "16px",
  },
}));
interface INavItemProps {
  icon: any;
  href: string | UrlObject;
  last?: boolean;
  title: string;
  className?: string;
  onClick?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) &
    ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void);
}
const NavItem: React.FC<INavItemProps> = ({icon: Icon, onClick, href, title, className = "", last = false}) => {
  const classes = useStyles();
  const isActive = useActiveLink(href);
  return (
    <ListItem
      onClick={onClick}
      classes={{root: classes.listitem_root}}
      component={Link}
      activeClassName='text-primary-main'
      href={href}
      className={clsx("cursor-pointer", {
        [className]: className,
      })}
    >
      <ListItemIcon className='opacity-50'>
        <Icon active={isActive} />
      </ListItemIcon>
      <ListItemText
        primary={title}
        classes={{primary: clsx(classes.text_root)}}
        className={clsx({"text-secondary-main": !isActive}, {"text-primary-main": isActive}, "opacity-50")}
      />
      {isActive && <span className={`${classes.activeSpan} absolute  left-0  bg-primary-main`} />}
    </ListItem>
  );
};

export default NavItem;
