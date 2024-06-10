import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CartModalInterface } from "../types/interfaces";

const CartModal: React.FC<CartModalInterface> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useContext(CartContext);

  if (!isOpen) return null;

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  const totalPriceRounded = totalPrice.toFixed(2);

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white p-4 rounded-lg w-96">
        <h2 className="text-xl mb-4">Your Cart</h2>
        <ul>
          {cart.map((product) => (
            <li
              key={product.id}
              className="flex justify-between items-center mb-2"
            >
              <img
                src={product.imgUrl}
                alt={product.imgUrl}
                className="w-16 h-16"
              />
              <p>${product.price}</p>
              <button
                onClick={() => handleRemoveFromCart(product.id)}
                className="bg-red-500 text-white rounded px-2"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <p className="mt-4">Total Price: ${totalPriceRounded}</p>
        <button
          onClick={onClose}
          className="bg-primary text-white rounded px-4 py-2 mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
