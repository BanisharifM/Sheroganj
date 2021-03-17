import {makeStyles} from "@material-ui/core";
import {useRouter} from "next/router";
import React from "react";
import {routes} from "../../../utils/routes";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "50px 80px",
  },
  title: {
    fontSize: "60px",
  },
  devider: {
    width: "50px",
    height: "2px",
    borderRadius: "2px",
  },
}));
const PageTitle: React.FC = () => {
  const classes = useStyles();
  const {pathname} = useRouter();
  const [activeRoute] = pathname.split("/").slice(-1);
  const [{title}] = routes.filter((r) => r.href === `/${activeRoute}` && r)!;

  return (
    <div className={classes.root}>
      <h1 className={`${classes.title} font-heavy text-secondary-main`}>{title}</h1>
      <span className={`${classes.devider} bg-primary-main block`}></span>
    </div>
  );
};

export default PageTitle;
