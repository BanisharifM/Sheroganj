import {Dialog, DialogProps, DialogTitle, Grow, IconButton, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import {images} from "../../constants/images";
import {Scrollbars} from "react-custom-scrollbars";

const useStyles = makeStyles((theme) => ({
  rootContainerPaper: {
    borderRadius: 30,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  iconButton: {
    width: 55,
    height: 55,
  },
  closeIcon: {
    width: 8,
    height: 8,
    [theme.breakpoints.up("md")]: {
      width: 14,
      height: 14,
    },
  },
  paper: {
    borderRadius: 30,
  },
}));

export interface SheroGanjDialogCommonProps {
  open: boolean;
  onClose: () => void;
}

export default function SheroGanjDialog({
  fullHeight,
  children,
  ...props
}: DialogProps & {
  fullHeight?: boolean;
}) {
  const classes = useStyles();
  return (
    <Dialog
      {...props}
      TransitionComponent={Grow}
      transitionDuration={400}
      classes={{
        paper: `bg-transparent rounded-t-none overflow-hidden ${classes.rootContainerPaper} ${
          fullHeight ? "h-full" : ""
        }`,
      }}
      PaperProps={{elevation: 0}}
      maxWidth='lg'
    >
      <DialogTitle
        className={`inline-flex justify-center`}
        onClick={(event) => props?.onClose?.(event, "escapeKeyDown")}
      >
        <IconButton
          className={`${classes.iconButton} bg-common-white`}
          onClick={(e) => props?.onClose?.(e, "escapeKeyDown")}
        >
          <img src={images.base.close} alt='close' className={classes.closeIcon} />
        </IconButton>
      </DialogTitle>
      <Paper
        elevation={24}
        className={`bg-common-white w-full scrollbar-none ${
          classes.paper
        } inline-flex flex-col items-center overflow-auto ${fullHeight ? "h-full" : ""}`}
      >
        {children}
      </Paper>
    </Dialog>
  );
}
