import React from "react";
import { styled } from "styled-components";
import { ClockMenu } from "../../assets/icon";
import { Cardmenu1 } from "../../assets/img";
const CardMenuStyle = styled.div`
  background: linear-gradient(
      180deg,
      rgba(18, 39, 24, 0) 0%,
      rgba(18, 39, 24, 0.6) 100%
    ),
    url(${(props) => props.img}) lightgray 50% / cover no-repeat;
`;
const CardMenu = ({ img = Cardmenu1 }) => {
  return (
    <CardMenuStyle
      img={img}
      className="w-[15.75rem] group h-[20.4375rem] rounded-3xl flex items-end select-none"
    >
      <div className="w-[15.75rem] h-[14.375rem] pt-[7.69rem] px-[0.94rem] trip_font">
        <div className="text-[1.5rem] font-bold group-hover:opacity-0 opacity-100 transition-all duration-500 group-hover:translate-y-[16px]">
          $199
        </div>
        <div className="text-[0.875rem] leading-[120%] tracking-[-0.01rem] font-[600] group-hover:translate-y-4 transition-all duration-500 ">
          Ha Giang Loop tour: Itinerary in 4 Days 5 Nights
        </div>
        <div className="flex items-center gap-x-2 mt-[0.31rem] group-hover:opacity-0 opacity-100 transition-all duration-500 group-hover:translate-y-[16px]">
          <div>
            <ClockMenu></ClockMenu>
          </div>
          <div className="text-[0.75rem] font-bold tracking-[0.00375rem]">
            Intermediate
          </div>
          <div className="w-1  h-1 bg-white rounded-full"></div>
          <div className="text-[0.75rem]">8 Days / 7 Night</div>
        </div>
      </div>
    </CardMenuStyle>
  );
};

export default CardMenu;
