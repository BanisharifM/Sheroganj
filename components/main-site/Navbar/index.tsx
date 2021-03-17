import React from "react";
import ResponsiveHidden from "../../global/ResponsiveHidden";
import NavBarWeb from "./NavBarWeb";
import NavBarMobile from "./NavBarMobile";
import {items} from "./items";

export interface INavBarProps {
  selectedItem: typeof items[number];
  onItemSelected: (item: typeof items[number]) => void;
}

export default function Index(props: INavBarProps) {
  return <ResponsiveHidden mobile={<NavBarMobile {...props} />} web={<NavBarWeb {...props} />} />;
}
