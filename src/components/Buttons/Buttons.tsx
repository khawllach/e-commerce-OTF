import React from "react";
import "./Buttons.css";

type ButtonProps = {
  text: string;
  variant?: "shop" | "explore";
  onClick?: () => void;
};
const Buttons = ({ text, variant = "shop", onClick }: ButtonProps) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Buttons;
