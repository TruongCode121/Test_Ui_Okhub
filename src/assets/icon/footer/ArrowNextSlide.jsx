import React from "react";

const ArrowNextSlide = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <g clipPath="url(#clip0_7807_27939)">
          <circle cx="20" cy="20" r="19.5" stroke="white" />
          <path
            d="M26.5 20H13"
            stroke="url(#paint0_linear_7807_27939)"
            strokeWidth="2"
          />
          <g filter="url(#filter0_i_7807_27939)">
            <path d="M28 20L20 27L23.2184 20L20 13L28 20Z" fill="white" />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_i_7807_27939"
            x="20"
            y="13"
            width="28"
            height="18"
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
              result="effect1_innerShadow_7807_27939"
            />
          </filter>
          <linearGradient
            id="paint0_linear_7807_27939"
            x1="14"
            y1="20"
            x2="25"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_7807_27939">
            <rect width="40" height="40" rx="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default ArrowNextSlide;
