import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './COMPONENTS/Navbar';
import Body from './COMPONENTS/Body';
import Footer from './COMPONENTS/Footer';
import ServicePage from './PAGES/ServicePage';
import AboutPage from './PAGES/AboutPage';
import YourAppPage from './PAGES/YourAppPage';
import { AppointmentProvider } from './context/AppointmentContext';
import BookApp from './PAGES/BookApp';

import './App.css';
import MedicalServices from './SUB-PAGES/MedicalServices';

function App() {
    const [appointments, setAppointments] = useState([]);
  return (
    <>
      <Navbar />
      <AppointmentProvider>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/servicepage" element={<ServicePage />} />
         <Route path="/bookapppage" element={<BookApp setAppointments={setAppointments} />} />
        <Route path="/yourapppage" element={<YourAppPage appointments={appointments} />} />
        <Route path="/medicalservices" element={<MedicalServices />} />
        
      </Routes>
      </AppointmentProvider>
      <Footer />
    </>
  );
}

export default App;