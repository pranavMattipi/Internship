import React from 'react'
import { useNavigate } from 'react-router-dom'; // 👈 import this
import grpdocImg from '../assets/grpdocs.png';
import './AboutPage.css'
import { Link } from 'react-router-dom';

import patDoc from '../assets/patDoc.png';
import user1 from  '../assets/user1.png';
import user2 from  '../assets/user2.png';
import custfeed1 from  '../assets/custfeed1.png';
import custfeed2 from  '../assets/custfeed2.png';
import custfeed3 from  '../assets/custfeed3.png';

function AboutPage() {
   const navigate = useNavigate(); // ✅ define
  const pricingPlans = [
  {
    title: "Basic Plan",
    price: 150,
    features: [
      "Seasonal health check-up packages.",
      "Packages for routine check-ups",
      "Acceptance of major insurance plans",
      "Interest-free installment options",
      "Tailored health plans to suit individual",
    ],
    highlighted: true,
  },
  {
    title: "Standard",
    price: 380,
    features: [
      "Seasonal health check-up packages.",
      "Packages for routine check-ups",
      "Acceptance of major insurance plans",
      "Interest-free installment options",
      "Tailored health plans to suit individual",
    ],
  },
  {
    title: "Premium",
    price: 550,
    features: [
      "Seasonal health check-up packages.",
      "Packages for routine check-ups",
      "Acceptance of major insurance plans",
      "Interest-free installment options",
      "Tailored health plans to suit individual",
    ],
  },
];
  return (
    <>
    <div className="container-doctor-section3">
            <div className="wordings">
              <p className="p1">❤️ SOLUTIONS FOR BETTER HEALTH</p>
              <p className="p2">About <span>Us</span></p>
              <p className="p3">Our team of experienced doctors, nurses, and healthcare professionals is dedicated to delivering the highest standard of care across a wide range of specialties, from routine checkups to advanced kidney care. </p>
              
              <button className="bookappointment">Book Appointment</button>
            
               
            </div>
            <div className="doc-image3">
              <img src={grpdocImg} alt="Female Doctor" className="doctor-image3" />
            </div>
          </div>


  <section className="why-choose-us">
      <div className="container">
        <div className="image-container">
          <img
            src={patDoc}
            alt="Smiling elderly patient with medical staff"
            className="main-image"
          />
        </div>
        <div className="text-container">
          <p className="section-label"># Why Choose Us</p>
          <h2 className="section-title">Where Compassion<br />Meets Expertise.</h2>
          <p className="section-description">
            We believe healthcare is not just about treating illnesses—it's about caring for people.
            With a perfect balance of compassion and expertise, our team is dedicated to providing
            exceptional medical care while ensuring every patient feels valued and understood.
          </p>

          <div className="features">
            <div className="feature-card">
              <div className="feature-icon pink">👨‍⚕️</div>
              <div className="feature-content">
                <h3>Expert Professionals</h3>
                <p>
                  Our highly skilled doctors, nurses, and specialists bring years of experience
                  and a commitment to excellence in every service we provide.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon blue">💙</div>
              <div className="feature-content">
                <h3>Beyond Treatments</h3>
                <p>
                  We go beyond medical care, offering compassion, emotional support, and personalized attention to each patient’s journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


     <section className="pricing-section">
      <h4 className="subtitle"># Pricing Table</h4>
      <h1 className="title">Flexible Options for Every Patient.</h1>
     <div className="pricing-cards">
  {pricingPlans.map((plan, index) => (
    <div
      key={index}
      className={`card ${plan.highlighted ? "highlight" : ""}`}
      onClick={() => navigate('/bookapppage')}
      style={{ cursor: "pointer" }} // keeps CSS untouched, just gives hover cursor
    >
      <h2>{plan.title}</h2>
      <p className="price">
        <span>{plan.price}</span> /Rs
      </p>
      <p className="description">Primary Health Check-Up</p>
      <ul>
        {plan.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </div>
  ))}
</div>
    </section>

    <section className="testimonial-section">
      <h4 className="section-label"># Reviews</h4>
      <h2 className="section-title">What People Are Saying</h2>

      <div className="testimonial-wrapper">
        <div className="testimonial-card">
          
          <p className="testimonial-text">
           Every interaction was warm and reassuring. I felt like more than just a patient—I felt genuinely cared for.
          </p>
          <div className="testimonial-footer">
            <img src={user1} alt="user1" className="user-img" />
            <div>
              <strong className="user-name">Mr Madu Sesh</strong>
              <p className="user-role">SoftWare Engineer</p>
              <p>⭐⭐⭐⭐</p>
            </div>
            
          </div>
        </div>
 <div className="testimonial-card">
          
          <p className="testimonial-text">
            The care I received was truly exceptional. Every staff member made me feel safe and supported.
            
          </p>
          <div className="testimonial-footer">
            <img src={custfeed1} alt="user1" className="user-img" />
            <div>
              <strong className="user-name">Ms Shravya </strong>
              <p className="user-role">Receptionist</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            
          </div>
        </div>
 <div className="testimonial-card">
          
          <p className="testimonial-text">
            From the moment I walked in, I felt welcomed and cared for. The staff went above and beyond to ensure my comfort.
          </p>
          <div className="testimonial-footer">
            <img src={custfeed2} alt="user1" className="user-img" />
            <div>
              <strong className="user-name">Ms Shreya</strong>
              <p className="user-role">Student</p>
              <p>⭐⭐⭐</p>
            </div>
            
          </div>
        </div>

         <div className="testimonial-card">
          
          <p className="testimonial-text">
            The experience exceeded my expectations. The staff treated me with such kindness and care, I felt truly valuable.
          </p>
          <div className="testimonial-footer">
            <img src={custfeed3} alt="user1" className="user-img" />
            <div>
              <strong className="user-name">Dr. Meera Patel</strong>
              <p className="user-role">Mr Aarav</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            
          </div>
        </div>
        
        
        </div>

       
    
    </section>
</>
  )
}

export default AboutPage
