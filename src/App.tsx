import React from "react";
import NavBar from "./components/NavBar";
import BannerComponent from "./components/BannerComponent";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <div>
        <NavBar />
        <BannerComponent />
      </div>
    </>
  );
};

export default App;
