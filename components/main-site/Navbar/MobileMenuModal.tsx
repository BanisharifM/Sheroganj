import React from "react";
import {Button, Dialog, DialogContent, DialogTitle, Grid, Grow, IconButton, Typography} from "@material-ui/core";
import {images} from "../../../constants/images";
import {items, names} from "./items";
import {makeStyles} from "@material-ui/core/styles";
import {useModalDispatch} from "../../../utils/contexts/ModalContext";

interface IMobileMenuModalProps {
  open: boolean;
  onClose: () => void;
  onItemClicked: (item: typeof items[number]) => void;
  selectedElement: typeof items[number];
}

const useStyles = makeStyles(() => ({
  dialogTitle: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
    paddingTop: 57,
    marginBottom: 22,
  },
  appBarMobile: {
    width: 56,
    height: 56,
    borderRadius: 27.5,
  },
  menuTitle: {
    fontSize: 18,
  },
  appBarMobileBg: {
    backgroundColor: "rgba(0, 65, 109, 0.02)",
  },
  closeIcon: {
    width: 14,
    height: 14,
  },
  dialogContent: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  menuItemWrapper: {
    marginBottom: 15,
  },
  downloadButtonWrapper: {
    marginTop: 61,
    marginBottom: 41,
  },
}));

export default function MobileMenuModal({onClose, open, onItemClicked, selectedElement}: IMobileMenuModalProps) {
  const classes = useStyles();

  return (
    <>
      <Dialog open={open} onClose={onClose} fullScreen TransitionComponent={Grow} transitionDuration={400}>
        <DialogTitle className={classes.dialogTitle}>
          <Grid container wrap='nowrap' justify='space-between' alignItems='center'>
            <Grid item className={classes.appBarMobile} />
            <Grid item>
              <Typography color='secondary' className={`font-bold ${classes.menuTitle}`}>
                منو
              </Typography>
            </Grid>
            <Grid item className={classes.appBarMobile}>
              <IconButton onClick={() => onClose()} className={`${classes.appBarMobile} ${classes.appBarMobileBg}`}>
                <img src={images.base.close} alt='close' className={classes.closeIcon} />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <Grid container direction='column' wrap='nowrap' alignItems='center' className='w-full'>
            {names.map((value, index) => (
              <Grid item className={`w-full last:mb-0 ${classes.menuItemWrapper}`} key={index}>
                <MenuItem
                  title={value}
                  item={items[index]}
                  onClick={(item) => {
                    onItemClicked(item);
                    onClose();
                  }}
                  selected={selectedElement === items[index]}
                />
              </Grid>
            ))}
            <Grid item className={classes.downloadButtonWrapper}>
              <DownloadButton />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}

interface IMenuItemProps {
  title: string;
  selected: boolean;
  onClick: (item: typeof items[number]) => void;
  item: typeof items[number];
}

const useStyles2 = makeStyles(() => ({
  container: {
    height: 70,
    borderRadius: 15,
    backgroundColor: "rgba(0, 65, 109, 0.02)",
  },
  menuTitle: {
    fontSize: 16,
  },
}));

const MenuItem = ({title, selected, onClick, item}: IMenuItemProps) => {
  const classes = useStyles2();
  return (
    <Grid
      container
      wrap='nowrap'
      justify='center'
      alignItems='center'
      className={classes.container}
      onClick={() => onClick(item)}
    >
      <Grid item>
        <Typography
          className={`${classes.menuTitle} ${selected ? "font-bold" : "font-medium"}`}
          color={selected ? "primary" : "secondary"}
        >
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

const useStyles3 = makeStyles((theme) => ({
  root: {
    width: 224,
    height: 60,
    borderRadius: 35,
    boxShadow: "0 0 30px 0 rgba(247, 180, 110, 0.3)",
    backgroundColor: theme.palette.primary.main,
  },
}));

const DownloadButton = () => {
  const classes = useStyles3();
  const openModal = useModalDispatch("download-app");

  return (
    <Button variant='contained' className={`${classes.root} font-bold text-text-secondary`} onClick={openModal}>
      دانلود اپلیکیشن "شعر و گنج"
    </Button>
  );
};
