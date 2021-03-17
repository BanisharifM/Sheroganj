import {createStyles, Grid, makeStyles, Theme} from "@material-ui/core";
import React from "react";
import LogoutIcon from "../../icons/LogoutIcon";
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavItem from "./NavItem";
import PageTitle from "./PageTitle";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // width: "inerhit",
      height: "100vh",
      backgroundColor: theme.palette.background.paper,
      borderRight: "2px solid #f6f6f6",
    },
    mb_50px: {
      marginBottom: "50px",
    },
    content: {
      padding: " 0 80px",
    },
  })
);
const Index: React.FC = ({children}) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={3}>
        <div className={`${classes.root}  flex flex-col`}>
          <Logo />
          <Navbar />
          <NavItem href='' className={classes.mb_50px} title='خروج از حساب پنل' icon={LogoutIcon} />
        </div>
      </Grid>
      <Grid item xs={9}>
        <PageTitle />
        <div id='content' className={`${classes.content}`}>
          {children}
        </div>
      </Grid>
    </Grid>
  );
};

export default Index;
