import {makeStyles, Theme, useTheme} from "@material-ui/core";
import React from "react";
import {Bar, BarChart, LabelList, ResponsiveContainer, XAxis} from "recharts";
import {useChartProps} from "utils/contexts/ChartPropsContext";
import RenderCustomizedLabel from "./RenderCustomedLabel";

const mockData = [
  {
    day: "شنبه",
    date: "22 شهریور",
    value: 2,
  },
  {
    day: "یک شنبه",
    date: "23 شهریور",
    value: 6,
  },
  {
    day: "دوشنبه",
    date: "24 شهریور",
    value: 4,
  },
  {
    day: "سه شنبه",
    date: "25 شهریور",
    value: 7,
  },
  {
    day: "چهارشنبه",
    date: "26 شهریور",
    value: 9,
  },
  {
    day: "پنچ شنبه",
    date: "27 شهریور",
    value: 4,
  },
  {
    day: "جمعه",
    date: "28 شهریور",
    value: 1,
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  chart_container: {
    width: "100%",
    height: "355px",
    borderRadius: "20px",
    backgroundColor: "#f8fafb",
  },
  bar: {
    borderRadius: "20px",
  },
}));

export const BuyCountChart: React.FC = () => {
  //grap total value from data and pass it to the TotalStatusBadge
  const theme = useTheme();
  const chartStatus = useChartProps();
  const classes = useStyles();
  return (
    <ResponsiveContainer height={270}>
      <BarChart
        className='mx-auto '
        margin={{
          top: 100,
          bottom: 30,
        }}
        data={chartStatus.data.values.slice().reverse()}
        barSize={10}
      >
        <XAxis
          tickLine={false}
          axisLine={false}
          dataKey='day'
          xAxisId={0}
          padding={{left: 20, right: 30}}
          tick={{fill: theme.palette.secondary.main}}
        />
        <XAxis
          tick={{fill: "#aec2d1"}}
          tickLine={false}
          axisLine={false}
          dataKey='date'
          padding={{left: 20, right: 30}}
          xAxisId={1}
        />
        <Bar radius={[20, 20, 0, 0]} dataKey='value' fill={theme.palette.primary.main}>
          <LabelList dataKey='value' content={RenderCustomizedLabel} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BuyCountChart;
