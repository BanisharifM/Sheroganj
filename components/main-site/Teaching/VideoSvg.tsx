import React from "react";

const VideoSvg: React.FC<{width?: string}> = ({width = "30px"}) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} height={width} viewBox='0 0 30 30'>
      <g fill='none' fillRule='evenodd'>
        <g fill='#FFF' fillRule='nonzero'>
          <g>
            <g>
              <g>
                <path
                  d='M30 15.007C30 23.271 23.267 30 15 30S0 23.27 0 15.007C0 6.73 6.733 0 15 0s15 6.73 15 15.007'
                  opacity='.4'
                  transform='translate(-705 -3608) translate(360 3416) translate(300 147) translate(45 45)'
                />
                <path
                  d='M21 15.007c0 .38-.12.76-.358 1.065-.045.06-.254.306-.418.466l-.09.088c-1.252 1.328-4.37 3.326-5.95 3.966 0 .014-.94.395-1.387.408h-.06c-.686 0-1.327-.378-1.655-.99-.18-.337-.343-1.314-.358-1.327-.135-.876-.224-2.218-.224-3.69 0-1.544.09-2.946.254-3.806 0-.014.164-.802.268-1.064.164-.378.462-.7.835-.904.299-.145.612-.219.94-.219.343.016.984.233 1.238.335 1.67.642 4.862 2.742 6.085 4.025.209.204.433.453.492.51.254.32.388.714.388 1.137'
                  transform='translate(-705 -3608) translate(360 3416) translate(300 147) translate(45 45)'
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default VideoSvg;
