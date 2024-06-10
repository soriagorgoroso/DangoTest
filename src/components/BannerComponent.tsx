import React from "react";
import BannerCard from "./BannerCard";

const BannerComponent: React.FC = () => {
  return (
    <div className="relative mb-7">
      <img
        src="https://github.com/soriagorgoroso/DangoTest/blob/main/public/img/bannerimg.png?raw=true"
        alt="Descripción de la imagen"
        className="absolute inset w-full h-full object-cover"
      />
      <BannerCard />
    </div>
  );
};

export default BannerComponent;
