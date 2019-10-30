import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Logo from "../img/Logo.jpg";

function Nav() {
  return (
    <div className="Nav">
      <div className="Home">
        <Link to="/">
          <img className="Logo" src={Logo} alt="LogoPic"/>
        </Link>
      </div>

      <div className="NavLinks">
        <button className="Button">
          <Link to="/merch">Merch</Link>
        </button>
        <button className="Button">
          <Link to="/contact">Contact</Link>
        </button>
        <a
          href="https://www.facebook.com/alpineloopband/app/123966167614127/"
          target="_blank"
        >
          <button className="Button">Tour</button>
        </a>
      </div>
      <div className="Cart">
        <button className="Button">
          <Link to="/cart">Cart</Link>
        </button>
      </div>
    </div>
  );
}

export default Nav;
