import React from "react";
import { Tick } from "../../assets/icon";

const FileldCheck = ({
  children = "Tours accommodate a maximum of 10 guests",
}) => {
  return (
    <div className="flex items-center gap-x-[0.5rem]">
      <Tick></Tick>
      <div className="trip_font font-semibold leading-[150%] text-[0.875rem] lg:text-[1rem ]">
        {children}
      </div>
    </div>
  );
};

export default FileldCheck;
