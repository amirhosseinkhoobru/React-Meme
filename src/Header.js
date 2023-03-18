import React from "react";
import trollFaceLogo from "./images/troll-face.png";

export default function Header() {
  return (
    <header>
      <img className="header-logo" src={trollFaceLogo} alt="" />
      <h2 className="header-title">Meme Generatore</h2>
      <h4 className="header-project">React Course - Project 3</h4>
    </header>
  );
}
