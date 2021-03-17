import {makeStyles, Theme} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: "140px",
    height: "213px",
    borderRadius: "30px",
    marginTop: "15px",
    [theme.breakpoints.up("md")]: {
      width: "180px",
      height: "213px",
    },
  },
  image: {
    width: "80px",
    height: "80px",
    borderRadius: "25px",
  },
  text: {
    fontSize: "16px",
  },
}));
interface IProps {
  image: string;
  name: string;
  inviteCount: number;
}
const InvitorCard: React.FC<IProps> = ({image, name, inviteCount}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.card} mx-auto bg-white flex flex-col justify-around items-center py-5`}>
      <div className={`${classes.image} overflow-hidden`}>
        <img src='/images/man.jpg' alt='invitor' className='max-w-full' />
      </div>
      <p className={`text-secondary-main font-bold ${classes.text}`}>نام</p>
      <p className={`text-primary-main font-bold ${classes.text}`}>۵۰ دعوت</p>
    </div>
  );
};

export default InvitorCard;
