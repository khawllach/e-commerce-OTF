import React from "react";
import "./Contact.css";
import { icons } from "../Icons/Icons";

const Contact = () => {
  return (
    <div>
      <hr />
      <div className="contact-section">
        <div className="contact-links">
          <div>{icons.insta}</div>
          <div>{icons.facebook}</div>
          <div>{icons.tiktok}</div>
        </div>
        <div className="signup">
          <p>SIGN UP FOR THE LATEST FASHION NEWS</p>
          <div className="email-signup">
            <input type="email" placeholder="Enter your email" />
            <button>Sign Up</button>
          </div>
        </div>
      </div>
      <hr />
      <footer className="footer">
        <div className="footer-sections">
          <div>
            <h4>HOW CAN I HELP</h4>
            <p>DELIVERY</p>
            <p>RETURNS</p>
            <p>MY ACCOUNT</p>
            <p>FAQ</p>
            <p>CONTACT</p>
          </div>
          <div className="footer2">
            <p>STYLESTUDIO</p>
            <p>STORELOCATOR</p>
            <p>SIZEGUIDES</p>
            <p>GIFTCARDS</p>
          </div>
        </div>
        <div className="footer-sections">
          <div>
            <h4>USEFUL INFORMATION</h4>
            <p>TERMS & CONDITIONS</p>
            <p>PRIVACY & COOKIES</p>
            <p>SECURITY</p>
            <p>ACCESSIBLTY</p>
          </div>
        </div>
        <div className="footer-sections">
          <div>
            <h4>INSIDE RIVER ISLAND</h4>
            <p>ABOUT US</p>
            <p>CAREERS AT RIVER ISLAND</p>
            <p>ARRUATE</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
