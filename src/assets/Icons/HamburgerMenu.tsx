import React from "react";

const HamburgerMenu: React.FC = () => {
  return (
    <div className="flex flex-col justify-around m-2 w-6 h-6 cursor-pointer">
      <div className="w-25 h-0.5 bg-black"></div>
      <div className="w-25 h-0.5 bg-black"></div>
      <div className="w-25 h-0.5 bg-black"></div>
    </div>
  );
};

export default HamburgerMenu;
