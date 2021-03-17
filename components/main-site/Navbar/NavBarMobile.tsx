import {AppBar, Grid, IconButton, Slide, useScrollTrigger} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import {images} from "../../../constants/images";
import {INavBarProps} from "./index";
import MobileMenuModal from "./MobileMenuModal";

const useStyles = makeStyles(() => ({
  rootContainer: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  logo: {
    width: 60,
    height: 60,
  },
  iconButton: {
    width: 56,
    height: 56,
    borderRadius: 27.5,
    backgroundColor: "rgba(0, 65, 109, 0.02)",
  },
  menuIcon: {
    width: 16,
    height: 8,
  },
  marginFixer: {
    height: 130,
  },
}));

export default function NavBarMobile({onItemSelected, selectedItem}: INavBarProps) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const topTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const selected = selectedItem === "footer" ? "lottery" : selectedItem;

  const anyTrigger = useScrollTrigger();
  const classes = useStyles();
  return (
    <>
      <MobileMenuModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedElement={selected}
        onItemClicked={(item) => onItemSelected(item)}
      />
      <Slide appear={false} direction='down' in={!anyTrigger}>
        <AppBar className='bg-common-white' elevation={topTrigger ? 4 : 0}>
          <Grid container wrap='nowrap' justify='space-between' alignItems='center' className={classes.rootContainer}>
            <Grid item>
              <img src={images.base.logo} alt='logo' className={classes.logo} />
            </Grid>
            <Grid item>
              <IconButton className={classes.iconButton} onClick={() => setModalOpen(true)}>
                <img src={images.base.menu} alt='menu' className={classes.menuIcon} />
              </IconButton>
            </Grid>
          </Grid>
        </AppBar>
      </Slide>
      <div className={`${classes.marginFixer}`} />
    </>
  );
}
