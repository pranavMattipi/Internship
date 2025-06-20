import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookApp.css';
import bookappimg2 from '../assets/bookappimg2.png';
import bookappimg3 from '../assets/bookappimg3.png';
import bookap2 from '../assets/bookap2.png';

function BookApp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // 🔄 Loading state
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Disable button

    const isoDate = new Date(formData.datetime).toISOString(); // ✅ Convert to ISO

    try {
      await axios.post('https://68558f031789e182b37ba664.mockapi.io/appointments', {
        name: formData.name,
        email: formData.email,
        phoneNo: formData.phone,
        doctor: formData.doctor,
        date: isoDate,
        problem: formData.message,
        status: 'booked'
      });

      alert('✅ Appointment booked successfully!');
      // ✅ Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        doctor: '',
        datetime: '',
        message: ''
      });

      navigate('/yourapppage');
    } catch (error) {
      console.error('Booking failed', error);
      alert('❌ Booking failed! Try again later.');
    } finally {
      setLoading(false); // Re-enable button
    }
  };

  return (
    <>
      <div className="container-doctor-section4">
        <div className="wordings">
          <p className="p1">❤️ SOLUTIONS FOR BETTER HEALTH</p>
          <p className="p2">BOOK YOUR <span>APPOINTMENT</span> NOW</p>
          <p className="p3">Don’t wait to feel better. Schedule your appointment today and take the first step toward expert care and personalized treatment.</p>
          <p className="p4">Our compassionate team of healthcare professionals is here to help.</p>
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
              <input name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="input-row">
              <input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
              <select name="doctor" value={formData.doctor} onChange={handleChange} required>
                <option value="">Select Doctor</option>
                <option value="Dr. John Doe">Dr. John Doe</option>
                <option value="Dr. Harry">Dr. Harry</option>
                <option value="Dr. Smith">Dr. Smith</option>
                <option value="Dr. Mary">Dr. Mary</option>
                <option value="Dr. Doe">Dr. Doe</option>
                <option value="Dr. Sandy">Dr. Sandy</option>
              </select>
            </div>
            <div className="input-row">
              <label htmlFor="datetime" className="day-time">Select Appointment Date & Time</label>
              <input
                id="datetime"
                name="datetime"
                className="input-day-time"
                type="datetime-local"
                value={formData.datetime}
                onChange={handleChange}
                required
              />
            </div>
            <textarea name="message" placeholder="Describe Your Problem..." rows="4" value={formData.message} onChange={handleChange}></textarea>
            <button type="submit" className="book-btn" disabled={loading}>
              {loading ? "Booking..." : "Book An Appointment →"}
            </button>
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