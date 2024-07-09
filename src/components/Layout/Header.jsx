import React, { useState } from "react";
import { FieldLayout } from "../field";
import { Logo } from "../../assets/img";
import { Menu } from "../../assets/icon";
const Header = ({ handleOpenMenu }) => {
  return (
    <>
      <FieldLayout className="flex justify-between items-center px-[1.25rem] lg:px-20 py-6 z-10">
        <div className="w-[9.625rem] h-[3.1875rem] flex-shrink-0">
          <img
            src={Logo}
            alt=""
            className="w-[7.1875rem] h-[2.5625rem] lg:w-full lg:h-full"
          />
        </div>

        <div
          className="text-white flex items-center rounded-full border-[1px] lg:border-0 border-white lg:bg-[#E64827] py-[0.5rem] pr-[1rem] pl-[0.5rem] cursor-pointer"
          onClick={handleOpenMenu}
        >
          <Menu></Menu>
          <div className="trip_font text-[1rem] lg:text-[20px] font-bold ">
            MENU
          </div>
        </div>
      </FieldLayout>
    </>
  );
};

export default Header;
