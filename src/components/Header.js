import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Home/Home.css";
import { FiSearch } from "react-icons/fi";
import { BiCart, BiUser } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const user = true;
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className="col-12 shadow position-fixed header-nav">
      <nav className="container ">
        <div className="right d-flex col-6 gap-4 align-content-center">
          <div>
            {!toggle &&<FaBars fontSize={22} className="d-md-none" onClick={()=>setToggle(true)} />}
            {toggle &&<RxCross2 fontSize={22} className="d-md-none" onClick={()=>setToggle(false)} />}
          </div>
          <div className="logo-container">
            <h4 className="mb-0">Doctor</h4>
          </div>

          <div className="d-md-flex d-none gap-4 text-muted ">
            <NavLink className="nav-option" to="/">
              Home
            </NavLink>
            <NavLink className="nav-option" to="/doctor">
              Doctor
            </NavLink>
            <NavLink className="nav-option" to="/patient">
              Patient
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
          <div className="nav-btn nav-icon">{user && <BiUser />}</div>
        </div>
        {toggle && (<>
            <div className="mobile-menu d-md-none text-muted position-absolute col-12 bg-white d-flex flex-column col-12 gap-4 align-content-center p-4 shadow">
            <NavLink onClick={()=>setToggle(false)} to="/">
              Home
            </NavLink>
            <NavLink onClick={()=>setToggle(false)} to="/doctor">
              Doctor
            </NavLink>
            <NavLink onClick={()=>setToggle(false)} to="/patient">
              Patient
            </NavLink>
            <NavLink onClick={()=>setToggle(false)} to="/shop">
              Shop
            </NavLink>
          </div>
          </>)}
      </nav>
      </div>
      <div className="col-12" style={{height:"60px"}}></div>
    </>
  );
};

export default Header;
