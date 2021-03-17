import React from "react";
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {images} from "../../../constants/images";
import {NextPageButton, PrevPageButton} from "../../global/button/PagingButton";
import LotteryTimer from "./LotteryTimer";
import WinnerCard from "./WinnerCard";

const useStyles = makeStyles(() => ({
  rootContainer: {
    padding: 100,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 48,
    marginBottom: 40,
  },
  bodyText: {
    fontSize: 16,
    maxWidth: 550,
    marginBottom: 52,
  },
  timer: {
    marginBottom: 60,
    width: 662,
  },
  prevWinners: {
    fontSize: 21,
    marginBottom: 40,
  },
  prevLotteriesSlider: {
    marginTop: 40,
  },
  lotteryDate: {
    fontSize: 21,
  },
  mainBg: {
    width: 197,
    height: 56,
    top: 109,
    right: "48%",
  },
}));

export default function WebLottery() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      wrap='nowrap'
      alignItems='center'
      className={`${classes.rootContainer} bg-primary-light relative z-0`}
    >
      <img
        src={images.main.mainBg}
        srcSet={`${images.main.mainBg2x} 2x,
                 ${images.main.mainBg3x} 3x`}
        alt='background'
        className={`absolute max-w-full max-h-full -z-10 ${classes.mainBg}`}
      />
      <Grid item>
        <Typography className={`${classes.headerText} font-heavy`} color='primary'>
          قرعه کشی <span className='text-Secondary'>هفتگی</span>
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={`${classes.bodyText} font-medium`} align='center' color='secondary'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
        </Typography>
      </Grid>
      <Grid item className={classes.timer}>
        <LotteryTimer />
      </Grid>
      <Grid item>
        <Typography className={`${classes.prevWinners} font-bold`} color='secondary'>
          برندگان قرعه کشی های قبلی
        </Typography>
      </Grid>
      <Grid item container justify='space-between' alignItems='center' spacing={3}>
        <Grid item lg={3} md={6} className='w-auto inline-flex flex-col items-center'>
          <WinnerCard username='آرمان نوروزی' avatar={images.mock.user1} />
        </Grid>
        <Grid item lg={3} md={6} className='w-auto inline-flex flex-col items-center'>
          <WinnerCard username='سعید نیک نژاد' avatar={images.mock.user2} />
        </Grid>
        <Grid item lg={3} md={6} className='w-auto inline-flex flex-col items-center'>
          <WinnerCard username='روژان علیپور' avatar={images.mock.user3} />
        </Grid>
        <Grid item lg={3} md={6} className='w-auto inline-flex flex-col items-center'>
          <WinnerCard username='رضا یوسف پور' avatar={images.mock.user4} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        wrap='nowrap'
        justify='space-between'
        alignItems='center'
        className={classes.prevLotteriesSlider}
      >
        <Grid item>
          <PrevPageButton />
        </Grid>
        <Grid item>
          <Typography className={`${classes.lotteryDate} font-bold`} color='primary'>
            قرعه کشی 23 اردیبهشت 99
          </Typography>
        </Grid>
        <Grid item>
          <NextPageButton />
        </Grid>
      </Grid>
    </Grid>
  );
}
