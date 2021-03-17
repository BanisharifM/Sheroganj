export interface IChartProps {
  type: "count" | "profit";
  data: {values: Array<any>; total: number};
  haveFilter: boolean;
  handleNextPage?: (page: any) => void;
  handlePrevPage?: (page: any) => void;
  handleDayOrMonthFilter?: (filter: any) => void;
  handleMonthYearFilter?: (date: any) => void;
}
