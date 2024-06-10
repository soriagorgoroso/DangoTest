import React, { useState } from "react";
import { menu } from "../helpers/mocks/menu";

export const MainNav: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(0);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };
  return (
    <div className="hidden lg:flex space-x-6">
      {menu.map((buttonText, index) => (
        <div
          key={index}
          className={`w-14  ${
            selectedButton === index ? "border-b-4 border-primary" : ""
          }`}
        >
          <button
            onClick={() => handleButtonClick(index)}
            className={`text-primary font-regular ml-1.5`}
          >
            {buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};
