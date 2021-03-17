import {makeStyles, Theme} from "@material-ui/core/styles";
import React from "react";
import { TWeekOrDay } from "./type";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "237px",
    height: "60px",
    borderRadius: "15px",
    // marginTop: "20px",
    // marginLeft: "20px",
  },
  text: {
    fontSize: "14px",
  },
  value: {
    fontSize: "21px",
    paddingLeft: "15px",
  },
}));

interface ITotalStatusBadge {
  type: "count" | "profit";
  filter: TWeekOrDay;
  value: number;
}
const TotalStatusBadge: React.FC<ITotalStatusBadge> = ({type, filter, value}) => {
  const text =
    type === "count" && filter === "year"
      ? "تعداد کل خریدهای این سال"
      : type === "profit" && filter === "year"
      ? "میزان کل سود این سال"
      : type === "count" && filter === "month"
      ? "میزان کل خرید این ماه"
      : "میزان کل سود این ماه";
  const classes = useStyles();
  return (
    <div className={`${classes.container} bg-white flex justify-center items-center`}>
      <p className={`font-medium text-secondary-main ${classes.text}`}>
        {text} :<span className={`font-bold text-primary-main ${classes.value}`}>{`${value}`}</span>
      </p>
    </div>
  );
};

export default TotalStatusBadge;
