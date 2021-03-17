import React from "react";
import ResponsiveHidden from "../../global/ResponsiveHidden";
import MobileDownloadApp from "./MobileDownloadApp";
import WebDownloadApp from "./WebDownloadApp";
import {SheroGanjDialogCommonProps} from "../../global/SheroGanjDialog";

export default function DownloadApp(props: SheroGanjDialogCommonProps) {
  return <ResponsiveHidden mobile={<MobileDownloadApp {...props} />} web={<WebDownloadApp {...props} />} js />;
}
