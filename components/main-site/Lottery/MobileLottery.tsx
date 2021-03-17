import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";
import {images} from "../../../constants/images";
import LotteryTimer from "./LotteryTimer";
import WinnerCard from "./WinnerCard";
import {NextPageButton, PrevPageButton} from "../../global/button/PagingButton";
import {IMainSiteMobileCommonProps} from "../types";

const useStyles = makeStyles(() => ({
  rootContainer: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
  },
  bodyText: {
    fontSize: 14,
    maxWidth: 255,
    marginBottom: 30,
  },
  timer: {
    marginBottom: 40,
    width: 295,
  },
  prevWinners: {
    fontSize: 18,
    marginBottom: 30,
  },
  winners: {
    marginBottom: 20,
  },
  prevLotteriesSlider: {
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  lotteryDate: {
    marginTop: 40,
    fontSize: 16,
  },
  mainBg: {
    width: 99,
    height: 29,
    top: 52,
    right: "48%",
  },
}));

export default function MobileLottery({refObject}: IMainSiteMobileCommonProps) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      wrap='nowrap'
      alignItems='center'
      className={`${classes.rootContainer} bg-primary-light relative z-0`}
      ref={refObject}
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
          لورم ایپسوم متن ساختگی باتولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
          با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
          متخصصان را می طلبد.
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
      <Grid item className={`${classes.winners} last:mb-0`}>
        <WinnerCard username='آرمان نوروزی' avatar={images.mock.user1} />
      </Grid>
      <Grid item className={`${classes.winners} last:mb-0`}>
        <WinnerCard username='سعید نیک نژاد' avatar={images.mock.user2} />
      </Grid>
      <Grid item className={`${classes.winners} last:mb-0`}>
        <WinnerCard username='روژان علیپور' avatar={images.mock.user3} />
      </Grid>
      <Grid item className={`${classes.winners} last:mb-0`}>
        <WinnerCard username='رضا یوسف پور' avatar={images.mock.user4} />
      </Grid>
      <Grid item>
        <Typography className={`${classes.lotteryDate} font-bold`} color='primary'>
          قرعه کشی 23 اردیبهشت 99
        </Typography>
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
          <NextPageButton />
        </Grid>
      </Grid>
    </Grid>
  );
}
