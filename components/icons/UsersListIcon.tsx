import {useTheme} from "@material-ui/core";
import React from "react";
import {IconProps} from "./type";

const UsersListIcon: React.FC<IconProps> = ({active}) => {
  const theme = useTheme();
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
      <g fill='none' fill-rule='evenodd'>
        <g>
          <g>
            <g>
              <g>
                <g>
                  <path
                    d='M0 0H24V24H0z'
                    transform='translate(-1366 -360) translate(1090) translate(0 212) translate(178 148) translate(98)'
                  />
                  <path
                    fill={active ? theme.palette.primary.main : theme.palette.secondary.main}
                    fillRule='nonzero'
                    d='M11.398 10.627c2.064.013 6.342.206 6.342 3.178 0 2.987-4.432 3.181-6.372 3.194L11 17c-.382 0-.692-.312-.692-.696 0-.384.31-.696.692-.696 2.443 0 5.355-.313 5.355-1.803 0-1.186-1.8-1.787-5.355-1.787-2.442 0-5.355.313-5.355 1.804 0 .332.097.76.853 1.132.31.153.703.281 1.167.38.374.08.613.451.533.827-.08.376-.45.619-.821.535-.574-.123-1.075-.288-1.488-.49-1.346-.664-1.629-1.663-1.629-2.384 0-2.988 4.433-3.182 6.373-3.195zm6.671-.63c.513.035 1.028.11 1.534.223 1.127.224 1.87.686 2.194 1.368.27.57.27 1.224 0 1.795-.32.677-1.061 1.14-2.205 1.376-.046.01-.093.015-.14.015-.322 0-.61-.227-.677-.556-.077-.377.164-.745.539-.822.944-.196 1.177-.493 1.233-.612.09-.19.09-.407 0-.597-.118-.25-.577-.475-1.229-.605-.453-.1-.9-.166-1.34-.196-.383-.025-.671-.358-.645-.741.025-.384.358-.668.736-.647zM3.938 9.984c.37-.028.712.264.737.647.026.385-.262.717-.644.742-.445.03-.892.096-1.328.194-.67.133-1.131.36-1.25.61-.09.19-.09.41 0 .6.057.12.29.418 1.238.614.375.077.615.445.539.821-.067.33-.356.556-.678.556-.046 0-.092-.004-.14-.014-1.145-.235-1.888-.7-2.21-1.379-.27-.57-.27-1.225 0-1.796.326-.686 1.07-1.149 2.215-1.375.489-.11 1.007-.185 1.52-.22zM11 0c2.518 0 4.567 2.06 4.567 4.593s-2.05 4.592-4.567 4.592c-1.032 0-2.004-.333-2.81-.964-.302-.236-.357-.673-.122-.976.233-.305.67-.359.972-.122.56.438 1.239.67 1.96.67 1.755 0 3.183-1.436 3.183-3.2 0-1.765-1.428-3.2-3.183-3.2-1.756 0-3.184 1.435-3.184 3.2 0 .384-.31.696-.693.696-.382 0-.692-.312-.692-.696C6.432 2.06 8.482 0 11 0zm5.682.951c1.989 0 3.607 1.626 3.607 3.627 0 1.999-1.618 3.626-3.607 3.626-.382 0-.692-.312-.692-.696 0-.384.31-.696.692-.696 1.225 0 2.222-1.003 2.222-2.234 0-1.232-.997-2.235-2.222-2.235-.382 0-.692-.312-.692-.696 0-.385.31-.696.692-.696zM5.328.913c.383 0 .693.311.693.696 0 .384-.31.696-.693.696-1.23 0-2.23 1.006-2.23 2.242 0 1.237 1 2.242 2.23 2.242.383 0 .693.312.693.696 0 .384-.31.696-.693.696-1.993 0-3.615-1.63-3.615-3.634S3.335.913 5.328.913z'
                    transform='translate(-1366 -360) translate(1090) translate(0 212) translate(178 148) translate(98) translate(1 3.5)'
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

export default UsersListIcon;
