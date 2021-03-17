import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {images} from "../../../constants/images";
import {Button, Grid, IconButton, ListItem, ListItemIcon, ListItemText, Paper, Typography} from "@material-ui/core";
import {useModalDispatch} from "../../../utils/contexts/ModalContext";
import {IMainSiteMobileCommonProps} from "../types";

export default function MobileFooter({scrollToTop, refObject}: IMainSiteMobileCommonProps & {scrollToTop: () => void}) {
  return (
    <Grid container direction='column' wrap='nowrap' alignItems='center' ref={refObject}>
      <Grid item className='w-full'>
        <UpperFooter />
      </Grid>
      <Grid item className='w-full'>
        <LowerFooter scrollToTop={scrollToTop} />
      </Grid>
    </Grid>
  );
}

const useStyles2 = makeStyles(() => ({
  rootContainer: {
    height: 544,
    marginTop: 40,
    backgroundImage: `url("${images.footer.responsiveMask}")`,
    paddingTop: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  sectionContainer: {
    marginTop: 60,
  },
  adFont: {
    fontSize: 30,
  },
  downloadWrapper: {
    marginTop: 25,
  },
  mainImage: {
    height: 544 / 2,
  },
}));

const UpperFooter = () => {
  const classes = useStyles2();
  return (
    <Grid
      container
      direction='column'
      wrap='nowrap'
      justify='space-between'
      alignItems='center'
      className={`${classes.rootContainer} bg-Primary`}
    >
      <Grid item>
        <Typography color='secondary' className={`font-fat ${classes.adFont}`} noWrap>
          شعر بخوانید، دعوت کنید
        </Typography>
      </Grid>
      <Grid item>
        <Typography color='textSecondary' className={`font-fat ${classes.adFont}`} noWrap>
          کسب درآمد <span className='text-Secondary'>کنید!</span>
        </Typography>
      </Grid>
      <Grid item className={classes.downloadWrapper}>
        <DownloadButton />
      </Grid>
      <Grid item>
        <img src={images.footer.main} alt='main' className={`${classes.mainImage}`} />
      </Grid>
    </Grid>
  );
};

const useStyles4 = makeStyles(() => ({
  rootContainer: {
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  wrapper: {
    paddingRight: 21,
    paddingLeft: 21,
  },
  contactUs: {
    fontSize: 28,
  },
  contactUsBorder: {
    width: 3,
    height: 20,
  },
  iconSize: {
    width: 20,
    height: 20,
  },
  contactText: {
    fontSize: 16,
  },
  enamadIcon: {
    width: 86,
    height: 142,
  },
  paper: {
    padding: 15,
    paddingTop: 30,
    marginTop: 40,
    borderRadius: 30,
    marginBottom: 50,
  },
  developer: {
    fontSize: 16,
    width: 153,
  },
  iconButton: {
    width: 225,
    height: 60,
    borderRadius: 20,
    marginTop: 20,
  },
}));

const LowerFooter = ({scrollToTop}: {scrollToTop: () => void}) => {
  const classes = useStyles4();
  const openModal = useModalDispatch("developers");
  return (
    <Grid
      container
      direction='column'
      wrap='nowrap'
      alignItems='center'
      className={`bg-primary-light ${classes.rootContainer}`}
    >
      <Grid item direction='column' container wrap='nowrap' className={`${classes.wrapper} w-auto`}>
        <Grid item container wrap='nowrap' alignItems='center'>
          <Grid item className={`bg-Primary ${classes.contactUsBorder}`} />
          <Grid item>
            <ListItem className={`font-heavy text-Secondary ${classes.contactUs}`}>تماس با ما</ListItem>
          </Grid>
        </Grid>
        <Grid item>
          <ListItem>
            <ListItemIcon>
              <img src={images.footer.mail} alt='mail' className={classes.iconSize} />
            </ListItemIcon>
            <ListItemText
              primary='companymail@gmail.com'
              primaryTypographyProps={{
                className: `${classes.contactText} font-bold text-start`,
                color: "secondary",
              }}
            />
          </ListItem>
        </Grid>
        <Grid item>
          <ListItem>
            <ListItemIcon>
              <img src={images.footer.instagram} alt='instagram' className={classes.iconSize} />
            </ListItemIcon>
            <ListItemText
              primary='InstaUsername'
              primaryTypographyProps={{
                className: `${classes.contactText} font-bold text-start`,
                color: "secondary",
              }}
            />
          </ListItem>
        </Grid>
        <Grid item className='inline-flex flex-col items-center mt-4'>
          <img src={images.footer.enamad} alt='enamad' className={classes.enamadIcon} />
        </Grid>
      </Grid>
      <Grid item>
        <Paper className={`${classes.paper} w-fit`} elevation={0}>
          <Grid container direction='column' wrap='nowrap' alignItems='center'>
            <Grid item>
              <Typography color='secondary' className={`font-heavy ${classes.developer}`} align='center'>
                توسعه دهنده اپلیکیشن و وبسایت <span className='text-Primary'>شعر و گنج</span>
              </Typography>
            </Grid>
            <Grid item>
              <IconButton className={`${classes.iconButton} bg-primary-light`} onClick={openModal}>
                <img src={images.footer.arrowLeft} alt='arrow' />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item>
        <Button className='min-w-0 px-0 py-0 bg-transparent' onClick={scrollToTop}>
          <img src={images.footer.scrollToTop} alt='scroll-to-top' />
        </Button>
      </Grid>
    </Grid>
  );
};

const useStyles3 = makeStyles(() => ({
  downloadApp: {
    width: 224,
    height: 60,
    borderRadius: 35,
    boxShadow: "0 0 30px 0 rgba(247, 180, 110, 0.3)",
    fontSize: 14,
  },
}));

const DownloadButton = () => {
  const classes = useStyles3();
  const openModal = useModalDispatch("download-app");
  return (
    <Button
      variant='contained'
      className={`${classes.downloadApp} font-bold text-Primary bg-common-white`}
      onClick={openModal}
    >
      دانلود اپلیکیشن "شعر و گنج"
    </Button>
  );
};
