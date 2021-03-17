import {useTheme} from "@material-ui/core";
import React from "react";
import {IconProps} from "./type";

const TopUsersIcon: React.FC<IconProps> = ({active}) => {
  const theme = useTheme();
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
      <g fill='none' fill-rule='evenodd' opacity='.5'>
        <g>
          <g>
            <g>
              <g>
                <g>
                  <path
                    d='M0 0H24V24H0z'
                    transform='translate(-1366 -434) translate(1090) translate(0 212) translate(195 222) translate(81)'
                  />
                  <path
                    fill={active ? theme.palette.primary.main : theme.palette.secondary.main}
                    fillRule='nonzero'
                    d='M15.498 19.92c-.123.002-.245-.029-.352-.09l-5.138-2.707-4.524 2.436c-.738.4-1.662.126-2.062-.613l-.015-.028c-.157-.309-.212-.658-.158-1l.88-5.194L.45 9c-.601-.62-.601-1.606 0-2.227.234-.246.544-.405.88-.45l5.043-.767L8.617.883C8.966.123 9.865-.21 10.626.138c.33.151.594.416.745.745l2.253 4.69 5.06.774c.409.061.776.287 1.016.624.448.644.38 1.514-.162 2.081l-3.661 3.68.51 2.8c.07.42-.206.82-.625.9-.412.073-.806-.2-.88-.614l-.52-2.799c-.086-.513.077-1.037.44-1.408l3.67-3.706-5.06-.785c-.512-.083-.947-.423-1.152-.9l-2.252-4.669-2.28 4.743c-.205.478-.64.817-1.153.9l-5.043.766 3.643 3.7c.363.365.526.882.44 1.39l-.88 5.193 4.523-2.426c.448-.252.995-.252 1.443 0l5.13 2.706c.314.171.473.532.388.88-.078.346-.384.593-.74.6l.019-.084z'
                    transform='translate(-1366 -434) translate(1090) translate(0 212) translate(195 222) translate(81) translate(2 2)'
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default TopUsersIcon;
