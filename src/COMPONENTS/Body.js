// COMPONENTS/Body.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import doctorImg from '../assets/doctor.png';
import hospitalImg from '../assets/hospital.png';
import kidneysImg from '../assets/kidneys.png';
import medicalImg from '../assets/medical.png';
import stethescopeImg from '../assets/stethescope.png';
import toothImg from '../assets/tooth.png';
import pic2 from '../assets/pic2.png';
import './Body.css';

function Body() {
  const [patientCount, setPatientCount] = useState(0);
  const [expCount, setexpCount] = useState(0);

  useEffect(() => {
    const target = 500;
    const duration = 500;
    const stepTime = Math.floor(duration / target);
    const counter = setInterval(() => {
      setPatientCount(prev => {
        if (prev < target) return prev + 1;
        clearInterval(counter);
        return prev;
      });
    }, stepTime);
    return () => clearInterval(counter);
  }, []);

  useEffect(() => {
    const target = 100;
    const duration = 500;
    const stepTime = Math.floor(duration / target);
    const counter = setInterval(() => {
      setexpCount(prev => {
        if (prev < target) return prev + 1;
        clearInterval(counter);
        return prev;
      });
    }, stepTime);
    return () => clearInterval(counter);
  }, []);

  return (
    <>
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

      <div className="our-medical-services">
        <h4 className="services-subheading"># Our Services</h4>
        <h1 className="services-heading">Our Medical Services.</h1>
        <div className="all-services">
          {[{
            img: hospitalImg, title: 'Medical Services',
            desc: 'Our comprehensive medical health services are designed to detect concerns early and support lifelong wellness'
          }, {
            img: toothImg, title: 'Dental Care',
            desc: 'Our preventive dental care services are designed to protect your smile and catch issues before they start.'
          }, {
            img: medicalImg, title: 'Medical Care',
            desc: 'Our expert-led medical services focus on early diagnosis, personalized treatment and for a better life.'
          }, {
            img: stethescopeImg, title: 'Surgical care',
            desc: 'Our surgical services combine advanced technology with expert precision to deliver safe procedures.'
          }, {
            img: kidneysImg, title: 'Kidney Care',
            desc: 'Our specialized kidney care services are designed to support early detection and lifelong kidney health and your protection'
          }].map(({ img, title, desc }) => (
            <div key={title} className="service-card">
              <img src={img} alt={title} />
              <h3>{title}</h3>
              <p>{desc}</p>
              <button><Link to="/medicalservices">Read More</Link></button>
            </div>
          ))}
        </div>
      </div>


     <div className="aboutus-section">
  <h2 className="heading">Excellence in Healthcare Rooted in Trust.</h2>

  <div className="aboutus-content">
    <div className="aboutus-image">
      <img src={pic2} alt="Lab Technician" />
    </div>

    <div className="aboutus-text">
      <ul>
        <li>
          For years, we’ve dedicated ourselves to delivering exceptional medical care with integrity, compassion, and respect. Our commitment to excellence goes beyond treatments—we aim to build lasting relationships with every patient, ensuring they feel supported and empowered throughout their health journey.
        </li>
        <li>
          We believe that true healing begins with trust, and that’s why we prioritize open communication, personalized attention, and a deep understanding of each individual’s unique needs.
        </li>
        <li>
          By integrating advanced medical technology with a patient-first approach, we strive to not only treat conditions but to enhance overall well-being. As we look to the future, our mission remains clear: to be a pillar of support in our community and a trusted partner in every step of your healthcare journey.
        </li>
      </ul>
    </div>
  </div>
</div>


    </>
  );
}

export default Body;

