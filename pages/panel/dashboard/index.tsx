import Chart from "components/global/Chart";
import React from "react";
import ChartProvider from "utils/contexts/ChartPropsContext/Provider";
import BaseLayout from "../../../components/global/BaseLayout";
const mockData = {
  values: [
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
      value: 20,
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
  ],
  total: 15,
};
const Index = () => {
  return (
    <BaseLayout>
      <ChartProvider value={{data: mockData, haveFilter: true, type: "count", handleDayOrMonthFilter: () => {}}}>
        <Chart />
      </ChartProvider>
      {/* <ChartProvider value={{data: mockData, haveFilter: true, type: "profit", handleDayOrMonthFilter: () => {}}}>
        <Chart />
      </ChartProvider> */}
    </BaseLayout>
  );
};

export default Index;
