import React, { createContext, useState, useMemo } from 'react';

// Step 1: Create the context
export const AppointmentContext = createContext();

// Step 2: Create the provider component
export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  // Utility function to add an appointment
  const addAppointment = (appointment) => {
    setAppointments((prev) => [...prev, appointment]);
  };

  // Utility function to remove an appointment by id
  const removeAppointment = (id) => {
    setAppointments((prev) => prev.filter((appt) => appt.id !== id));
  };

  // Utility function to clear all appointments
  const clearAppointments = () => {
    setAppointments([]);
  };

  // useMemo to optimize context value
  const value = useMemo(() => ({
    appointments,
    setAppointments,
    addAppointment,
    removeAppointment,
    clearAppointments,
  }), [appointments]);

  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
  );
};