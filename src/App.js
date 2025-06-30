import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// FIXED 404 PAGE

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
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/servicepage" element={<ServicePage />} />
        <Route path="/bookapppage" element={<BookApp setAppointments={setAppointments} />} />
        <Route path="/yourapppage" element={<YourAppPage appointments={appointments} />} />
        <Route path="/medicalservices" element={<MedicalServices />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;