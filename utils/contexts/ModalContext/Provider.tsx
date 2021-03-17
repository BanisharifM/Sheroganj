import React, {PropsWithChildren} from "react";
import {ModalDispatchContext, ModalStateContext} from "./index";
import {TModalNames} from "./types";

export default function ModalProvider({children}: PropsWithChildren<unknown>) {
  const [activeModal, setActiveModal] = React.useState<TModalNames>("");
  return (
    <ModalStateContext.Provider value={activeModal}>
      <ModalDispatchContext.Provider value={setActiveModal}>{children}</ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}
