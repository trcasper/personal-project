import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import Band from "../img/Band.jpg";
// import Fb from "../img/Fb.png";
// import Insta from "../img/Insta.jpg";
// import Youtube from "../img/Youtube.jpg";
// import Spotify from "../img/Spotify.jpg";
// import Apple from "../img/Apple.jpg";
import Logo from "../img/Logo.jpg";
import Shirt from "../img/Shirt.jpg";
import Pizza from "../img/Pizza.jpg";

import ReactPlayer from "react-player";

function Landing() {
  return (
    <div className="Landing">
      <div className="Title">ALPINE LOOP</div>
      <div className="BoxOne">
        <div className="PicBox">
          <img className="BandPic" src={Band} alt="FullBandPic" />
        </div>
        {/* <div className="LinksOne">
          <div className="FbBox">
            <a
              href="https://www.facebook.com/alpineloopband/?ref=aymt_homepage_panel&eid=ARChc-ypd4xzxV1rCaOEq0_hwxZPqay_sr9IUfxAxmUupU40Yd-ZTmtsdlcj7EXg0RVUc4Y3u1p_PYEv"
              target="_blank"
            >
              <img className="Fb" src={Fb} alt="FacebookPic" />
            </a>
          </div>
          <div className="InstaBox">
            <a href="https://www.instagram.com/alpineloopband/" target="_blank">
              <img className="Insta" src={Insta} alt="InstagramPic" />
            </a>
          </div>
        </div> */}
      </div>
      <div className="BoxTwo">
        <div className="VidBox">
          <ReactPlayer url="https://youtu.be/A4LXZJ54OnE" />
        </div>
        {/* <div className="LinksTwo">
          <div className="YoutubeBox">
            <a
              href="https://www.youtube.com/channel/UCu4Mun5I787cuQSGTzA9D0A"
              target="_blank"
            >
              <img className="Youtube" src={Youtube} alt="YoutubePic" />
            </a>
          </div>
          <div className="SpotifyBox">
            <a
              href="https://open.spotify.com/artist/10JP5czbb1gs4aL1KCABuD?si=UVi0khcmQmifMhGXYpxwYw"
              target="_blank"
            >
              <img className="Spotify" src={Spotify} alt="SpotifyPic" />
            </a>
          </div>
          <div className="AppleBox">
            <a
              href="https://music.apple.com/us/artist/alpine-loop/1036944051"
              target="_blank"
            >
              <img className="Apple" src={Apple} alt="ApplePic" />
            </a>
          </div>
        </div> */}
      </div>
      
      <Link to="/merch">
        <div className="BoxThree">
          <div className="MerchTitle">Merch</div>
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
          <div className="ClickHere">Click Here!</div>
        </div>
      </Link>
      <Link to="/login"><button className="AdminButton">Admin</button></Link>

    </div>
  );
}

export default Landing;
