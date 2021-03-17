import React from "react";
import ArrowLeft from "../ArrowLeft";
import ArrowRight from "../ArrowRight";

interface DropDownItemProps {
  toShow: string;
  onNext: () => void;
  onPrev: () => void;
}
const DropDownItem: React.FC<DropDownItemProps> = ({toShow, onNext, onPrev}) => {
  return (
    <li className='text-secondary-main flex justify-between p-4 items-center font-bold'>
      <span className='cursor-pointer' onClick={onPrev}>
        <ArrowRight />
      </span>
      <span>{toShow}</span>
      <span className='cursor-pointer' onClick={onNext}>
        <ArrowLeft />
      </span>
    </li>
  );
};

export default DropDownItem;
