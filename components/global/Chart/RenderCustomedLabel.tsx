import {useTheme} from "@material-ui/core/styles";
import React from "react";
import {LabelProps} from "recharts";
const RenderCustomizedLabel = (props: LabelProps) => {
  const {x = 0, y = 0, width = 0, height = 0, value = 0} = props;
  const radius = 10;
  const theme = useTheme();
  return (
    <g>
      {/* <circle cx={x + width / 2} cy={y - radius} r={radius} fill='#8884d8' /> */}
      <text
        x={x + width / 2}
        y={y - radius - 4}
        fill={theme.palette.primary.main}
        textAnchor='middle'
        dominantBaseline='middle'
      >
        {`${value} خرید`}
      </text>
    </g>
  );
};

export default RenderCustomizedLabel;
