import React from "react";
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    padding: 10,
    borderRadius: 30,
    height: 100,
    width: 255,
    [theme.breakpoints.up("md")]: {
      width: 220,
    },
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 25,
  },
  username: {
    fontSize: 14,
    marginInlineStart: "15px",
  },
}));

export interface IWinnerCardProps {
  username: string;
  avatar: string;
}

export default function WinnerCard({avatar, username}: IWinnerCardProps) {
  const classes = useStyles();
  return (
    <Grid container wrap='nowrap' alignItems='center' className={`${classes.rootContainer} bg-common-white`}>
      <Grid item>
        <img src={avatar} alt='user' className={classes.avatar} />
      </Grid>
      <Grid item>
        <Typography color='secondary' className={`${classes.username} font-bold`}>
          {username}
        </Typography>
      </Grid>
    </Grid>
  );
}
