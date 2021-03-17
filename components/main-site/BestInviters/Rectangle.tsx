import React from "react";

const Retangle: React.FC<{className: string}> = ({className}) => {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' width='100' height='671' viewBox='0 0 100 671'>
      <defs>
        <linearGradient id='hvzwrv7nza' x1='0%' x2='100%' y1='50%' y2='50%'>
          <stop offset='0%' stopColor='#FFF9F2' stopOpacity='0' />
          <stop offset='100%' stopColor='#FFF9F2' />
        </linearGradient>
      </defs>
      <g fill='none' fill-rule='evenodd'>
        <g fill='url(#hvzwrv7nza)' transform='translate(-245 -4267)'>
          <g>
            <path d='M215 125H315V796H215z' transform='translate(30 4142)' />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Retangle;
