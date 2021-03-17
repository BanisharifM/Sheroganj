import {makeStyles, Theme, useTheme} from "@material-ui/core";
import React from "react";
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import {useChartProps} from "utils/contexts/ChartPropsContext";
import CustomTooltip from "./CustomeTooltip";

const mockData = [
  {
    day: "شنبه",
    date: "22 شهریور",
    value: 30000,
  },
  {
    day: "یک شنبه",
    date: "23 شهریور",
    value: 25000,
  },
  {
    day: "دوشنبه",
    date: "24 شهریور",
    value: 10000,
  },
  {
    day: "سه شنبه",
    date: "25 شهریور",
    value: 15000,
  },
  {
    day: "چهارشنبه",
    date: "26 شهریور",
    value: 36000,
  },
  {
    day: "پنچ شنبه",
    date: "27 شهریور",
    value: 30000,
  },
  {
    day: "جمعه",
    date: "28 شهریور",
    value: 45000,
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
  rtl: {
    direction: "rtl",
  },
}));

export const ProfitRateChart: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles();
  const chartStatus = useChartProps();
  return (
    <ResponsiveContainer height={270}>
      <LineChart
        width={300}
        height={100}
        data={chartStatus.data.values.slice().reverse()}
        margin={{
          top: 100,
          bottom: 30,
          right: 60,
          left: 60,
        }}
        className={`${classes.rtl} mx-auto`}
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
        <Tooltip content={<CustomTooltip />} cursor={false} />

        {/* <Tooltip fill='red' /> */}
        <Line
          type='monotone'
          dataKey='value'
          fill={theme.palette.primary.main}
          stroke={theme.palette.primary.main}
          strokeWidth={3}
          activeDot={{r: 10}}
          dot={{r: 10}}
          // onMouseEnter={(e)=>console.log('here' ,e)}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default ProfitRateChart;
// const CustomCursor = (props: any) => {
//   const {left, top, width, height, stroke} = props;
//   const x = props.points[0].x;
//   const y = props.points[0].y;
//   console.log(props);
//   //   x={x + width / 2}
//   //   y={y - radius - 4
//   return <Rectangle height={100} width={3} stroke={stroke} x={x} y={y} />;
// };
