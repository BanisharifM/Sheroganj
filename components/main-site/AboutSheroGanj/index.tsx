import {makeStyles} from "@material-ui/core/styles";
import {images} from "constants/images";
import React from "react";
import Card from "./Card";
import {IMainSiteMobileCommonProps} from "../types";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "1486px",
    // width: "315px",
    // width: "calc((315/375)*100vw)",
    borderRadius: "10px",
    // maxWidth: "1140px",
    [theme.breakpoints.up("md")]: {
      // transformOrigin: "top",
      // transform: "scale(0.8)",
      // width: "1140px",
      height: "924px",

      paddingBottom: "100px",
    },
  },
  section_title: {
    fontSize: "24px",
    width: "240px",
    paddingTop: "50px",
    [theme.breakpoints.up("md")]: {
      width: "498px",
      fontSize: "48px",
      paddingTop: "100px",
    },
  },
  section_description: {
    width: "255px",
    fontSize: "14px",
    marginTop: "20px",
    [theme.breakpoints.up("md")]: {
      width: "552px",
      fontSize: "16px",
      paddingTop: "40px",
    },
  },
  card_wapper: {
    [theme.breakpoints.up("md")]: {
      marginTop: "100px",
    },
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
  return (
    <div ref={refObject} className={`${classes.wrapper} mx-auto bg-primary-light`}>
      <p className={`${classes.section_title} font-heavy text-secondary-main mx-auto`}>
        درباره اپلیکیشن <span className={`${classes.backgroundTitle} text-primary-main`}>شعر و گنج</span>
      </p>
      <p className={`${classes.section_description} font-medium text-center text-secondary-main mx-auto`}>
        لورم ایپسوم متن ساختگی باتولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
        بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان
        را می طلبد.
      </p>
      <div className={classes.card_wapper}>
        <Card title='دسترسی به اشعار محمدرضا منتظری' image='/images/book.png'>
          لورم ایپسوم متن ساختگی باتولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
          با هدف بهبود ابزارهای کاربردی می باشد، کتاب متخصصان را می طلبد.
        </Card>
        <Card title='دعوت از دوستان و کسب درآمد' image='/images/money.png'>
          لورم ایپسوم متن ساختگی باتولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
          با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
          متخصصان را می طلبد.
        </Card>
      </div>
    </div>
  );
};

export default Index;
