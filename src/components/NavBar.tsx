import React from "react";
import ShoppingBag from "../assets/Icons/ShoppingBag";
import ButtonComponent from "./ButtonComponent";
import HamburgerMenu from "../assets/Icons/HamburgerMenu";

const NavBar: React.FC = () => {
  return (
    <div>
      <div className="h-6 bg-primary container mx-auto">
        <p className="text-center text-white font-regular text-[11px] font-inter flex justify-center items-center h-full">
          30% Off All Orders Until 4/27
        </p>
      </div>

      <div className="container mx-auto flex justify-between mb-3">
        <ButtonComponent>
          <HamburgerMenu />
        </ButtonComponent>
        <ButtonComponent>
          <ShoppingBag />
        </ButtonComponent>
      </div>
    </div>
  );
};

export default NavBar;
