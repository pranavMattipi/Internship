import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// ✅ Import your context provider
import { AppointmentProvider } from './context/AppointmentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      {/* ✅ Wrap App with AppointmentProvider */}
      <AppointmentProvider>
        <App />
      </AppointmentProvider>
    </BrowserRouter>
  </StrictMode>
);