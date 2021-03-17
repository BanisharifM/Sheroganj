import {createContext, useContext} from "react";
import {IChartProps} from "./types";

const initialProps = {};
export  const ChartPropsContext = createContext<IChartProps>(initialProps as IChartProps);


export const useChartProps = () => useContext(ChartPropsContext)
