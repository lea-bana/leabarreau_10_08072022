import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../style/header.css";
import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo_kasa" className="logo_kasa"></img>
        </Link>
      </div>
      <div className="navbar">
        <Link to="/">Accueil</Link>
        <Link to="/">A propos</Link>
      </div>
    </div>
  );
}
export default Header;
