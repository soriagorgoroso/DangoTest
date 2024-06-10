import React from "react";

interface ProductCardProps {
  price: number;
  imgUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ price, imgUrl }) => {
  return (
    <div className="drop-shadow-custom2 bg-white rounded-xl shadow-lg p-4 flex flex-col items-center mt-3">
      <div>
        <img
          src={`src/assets/${imgUrl}`}
          alt="Product Image"
          className="w-full "
        />
      </div>
      <p className="text-[16px] font-inter font-medium text-center text-gray-800 mt-2">
        $ {price}
      </p>
      <button className="bg-primary text-white rounded-xl px-2.5">
        <p className=" text-[16px]">BUY NOW</p>
      </button>
    </div>
  );
};

export default ProductCard;
