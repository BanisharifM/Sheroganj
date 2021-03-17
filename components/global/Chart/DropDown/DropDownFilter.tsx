import {makeStyles} from "@material-ui/core";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import moment from "moment-jalaali";
import React, {useState} from "react";
import {getDate} from "utils/momentPersian";
import {TWeekOrDay} from "../type";
import DropDownHeader from "./DropDownHeader";
import DropDownItem from "./DropDownItem";

moment.loadPersian({dialect: "persian-modern"});
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "171px",
    height: "60px",
    borderRadius: "15px",
    fontSize: "14px",
  },
  dropdown_container: {
    width: "171px",
    position: "absolute",
    zIndex: 100,
    marginTop: "-10px",
  },
  dropDownList: {
    borderRadius: "0 0 15px 15px",
    // "& li": {
    //   padding: "20px 20px",
    // },
  },
}));
const DropDownFilter: React.FC<{filter: TWeekOrDay}> = ({filter}) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const [date, setDate] = useState(getDate());
  // console.log(getDate().format("jMMMM سال jYY"));
  // console.log(getDate().format("jMMMM"));
  // console.log(getDate().format("سال jYY"));
  // console.log(date.format());
  // const handleNextYear

  const handleNextMonth = () => {
    const newDate = moment(date);
    newDate.add(1, "jMonth");
    setDate(newDate);
  };
  const handlePrevMonth = () => {
    const newDate = moment(date);
    newDate.add(-1, "jMonth");
    setDate(newDate);
  };
  const handleNextYear = () => {
    const newDate = moment(date);
    newDate.add(1, "jYear");
    setDate(newDate);
  };
  const handlePrevYear = () => {
    const newDate = moment(date);
    newDate.add(-1, "jYear");
    setDate(newDate);
  };

  return (
    <div className={`${classes.container}  bg-white`}>
      <DropDownHeader toShow={date.format("jMMMM سال jYY")} isOpen={isOpen} onToggle={handleToggle} />
      {isOpen && (
        <div className={`${classes.dropdown_container} mx-auto`}>
          <ul className={`${classes.dropDownList} bg-white`}>
            <DropDownItem toShow={date.format("سال jYY")} onNext={handleNextYear} onPrev={handlePrevYear} />
            {filter === "month" && (
              <DropDownItem toShow={date.format("jMMMM")} onNext={handleNextMonth} onPrev={handlePrevMonth} />
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownFilter;
