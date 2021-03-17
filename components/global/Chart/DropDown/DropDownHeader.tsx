import {makeStyles, Theme} from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";
import ArrowDown from "../ArrowDown";
import ArrowUp from "../ArrowUp";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "171px",
    height: "60px",
    borderRadius: "15px",
    fontSize: "14px",
  },
}));
interface DropDownHeaderProps {
  isOpen: boolean;
  onToggle: () => void;
  toShow :string
}
const DropDownHeader: React.FC<DropDownHeaderProps> = ({isOpen,toShow, onToggle}) => {
  const classes = useStyles();
  return (
    <div
      onClick={onToggle}
      className={clsx(
        `${classes.container}
          cursor-pointer font-bold
          flex justify-between px-6  items-center`,
        {
          "text-primary-main": isOpen,
          "text-secondary-main": !isOpen,
        }
      )}
    >
      <p>{toShow}</p>
      {isOpen ? <ArrowUp /> : <ArrowDown />}
    </div>
  );
};

export default DropDownHeader;
