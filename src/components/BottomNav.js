import React from "react";
import "./BottomNav.css";
import Fb from "../img/Fb.png";
import Insta from "../img/Insta.png";
import Youtube from "../img/Youtube.png";
import Spotify from "../img/Spotify.png";
import Apple from "../img/Apple.png";

class BottomNav extends React.Component {
  render() {
    return (
      <div className="BottomNav">
        

            <div className="PicLinkBox">
              <a
                href="https://www.facebook.com/alpineloopband/?ref=aymt_homepage_panel&eid=ARChc-ypd4xzxV1rCaOEq0_hwxZPqay_sr9IUfxAxmUupU40Yd-ZTmtsdlcj7EXg0RVUc4Y3u1p_PYEv"
                target="_blank"
              >
                <img className="Picss" src={Fb} alt="FacebookPic" />
              </a>
            </div>
            <div className="PicLinkBox">
              <a
                href="https://www.instagram.com/alpineloopband/"
                target="_blank"
              >
                <img className="Picss" src={Insta} alt="InstagramPic" />
              </a>
            </div>
        <div className="PicLinkBox">
            <a
              href="https://www.youtube.com/channel/UCu4Mun5I787cuQSGTzA9D0A"
              target="_blank"
            >
              <img className="Picss" src={Youtube} alt="YoutubePic" />
            </a>
          </div>
          <div className="PicLinkBox">
            <a
              href="https://open.spotify.com/artist/10JP5czbb1gs4aL1KCABuD?si=UVi0khcmQmifMhGXYpxwYw"
              target="_blank"
            >
              <img className="Picss" src={Spotify} alt="SpotifyPic" />
            </a>
          </div>
          <div className="PicLinkBox">
            <a
              href="https://music.apple.com/us/artist/alpine-loop/1036944051"
              target="_blank"
            >
              <img className="Picss" src={Apple} alt="ApplePic" />
            </a>
          
          </div>
      </div>
    );
  }
}

export default BottomNav;
