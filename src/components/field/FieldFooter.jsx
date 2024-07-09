import React from "react";
import { Phone } from "../../assets/icon";

const FieldFooter = ({
  children = "+84 941556338",
  icon = <Phone></Phone>,
}) => {
  return (
    <div className="flex trip_font text-[1rem] gap-x-[0.5rem] items-center mb-[1rem]">
      {icon}
      <div className="tracking-[0.0125rem]">
        <span className="text-[#6A6A6A]">{children}</span>
      </div>
    </div>
  );
};

export default FieldFooter;
