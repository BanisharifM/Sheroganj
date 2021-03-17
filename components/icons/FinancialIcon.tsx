import { useTheme } from "@material-ui/core";
import React from "react";
import { IconProps } from "./type";

const FinancialIcon: React.FC<IconProps> = ({active}) => {
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
                    transform='translate(-1366 -286) translate(1090) translate(0 212) translate(190 74) translate(86)'
                  />
                  <path
                    fill={active ? theme.palette.primary.main : theme.palette.secondary.main}
                    fillRule='nonzero'
                    d='M13.747 0C17.59 0 20 2.392 20 6.253v2.322l-.007.104c-.05.374-.37.661-.758.661h-.009l-.12-.01c-.16-.025-.307-.1-.421-.217-.142-.146-.22-.343-.215-.547V6.253c0-3.043-1.68-4.723-4.723-4.723H6.253c-3.052 0-4.723 1.68-4.723 4.723v7.502c0 3.044 1.68 4.715 4.723 4.715h7.494c3.052 0 4.723-1.68 4.723-4.715 0-.422.342-.765.765-.765.422 0 .765.343.765.765C20 17.608 17.608 20 13.755 20H6.253C2.393 20 0 17.608 0 13.755V6.253C0 2.393 2.392 0 6.253 0zM5.752 7.555c.203.007.395.094.533.243.139.148.213.346.206.549v6.394c-.015.422-.37.753-.792.738-.422-.014-.753-.369-.739-.791V8.285l.014-.12c.03-.157.11-.3.23-.41.148-.138.346-.21.548-.2zm4.283-3c.423 0 .765.343.765.766v9.376c0 .422-.342.765-.765.765-.422 0-.765-.343-.765-.765V5.32c0-.423.343-.765.765-.765zm4.24 6.377c.422 0 .765.343.765.765v2.99c0 .423-.343.766-.766.766-.422 0-.765-.343-.765-.765v-2.99c0-.423.343-.766.765-.766z'
                    transform='translate(-1366 -286) translate(1090) translate(0 212) translate(190 74) translate(86) translate(2 2)'
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

export default FinancialIcon;
