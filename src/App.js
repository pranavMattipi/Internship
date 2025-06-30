import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import YourAppPage from './pages/YourAppPage';
import BookApp from './pages/BookApp';
import MedicalServices from './sub-pages/MedicalServices';

import './App.css';

function App() {
  const [appointments, setAppointments] = useState([]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/book" element={<BookApp setAppointments={setAppointments} />} />
        <Route path="/appointments" element={<YourAppPage appointments={appointments} />} />
        <Route path="/medical-services" element={<MedicalServices />} />
        
        {/* Optional 404 page */}
        <Route path="*" element={<h1 style={{ padding: '2rem', textAlign: 'center' }}>404 – Page Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;