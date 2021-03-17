import {Button, makeStyles} from "@material-ui/core";
import {images} from "constants/images";
import React, {MutableRefObject} from "react";
import {useModalDispatch} from "utils/contexts/ModalContext";
import {IMainSiteMobileCommonProps} from "../types";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "746px",
    // width: "calc((315/375)*100vw)",
    borderRadius: "10px",
    paddingBottom: "100px",
    "& button": {
      marginTop: "30px",
    },
    [theme.breakpoints.up("md")]: {
      // transformOrigin: "top",
      // transform: "scale(0.8)",
      "& button": {
        marginTop: "40px",
      },
      height: 924,
      paddingBottom: 0,
    },
  },
  avatar_border: {
    width: "237px",
    height: "259px",
    marginTop: "50px",
    borderRadius: "50px",
    borderBottomLeftRadius: "0",
    [theme.breakpoints.up("md")]: {
      marginTop: "60px",
    },
  },
  avatar_container: {
    width: "216px",
    height: "237px",
    borderRadius: "50px",
    borderBottomLeftRadius: "0",
    // overflow: "hidden",
    // borderStartEndRadius : '10px',
    background: "url('/images/man.jpg')",
    backgroundSize: "cover",
  },
  star_container: {
    width: "100px",
    height: "100px",
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
  description: {
    width: "255px",
    marginTop: "53px",
    fontSize: "14px",
    [theme.breakpoints.up("md")]: {
      width: "552px",
      fontSize: "15px",
      marginTop: "67px",
    },
  },
  btn: {
    width: "140px",
    height: "60px",
    borderRadius: "35px",
  },
  backgroundTitle: {
    background: `url(${images.main.mainBg})`,
    backgroundSize: "contain",
    backgroundRepeat: "",
    backgroundPositionY: "center",
  },
}));

const Index: React.FC<Partial<IMainSiteMobileCommonProps>> = ({refObject}) => {
  const classes = useStyles();
  const openModal = useModalDispatch("about-poet");

  return (
    <div className={`${classes.wrapper} mx-auto bg-primary-light`} ref={refObject}>
      <p className={`${classes.section_title} font-heavy text-secondary-main mx-auto`}>
        درباره محمدرضا نظری<span className={`${classes.backgroundTitle} text-primary-main`}>{` (شاعر)`}</span>
      </p>
      <div className={`${classes.avatar_border} bg-white opacity-75 mx-auto flex justify-center items-center`}>
        <div className={`${classes.avatar_container} relative`}>
          <img
            className='absolute block bottom-0 right-0 transform translate-y-1/2 translate-x-1/2'
            src='/images/star.svg'
            alt='star'
          />
        </div>
      </div>
      <p className={`${classes.description} mx-auto text-secondary-main text-center`}>
        لورم ایپسوم متن ساختگی باتولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
        روزنامه و مجله در ستون و سطر آنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
        بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان
        را می طلبد.
      </p>
      <Button
        variant='contained'
        disableElevation
        onClick={openModal}
        className={`${classes.btn} block mx-auto bg-white text-primary-main font-bold`}
      >
        اطلاعات بیشتر
      </Button>
    </div>
  );
};

export default Index;
