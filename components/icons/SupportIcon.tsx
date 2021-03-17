import {useTheme} from "@material-ui/core";
import React from "react";
import {IconProps} from "./type";

const SupportIcon: React.FC<IconProps> = ({active}) => {
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
                    transform='translate(-1366 -582) translate(1090) translate(0 212) translate(202 370) translate(74)'
                  />
                  <path
                    fill={active ? theme.palette.primary.main : theme.palette.secondary.main}
                    fillRule='nonzero'
                    d='M13.434 5.48c.293-.295.767-.295 1.06 0 .293.295.293.773 0 1.068l-5.404 5.44 3.794 6.282c.138.228.355.226.445.216.088-.012.301-.066.377-.322l2.322-7.815c.12-.4.537-.628.934-.507.397.12.623.54.504.94l-2.322 7.814c-.225.756-.847 1.287-1.624 1.387-.087.012-.173.017-.259.017-.678 0-1.298-.348-1.659-.946l-4.1-6.79c-.18-.297-.134-.68.11-.925zm4.07-5.403c.685-.199 1.427-.007 1.93.506.503.51.689 1.257.484 1.947l-1.249 4.202c-.119.4-.535.626-.933.507-.397-.12-.623-.54-.504-.939l1.249-4.203c.07-.235-.055-.394-.112-.452-.057-.058-.217-.185-.448-.117L1.829 6.207c-.256.074-.312.288-.324.377-.01.089-.015.31.213.45l3.386 2.084c.353.218.466.683.248 1.039-.14.231-.387.36-.64.36-.133 0-.268-.035-.39-.11L.936 8.321C.266 7.91-.087 7.167.018 6.382c.105-.784.64-1.407 1.395-1.627z'
                    transform='translate(-1366 -582) translate(1090) translate(0 212) translate(202 370) translate(74) translate(2 2)'
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

export default SupportIcon;
