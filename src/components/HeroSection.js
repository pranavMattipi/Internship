// components/HeroSection.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import doctorImg from '../assets/doctor.png';
import './HeroSection.css';

function HeroSection() {
  const [patientCount, setPatientCount] = useState(0);
  const [expCount, setExpCount] = useState(0);

  useEffect(() => {
    const target = 500;
    const interval = setInterval(() => {
      setPatientCount((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const target = 100;
    const interval = setInterval(() => {
      setExpCount((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 5);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-doctor-section1">
      <div className="wordings">
        <p className="p1">❤️ SOLUTIONS FOR BETTER HEALTH</p>
        <p className="p2">YOUR <span>HEALTH</span> OUR PRIORITY</p>
        <p className="p3">We are dedicated to putting your health at the forefront of everything we do.</p>
        <p className="p4">Our compassionate team of healthcare professionals is here to help.</p>
        <button className="bookappointment"><Link to="/bookapppage">Book Appointment</Link></button>
        <div className="stats">
          <p className="p5">{patientCount}+ Patients Served</p>
          <p className="p6">2M+ Reports Delivered</p>
          <p className="p7">{expCount}+ Expert Specialists</p>
        </div>
      </div>
      <div className="doc-image1">
        <img src={doctorImg} alt="Female Doctor" className="doctor-image1" />
      </div>
    </div>
  );
}

export default HeroSection;
