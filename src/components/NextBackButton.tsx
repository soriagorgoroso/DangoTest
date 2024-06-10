import React from "react";
import ArrowLeft from "../assets/Icons/ArrowLeft";
import ArrowRight from "../assets/Icons/ArrowRight";
import { NextBackButtonProps, Position } from "../types/interfaces";

const NextBackButton: React.FC<NextBackButtonProps> = ({
  onClick,
  position,
}) => {
  return (
    <div className="w-[41px] h-[31px] mx-1">
      {position === Position.left ? (
        <button
          className={`flex items-center justify-center rounded-full border-2
          w-[41px] h-[31px] focus:outline-none m-1 bg-transparent border-primary`}
          onClick={onClick}
        >
          <ArrowLeft />
        </button>
      ) : (
        <button
          className={`flex items-center justify-center rounded-full w-[41px] h-[31px] focus:outline-none m-1 bg-primary`}
          onClick={onClick}
        >
          <ArrowRight />
        </button>
      )}
    </div>
  );
};

export default NextBackButton;
