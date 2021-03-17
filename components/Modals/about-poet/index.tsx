import React from "react";
import {SheroGanjDialogCommonProps} from "../../global/SheroGanjDialog";
import ResponsiveHidden from "../../global/ResponsiveHidden";
import MobileAboutPoet from "./MobileAboutPoet";
import WebAboutPoet from "./WebAboutPoet";

export default function AboutPoet(props: SheroGanjDialogCommonProps) {
  return <ResponsiveHidden mobile={<MobileAboutPoet {...props} />} web={<WebAboutPoet {...props} />} js />;
}
