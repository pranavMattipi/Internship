import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import medicalservicepic2 from '../assets/medicalservicepic2.png';
import medicalservicespic1 from '../assets/medicalservicespic1.png';

import './MedicalServices.css';

function MedicalServices() {
    const faqs = [
  {
    question: 'What Types of Medical Services Do You Offer?',
    answer: 'We provide a wide range of services, including routine check-ups, preventive care, diagnostics, chronic disease management, vaccinations, and specialist referrals.',
  },
  {
    question: 'Do You Offer Emergency Dental Services?',
    answer: 'Yes, we provide emergency services for dental issues such as toothaches, abscesses, and trauma. Call us for immediate assistance.',
  },
  {
    question: 'Do You Provide Preventive Health Check-Ups?',
    answer: 'Absolutely. Regular screenings and preventive exams help catch health issues early and keep you on track with your wellness goals',
  },
  {
    question: 'What Insurance Plans Do You Accept?',
    answer: 'We accept most major dental insurance plans. Contact us to confirm your provider.',
  },
  {
    question: 'What Are the Early Signs of Kidney Problems?',
    answer: 'Early signs can include fatigue, swelling in the ankles or feet, changes in urination, or high blood pressure. It’s important to get tested if you notice any of these symptoms.',
  },
];

 const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <div className="container-doctor-section5">
        <div className="wordings">
          <p className="p1">❤️ SOLUTIONS FOR BETTER HEALTH</p>
          <p className="p2">SERVICE <span>DETAILS</span> AND SECURITY</p>
          <p className="p3">At NephroCare,Our team ensures clear communication, detailed service insights, and strict protection of your medical information..</p>
          <p className="p4">We provide clear, detailed information about all our services while ensuring your medical data is kept safe and confidential. Your trust and health are our top priorities.</p>
        </div>
      </div>

      {/* Flex container for side-by-side layout */}
      <div className="medical-services-container">
        <div className="medical-text">
          <section className="medical-section">
            <h1 className="main-heading">Medical Services</h1>
            <p className="section-paragraph">
              We believe that prevention is the key to maintaining a healthy, beautiful smile. Our comprehensive preventive care
              services are designed to detect and address potential dental issues before they become serious, helping you avoid
              discomfort and costly treatments in the future. Our Preventive Care Services include Routine Dental Exams. Regular
              check-ups allow us to monitor your oral health and catch any issues early.
            </p>
          </section>

          <section className="medical-section">
            <h2 className="sub-heading">Kidney Health</h2>
            <p className="section-paragraph">
             Protect your kidney function and support overall health with early detection and preventive care.
Regular Kidney Function Tests help monitor levels of waste and fluids in your body, identifying potential issues early. Managing blood pressure and controlling blood sugar are essential steps in preventing kidney disease, especially for those at higher risk. Chronic Kidney Disease (CKD) screenings allow for timely intervention, reducing complications. We emphasize routine checkups and personalized guidance to keep your kidneys functioning at their best.
            </p>
          </section>
        </div>

        <div className="medicalservicesimg1">
          <img src={medicalservicespic1} alt="Services" className="medicalservicespic1" />
        </div>
      </div>





       <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question"
            onClick={() => toggleFAQ(index)}
          >
            <h3>{faq.question}</h3>
            <span className="faq-icon">
              {activeIndex === index ? '×' : '+'}
            </span>
          </div>
          {activeIndex === index && (
            <p className="faq-answer">{faq.answer}</p>
          )}
          <hr />
        </div>
      ))}
     
    </div>
    <div className="btn">
        <button className="bookbtn"><Link to="/bookapppage">Book Appointment</Link></button>
    </div>

    
   
    </>
  );
}

export default MedicalServices;