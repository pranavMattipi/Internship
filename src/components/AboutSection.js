// components/AboutSection.js
import React from 'react';
import pic2 from '../assets/pic2.png';
import './AboutSection.css';

function AboutSection() {
  return (
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
  );
}

export default AboutSection;
