import React from "react";
import "../styles/Header.css";
import img1 from "../static/evolutionFull.jpg";
import img2 from "../static/dieguito3.png";
const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <h1>Pokedex - Redux</h1>
        <img src={img2} alt="Diego" />
      </div>
      <img src={img1} alt="imagen full evolucion" />
    </div>
  );
};

export default Header;
