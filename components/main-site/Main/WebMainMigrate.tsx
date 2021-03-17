import React from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import PaginationIcon from "../../icons/PaginationIcon";
import {images} from "../../../constants/images";
import {makeStyles} from "@material-ui/core/styles";
import {useModalDispatch} from "../../../utils/contexts/ModalContext";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: 774,
    paddingInlineStart: "100px",
    borderRadius: 10,
  },
  mainBg: {
    left: 70,
    top: "calc(((88 / 1440) * 100vw) + 181px)",
    width: "calc((296 / 1440) * 100vw)",
    height: "calc((85 / 1440) * 100vw)",
    "@media (min-width: 1440px)": {
      top: 269,
      width: 296,
      height: 85,
    },
  },
  sectionContainer: {
    marginTop: 181,
  },
  adFont: {
    fontSize: "calc((60 / 1440) * 100vw)",
    "@media (min-width: 1440px)": {
      fontSize: 60,
    },
  },
  bodyWrapper: {
    marginTop: 20,
    width: 400,
  },
  bodyText: {
    fontSize: 16,
  },
  downloadWrapper: {
    marginBottom: 225,
    marginTop: 50,
  },
  mainImageWrapper: {
    marginTop: 8,
    marginInlineEnd: "-8px",
  },
  mainImage: {
    width: 501,
  },
  scrollButton: {
    width: 110,
    height: 80,
    background: `url("${images.main.scrollToWrapper}")`,
  },
  scrollToBottomOuter: {
    transform: "translateX(-100px)",
  },
  scrollToBottomIcon: {
    top: 37,
    height: 12,
    width: 18,
  },
}));

export default function WebMain({scrollToNext}: {scrollToNext: () => void}) {
  const classes = useStyles();
  return (
    <Grid item container wrap='nowrap' className={`${classes.wrapper} bg-primary-light z-0 relative`}>
      <div className={`${classes.scrollToBottomOuter} absolute bottom-0 flex flex-col items-center w-full`}>
        <Button
          className={`min-w-0 p-0 ${classes.scrollButton}`}
          classes={{label: "w-full h-full"}}
          onClick={scrollToNext}
        >
          <div className='relative w-full h-full flex flex-col items-center'>
            <PaginationIcon
              fillColor='primary'
              className={`transform rotate-90 absolute ${classes.scrollToBottomIcon}`}
            />
          </div>
        </Button>
      </div>
      <img
        src={images.main.mainBg}
        srcSet={`${images.main.mainBg2x} 2x,
                 ${images.main.mainBg3x} 3x`}
        alt='background'
        className={`absolute max-w-full max-h-full -z-10 ${classes.mainBg}`}
      />
      <Grid item md={7} container direction='column' wrap='nowrap' className={classes.sectionContainer}>
        <Grid item>
          <Typography color='secondary' className={`font-fat ${classes.adFont}`} noWrap>
            شعر بخوانید، دعوت کنید
          </Typography>
        </Grid>
        <Grid item>
          <Typography color='primary' className={`font-fat ${classes.adFont} z-20`} noWrap>
            کسب درآمد <span className='text-Secondary'>کنید!</span>
          </Typography>
        </Grid>
        <Grid item className={classes.bodyWrapper}>
          <Typography color='secondary' className={`font-medium ${classes.bodyText}`}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            صنعت چاپ
          </Typography>
        </Grid>
        <Grid item className={classes.downloadWrapper}>
          <DownloadButton />
        </Grid>
      </Grid>
      <Grid item md={5} className={`${classes.mainImageWrapper} inline-flex items-center`}>
        <img
          src={images.main.main}
          srcSet={`${images.main.main2x} 2x,
                ${images.main.main3x} 3x`}
          alt='main'
          className={`${classes.mainImage} max-w-full max-h-full`}
        />
      </Grid>
    </Grid>
  );
}

const useStyles2 = makeStyles(() => ({
  downloadApp: {
    width: 224,
    height: 60,
    borderRadius: 35,
    boxShadow: "0 0 30px 0 rgba(247, 180, 110, 0.3)",
    fontSize: 15,
  },
}));

const DownloadButton = () => {
  const classes = useStyles2();
  const openModal = useModalDispatch("download-app");
  return (
    <Button
      variant='contained'
      className={`${classes.downloadApp} font-bold text-text-secondary bg-Primary`}
      onClick={openModal}
    >
      دانلود اپلیکیشن "شعر و گنج"
    </Button>
  );
};
