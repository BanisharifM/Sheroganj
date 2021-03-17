import React from "react";
import SheroGanjDialog, {SheroGanjDialogCommonProps} from "../../global/SheroGanjDialog";
import {Grid, Typography} from "@material-ui/core";
import {images} from "../../../constants/images";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  downloadButtons: {
    width: 255,
    height: 75,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 30,
    marginTop: 40,
  },
}));

export default function MobileDownloadApp(props: SheroGanjDialogCommonProps) {
  const classes = useStyles();
  return (
    <SheroGanjDialog {...props} fullWidth fullHeight>
      <Grid container direction='column' wrap='nowrap' className='w-auto' alignItems='center'>
        <Grid item>
          <Typography color='secondary' className={`font-heavy ${classes.header}`} align='center'>
            دانلود اپلیکیشن <span className='text-Primary'>شعر و گنج</span>
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={images.downloadApp.bazaar}
            srcSet={`${images.downloadApp.bazaar2x} 2x,
              ${images.downloadApp.bazaar3x} 3x`}
            alt='bazaar'
            className={`cursor-pointer ${classes.downloadButtons}`}
          />
        </Grid>
        <Grid item>
          <img
            src={images.downloadApp.googlePlay}
            srcSet={`${images.downloadApp.googlePlay2x} 2x,
              ${images.downloadApp.googlePlay3x} 3x`}
            alt='google-play'
            className={`cursor-pointer ${classes.downloadButtons}`}
          />
        </Grid>
        <Grid item>
          <img
            src={images.downloadApp.sibche}
            srcSet={`${images.downloadApp.sibche2x} 2x,
              ${images.downloadApp.sibche3x} 3x`}
            alt='sibche'
            className={`cursor-pointer ${classes.downloadButtons}`}
          />
        </Grid>
        <Grid item>
          <img
            src={images.downloadApp.sibApp}
            srcSet={`${images.downloadApp.sibApp2x} 2x,
              ${images.downloadApp.sibApp3x} 3x`}
            alt='sibApp'
            className={`cursor-pointer ${classes.downloadButtons}`}
          />
        </Grid>
      </Grid>
    </SheroGanjDialog>
  );
}
