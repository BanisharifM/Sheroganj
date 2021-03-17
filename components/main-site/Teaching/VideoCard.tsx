import {useMediaQuery} from "@material-ui/core";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import React from "react";
import VideoSvg from "./VideoSvg";

const useStyles = makeStyles((theme) => ({
  video_card: {
    width: "248px",
    [theme.breakpoints.up("md")]: {
      width: "713px",
    },
  },
  video_container: {
    width: "248px",
    height: "140px",
    backgroundColor: "#00416d",
    borderRadius: "10.6px",
    [theme.breakpoints.up("md")]: {
      width: "700px",
      height: "394px",
    },
  },
  video_border: {
    width: "255px",
    height: "147px",
    borderRadius: "10.6px",
    marginTop: "14px",
    [theme.breakpoints.up("md")]: {
      width: "720px",
      height: "414px",
      marginTop: "25px",
      // marginLeft:'60px'
    },
  },
  video_title: {
    fontSize: "16px",
    [theme.breakpoints.up("md")]: {
      fontSize: "21px",
      marginTop: "70px",
    },
  },
  video_icon: {
    width: "50px",
    height: "50px",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(15px)",
    [theme.breakpoints.up("md")]: {
      width: "120px",
      height: "120px",
    },
  },
}));
interface IVideoProps {
  className?: string;
  title: string;
  src: string;
}
const VideoCard: React.FC<IVideoProps> = ({className, title, src}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div
      className={`${className} ${classes.video_card} 
    mx-auto
    `}
    >
      <p className={`text-primary-main ${classes.video_title} font-medium block md:hidden`}>{title}</p>
      <div className={`${classes.video_border}  flex justify-center items-center bg-white video`}>
        <div className={`${classes.video_container} overflow-hidden relative `}>
          <span
            className={`${classes.video_icon}  rounded-full flex justify-center items-center absolute 
            transform -translate-y-1/2 translate-x-1/2 top-1/2 right-1/2`}
          >
            <VideoSvg width={!matches ? "14px" : "30px"} />
          </span>
          <video className='h-full' src={src} poster=''></video>
        </div>
      </div>
      <p className={`text-primary-main ${classes.video_title} font-medium hidden md:block text-center`}>{title}</p>
    </div>
  );
};

export default VideoCard;
