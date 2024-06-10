import CallToAction from "./CallToAction";
import React from "react";
import BackNextButton from "./BackNextButton";

const BannerCard = () => {
  return (
    <div className="flex justify-center ">
      <div className=" relative z-10 w-[326px] md:w-auto">
        <div className="inset-0 flex justify-center items-start  md:grid-cols-2">
          <div className="rounded-lg mt-6">
            <img
              className="rounded-lg"
              src="src\assets\model1.png"
              alt="Descripción de la imagen"
            />
          </div>
        </div>
        <div className="text-center flex flex-col items-center ">
          <div className="text-start w-[270px] mb-8 mt-8 ">
            <h2 className="tracking-wider text-[37px] text-primary leading-[41.5px]">
              Lorem ipsum dolor sit amet
            </h2>
          </div>
          <CallToAction />
          <a
            href="/quiz"
            className="font-regular text-[13px] tracking-wider leading-[16px] font-inter"
          >
            TAKE THE QUIZ
          </a>
          <div className="flex flex-column m-8 ">
            <BackNextButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
