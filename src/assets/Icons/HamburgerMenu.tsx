import React from "react";

const HamburgerMenu: React.FC = () => {
  return (
    <div className="flex flex-col justify-around m-2 w-6 h-4 cursor-pointer">
      <div className="w-25 h-[1px] bg-black"></div>
      <div className="w-25 h-[1px] bg-black"></div>
      <div className="w-25 h-[1px] bg-black"></div>
    </div>
  );
};

export default HamburgerMenu;
