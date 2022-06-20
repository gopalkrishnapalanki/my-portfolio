import React from "react";
import "./index.css";
import Header from "../Header";
import Cookies from "js-cookie";
import Skills from "../Skills";
import Portfolio from "../Portfolio";
import Slider from "../Slider";
const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Portfolio />
        <Skills />
        <Slider />
      </div>
    </>
  );
};

export default Home;
