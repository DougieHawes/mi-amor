import React from "react";

import "./style.min.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="title">Mi Amor</h1>
      <div className="nav-links">
        <div className="nav-link">
          <i className="nav-link-icon fas fa-user"></i>
          <p className="nav-link-text">LOGIN</p>
        </div>
        <div className="nav-link">
          <i className="nav-link-icon fas fa-shopping-basket"></i>
          <p className="nav-link-text">BASKET</p>
        </div>
        <div className="menu-link">
          <div className="bar-one"></div>
          <div className="bar-two"></div>
          <div className="bar-three"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
