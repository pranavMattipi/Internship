// COMPONENTS/Navbar.js
import React from 'react';
import './Body.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
     <header className="navbar">
      <div className="logo">NephroCare</div>
      <nav className="nav-links">
       <Link to="/">Home</Link>
        <Link to="/servicepage">Services</Link>
        <Link to="/aboutpage">About</Link>
        <Link to="/bookapppage">Book Appointment</Link>
         <Link to="/yourapppage">Your Appointments</Link>
      </nav>
    </header>
  );
}

export default Navbar;