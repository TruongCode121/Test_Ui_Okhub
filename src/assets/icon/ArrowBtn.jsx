import React from "react";

const ArrowBtn = () => {
  return (
    <>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group 1000004102">
          <path
            id="Vector 546"
            d="M10.125 6H0"
            stroke="url(#paint0_linear_742_6469)"
            strokeWidth="2"
          />
          <g id="Polygon 2" filter="url(#filter0_i_742_6469)">
            <path d="M12 6L6 11.25L8.41379 6L6 0.75L12 6Z" fill="white" />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_i_742_6469"
            x="6"
            y="0.75"
            width="26"
            height="14.5"
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
              result="effect1_innerShadow_742_6469"
            />
          </filter>
          <linearGradient
            id="paint0_linear_742_6469"
            x1="4.53912"
            y1="6"
            x2="4.53912"
            y2="6.892"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.31" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default ArrowBtn;
