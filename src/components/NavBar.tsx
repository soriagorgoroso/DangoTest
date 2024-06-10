import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import HamburgerMenu from "../assets/Icons/HamburgerMenu";
import ShoppingBag from "../assets/Icons/ShoppingBag";
import { menu } from "../helpers/mocks/menu";

const NavBar: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

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
          <div className="hidden lg:flex space-x-6">
            {menu.map((buttonText, index) => (
              <div
                className={`w-14  ${
                  selectedButton === index ? "border-b-4 border-primary" : ""
                }`}
              >
                <button
                  key={index}
                  onClick={() => handleButtonClick(index)}
                  className={`text-primary font-regular ml-1.5`}
                >
                  {buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 mt-4 md:me-6">
          <ButtonComponent>
            <ShoppingBag />
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
