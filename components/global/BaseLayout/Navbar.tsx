import { List } from "@material-ui/core";
import React from "react";
import { renderLinks, routes } from "../../../utils/routes";

const Navbar = () => {
  return (
    <List component='ul' className='flex-1' aria-label=''>
      {renderLinks(routes)}
    </List>
  );
};

export default Navbar;
