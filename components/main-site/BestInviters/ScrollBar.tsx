import {makeStyles, Theme} from "@material-ui/core";
import React, {useEffect, useRef} from "react";
import Slider from "react-slick";

const useStyles = makeStyles((theme: Theme) => ({
  scroll_container: {
    width: "200px",
    height: "10px",
    borderRadius: "5px",
    [theme.breakpoints.up("md")]: {
      marginTop: "30px",
    },
  },
  scroll: {
    width: "98px",
    borderRadius: "5px",
    height: "6px",
  },
}));
interface IScrollBarProps {
  sliderRef: React.RefObject<Slider>;
  value: number;
  onChangeValue: (newValue: number) => void;
  range: number;
}

const ScrollBar: React.FC<IScrollBarProps> = ({sliderRef, value, onChangeValue, range}) => {
  const classes = useStyles();
  const clicked = useRef(false);
  const currentValue = useRef(value);
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    currentValue.current = value;
  }, [value]);
  const step = (200 - 98) / range;
  const handleStart = () => {
    console.log("start");
    const handleEnd = () => {
      console.log("end");
      clicked.current = false;
    };
    clicked.current = true;
    window.addEventListener("mouseup", handleEnd, {once: true});
    window.addEventListener("touchend", handleEnd, {once: true});
  };
  useEffect(() => {
    const getHandlePositionFromMousePosition = (mousePosition: number) => {
      return Math.min(
        Math.max(Math.floor((bar.current?.getBoundingClientRect().left! + 200 - mousePosition) / step), 0),
        range
      );
    };
    const handleMouseEventListener = (e: MouseEvent | TouchEvent) => {
      const clientX = e.type === "touchmove" ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
      if (clicked.current) {
        const newPosition = getHandlePositionFromMousePosition(clientX);
        onChangeValue(newPosition);
        if (currentValue.current !== newPosition) {
          sliderRef.current?.slickGoTo(newPosition);
        }
      }
    };

    document.addEventListener("touchmove", handleMouseEventListener);
    document.addEventListener("mousemove", handleMouseEventListener);
    return () => {
      document.removeEventListener("mousemove", handleMouseEventListener);
    };
  }, [sliderRef, onChangeValue, range, step]);

  return (
    <div
      ref={bar}
      className={`${classes.scroll_container} 
      bg-white  relative mx-auto`}
    >
      <div
        style={{
          transition: "transform 0.1s",
          transform: `translate( -${value * step}px, -50%)`,
        }}
        onPointerDown={handleStart}
        className={`${classes.scroll} absolute bg-primary-main top-1/2  `}
      />
    </div>
  );
};

export default ScrollBar;
