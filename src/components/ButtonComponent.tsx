import React from "react";
import { ButtonComponentProps } from "../types/interfaces";

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  handleOnClick,
}) => {
  return <button onClick={handleOnClick}>{children}</button>;
};

export default ButtonComponent;
