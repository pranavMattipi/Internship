import React, { createContext, useState } from 'react';

// Step 1: Create the context
export const AppointmentContext = createContext();

// Step 2: Create the provider component
export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  // Optional: utility function to add an appointment
  const addAppointment = (appointment) => {
    setAppointments((prev) => [...prev, appointment]);
  };

  return (
    <AppointmentContext.Provider value={{ appointments, setAppointments, addAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};