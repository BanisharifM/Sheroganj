export function timeToSimpleDate(milliseconds: number) {
  let diffInSeconds = milliseconds;
  // calculate days
  const days = Math.floor(diffInSeconds / 86400);
  diffInSeconds -= days * 86400;

  // calculate hours
  const hours = Math.floor(diffInSeconds / 3600) % 24;
  diffInSeconds -= hours * 3600;

  // calculate minutes
  const minutes = Math.floor(diffInSeconds / 60) % 60;
  diffInSeconds -= minutes * 60;
  return {days, hours, minutes, seconds: diffInSeconds};
}

export function timeDiffCalc(future: Date, past = new Date()) {
  let diffInSeconds = Math.floor((future.getTime() - past.getTime()) / 1000);
  return timeToSimpleDate(diffInSeconds);
}
