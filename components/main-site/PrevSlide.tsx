import React from "react";

interface IProps {
  handleClick: () => void;
}
const PrevSlide: React.FC<IProps> = ({handleClick}) => {
  return (
    <svg
      className='cursor-pointer hidden md:block '
      onClick={handleClick}
      xmlns='http://www.w3.org/2000/svg'
      width='60'
      height='60'
      viewBox='0 0 60 60'
    >
      <g fill='none' fillRule='evenodd'>
        <g>
          <g>
            <g transform='translate(-250 -3886) translate(250 3886) matrix(-1 0 0 1 60 0)'>
              <circle cx='30' cy='30' r='30' fill='#FFF' />
              <g fill='#F9A44A' fillRule='nonzero'>
                <path
                  d='M4.81 5.202l-.327-3.699C4.483.673 5.163 0 6 0c.839 0 1.518.673 1.518 1.503l-.327 3.7c0 .65-.533 1.179-1.19 1.179-.66 0-1.191-.528-1.191-1.18'
                  opacity='.4'
                  transform='matrix(0 1 1 0 21 24)'
                />
                <path
                  d='M4.87 17.625c-.059-.058-.305-.274-.51-.477-1.283-1.184-3.382-4.274-4.024-5.89-.102-.246-.32-.867-.336-1.2 0-.317.074-.62.22-.91.203-.36.525-.649.904-.808.262-.101 1.05-.26 1.064-.26.86-.159 2.259-.245 3.805-.245 1.472 0 2.814.086 3.688.216.016.014.993.173 1.328.347.612.317.991.938.991 1.602v.058c-.014.433-.394 1.343-.408 1.343-.642 1.53-2.639 4.548-3.966 5.761 0 0-.342.343-.554.491-.306.231-.685.347-1.064.347-.423 0-.817-.13-1.138-.375'
                  transform='matrix(0 1 1 0 21 24)'
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default PrevSlide;
