import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import HamburgerMenu from "../assets/Icons/HamburgerMenu";
import ShoppingBag from "../assets/Icons/ShoppingBag";
import { TopBarInterface } from "../types/interfaces";
import { MainNav } from "./MainNav";

const TopBar: React.FC<TopBarInterface> = ({ handleOpenCart }) => {
  return (
    <div>
      <div className="h-6 bg-primary">
        <p className="text-center text-white font-regular text-[11px] font-inter flex justify-center items-center h-full">
          30% Off All Orders Until 4/27
        </p>
      </div>

      <div className="flex justify-between items-center mb-3 relative">
        <div className="lg:hidden">
          <ButtonComponent>
            <HamburgerMenu />
          </ButtonComponent>
        </div>
        <div className="flex-1 flex justify-center item-center mt-4">
          <MainNav />
        </div>
        <div className="absolute right-0 mt-4 md:me-6">
          <ButtonComponent handleOnClick={handleOpenCart}>
            <ShoppingBag />
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
