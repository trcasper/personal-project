import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Logo from "../img/Logo.jpg";

class Nav extends React.Component {
  constructor() {
    super();

    this.dropdown = React.createRef();
  }

  toggleShow = () => {
    // console.log(this.dropdown.current);
    let { current } = this.dropdown;

    if (current.classList.contains("show-animation")) {
      current.classList.add("hide-animation");
      current.classList.remove("show-animation");
    } else {
      current.classList.add("show-animation");
      current.classList.remove("hide-animation");
    }
  };


  render() {
    return (
      <div className="Nav">
        <div className="Home">
          <Link to="/">
            <img className="Logo" src={Logo} alt="LogoPic" />
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
        <i
          id="hamburger-icon"
          className="fas fa-bars fa-2x"
          onClick={this.toggleShow}
        />
        <div className="dropdown" ref={this.dropdown}>
          <br></br>
          <div className="dropdown-button"><Link to="/merch">Merch</Link></div>
          <br></br>
          <div className="dropdown-button"><Link to="/contact">Contact</Link></div>
          <br></br>
          <div className="dropdown-button"><a
            href="https://www.facebook.com/alpineloopband/app/123966167614127/"
            target="_blank"
          >
            <div className="dropdown-button">Tour</div>
          </a></div>
          <br></br>
          <div className="dropdown-button"><Link to="/cart">Cart</Link></div>

          <br></br>
        </div>
      </div>
    );
  }
}

export default Nav;
