import {Grid, makeStyles, Theme} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import {NextPageButton, PrevPageButton} from "components/global/button/PagingButton";
import {images} from "constants/images";
import React, {useCallback, useRef, useState} from "react";
import Slider, {Settings} from "react-slick";
import {IMainSiteMobileCommonProps} from "../types";
import InvitorCard from "./InvitorCard";
import MatteLayer from "./MatteLayer";
import ScrollBar from "./ScrollBar";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "905px",
    // width: "calc((315/375)*100vw)",
    borderRadius: "10px",
    paddingBottom: "100px",
    "& button": {
      marginTop: "30px",
    },
    [theme.breakpoints.up("md")]: {
      "& button": {
        marginTop: "40px",
      },
      height: "auto",
      // transformOrigin:'top',
      // transform:'scale(0.8)',
    },
  },
  section_title: {
    fontSize: "24px",
    width: "247px",
    paddingTop: "50px",
    [theme.breakpoints.up("md")]: {
      width: "493px",
      fontSize: "48px",
      paddingTop: "100px",
    },
  },
  slider_container: {
    marginTop: "25px",
    [theme.breakpoints.up("md")]: {
      marginTop: "161px",
    },
  },
  section_description: {
    display: "none",
    width: "552px",
    fontSize: "16px",
    [theme.breakpoints.up("md")]: {
      display: "block",
      marginTop: "40px",
    },
  },
  slider_controls: {
    width: "90% !important",
  },
  backgroundTitle: {
    background: `url(${images.main.mainBg})`,
    backgroundSize: "cover",
  },
  buttons: {
    marginTop: "50px",
    // marginBottom: "53px",
    [theme.breakpoints.up("md")]: {
      marginTop: "150px",
      marginBottom: "13px",
    },
  },
}));
const Index: React.FC<Partial<IMainSiteMobileCommonProps>> = ({refObject}) => {
  const classes = useStyles();
  const sliderRef = useRef<Slider>(null);
  const [sliderValue, setSliderValue] = useState(0);
  const isWeb = useMediaQuery<Theme>((theme) => theme.breakpoints.up("md"));
  const handleChangeSliderValue = useCallback((newValue: number) => {
    setSliderValue(newValue);
  }, []);

  const settings: Settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "185px",
    slidesToShow: 4,
    speed: 200,
    rows: 1,
    slidesPerRow: 1,
    afterChange: (currentValue) => {
      handleChangeSliderValue(currentValue);
    },
    responsive: [
      {
        breakpoint: 960,
        settings: {
          rows: 3,
          slidesToShow: 1,
          slidesPerRow: 1,
          centerPadding: "82px",
          className: "center",
          centerMode: true,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          rows: 3,
          slidesToShow: 1,
          slidesPerRow: 1,
          centerPadding: "150px",
          className: "center",
          centerMode: true,
          infinite: true,
        },
      },
      {
        breakpoint: 630,
        settings: {
          rows: 3,
          slidesToShow: 1,
          slidesPerRow: 1,
          centerPadding: "140px",
          className: "center",
          centerMode: true,
          infinite: true,
        },
      },
      {
        breakpoint: 570,
        settings: {
          rows: 3,
          slidesToShow: 1,
          slidesPerRow: 1,
          centerPadding: "120px",
          className: "center",
          centerMode: true,
          infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          rows: 3,
          slidesToShow: 1,
          slidesPerRow: 1,
          centerPadding: "100px",
          className: "center",
          centerMode: true,
          infinite: true,
        },
      },
      {
        breakpoint: 425,
        settings: {
          rows: 3,
          slidesToShow: 1,
          slidesPerRow: 1,
          centerPadding: "82px",
          className: "center",
          centerMode: true,
          infinite: true,
        },
      },
      {
        breakpoint: 390,
        settings: {
          rows: 3,
          slidesToShow: 1,
          slidesPerRow: 1,
          centerPadding: "82px",
          className: "center",
          centerMode: true,
          infinite: true,
        },
      },

      {
        breakpoint: 1500,
        settings: {
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 1350,
        settings: {
          centerPadding: "120px",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          // centerPadding:'120px',
          slidesToShow: 3,
          centerPadding: "135px",
        },
      },
    ],
  };
  return (
    <div ref={refObject} className={`${classes.wrapper} mx-auto bg-primary-light`}>
      <p className={`${classes.section_title} text-center font-heavy text-secondary-main mx-auto`}>
        برترین
        <span className={`${classes.backgroundTitle} text-primary-main`}>{` دعوت کنندگان`}</span>
      </p>
      <p className={`${classes.section_description} font-medium text-center text-secondary-main mx-auto font-medium`}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
      </p>
      <Grid container className={`${classes.slider_container} relative`}>
        <MatteLayer />
        <Grid item xs={12}>
          <Slider ref={sliderRef} {...settings}>
            <div>
              <InvitorCard image='' name='' inviteCount={3} />
            </div>
            <div>
              <InvitorCard image='' name='' inviteCount={0} />
            </div>
            <div>
              <InvitorCard image='' name='' inviteCount={0} />
            </div>
            <div>
              <InvitorCard image='' name='' inviteCount={0} />
            </div>
            <div>
              <InvitorCard image='' name='' inviteCount={0} />
            </div>
            <div>
              <InvitorCard image='' name='' inviteCount={0} />
            </div>
            <div>
              <InvitorCard image='' name='' inviteCount={0} />
            </div>
            <div>
              <InvitorCard image='' name='' inviteCount={0} />
            </div>
            <div>
              <InvitorCard image='' name='' inviteCount={0} />
            </div>
            <div>
              <InvitorCard image='' name='' inviteCount={0} />
            </div>
            <div>
              <InvitorCard image='' name='' inviteCount={0} />
            </div>
            <div>
              <InvitorCard image='' name='' inviteCount={0} />
            </div>
            <div>
              <InvitorCard image='' name='' inviteCount={0} />
            </div>
            <div>
              <InvitorCard image='' name='' inviteCount={0} />
            </div>
            <div>
              <InvitorCard image='' name='' inviteCount={0} />
            </div>
            <div>
              <InvitorCard image='' name='' inviteCount={0} />
            </div>
            <div>
              <InvitorCard image='' name='' inviteCount={0} />
            </div>
            <div>
              <InvitorCard image='' name='' inviteCount={0} />
            </div>
            <div>
              <InvitorCard image='' name='' inviteCount={0} />
            </div>
            <div>
              <InvitorCard image='' name='' inviteCount={6} />
            </div>
          </Slider>
        </Grid>
        <Grid item className={` ${classes.buttons}`} xs={12}>
          <div
            className={`${classes.slider_controls}  
           md:flex mx-auto justify-between items-center `}
          >
            {isWeb && (
              <PrevPageButton
                onClick={() => {
                  sliderRef.current?.slickPrev();
                }}
              />
            )}
            <ScrollBar range={isWeb ? 19 : 6} onChangeValue={handleChangeSliderValue} value={sliderValue} sliderRef={sliderRef} />
            {isWeb && (
              <NextPageButton
                onClick={() => {
                  sliderRef.current?.slickNext();
                }}
              />
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
