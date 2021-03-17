import ReactFullpage, {fullpageApi} from "@fullpage/react-fullpage";
import {Container, useMediaQuery} from "@material-ui/core";
import {makeStyles, Theme} from "@material-ui/core/styles";
import ScrollIndicator from "components/global/ScrollIndicator";
import AboutShaer from "components/main-site/AboutShaer";
import AboutSheroGanj from "components/main-site/AboutSheroGanj";
import BestInviters from "components/main-site/BestInviters";
import MobileLottery from "components/main-site/Lottery/MobileLottery";
import WebLottery from "components/main-site/Lottery/WebLottery";
import MobileMain from "components/main-site/Main/MobileMain";
import WebMainMigrate from "components/main-site/Main/WebMainMigrate";
import Navbar from "components/main-site/Navbar";
import {items} from "components/main-site/Navbar/items";
import Teaching from "components/main-site/Teaching";
import Head from "next/head";
import React, {MutableRefObject, useEffect, useRef, useState} from "react";
import {useModalState} from "utils/contexts/ModalContext";
import ReactFullpageSection from "../components/global/FullPageSection";
import ResponsiveHidden from "../components/global/ResponsiveHidden";
import MobileFooter from "../components/main-site/Footer/MobileFooter";
import WebFooter from "../components/main-site/Footer/WebFooter";
import Modals from "../components/Modals";
import useScrollTo from "../utils/useScrollTo";

const useStyles = makeStyles((theme) => ({
  mobileContainer: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  container: {
    paddingTop: 100,
    paddingBottom: 100,
  },
  mt_sections: {
    marginTop: "40px",
    [theme.breakpoints.up("md")]: {
      marginTop: "100px",
    },
  },
  marginFixer: {
    height: 100,
  },
}));

const pluginWrapper = () => {
  require("fullpage.js/vendors/scrolloverflow");
};

export default function Home() {
  const classes = useStyles();
  const modalState = useModalState();

  const scrollCartridgeCount = 2;

  const [scrollCount, setScrollCount] = useState(scrollCartridgeCount);
  const [footerOrMainScrollButton, setFooterOrMainScrollButton] = useState<{to: "main" | "footer"}>({to: "main"});
  const [selectedItem, setSelectedItem] = useState<typeof items[number]>("main");

  const mainRef = useRef<HTMLDivElement>((null as any) as HTMLDivElement);
  const aboutSherRef = useRef<HTMLDivElement>((null as any) as HTMLDivElement);
  const aboutShaerRef = useRef<HTMLDivElement>((null as any) as HTMLDivElement);
  const teachingRef = useRef<HTMLDivElement>((null as any) as HTMLDivElement);
  const bestInvitersRef = useRef<HTMLDivElement>((null as any) as HTMLDivElement);
  const lotteryRef = useRef<HTMLDivElement>((null as any) as HTMLDivElement);
  const footerRef = useRef<HTMLDivElement>((null as any) as HTMLDivElement);

  const rfRef = React.useRef<fullpageApi<typeof items>>();

  const defaultBehavior = {scrollBehavior: "smooth"} as const;
  const scrollToMain = useScrollTo(mainRef, defaultBehavior);
  const scrollToAboutSher = useScrollTo(aboutSherRef, defaultBehavior);
  const scrollToAboutShaer = useScrollTo(aboutShaerRef, defaultBehavior);
  const scrollToTeaching = useScrollTo(teachingRef, defaultBehavior);
  const scrollToBestInviters = useScrollTo(bestInvitersRef, defaultBehavior);
  const scrollToLottery = useScrollTo(lotteryRef, defaultBehavior);
  const isWeb = useMediaQuery<Theme>((theme) => theme.breakpoints.up("md"));

  const handleOnSelectedItem = (item: typeof items[number]) => {
    setScrollCount(0);
    setSelectedItem(item);
    switch (item) {
      case "main":
        scrollToMain();
        break;
      case "aboutPoet":
        scrollToAboutShaer();
        break;
      case "aboutUs":
        scrollToAboutSher();
        break;
      case "bests":
        scrollToBestInviters();
        break;
      case "learn":
        scrollToTeaching();
        break;
      case "lottery":
        scrollToLottery();
        break;
      default:
        break;
    }
  };

  const handleMobileFooterScrollToTop = () => {
    scrollToMain();
    setSelectedItem("main");
  };
  const refArray = React.useMemo(
    () => [mainRef, aboutSherRef, aboutShaerRef, teachingRef, bestInvitersRef, lotteryRef, footerRef],
    []
  );
  React.useEffect(() => {
    const calculateCurrentSection = () => {
      const center = window.innerHeight / 2;
      const currentCenter = window.pageYOffset + center;
      const elementTop = (item: MutableRefObject<HTMLDivElement>) => item.current.offsetTop;
      const elementBottom = (item: MutableRefObject<HTMLDivElement>) =>
        item.current.offsetTop + item.current.offsetHeight;
      const index = refArray.findIndex(
        (item) => currentCenter >= elementTop(item) && currentCenter <= elementBottom(item)
      );
      return [index, refArray[index]] as const;
    };
    const handleScroll = () => {
      const [currentSectionIndex] = calculateCurrentSection();
      if (currentSectionIndex !== -1) {
        setSelectedItem(items[currentSectionIndex]);
      }
    };
    if (!modalState && !isWeb) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isWeb, refArray, modalState]);
  useEffect(() => {
    if (footerOrMainScrollButton.to === "main") {
      rfRef?.current?.moveTo("main");
    } else {
      rfRef?.current?.moveTo("footer");
    }
  }, [footerOrMainScrollButton]);
  return (
    <>
      <Head>
        <title>شعر و گنج</title>
        <link rel='stylesheet' href='/styles/fullpage.css' />
      </Head>
      <Modals />
      <Navbar selectedItem={selectedItem} onItemSelected={handleOnSelectedItem} />
      <ScrollIndicator totalSections={6} width={items.indexOf(selectedItem)} />
      <ResponsiveHidden
        js
        mobile={
          <Container maxWidth='lg' className={classes.mobileContainer}>
            <MobileMain refObject={mainRef} />
            <div className={classes.mt_sections} />
            <AboutSheroGanj refObject={aboutSherRef} />
            <div className={classes.mt_sections} />
            <AboutShaer refObject={aboutShaerRef} />
            <div className={classes.mt_sections} />
            <Teaching refObject={teachingRef} />
            <div className={classes.mt_sections} />
            <BestInviters refObject={bestInvitersRef} />
            <div className={classes.mt_sections} />
            <MobileLottery refObject={lotteryRef} />
            <div className={classes.mt_sections} />
            <MobileFooter scrollToTop={handleMobileFooterScrollToTop} refObject={footerRef} />
          </Container>
        }
        web={
          <ReactFullpage
            pluginWrapper={pluginWrapper}
            scrollOverflow
            scrollOverflowReset
            scrollOverflowOptions={{
              fadeScrollbars: true,
              disableMouse: true,
              disablePointer: true,
              interactiveScrollbars: false,
            }}
            fitToSection={false}
            recordHistory={false}
            anchors={items}
            onLeave={(_, destination) => {
              if (modalState) {
                return false;
              } else if (scrollCount) {
                setScrollCount((prev) => prev - 1);
                return false;
              } else {
                setSelectedItem(destination?.anchor || "footer");
                return true;
              }
            }}
            afterLoad={() => {
              setScrollCount(scrollCartridgeCount);
            }}
            render={({fullpageApi}) => {
              rfRef.current = fullpageApi;
              return (
                <ReactFullpage.Wrapper>
                  <ReactFullpageSection>
                    <Container maxWidth='lg' className={`${classes.container}`}>
                      <WebMainMigrate
                        scrollToNext={() => {
                          setScrollCount(0);
                          setFooterOrMainScrollButton({to: "footer"});
                          setSelectedItem("lottery");
                        }}
                      />
                    </Container>
                  </ReactFullpageSection>
                  <ReactFullpageSection>
                    <Container maxWidth='lg' className={`${classes.container}`}>
                      <AboutSheroGanj />
                    </Container>
                  </ReactFullpageSection>
                  <ReactFullpageSection>
                    <Container maxWidth='lg' className={`${classes.container}`}>
                      <AboutShaer />
                    </Container>
                  </ReactFullpageSection>
                  <ReactFullpageSection>
                    <Container maxWidth='lg' className={`${classes.container}`}>
                      <Teaching />
                    </Container>
                  </ReactFullpageSection>
                  <ReactFullpageSection>
                    <Container maxWidth='lg' className={`${classes.container}`}>
                      <BestInviters />
                    </Container>
                  </ReactFullpageSection>
                  <ReactFullpageSection>
                    <Container maxWidth='lg' className={`${classes.container}`}>
                      <WebLottery />
                    </Container>
                  </ReactFullpageSection>
                  <ReactFullpageSection>
                    <Container maxWidth='lg' className={`${classes.container}`}>
                      <WebFooter
                        scrollToTop={() => {
                          setScrollCount(0);
                          setFooterOrMainScrollButton({to: "main"});
                          setSelectedItem("main");
                        }}
                      />
                    </Container>
                  </ReactFullpageSection>
                </ReactFullpage.Wrapper>
              );
            }}
          />
        }
      />
    </>
  );
}
