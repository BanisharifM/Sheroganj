import {Button, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import React, {useState} from "react";
import {useChartProps} from "utils/contexts/ChartPropsContext";
import {BuyCountChart} from "./BuyCountChart";
import DropDownFilter from "./DropDown/DropDownFilter";
import ProfitRateChart from "./ProfitRateChart";
import TotalStatusBadge from "./TotalStatusBadge";
import { TWeekOrDay } from "./type";
import DropDown from './DropDown'

const useStyles = makeStyles((theme: Theme) => ({
  chart_container: {
    width: "100%",
    height: "355px",
    borderRadius: "20px",
    backgroundColor: "#f8fafb",
  },
  title: {
    fontSize: "26px",
  },
}));
const Index: React.FC = () => {
  const {type, haveFilter, handleDayOrMonthFilter, ...chartStatus} = useChartProps();
  const classes = useStyles();
  const [weekOrDayFilters, setWeekOrDayFilters] = useState<TWeekOrDay>("month");
  const ToRender = type === "count" ? BuyCountChart : ProfitRateChart;

  const handleClickDayOrWeekFilter = (filter: TWeekOrDay) => {
    setWeekOrDayFilters(filter);
    handleDayOrMonthFilter!(filter);
  };
  const title =
    type === "count" && weekOrDayFilters === "year"
      ? "نمودار تعداد خریدهای این سال"
      : type === "profit" && weekOrDayFilters === "year"
      ? "نمودار میزان سود این سال"
      : type === "count" && weekOrDayFilters === "month"
      ? "نمودار تعداد خریدهای این ماه"
      : "نمودار میزان سود این ماه";

  return (
    <>
      <Grid container className='mb-10'>
        <Grid item xs={6}>
          <p className={`${classes.title} font-bold text-secondary-main`}>{title}</p>
        </Grid>
        {haveFilter && (
          <Grid item xs={6} className='flex flex-row-reverse'>
            <Button onClick={() => handleClickDayOrWeekFilter("month")} variant='contained' color='secondary'>
              ماهانه
            </Button>
            <Button onClick={() => handleClickDayOrWeekFilter("year")} variant='contained' color='secondary'>
              سالانه
            </Button>
          </Grid>
        )}
      </Grid>
      <div className={`${classes.chart_container} flex flex-col`}>
        <Grid container className='mt-6 mr-6' spacing={2}>
          {haveFilter && (
            <Grid item>
              <DropDown filter={weekOrDayFilters} />
            </Grid>
          )}
          <Grid item>
            <TotalStatusBadge type={type} filter={weekOrDayFilters} value={chartStatus.data.total} />
          </Grid>
        </Grid>
        <ToRender />
      </div>
    </>
  );
};

export default Index;
