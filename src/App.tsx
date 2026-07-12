import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import Topbar from "./components/Topbar/Topbar";
import Home from "./components/Home/Home";
import Shopping from "./components/Shopping/Shopping";
import Box from "./components/Box/Box";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Topbar />
      <Home />
      <Shopping />
      <Box />
      <Contact />
    </div>
  );
}

export default App;
