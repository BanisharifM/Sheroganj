import {makeStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import React from "react";
import {TooltipProps} from "recharts";
const useStyles = makeStyles((theme: Theme) => ({
  custome_tooltip: {
    width: "100px",
    height: "36px",
    borderRadius: "18px",
  },
}));
const CustomTooltip = ({active, payload, label}: TooltipProps) => {
  const classes = useStyles();
  const activeValue = payload?.length && payload[0].value;
  if (active) {
    return (
      <div className={`${classes.custome_tooltip} text-primary-main flex items-center justify-center bg-white`}>
        <p className='flex flex-reverse '>
          <span>تومان</span>
          <span className='pl-1'>{`${activeValue} `}</span>
        </p>
      </div>
    );
  }
  return null;
};
export default CustomTooltip;
