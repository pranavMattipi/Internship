import React from 'react';
import { Link } from 'react-router-dom';

import docservices from '../assets/docservices.png';
import docservices2 from '../assets/docservices2.png';

import './ServicePage.css';
function ServicePage() {
  const services = [
    "Preventive Care",
    "Medical Services",
    "Dental Care",
    "Surgical Care",
    "Kidney Care"
  ];

  return (
    <>
      {/* Section 1 */}
      <div className="container">
        <div className="left-panel">
          <h1 className="title">In-Depth <span>Health Insights</span></h1>
          <img src={docservices} alt="Doctor" className="image" />
          <p className="text-content">
           At NephroCare, we believe quality healthcare starts with personalized attention and evidence-based solutions. Our range of services is designed to meet your individual health needs—whether it’s preventive care, routine check-ups, or specialized treatment. From consultation to recovery, our expert medical team ensures you receive compassionate care in a safe, supportive environment. With a focus on innovation, comfort, and trust, we are committed to helping you lead a healthier, more empowered life.


          </p>
          <p className="text-content">
            <strong>What You’ll Discover:</strong> In-depth guides on various health conditions.
            Explore the underlying causes, common symptoms, diagnostic methods, and available treatments to gain
            a thorough understanding of your health concerns.
          </p>
        </div>

        <div className="right-panel">
          <h3 className="services-title">Services List</h3>
          <div className="services-list">
            <Link to="/medicalservices">
            
            {services.map((service, index) => (
              
              <div className="service-option" key={index}>
                
                {service}
                <span>→</span>
                
              </div>
              
            ))}</Link>
          </div>
        </div>
      </div>

      {/* Section 2: Continuation */}
      <div className="container">
        <div className="left-panel">
          <h2 className="title">Explore More <span>Health Topics</span></h2>
          <p className="text-content">
            Staying informed is essential for proactive health management. In this section, you'll uncover deeper insights
            into lifestyle-related conditions, prevention strategies, and wellness practices to improve your quality of life.
          </p>
          <p className="text-content">
            Our goal is to simplify complex medical concepts, provide clarity, and empower you with the tools needed to navigate
            your health journey with confidence. Whether you're researching a condition or seeking preventive tips, you're in the right place.
          </p>
        </div>

        <div className="right-panel">
          <img src={docservices2} alt="Health Research" className="image" />
        </div>
      </div>
    </>
  );
}

export default ServicePage;