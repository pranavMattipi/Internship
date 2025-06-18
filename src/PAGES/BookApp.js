import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookApp.css';
import bookappimg from '../assets/bookappimg.png';
import bookappimg2 from '../assets/bookappimg2.png';
import bookappimg3 from '../assets/bookappimg3.png';
import bookap2 from '../assets/bookap2.png';

function BookApp({ setAppointments }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',
    datetime: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointment = {
      srno: Math.floor(Math.random() * 10000),
      name: formData.name,
      phone: formData.phone,
      date: formData.datetime,
    };

    setAppointments(prev => [...prev, appointment]);
    alert('✅ Appointment booked successfully!');
    navigate('/yourapppage');
  };

  return (
    <>
      <div className="container-doctor-section4">
        <div className="wordings">
          <p className="p1">❤️ SOLUTIONS FOR BETTER HEALTH</p>
          <p className="p2">BOOK YOUR <span>APPOINTMENT</span> NOW</p>
          <p className="p3">Don’t wait to feel better. Schedule your appointment today and take the first step toward expert care and personalized treatment.</p>
          <p className="p4">Our compassionate team of healthcare professionals is here to help.</p>
          <button className="bookappointment">Book Appointment</button>
        </div>

        <div className="doc-image4">
          <img src={bookap2} alt="Book App Doc" className="doctor-image4" />
        </div>
      </div>

      <div className="appointment-section">
        <div className="form-container">
          <h4 className="section-subtitle"># Get In Touch</h4>
          <h2 className="section-title">Make An Appointment</h2>

          <form className="appointment-form" onSubmit={handleSubmit}>
            <div className="input-row">
              <input name="name" type="text" placeholder="Your Name" onChange={handleChange} required />
              <input name="email" type="email" placeholder="Your Email" onChange={handleChange} required />
            </div>
            <div className="input-row">
              <input name="phone" type="tel" placeholder="Phone Number" onChange={handleChange} required />
              <select name="doctor" onChange={handleChange} required>
                <option value="">Select Doctor</option>
                <option value="dr1">Dr. John Doe</option>
                <option value="dr2">Dr. Harry</option>
                <option value="dr3">Dr. Smith</option>
                <option value="dr4">Dr. Mary</option>
                <option value="dr5">Dr. Doe</option>
                <option value="dr6">Dr. Sandy</option>
              </select>
            </div>
            <div className="input-row">
  <label htmlFor="datetime" className="day-time">Select Appointment Date & Time</label>
  <input
    id="datetime"
    name="datetime"
    className="input-day-time"
    type="datetime-local"
    onChange={handleChange}
    required
  />
</div>
            <textarea name="message" placeholder="Describe Your Problem..." rows="4" onChange={handleChange}></textarea>
            <button type="submit" className="book-btn">Book An Appointment →</button>
          </form>
        </div>

        <div className="doctor-image-section">
          <img src={bookappimg2} alt="Doctor" className="doctor-image-bookapp2" />
          <div className="emergency-box1">
            <span className="emergency-icon">📞</span>
            <div>
              <p>Emergency Call</p>
              <strong>013 354 213 - 92132</strong>
            </div>
          </div>
        </div>


        <div className="doctor-image-section2">
          <img src={bookappimg3} alt="Doctor" className="doctor-image-bookapp3" />
          <div className="emergency-box2">
            <span className="emergency-icon">📞</span>
            <div>
              <p>Emergency Call</p>
              <strong>013 354 213 - 95431</strong>
            </div>
          </div>
        </div>
        
      </div>

      
    </>
  );
}

export default BookApp;