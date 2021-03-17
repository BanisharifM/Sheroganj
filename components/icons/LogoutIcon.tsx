;
import { useTheme } from "@material-ui/core";
import React from "react";
import { IconProps } from "./type";

const LogoutIcon: React.FC<IconProps> = ({active}) => {
  const theme = useTheme();
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
  <g fill='none' fill-rule='evenodd' opacity='.498'>
    <g>
      <g>
        <g>
          <g>
            <path
              d='M0 0H24V24H0z'
              transform='translate(-1366 -950) translate(1090) translate(154 950) translate(122)'
            />
            <path
                    fill={active ? theme.palette.primary.main : theme.palette.secondary.main}
              fillRule='nonzero'
              d='M12.648 13.16c.414 0 .75.328.75.732v.894c0 2.323-1.938 4.214-4.321 4.214H4.33C1.943 19 0 17.105 0 14.775c0-.404.336-.73.75-.73s.75.326.75.73c0 1.524 1.27 2.762 2.83 2.762h4.747c1.556 0 2.821-1.234 2.821-2.751v-.894c0-.404.336-.732.75-.732zm6.602-4.392c.304 0 .577.178.693.453.116.273.05.589-.163.798l-2.846 2.764c-.147.141-.338.213-.53.213s-.385-.072-.53-.215c-.293-.287-.293-.75.001-1.035l1.56-1.514H7.548c-.414 0-.75-.328-.75-.732 0-.404.336-.732.75-.732zM9.067 0C11.456 0 13.4 1.895 13.4 4.225v.884c0 .403-.337.73-.75.73-.414 0-.75-.327-.75-.73v-.884c0-1.524-1.27-2.762-2.832-2.762H4.322C2.765 1.463 1.5 2.698 1.5 4.214v7.235c0 .404-.336.731-.75.731S0 11.853 0 11.45V4.214C0 1.891 1.938 0 4.322 0zm6.804 6.223c.292-.29.766-.291 1.06-.006l.718.692c.295.285.297.747.006 1.034-.148.145-.34.218-.533.218-.191 0-.382-.072-.528-.212l-.718-.693c-.294-.284-.296-.747-.005-1.033z'
              transform='translate(-1366 -950) translate(1090) translate(154 950) translate(122) translate(2 2.5)'
            />
          </g>
        </g>
      </g>
    </g>
  </g>
</svg>
  );
};

export default LogoutIcon;
