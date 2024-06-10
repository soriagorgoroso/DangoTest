import React from "react";
import ArrowRight from "../assets/Icons/ArrowRight";
import ArrowRightSmall from "../assets/Icons/ArrowRightSmall";

interface CallToActionProps {
  onClick?: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onClick }) => {
  return (
    <div className="drop-shadow-custom mb-[17px]">
      <button
        className="flex items-center bg-primary text-white ps-7 px-6 rounded-lg w-[184px] h-[57px] justify-between"
        onClick={onClick}
      >
        <p
          className="text-[13px] leading-[16px] font-inter font-extralight"
          style={{ letterSpacing: "0.25px" }}
        >
          SHOP NOW
        </p>
        <ArrowRightSmall />
      </button>
    </div>
  );
};

export default CallToAction;
