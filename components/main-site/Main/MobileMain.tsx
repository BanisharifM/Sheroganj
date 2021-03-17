import React from "react";
import {Button, Container, Grid, Typography} from "@material-ui/core";
import {images} from "../../../constants/images";
import {makeStyles} from "@material-ui/core/styles";
import {useModalDispatch} from "../../../utils/contexts/ModalContext";
import {IMainSiteMobileCommonProps} from "../types";

const useStyles = makeStyles(() => ({
  rootContainer: {
    marginTop: 30,
  },
  innerContainer: {
    height: 765,
    paddingTop: 50,
    paddingBottom: 40,
    borderRadius: 10,
  },
  root: {
    width: 287,
  },
  adFont: {
    fontSize: 30,
  },
  bodyText: {
    fontSize: 14,
    marginTop: 15,
  },
  downloadButtonWrapper: {
    marginTop: 25,
  },
  mainImage: {
    width: 287,
    marginTop: 10,
  },
  mainBg: {
    right: "calc((50%) - 40px)",
    top: 97,
    width: 140,
    height: 40,
  },
}));

export default function MobileMain({refObject}: IMainSiteMobileCommonProps) {
  const classes = useStyles();
  return (
    <>
      <Container disableGutters className={`w-full ${classes.rootContainer}`} ref={refObject}>
        <Grid
          item
          container
          direction='column'
          wrap='nowrap'
          alignItems='center'
          className={`w-full ${classes.innerContainer} bg-primary-light z-0 relative`}
        >
          <img
            src={images.main.mainBg}
            srcSet={`${images.main.mainBg2x} 2x,
                 ${images.main.mainBg3x} 3x`}
            alt='background'
            className={`absolute max-w-full max-h-full -z-10 ${classes.mainBg}`}
          />
          <Grid item container direction='column' wrap='nowrap' alignItems='center' className={classes.root}>
            <Grid item>
              <Typography color='secondary' className={`font-fat ${classes.adFont}`}>
                شعر بخوانید، دعوت کنید
              </Typography>
            </Grid>
            <Grid item>
              <Typography color='primary' className={`font-fat ${classes.adFont}`}>
                کسب درآمد <span className='text-Secondary'>کنید!</span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={`font-medium ${classes.bodyText}`} align='center' color='secondary'>
                لورم ایپسوم متن ساختگی باتولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                از صنعت چاپ.
              </Typography>
            </Grid>
            <Grid item className={classes.downloadButtonWrapper}>
              <DownloadButton />
            </Grid>
            <Grid item>
              <img
                src={images.main.main}
                srcSet={`${images.main.main2x} 2x,
                ${images.main.main3x} 3x`}
                alt='main'
                className={`${classes.mainImage} max-h-full max-w-full`}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

const useStyles2 = makeStyles(() => ({
  downloadButton: {
    width: 224,
    height: 60,
    borderRadius: 35,
    boxShadow: "0 0 30px 0 rgba(247, 180, 110, 0.3)",
    fontSize: 14,
  },
}));

const DownloadButton = () => {
  const classes = useStyles2();
  const openModal = useModalDispatch("download-app");
  return (
    <Button
      variant='contained'
      className={`${classes.downloadButton} font-bold text-text-secondary bg-Primary`}
      onClick={openModal}
    >
      دانلود اپلیکیشن "شعر و گنج"
    </Button>
  );
};
