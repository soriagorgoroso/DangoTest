import React from "react";
import ShoppingBag from "../assets/Icons/ShoppingBag";
import NavBarResponsiveButton from "./NavBarResponsiveButton";
import HamburgerMenu from "../assets/Icons/HamburgerMenu";

const NavBar: React.FC = () => {
  return (
    <div>
      <div className="h-6 bg-primary container mx-auto">
        <p className="text-center text-white font-regular text-[11px] font-inter flex justify-center items-center h-full">
          30% Off All Orders Until 4/27
        </p>
      </div>

      <div className="container mx-auto flex justify-between mb-4">
        <NavBarResponsiveButton>
          <HamburgerMenu />
        </NavBarResponsiveButton>
        <NavBarResponsiveButton>
          <ShoppingBag />
        </NavBarResponsiveButton>
      </div>
    </div>
  );
};

export default NavBar;
