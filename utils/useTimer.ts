import React from "react";
import {timeToSimpleDate} from "./timeDiffCalc";

export type SimpleDateTime = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
};

function getMilliseconds(time: Date | SimpleDateTime) {
  if (time instanceof Date) {
    const now = new Date();
    return Math.floor((time.getTime() - now.getTime()) / 1000);
  }
  const {days, hours, minutes, seconds} = time;
  return (days || 0) * 24 * 60 * 60 + (hours || 0) * 60 * 60 + (minutes || 0) * 60 + (seconds || 0);
}

export default function useTimer(endTime: Date | SimpleDateTime) {
  const timer = React.useRef<NodeJS.Timeout | undefined>();
  const initialRemaining = React.useRef(getMilliseconds(endTime));
  const [remainingSeconds, setRemainingSeconds] = React.useState(getMilliseconds(endTime));
  React.useEffect(() => {
    if (initialRemaining.current === getMilliseconds(endTime)) {
      return;
    }
    initialRemaining.current = getMilliseconds(endTime);
  }, [endTime]);
  const [finished, setFinished] = React.useState(false);

  const tick = React.useCallback(() => {
    setRemainingSeconds((prevState) => {
      if (prevState === 0) {
        setFinished(true);
        return 0;
      }
      return prevState - 1;
    });
  }, []);

  const start = React.useCallback(() => {
    if (endTime instanceof Date) {
      const restartTime = getMilliseconds(endTime);
      if (restartTime < 0) {
        return;
      }
      setRemainingSeconds(restartTime);
    }
    if (!timer.current) {
      timer.current = setInterval(() => tick(), 1000);
    }
  }, [endTime, tick]);

  const reset = React.useCallback(() => {
    if (endTime instanceof Date) {
      return;
    }
    setRemainingSeconds(initialRemaining.current);
  }, [endTime]);

  const pause = React.useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = undefined;
    }
  }, []);

  const stop = React.useCallback(() => {
    pause();
    setRemainingSeconds(0);
  }, [pause]);

  React.useEffect(() => {
    if (finished) {
      stop();
    }
  }, [finished, stop]);

  return {
    /**
     * The remaining amount of count down timer.
     */
    remainingTime: timeToSimpleDate(remainingSeconds),
    /**
     * Stops the timer counting and resets the remaining timer to zero.
     */
    stop,
    /**
     * Starts the timer (or resumes it if paused already).
     */
    start,
    /**
     * A boolean showing if counting reached to zero by counting.
     */
    finished,
    /**
     * Resets the remaining values to their initial values, if the timer is used with constant count down amount (and
     * no end date). Otherwise does nothing.
     */
    reset,
    /**
     * Stops timer from counting, but not reset the values of counting.
     */
    pause,
  };
}
