import {MuiThemeProvider} from "@material-ui/core/styles";
import {AppProps} from "next/dist/next-server/lib/router/router";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import RTLProvider from "../components/global/RTLProvider";
//@ts-ignore
import * as Theme from "../constants/theme";
import "../styles/globals.css";
import ModalProvider from "../utils/contexts/ModalContext/Provider";
function MyApp({Component, pageProps}: AppProps) {
  React.useEffect(() => {
    // @ts-ignore
    window.theme = Theme.theme;
  }, []);
  return (
    <MuiThemeProvider theme={Theme.theme}>
      <RTLProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </RTLProvider>
    </MuiThemeProvider>
  );
}

export default MyApp;
