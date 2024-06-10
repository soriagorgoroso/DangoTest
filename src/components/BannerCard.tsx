import CallToAction from "./CallToAction";
import React from "react";
import BackNextButton from "./BackNextButton";

const BannerCard: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="relative z-10 w-full ">
        <div className="md:flex md:flex-row-reverse md:justify-evenly">
          <div className="inset-0 flex justify-center items-start md:mb-10">
            <div className="rounded-lg mt-6">
              <img
                className="rounded-lg"
                src="src/assets/model1.png"
                alt="Descripción de la imagen"
              />
            </div>
          </div>
          <div className="text-center flex flex-col items-center md:items-start md:text-left">
            <div className="text-center w-[270px] mb-5 mt-10">
              <h2 className="tracking-wider text-[37px] text-primary leading-[41.5px] md:text-left">
                Lorem ipsum dolor sit amet
              </h2>
              <div className="md:w-[440px] md:mt-3">
                <p className="hidden md:block md:text-left text-[16px] md:text-base text-primary leading-[26px] md:leading-[32px]">
                  Nunc porttitor tortor metus, nec sagittis lectus accumsan
                  quis. Aenean euismod mollis tempor.
                </p>
              </div>
            </div>
            <div className="flex ">
              <div className="md:mr-4">
                <CallToAction label="SHOP NOW" variant="default" />
              </div>
              <div className="hidden md:block">
                <CallToAction label="TAKE THE QUIZS" variant="primary" />
              </div>
            </div>
            <a
              href="/quiz"
              className="font-regular text-[13px] tracking-wider leading-[16px] font-inter mb-2 md:hidden"
            >
              TAKE THE QUIZ
            </a>
            <div className="hidden md:flex">
              <BackNextButton />
            </div>
            <div className="flex flex-column m-8 md:hidden">
              <BackNextButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
