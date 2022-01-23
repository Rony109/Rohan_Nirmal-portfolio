import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
const  Navbar = () => {
  return (
    <>
      <header>
          <div className="logo">
            <NavLink  to='/'><h1>R</h1></NavLink>
          </div>
          <nav>
            <ul>
              <li><strong>01.</strong> 
              <NavLink className="nav-link" to="/about">  About</NavLink>
              </li>
              <li><strong>02.</strong>
              <NavLink className="nav-link" to="/experience">  Experience</NavLink>
              </li>
              <li><strong>03.</strong>
              <NavLink className="nav-link" to="/work">  Work</NavLink>
              </li>
              <li><strong>04.</strong>
              <NavLink className="nav-link" to="/contact">  Contact</NavLink>
              </li>
            </ul>
          </nav>
      </header>
    </>
  );
}

export default Navbar


