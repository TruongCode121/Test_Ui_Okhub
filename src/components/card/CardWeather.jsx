import React from "react";
import { styled } from "styled-components";
import { Cloud } from "../../assets/icon";

const CardWeatherStyless = styled.div`
  width: 5.25rem;
  height: 6.75rem;
  /* flex-shrink: 0; */
  border-radius: 0.71156rem;
  border: 1px solid rgba(255, 255, 255, 0.38);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.01) 100%
  );
  backdrop-filter: blur(5px);
  &:hover {
    background: linear-gradient(
      180deg,
      rgba(255, 221, 203, 0.4) 0%,
      rgba(255, 89, 0, 0.4) 100%
    );
    backdrop-filter: blur(5px);
  }
  &.active {
    background: linear-gradient(
      180deg,
      rgba(255, 221, 203, 0.4) 0%,
      rgba(255, 89, 0, 0.4) 100%
    );
    backdrop-filter: blur(5px);
  }
`;
const CardWeather = ({ children = "JAN", className }) => {
  return (
    <CardWeatherStyless
      className={`card_hover ${className} trip_font text-center select-none`}
    >
      <div className=" mt-[0.42rem] mb-[0.44rem]  rounded-[0.71156rem] w-full">
        <div className="font-bold text-[1rem]">{children}</div>
        <div className="tracking-[0.00375rem] text-[0.75rem] leading-[120%] opacity-70 pb-[0.2rem] pt-[0.1rem]">
          Degree
        </div>
        <div className="tracking-[0.00375rem] text-[0.75rem] leading-[120%] font-bold opacity-90">
          27-32
        </div>
        <div className="flex justify-center flex-shrink-0 py-[0.2rem]">
          <Cloud></Cloud>
        </div>
        <div className="tracking-[0.00375rem] text-[0.75rem] leading-[120%] font-bold opacity-90">
          65-80 mm
        </div>
      </div>
    </CardWeatherStyless>
  );
};

export default CardWeather;
