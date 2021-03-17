import React from "react";
import {SvgIcon, SvgIconProps} from "@material-ui/core";
import {useTheme} from "@material-ui/styles";

export default function PaginationIcon({
  fillColor,
  ...props
}: SvgIconProps & {fillColor?: SvgIconProps["color"] | string}) {
  const theme = useTheme<any>();
  const color = theme.palette[fillColor || "primary"];
  const finalColor = color?.main || fillColor;
  return (
    <SvgIcon {...props} width={18} height={12} viewBox='0 0 18 12' xmlns='http://www.w3.org/2000/svg'>
      <g fill='none' fillRule='evenodd'>
        <g fill={finalColor} fillRule='nonzero'>
          <g>
            <g>
              <g>
                <g>
                  <g>
                    <path
                      d='M4.81 5.202l-.327-3.699C4.483.673 5.163 0 6 0c.839 0 1.518.673 1.518 1.503l-.327 3.7c0 .65-.533 1.179-1.19 1.179-.66 0-1.191-.528-1.191-1.18'
                      opacity='.4'
                      transform='translate(-839 -858) translate(150 100) translate(383 704) translate(30 30) translate(255) rotate(-90 28.5 7.5)'
                    />
                    <path
                      d='M4.87 17.625c-.059-.058-.305-.274-.51-.477-1.283-1.184-3.382-4.274-4.024-5.89-.102-.246-.32-.867-.336-1.2 0-.317.074-.62.22-.91.203-.36.525-.649.904-.808.262-.101 1.05-.26 1.064-.26.86-.159 2.259-.245 3.805-.245 1.472 0 2.814.086 3.688.216.016.014.993.173 1.328.347.612.317.991.938.991 1.602v.058c-.014.433-.394 1.343-.408 1.343-.642 1.53-2.639 4.548-3.966 5.761 0 0-.342.343-.554.491-.306.231-.685.347-1.064.347-.423 0-.817-.13-1.138-.375'
                      transform='translate(-839 -858) translate(150 100) translate(383 704) translate(30 30) translate(255) rotate(-90 28.5 7.5)'
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  );
}
