import React from "react";
import heroImg from "../../assets/Heroimg.png";
import "./Box.css";

const Box = () => {
  return (
    <div>
      <section className="fashion-section">
        <div className="fashion-box">
          <h1>
            ELEVATE YOUR WORDROBE <br />
            WITH OUR FASHION FINDS
          </h1>
        </div>

        <div className="video-card">
          <img src={heroImg} alt="Fashion outfit" />

          <button className="play-btn" aria-label="Play video">
            ▶
          </button>
        </div>
      </section>
    </div>
  );
};

export default Box;
