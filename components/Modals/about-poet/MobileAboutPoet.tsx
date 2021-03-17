import React from "react";
import SheroGanjDialog, {SheroGanjDialogCommonProps} from "../../global/SheroGanjDialog";
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import PoetPermission from "./PoetPermission";

const useStyles = makeStyles(() => ({
  rootContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 40,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 15,
  },
  bodyText: {
    fontSize: 14,
    marginBottom: 40,
  },
  permissions: {
    fontSize: 18,
    marginBottom: 20,
  },
  poetPermission: {
    marginBottom: 15,
  },
}));

export default function MobileAboutPoet(props: SheroGanjDialogCommonProps) {
  const classes = useStyles();
  return (
    <SheroGanjDialog {...props} fullWidth fullHeight>
      <Grid container direction='column' wrap='nowrap' alignItems='center' className={classes.rootContainer}>
        <Grid item>
          <Typography color='secondary' className={`${classes.headerText} font-heavy`} noWrap>
            اطلاعات بیشتر در مورد <span className='text-Primary'>شاعر</span>
          </Typography>
        </Grid>
        <Grid item>
          <Typography color='secondary' align='center' className={`${classes.bodyText} font-medium`}>
            لورم ایپسوم متن ساختگی باتولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            صنعت چاپ.
          </Typography>
        </Grid>
        <Grid item>
          <Typography color='secondary' className={`${classes.permissions}`}>
            مجوزهای شاعر
          </Typography>
        </Grid>
        <Grid item className={classes.poetPermission}>
          <PoetPermission />
        </Grid>
        <Grid item className={classes.poetPermission}>
          <PoetPermission />
        </Grid>
        <Grid item className={classes.poetPermission}>
          <PoetPermission />
        </Grid>
      </Grid>
    </SheroGanjDialog>
  );
}
