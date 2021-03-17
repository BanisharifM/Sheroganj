import React from "react";
import useTimer from "../../../utils/useTimer";
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 30,
    maxWidth: 700,
  },
  nextLottery: {
    fontSize: 18,
  },
  timer: {
    fontSize: 36,
    [theme.breakpoints.up("md")]: {
      fontSize: 60,
    },
  },
  timerLabel: {
    fontSize: 14,
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
    },
  },
}));

export default function LotteryTimer() {
  const classes = useStyles();
  const {
    remainingTime: {days, hours, minutes, seconds},
    start,
  } = useTimer({days: 6, hours: 14, minutes: 25, seconds: 29});
  React.useEffect(() => {
    start();
  }, [start]);

  return (
    <Grid container justify='space-around' alignItems='center' className={`${classes.rootContainer} bg-Secondary`}>
      <Grid item xs={12} md={3}>
        <Typography noWrap align='center' className={`${classes.nextLottery} font-bold`} color='textSecondary'>
          قرعه کشی بعدی:
        </Typography>
      </Grid>
      <Grid item container wrap='nowrap' xs={12} md={9} justify='space-between'>
        <Grid item container direction='column' alignItems='center' wrap='nowrap'>
          <Grid item>
            <Typography className={`${classes.timer} font-heavy`} color='primary'>
              {seconds.toString().padStart(2, "0")}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={`${classes.timerLabel} opacity-25 font-medium`} color='textSecondary'>
              ثانیه
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography className={`${classes.timer} font-heavy`} color='textSecondary'>
            :
          </Typography>
        </Grid>
        <Grid item container direction='column' alignItems='center' wrap='nowrap'>
          <Grid item>
            <Typography className={`${classes.timer} font-heavy`} color='primary'>
              {minutes.toString().padStart(2, "0")}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={`${classes.timerLabel} opacity-25 font-medium`} color='textSecondary'>
              دقیقه
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography className={`${classes.timer} font-heavy`} color='textSecondary'>
            :
          </Typography>
        </Grid>
        <Grid item container direction='column' alignItems='center' wrap='nowrap'>
          <Grid item>
            <Typography className={`${classes.timer} font-heavy`} color='primary'>
              {hours.toString().padStart(2, "0")}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={`${classes.timerLabel} opacity-25 font-medium`} color='textSecondary'>
              ساعت
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography className={`${classes.timer} font-heavy`} color='textSecondary'>
            :
          </Typography>
        </Grid>
        <Grid item container direction='column' alignItems='center' wrap='nowrap'>
          <Grid item>
            <Typography className={`${classes.timer} font-heavy`} color='primary'>
              {days.toString().padStart(2, "0")}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={`${classes.timerLabel} opacity-25 font-medium`} color='textSecondary'>
              روز
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
