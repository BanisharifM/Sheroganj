import React from "react";
import {Button, ButtonProps, CircularProgress, Typography} from "@material-ui/core";
import clsx from "clsx";
import {images} from "../../../constants/images";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    borderRadius: 30,
  },
  submitIcon: {
    width: 20,
    height: 20,
  },
  submitWrapper: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  submitText: {
    fontSize: 16,
  },
  submitBodyWrapper: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
}));

export default function SubmitButton<T extends React.ElementType = "button">({
  disabled,
  className,
  loading,
  children,
  ...rest
}: ButtonProps<T> & {component?: T}) {
  const classes = useStyles();
  return (
    <Button
      type='submit'
      variant='contained'
      className={clsx(["p-0 justify-between", className, classes.button])}
      disabled={disabled}
      color='primary'
      {...rest}
    >
      <div
        className={`items-center justify-center inline-flex bg-primary-dark ${classes.submitWrapper} rounded-l-none`}
      >
        <img src={images.base.submit} alt='rightArrow' className={classes.submitIcon} />
      </div>
      <div className={`inline-flex w-full justify-center h-full rounded-r-none ${classes.submitBodyWrapper}`}>
        {loading && <CircularProgress variant='indeterminate' size={25} />}
        <Typography
          color='textSecondary'
          className={`font-bold inline-flex items-center justify-center ${classes.submitText}`}
          noWrap
        >
          {children}
        </Typography>
      </div>
    </Button>
  );
}
