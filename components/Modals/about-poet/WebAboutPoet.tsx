import React from "react";
import SheroGanjDialog, {SheroGanjDialogCommonProps} from "../../global/SheroGanjDialog";
import {Grid, Typography} from "@material-ui/core";
import PoetPermission from "./PoetPermission";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  rootContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 80,
    paddingBottom: 80,
  },
  headerText: {
    fontSize: 48,
    marginBottom: 30,
  },
  bodyText: {
    fontSize: 16,
    marginBottom: 40,
    width: 550,
  },
  permissions: {
    fontSize: 28,
    marginBottom: 30,
  },
  poetPermission: {
    // marginBottom: 15,
  },
}));

export default function WebAboutPoet(props: SheroGanjDialogCommonProps) {
  const classes = useStyles();
  return (
    <SheroGanjDialog {...props} fullWidth>
      <Grid container direction='column' wrap='nowrap' alignItems='center' className={classes.rootContainer}>
        <Grid item>
          <Typography color='secondary' className={`${classes.headerText} font-heavy`}>
            اطلاعات بیشتر در مورد <span className='text-Primary'>شاعر</span>
          </Typography>
        </Grid>
        <Grid item>
          <Typography color='secondary' align='center' className={`${classes.bodyText} font-medium`}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
            با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
            و متخصصان را می طلبد.
          </Typography>
        </Grid>
        <Grid item>
          <Typography color='secondary' className={`${classes.permissions}`}>
            مجوزهای شاعر
          </Typography>
        </Grid>
        <Grid item container wrap='nowrap' spacing={4} justify='center' xs={12}>
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
      </Grid>
    </SheroGanjDialog>
  );
}
