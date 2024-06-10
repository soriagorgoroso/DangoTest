import React from "react";
import NavBar from "./components/NavBar";
import BannerComponent from "./components/BannerComponent";
import Layout from "./components/Layout";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <div>
        <NavBar />
        <BannerComponent />
        <Layout />
      </div>
    </>
  );
};

export default App;
