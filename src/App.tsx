import React, { useState } from "react";
import TopBar from "./components/TopBar";
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
        <TopBar handleOpenCart={handleOpenCart} />
        <BannerComponent />
        <ProductGrid />
        <CartModal isOpen={isCartOpen} onClose={handleCloseCart} />
      </CartProvider>
    </>
  );
};

export default App;
