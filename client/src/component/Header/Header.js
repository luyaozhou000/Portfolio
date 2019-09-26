import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__title">
          <div className="header__title--name">Luyao Zhou</div>
          <div className="header__title--profession">Web Developer</div>
        </div>
        <div className="header__text">Learn Something New Everyday:)</div>
      </div>
    );
  }
}

export default Header;
