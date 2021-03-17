import {Button, Grid, Theme, Typography, useMediaQuery} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import React from "react";
import {images} from "../../constants/images";
import SheroGanjDialog, {SheroGanjDialogCommonProps} from "../global/SheroGanjDialog";
import PaginationIcon from "../icons/PaginationIcon";

const useStyles = makeStyles((theme) =>
  createStyles({
    rootContainer: {
      paddingTop: 40,
      [theme.breakpoints.up("md")]: {
        paddingTop: 80,
      },
    },
    section_title: {
      fontSize: "24px",
      width: "247px",
      [theme.breakpoints.up("md")]: {
        width: "800px",
        fontSize: "48px",
      },
    },
    logo_container: {
      width: "150px",
      height: "150px",
      marginTop: "50px",
      [theme.breakpoints.up("md")]: {
        marginTop: "70px",
      },
    },
    company_name: {
      fontSize: "16px",
      marginTop: "20px",
      [theme.breakpoints.up("md")]: {
        marginTop: "30px",
        fontSize: "21px",
      },
    },
    company_description: {
      fontSize: "14px",
      width: "255px",
      marginTop: "20px",
      [theme.breakpoints.up("md")]: {
        width: "487px",
        marginTop: "10px",
        fontSize: "14px",
        lineHeight: "30px",
      },
    },
    footer_container: {
      width: "255px",
      height: "165px",
      borderTopRightRadius: "30px",
      borderTopLeftRadius: "30px",
      marginTop: 45,
      [theme.breakpoints.up("md")]: {
        width: "375px",
        height: "120px",
      },
    },
    btn: {
      width: "195px",
      height: "50px",
      borderRadius: "35px",
      [theme.breakpoints.up("md")]: {
        width: "60px",
        height: "60px",
      },
    },
    site_container: {
      width: "195px",
      height: "30px",
    },
    site_name: {
      fontSize: "16px",
      width: "126px",
      marginLeft: "10px",
      lineHeight: "12px",
    },
    divider: {
      width: "4px",
      height: "30px",
      borderRadius: "2.5px",
    },
    close_btn: {
      width: "55px",
      height: "55px",
      top: "-75px",
    },
  })
);

export default function DevelopersModal(props: SheroGanjDialogCommonProps) {
  const classes = useStyles();
  const isWeb = useMediaQuery<Theme>((theme) => theme.breakpoints.up("md"));
  return (
    <SheroGanjDialog fullWidth fullHeight={!isWeb} {...props}>
      <Grid
        container
        direction='column'
        wrap='nowrap'
        alignItems='center'
        justify='space-between'
        className={`${classes.rootContainer} h-full`}
      >
        <Grid item container direction='column' wrap='nowrap' alignItems='center'>
          <Grid item>
            <Typography align='center' className={`${classes.section_title} font-heavy`} color='secondary'>
              توسعه دهنده اپلیکیشن و وبسایت <span className='text-primary-main'>شعر و گنج</span>
            </Typography>
          </Grid>
          <Grid item>
            <img width={150} src={images.base.logo} alt='logo' className={classes.logo_container} />
          </Grid>
          <Grid item>
            <Typography color='primary' align='center' className={`${classes.company_name} font-heavy`}>
              شرکت برنامه نویسی
            </Typography>
          </Grid>
          <Grid item>
            <Typography color='secondary' align='center' className={`${classes.company_description} font-medium`}>
              لورم ایپسوم متن ساختگی باتولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
              صنعت چاپ.
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <div
            className={`${classes.footer_container} bg-secondary-light
                    flex flex-col justify-around py-4
                    md:flex-row-reverse items-center justify-around py-0
                  `}
          >
            <div className={`${classes.site_container} mx-auto flex flex-row-reverse items-center md:mx-0`}>
              <span className={`${classes.divider} block bg-primary-main`} />
              <span className={`${classes.site_name} text-white`}>WWW.Sitename.ir</span>
            </div>
            <div>
              <Button
                className={`${classes.btn} block mx-auto bg-primary-main flex justify-center items-center px-0 min-w-0`}
              >
                <PaginationIcon fillColor='#FFF' />
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </SheroGanjDialog>
  );
}
