import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header-container">
      <img src={logo} alt="" />
      <div className="menu-list">
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
