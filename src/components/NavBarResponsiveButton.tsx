import React, { ReactNode } from "react";

interface NavBarResponsiveButtonProps {
  children: ReactNode;
}

const NavBarResponsiveButton: React.FC<NavBarResponsiveButtonProps> = ({
  children,
}) => {
  return <button>{children}</button>;
};

export default NavBarResponsiveButton;
