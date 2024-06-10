import React from "react";
import BannerCard from "./BannerCard";

const BannerComponent: React.FC = () => {
  return (
    <div className="relative mb-7">
      <img
        src="public\img\bannerImg.png"
        alt="Descripción de la imagen"
        className="absolute inset w-full h-full object-cover"
      />
      <BannerCard />
    </div>
  );
};

export default BannerComponent;
