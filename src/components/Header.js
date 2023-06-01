import React from "react";
import { NavLink } from "react-router-dom";
import "./Home/Home.css";
import { FiSearch } from "react-icons/fi";
import { BiCart ,BiUser } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <nav className="px-4 position-fixed col-12 ">
        <div className="right d-flex col-6 gap-4 align-content-center">
          <div className="logo-container mx-2">
            <h4 className="mb-0" >Doctor</h4>
          </div>

          <div className="d-flex gap-4">
            <NavLink className="nav-option" to="/">
              Home
            </NavLink>
            <NavLink className="nav-option" to="/doctor">
              Doctor
            </NavLink>
            <NavLink className="nav-option" to="/shop">
              Shop
            </NavLink>
          </div>
        </div>
        <div className="left col-6 row gap-2 justify-content-end">
          <div className="nav-btn nav-icon">
            <FiSearch />
          </div>
          <div className="nav-btn nav-icon">
            <BiCart />
          </div>
          <div className="nav-btn nav-icon">
            <BiUser />
          </div>
        </div>
      </nav>
      <div className="space"></div>
    </>
  );
};

export default Header;
