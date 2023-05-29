import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Home.css"

const Header = () => {

  return (
    <>
    <nav>
    <div className="right">
        <div className="logo"><img src="" alt="" /></div>
        <div className='d-flex'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Doctor</NavLink>
            <NavLink to="/">Shop</NavLink>
        </div>
        
    </div>

    </nav>
    </>
  )
}

export default Header