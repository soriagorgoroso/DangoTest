import React from "react";
import ArrowRightSmall from "../assets/Icons/ArrowRightSmall";
import { CallToActionProps } from "../types/interfaces";

const CallToAction: React.FC<CallToActionProps> = ({
  onClick,
  label,
  variant,
}) => {
  const colorClass = variant === "primary" ? "text-primary" : "text-white";
  const bgClass =
    variant === "default"
      ? "bg-primary"
      : "bg-transparent border-2 border-primary	";

  return (
    <div className={`drop-shadow-custom1 md:drop-shadow-none mb-6 `}>
      <button
        className={`flex items-center ${colorClass} ps-7 px-6 rounded-lg w-[184px] h-[57px] justify-between ${bgClass}`}
        onClick={onClick}
      >
        <p
          className="text-[13px] leading-[16px] font-inter font-extralight"
          style={{ letterSpacing: "0.25px" }}
        >
          {label}
        </p>
        <ArrowRightSmall />
      </button>
    </div>
  );
};

export default CallToAction;
