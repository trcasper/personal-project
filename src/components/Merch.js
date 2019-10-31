import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Merch.css";

class Merch extends Component {
  render() {
    return (
      <div className="Merch">
        <div className="MerchTitle">Merch </div>
        <div className="ProductContainer">
          <div className="ProductBox">
            <div className="ProductPic"></div>
            <div className="DescriptionBox"></div>
          </div>
          <div className="ProductBox">
            <div className="ProductPic"></div>
            <div className="DescriptionBox"></div>
          </div>

          <div className="ProductBox">
            <div className="ProductPic"></div>
            <div className="DescriptionBox"></div>
          </div>
          <div className="ProductBox">
            <div className="ProductPic"></div>
            <div className="DescriptionBox"></div>
          </div>
        </div>
        <button className="CheckoutButton">
          <Link to="/login">Checkout</Link>
        </button>
      </div>
    );
  }
}

export default Merch;
