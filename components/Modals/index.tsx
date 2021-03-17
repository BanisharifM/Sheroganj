import React from "react";
import DevelopersModal from "./DevelopersModalMigrate";
import DownloadApp from "./download-app";
import {useModalDispatch, useModalState} from "../../utils/contexts/ModalContext";
import AboutPoet from "./about-poet";

export default function Modals() {
  const activeModal = useModalState();
  const closeModal = useModalDispatch("");
  return (
    <>
      <DevelopersModal open={activeModal === "developers"} onClose={closeModal} />
      <DownloadApp open={activeModal === "download-app"} onClose={closeModal} />
      <AboutPoet open={activeModal === "about-poet"} onClose={closeModal} />
    </>
  );
}
