import React, { ReactNode } from "react";

interface ButtonComponentProps {
  children: ReactNode;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default ButtonComponent;
