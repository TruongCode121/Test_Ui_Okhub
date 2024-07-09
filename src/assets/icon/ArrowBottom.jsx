import React from "react";

const ArrowBottom = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="49"
        viewBox="0 0 50 49"
        fill="none"
      >
        <g filter="url(#filter0_i_7807_27319)">
          <circle cx="25" cy="24.5" r="23.5" stroke="#E64828" strokeWidth="2" />
        </g>
        <path
          d="M25.4593 35.75L15.5 14L25.4593 22.75L35.4186 14L25.4593 35.75Z"
          fill="#E64828"
        />
        <defs>
          <filter
            id="filter0_i_7807_27319"
            x="0.5"
            y="0"
            width="69"
            height="53"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="20" dy="4" />
            <feGaussianBlur stdDeviation="50" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_7807_27319"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default ArrowBottom;
