import React from "react";
import {TModalNames} from "./types";

const initialModal = "";
export const ModalStateContext = React.createContext<TModalNames>(initialModal);
export const useModalState = () => React.useContext(ModalStateContext);
export const ModalDispatchContext = React.createContext<React.Dispatch<React.SetStateAction<TModalNames>>>(() => {});
export const useModalDispatch = (modalName: TModalNames) => {
  const dispatch = React.useContext(ModalDispatchContext);
  return () => dispatch(modalName);
};
