import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ProductInterface } from "../types/interfaces";

const ProductCard: React.FC<ProductInterface> = ({ price, imgUrl, id }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, price, imgUrl });
  };

  return (
    <div className="drop-shadow-custom2 bg-white rounded-xl shadow-lg p-4 flex flex-col items-center mt-3">
      <div>
        <img src={imgUrl} alt="Product Image" className="w-full md:w-[193px]" />
      </div>
      <div className="mt-2 md:flex md:flex-row md:items-center">
        <p className="text-[16px] font-inter font-medium text-center text-gray-800 md:mr-4 md:mb-0">
          $ {price}
        </p>
        <button
          onClick={handleAddToCart}
          className="bg-primary text-white rounded-xl px-2.5 mt-2 md:mt-0"
        >
          <p className="text-[16px]">BUY NOW</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
