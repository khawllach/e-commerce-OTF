import React from "react";
import "./Home.css";
import outfit1 from "../../assets/outfit1.png";
import outfit2 from "../../assets/outfit2.png";
import outfit2_left from "../../assets/outfit2-left.png";
import outfit2_right from "../../assets/outfit2-right.png";
import outfit3 from "../../assets/outfit3.png";
import Buttons from "../Buttons/Buttons";
const Home = () => {
  return (
    <div className="home">
      <h1 className="hero-title">
        DIVE INTO A WORLD OF ENDLESS FASHION POSSIBILITIES
      </h1>
      <div className="intro">
        <div className="intro-left">
          <img src={outfit1} alt="Hero" className="intro-left-img" />
        </div>
        <div className="intro-center">
          <Buttons
            text="Shop Now"
            variant="shop"
            onClick={() => console.log("Shop Now clicked")}
          />
          <Buttons
            text="Explore More Products"
            variant="explore"
            onClick={() => console.log("Explore clicked")}
          />
          <div className="intro-center-bottom">
            <img src={outfit3} alt="Hero" className="intro-center-bottom-img" />
            <h1 className="intro-center-bottom-text">
              OTF <br /> Collection
            </h1>
          </div>
        </div>
        <div className="intro-right">
          <img src={outfit2} alt="Hero" className="intro-right-img" />
          <div className="intro-right-bottom">
            <img
              src={outfit2_left}
              alt="Hero"
              className="intro-right-bottom-img"
            />
            <img
              src={outfit2_right}
              alt="Hero"
              className="intro-right-bottom-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
