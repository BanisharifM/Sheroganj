import moment from "moment-jalaali";
moment.loadPersian({dialect: "persian-modern"});
moment.locale("fa");

export const getDate = () => {
  return moment(new Date());
};
