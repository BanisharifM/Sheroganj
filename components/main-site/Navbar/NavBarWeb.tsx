import React from "react";
import {AppBar, Container, Grid, Link, Slide, Typography, useMediaQuery, useScrollTrigger} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {images} from "../../../constants/images";
import {useModalState} from "../../../utils/contexts/ModalContext";
import {INavBarProps} from "./index";
import {items, names} from "./items";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  container: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
  },
  logo: {
    width: 60,
    height: 60,
  },
  menuItem: {
    marginBottom: 15,
    marginLeft: "calc((50 / 1440) * 100vw)",
  },
  marginFixer: {
    height: 150,
  },
}));

export default function NavBarWeb({onItemSelected, selectedItem}: INavBarProps) {
  const classes = useStyles();
  const topTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const h924 = useMediaQuery("@media (min-height:924px)");

  const [scrollDirection, setScrollDirection] = React.useState<"down" | "up">("up");

  React.useEffect(() => {
    const wheelHandler = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
    };
    window.addEventListener("wheel", wheelHandler);
  }, []);

  const modalClosed = useModalState() === "";

  const selected = selectedItem === "footer" ? "lottery" : selectedItem;

  return (
    <>
      <Slide appear={false} direction='down' in={modalClosed && (h924 || scrollDirection === "up")}>
        <AppBar className={`bg-white`} elevation={topTrigger ? 4 : 0}>
          <Container maxWidth='lg' className={classes.container}>
            <Grid container wrap='nowrap' className={classes.rootContainer} justify='space-between' alignItems='center'>
              <Grid item>
                <img src={images.base.logo} alt='logo' className={classes.logo} />
              </Grid>
              <Grid item container wrap='nowrap' justify='space-between' className='w-fit'>
                {names.map((value, index) => (
                  <Grid item className={`w-full last:mb-0 last:ml-0 ${classes.menuItem}`} key={index}>
                    <MenuItem
                      title={value}
                      item={items[index]}
                      onClick={(item) => onItemSelected(item)}
                      selected={selected === items[index]}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Container>
        </AppBar>
      </Slide>
      {/*<div className={classes.marginFixer} />*/}
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
  itemText: {
    fontSize: 16,
  },
  itemMigrate: {
    "&>div:nth-child(2)": {
      width: ({selected}: {selected: boolean}) => (selected ? 20 : 0),
      transition: "width 0.2s",
      height: 2,
    },
    "&:hover": {
      "&>div:nth-child(2)": {
        width: 20,
      },
    },
  },
}));

const MenuItem = ({title, selected, item, onClick}: IMenuItemProps) => {
  const classes = useStyles2({selected});
  return (
    <Grid
      container
      wrap='nowrap'
      direction='column'
      onClick={() => onClick(item)}
      component={Link}
      href={`#${item}`}
      className={classes.itemMigrate}
    >
      <Grid item>
        <Typography color={selected ? "primary" : "secondary"} className={`${classes.itemText}`} noWrap>
          {title}
        </Typography>
      </Grid>
      <Grid item className={`${selected ? "bg-Primary" : "bg-Secondary"}`} />
    </Grid>
  );
};
