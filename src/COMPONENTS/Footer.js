import React from 'react';
import instagram from'../assets/instagram_1384015.png'
import facebook from '../assets/social-media_14715327.png'
import linkedin from '../assets/linkedin_3536569.png'
import youtube from  '../assets/play_16546537.png'
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>Subscribe for New Letters</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter Your Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="footer-content">
        <div className="footer-column brand">
          <div className="logo">
           <span className="brand-name">NephroCare</span>
          </div>
          <p>We are committed to delivering exceptional healthcare with compassion, expertise, and innovation.</p>
       <div className="social-icons">
  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
    <img src={instagram} alt="Instagram" />
  </a>
  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
    <img src={facebook} alt="Facebook" />
  </a>
  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
    <img src={linkedin} alt="LinkedIn" />
  </a>
  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
    <img src={youtube} alt="YouTube" />
  </a>
</div>
        </div>

        <div className="footer-column">
          <h4>All Pages</h4>
          <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/servicepage">Services</Link></li>
            <li> <Link to="/aboutpage">About</Link></li>
            <li> <Link to="/bookapppage">Book Appointment</Link></li>
            <li> <Link to="/yourapppage">Your Appointments</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><Link to="/yourapppage">Patient Resources</Link></li>
            <li><Link to="/aboutpage">Payment Options</Link></li>
          
            
            <li><Link to="/bookapppage">Appointment Booking</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact US</h4>
          <ul>
            <li>📍 2357 helloword</li>
            <li>📞 24 542 457-322</li>
            <li>✉️ helloworld123@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 <strong>Dexignlab</strong>. <a href="#">All Rights Reserved</a>.</p>
        <div className="policy-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;