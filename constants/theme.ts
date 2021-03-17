// @ts-ignore
const {createMuiTheme} = require("@material-ui/core");

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      dark: "#f99934",
      main: "#f9a44a",
      light: "#fff9f2",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF",
    },
    secondary: {
      main: "#00416d",
      light: "#003457",
    },
  },
  typography: {
    fontFamily: "YekanBakhFaNum",
    fontWeightMedium: 500,
    fontWeightRegular: "normal",
    fontWeightBold: "bold",
  },
  direction: "rtl",
  overrides: {
    MuiButton: {
      contained: {
        "& .MuiButton-label": {
          zIndex: 110,
          position: "relative",
        },
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.2)",
        },
        "&:after": {
          content: '""',
          display: "inline-block",
          height: "100%",
          width: "100%",
          borderRadius: "inherit",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 100,
          transition: "all .6s",
          background: "inherit",
          opacity: "1 !important",
        },
        "&:hover:after": {
          transform: "scaleX(1.4) scaleY(1.6)",
          opacity: "0 !important",
        },
        "&:focus": {
          transform: "translateY(-1px)",
          boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.2)",
        },
      },
    },
  },
});

module.exports = {theme};
