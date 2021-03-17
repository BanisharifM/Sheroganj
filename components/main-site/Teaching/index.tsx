import {makeStyles, useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {images} from "constants/images";
import React, {MutableRefObject, useRef} from "react";
import Slider, {Settings} from "react-slick";
import NextSlide from "../NextSlide";
import PrevSlide from "../PrevSlide";
import VideoCard from "./VideoCard";
import {IMainSiteMobileCommonProps} from "../types";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "815px",
    // width: "calc((315/375)*100vw)",
    borderRadius: "10px",
    [theme.breakpoints.up("md")]: {
      height: "924px",
      // transformOrigin:'top',
      // transform:'scale(0.8)',
      //   paddingBottom: "100px",
    },
  },
  section_title: {
    fontSize: "24px",
    width: "250px",
    paddingTop: "50px",
    [theme.breakpoints.up("md")]: {
      width: "500px",
      fontSize: "48px",
    },
  },
  mt_40: {
    marginTop: "40px",
  },
  mt_33: {
    marginTop: "33px",
  },
  slider_container: {
    marginTop: "50px",
  },
  slider_controls: {
    width: "90% !important",
  },
  backgroundTitle: {
    background: `url(${images.main.mainBg})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "center",
  },
}));

const Index: React.FC<Partial<IMainSiteMobileCommonProps>> = ({refObject}) => {
  const classes = useStyles();
  const sliderRef = useRef<Slider>(null);
  const settings: Settings = {
    className: "video_center",
    centerMode: true,
    infinite: true,
    centerPadding: "220px",
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1687,
        settings: {
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 1400,
        settings: {
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          centerPadding: "30px",
        },
      },
    ],
  };
  return (
    <div ref={refObject} className={`${classes.wrapper} mx-auto bg-primary-light`}>
      <p className={`${classes.section_title} font-heavy text-center text-secondary-main mx-auto`}>
        {`آموزش استفاده از اپلیکیشن و چگونگی `}
        <span className={`${classes.backgroundTitle} text-primary-main`}>کسب درآمد</span>
      </p>
      <div className='block md:hidden'>
        <VideoCard className={classes.mt_40} title='عنوان ویدیو اینجا قرار میگیرد' src='' />
        <VideoCard className={classes.mt_33} title='عنوان ویدیو اینجا قرار میگیرد' src='' />
        <VideoCard className={classes.mt_33} title='عنوان ویدیو اینجا قرار میگیرد' src='' />
      </div>
      <div className={`${classes.slider_container} mx-auto hidden md:block relative`}>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <VideoCard title='عنوان ویدیو اینجا قرار میگیرد' src='' />
          </div>
          <div>
            <VideoCard title='عنوان ویدیو اینجا قرار میگیرد' src='' />
          </div>
          <div>
            <VideoCard title='عنوان ویدیو اینجا قرار میگیرد' src='' />
          </div>
        </Slider>
        <div
          className={`${classes.slider_controls} 
           flex justify-between absolute bottom-0 right-1/2 transform translate-x-1/2`}
        >
          <NextSlide handleClick={() => sliderRef.current?.slickNext()} />
          <PrevSlide handleClick={() => sliderRef.current?.slickPrev()} />
        </div>
      </div>
    </div>
  );
};

export default Index;
