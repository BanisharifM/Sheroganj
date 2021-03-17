import React from "react";
import { TWeekOrDay } from "../type";
import DropDownFilter from "./DropDownFilter";

const index:React.FC<{filter : TWeekOrDay}> = ({filter}) => {
  return <DropDownFilter filter={filter} />;
};

export default index;
