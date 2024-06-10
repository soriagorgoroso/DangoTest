import React from "react";
import ButtonComponent from "./ButtonComponent";
import HamburgerMenu from "../assets/Icons/HamburgerMenu";
import ShoppingBag from "../assets/Icons/ShoppingBag";
import NextBackButton from "./NextBackButton";
import { Position } from "../types/interfaces";

const BackNextButton = () => {
  return (
    <>
      <NextBackButton position={Position.left} />
      <NextBackButton position={Position.right} />
    </>
  );
};

export default BackNextButton;
