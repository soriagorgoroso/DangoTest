import { ReactNode } from "react";

export interface ButtonComponentProps {
  children: ReactNode;
  handleOnClick?: () => void;
}

export interface CallToActionProps {
  onClick?: () => void;
  label: string;
  variant: "default" | "primary";
}
export interface ProductInterface {
  id: number;
  price: number;
  imgUrl: string;
}
export interface ProductCardInterface {
  id: number;
  price: number;
  imgUrl: string;
  handleOpenCart: () => void;
}

export interface CartContextProps {
  cart: ProductInterface[];
  addToCart: (product: ProductInterface) => void;
  removeFromCart: (productId: number) => void;
}

export interface CartProviderProps {
  children: ReactNode;
}
export enum Position {
  "left",
  "right",
}
export interface NextBackButtonProps {
  onClick?: () => void;
  position: Position;
}
export interface CartModalInterface {
  isOpen: boolean;
  onClose: () => void;
}
export interface TopBarInterface {
  handleOpenCart: () => void;
}
