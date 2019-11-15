import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import Band from "../img/Band.jpg";
import Logo from "../img/Logo.jpg";
import Shirt from "../img/Shirt.jpg";
import Pizza from "../img/Pizza.jpg";

import ReactPlayer from "react-player";

function Landing() {
  return (
    <div className="Landing">
      <div className="Title">ALPINE LOOP</div>
      {/* <div className="InsertVid">
          <iframe className="FbVid" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Falpineloopband%2Fvideos%2F273401040041964%2F&show_text=0&width=476"> */}
      {/* <div className="OverlayTitle">ALPINE LOOP</div> */}
      {/* </iframe> */}
      {/* </div> */}
      <div className="BoxOne">
        <div className="PicBox">
          <img className="BandPic" src={Band} alt="FullBandPic" />
        </div>
      </div>
      <div className="BoxTwo">
        <div className="VidBox">
          <ReactPlayer url="https://youtu.be/A4LXZJ54OnE" />
        </div>
      </div>
      <Link to="/merch" className="EntireMerchLink">
        <div className="BoxThree">
          <div className="MerchBoxTitle">Merch</div>
          <div className="NewAlbum">
            Full-Length Album / New Merch Coming Soon!
          </div>
          <div className="MerchBox">
            <div className="Poster">
              <img className="LoopLogo" src={Logo} alt="LogoPic" />
            </div>

            <div className="Shirt">
              <img className="LoopShirt" src={Shirt} alt="ShirtPic" />
            </div>
            <div className="Pizza">
              <img className="PizzaPic" src={Pizza} alt="Pepperoni" />
            </div>
          </div>
          <div className="MerchLabels">
            <div className="PosterLabel">Posters!</div>
            <div className="ShirtLabel">Shirts!</div>
            <div className="PizzaLabel">Pizzas!</div>
          </div>
          {/* <div className="ClickHere">Click Here!</div> */}
        </div>
      </Link>
      <Link to="/login">
        <button className="AdminButton">Admin</button>
      </Link>
    </div>
  );
}

export default Landing;
