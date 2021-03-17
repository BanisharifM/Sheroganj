import React from "react";
import {Button, Grid, IconButton, ListItem, ListItemIcon, ListItemText, Paper, Typography} from "@material-ui/core";
import {images} from "../../../constants/images";
import {makeStyles} from "@material-ui/core/styles";
import {useModalDispatch} from "../../../utils/contexts/ModalContext";

export default function WebFooter({scrollToTop}: {scrollToTop: () => void}) {
  return (
    <Grid container direction='column' wrap='nowrap'>
      <Grid item>
        <UpperFooter />
      </Grid>
      <Grid item>
        <LowerFooter scrollToTop={scrollToTop} />
      </Grid>
    </Grid>
  );
}

const useStyles2 = makeStyles((theme) => ({
  rootContainer: {
    height: "calc((400 / 1440) * 100vw)",
    minHeight: 400,
    [theme.breakpoints.up("xl")]: {
      height: `calc((400 / 1440) * ${theme.breakpoints.values.xl}px)`,
    },
  },
  wrapper: {
    paddingRight: "calc((100 / 1440) * 100vw)",
    paddingLeft: "calc((100 / 1440) * 100vw)",
    backgroundImage: `url("${images.footer.mask}")`,
    backgroundSize: "calc((1140 / 1440) * 100vw) calc((400 / 1440) * 100vw)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  sectionContainer: {
    marginTop: 60,
  },
  adFont: {
    fontSize: "calc((60 / 1440) * 100vw)",
    [theme.breakpoints.up("xl")]: {
      fontSize: 60,
    },
  },
  downloadWrapper: {
    marginTop: 50,
  },
  mainImage: {
    height: 400,
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
      className={classes.rootContainer}
    >
      <Grid item container wrap='nowrap' className={`${classes.wrapper} bg-Primary h-full`}>
        <Grid item container direction='column' wrap='nowrap' className={classes.sectionContainer}>
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
        </Grid>
        <Grid item className={`inline-flex items-center self-end`}>
          <img src={images.footer.main} alt='main' className={`${classes.mainImage}`} />
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles4 = makeStyles(() => ({
  rootContainer: {
    paddingRight: "calc((100 / 1440) * 100vw)",
    paddingLeft: "calc((100 / 1440) * 100vw)",
    paddingTop: "calc((100 / 1440) * 100vw)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  paddingBottom: {
    paddingBottom: "calc((80 / 1440) * 100vw)",
  },
  contactUs: {
    fontSize: 28,
  },
  contactUsBorder: {
    width: 3,
    height: 20,
  },
  iconSize: {
    width: 18,
    height: 18,
  },
  contactText: {
    fontSize: 16,
  },
  enamadIcon: {
    width: 86.2,
    height: 142,
  },
  paper: {
    padding: 30,
    borderRadius: 30,
  },
  developer: {
    fontSize: 18,
    width: 172,
    marginInlineEnd: "25px",
  },
  iconButton: {
    width: 62,
    height: 82,
    borderRadius: 20,
  },
}));

const LowerFooter = ({scrollToTop}: {scrollToTop: () => void}) => {
  const classes = useStyles4();
  const openModal = useModalDispatch("developers");
  return (
    <Grid container wrap='nowrap' className={`bg-primary-light ${classes.rootContainer}`}>
      <Grid item container wrap='nowrap' md={5} className={classes.paddingBottom}>
        <Grid item container direction='column' wrap='nowrap'>
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
        </Grid>
        <Grid item>
          <img src={images.footer.enamad} alt='enamad' className={classes.enamadIcon} />
        </Grid>
      </Grid>
      <Grid item md={2} className='inline-flex items-end justify-center'>
        <Button className='min-w-0 px-0 py-0 bg-transparent' onClick={scrollToTop}>
          <img src={images.footer.scrollToTop} alt='scroll-to-top' />
        </Button>
      </Grid>
      <Grid item md={5} className={`inline-flex flex-col items-end ${classes.paddingBottom}`}>
        <Paper className={`${classes.paper} w-fit`} elevation={0}>
          <Grid container wrap='nowrap' alignItems='center'>
            <Grid item>
              <Typography color='secondary' className={`font-heavy ${classes.developer}`}>
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
    </Grid>
  );
};

const useStyles3 = makeStyles(() => ({
  downloadApp: {
    width: 235,
    height: 70,
    borderRadius: 35,
    boxShadow: "0 0 30px 0 rgba(247, 180, 110, 0.3)",
    fontSize: 15,
  },
}));

const DownloadButton = () => {
  const classes = useStyles3();
  const openModal = useModalDispatch("download-app");
  return (
    <Button
      variant='contained'
      className={`${classes.downloadApp} bg-common-white font-bold text-Primary`}
      onClick={openModal}
    >
      دانلود اپلیکیشن "شعر و گنج"
    </Button>
  );
};
