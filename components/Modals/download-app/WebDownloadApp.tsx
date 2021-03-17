import React from "react";
import SheroGanjDialog, {SheroGanjDialogCommonProps} from "../../global/SheroGanjDialog";
import {Grid, Typography} from "@material-ui/core";
import {images} from "../../../constants/images";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  rootContainer: {
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: 54,
    paddingRight: 54,
  },
  downloadButtons: {
    width: 255,
    height: 75,
    marginBottom: 20,
  },
  header: {
    fontSize: 48,
    marginBottom: 49,
  },
}));

export default function WebDownloadApp(props: SheroGanjDialogCommonProps) {
  const classes = useStyles();
  return (
    <SheroGanjDialog {...props}>
      <Grid container direction='column' wrap='nowrap' alignItems='center' className={classes.rootContainer}>
        <Grid item>
          <Typography color='secondary' className={`font-heavy ${classes.header}`}>
            دانلود اپلیکیشن <span className='text-Primary'>شعر و گنج</span>
          </Typography>
        </Grid>
        <Grid item container wrap='nowrap' justify='center' spacing={2}>
          <Grid item md={6}>
            <img
              src={images.downloadApp.bazaar}
              srcSet={`${images.downloadApp.bazaar2x} 2x,
                ${images.downloadApp.bazaar3x} 3x`}
              alt='bazaar'
              className={`cursor-pointer ${classes.downloadButtons}`}
            />
          </Grid>
          <Grid item md={6}>
            <img
              src={images.downloadApp.googlePlay}
              srcSet={`${images.downloadApp.googlePlay2x} 2x,
                ${images.downloadApp.googlePlay3x} 3x`}
              alt='google-play'
              className={`cursor-pointer ${classes.downloadButtons}`}
            />
          </Grid>
        </Grid>
        <Grid item container wrap='nowrap' spacing={2}>
          <Grid item md={6}>
            <img
              src={images.downloadApp.sibche}
              srcSet={`${images.downloadApp.sibche2x} 2x,
              ${images.downloadApp.sibche3x} 3x`}
              alt='sibche'
              className={`cursor-pointer ${classes.downloadButtons}`}
            />
          </Grid>
          <Grid item md={6}>
            <img
              src={images.downloadApp.sibApp}
              srcSet={`${images.downloadApp.sibApp2x} 2x,
              ${images.downloadApp.sibApp3x} 3x`}
              alt='sibApp'
              className={`cursor-pointer ${classes.downloadButtons}`}
            />
          </Grid>
        </Grid>
      </Grid>
    </SheroGanjDialog>
  );
}
