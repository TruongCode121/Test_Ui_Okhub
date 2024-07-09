import React from "react";

const FieldLayout = ({ children, className }) => {
  return <div className={`w-full lg:w-[100rem] ${className}`}>{children}</div>;
};

export default FieldLayout;
