import React from "react";
import {ChartPropsContext} from ".";
import {IChartProps} from "./types";

const Provider: React.FC<{value: IChartProps}> = ({value, children}) => {
  return <ChartPropsContext.Provider value={value}>{children}</ChartPropsContext.Provider>;
};

export default Provider;
