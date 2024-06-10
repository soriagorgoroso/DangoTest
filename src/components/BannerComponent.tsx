import React from "react";
import BannerCard from "./BannerCard";

const BannerComponent: React.FC = () => {
  return (
    <div className="relative">
      <img
        src="src\assets\bannerImg.png"
        alt="Descripción de la imagen"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <BannerCard />
    </div>
  );
};

export default BannerComponent;
