import {makeStyles} from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card_container: {
    width: "255px",
    borderRadius: "30px",
    height: "541px",
    paddingTop: "15px",
    marginTop: "50px",
    [theme.breakpoints.up("md")]: {
      width: "700px",
      height: "180px",
      paddingTop: 0,
    },
  },
  card_image: {
    width: "169px",
    height: "140px",
    [theme.breakpoints.up("md")]: {
      width: "111px",
      height: "100px",
    },
  },
  card_title: {
    width: "136px",
    fontSize: "21px",
  },
  card_content: {
    width: "195px",
    height: "231px",
    fontSize: "14px",
    marginTop: "30px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
      width: "274px",
      height: "88px",
    },
  },
  devider: {
    width: "175px",
    height: "1px",
    marginTop: "30px",
    borderWidth: "1px",
    [theme.breakpoints.up("md")]: {
      width: "1px",
      height: "100px",
    },
  },
}));
interface ICardProps {
  title: string;
  image: string;
}
const Card: React.FC<ICardProps> = ({children, title, image}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.card_container}  bg-white mx-auto md:flex md:items-center md:justify-around `}>
      <div className={` ${classes.card_image} mx-auto flex justify-center align-center md:m-0  `}>
        <div>
          <img src={image} alt='book' />
        </div>
      </div>
      <p className={`${classes.card_title}  text-center  font-semibold text-primary-main mx-auto md:m-0`}>{title}</p>
      <span className={` ${classes.devider} block mx-auto boder-solid  border-primary-light md:m-0`}></span>
      <p className={`text-center text-secondary-main mx-auto ${classes.card_content} md:m-0`}>{children}</p>
    </div>
  );
};

export default Card;
