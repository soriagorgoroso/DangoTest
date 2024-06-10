import React, { useState } from "react";
import NavBar from "./components/NavBar";
import BannerComponent from "./components/BannerComponent";
import ProductGrid from "./components/ProductGrid";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import CartModal from "./components/CartModal";

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };
  return (
    <>
      <CartProvider>
        <NavBar handleOpenCart={handleOpenCart} />
        <BannerComponent />
        <ProductGrid />
        <CartModal isOpen={isCartOpen} onClose={handleCloseCart} />
      </CartProvider>
    </>
  );
};

export default App;
