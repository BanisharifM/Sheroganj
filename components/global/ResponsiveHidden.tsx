import React from "react";
import {Hidden} from "@material-ui/core";

export default function ResponsiveHidden({
  mobile,
  web,
  js,
}: {
  mobile: React.ReactNode;
  web: React.ReactNode;
  js?: boolean;
}) {
  return (
    <>
      <Hidden implementation={js ? "js" : "css"} only={["xs", "sm"]}>
        {web}
      </Hidden>
      <Hidden implementation={js ? "js" : "css"} only={["xl", "lg", "md"]}>
        {mobile}
      </Hidden>
    </>
  );
}
