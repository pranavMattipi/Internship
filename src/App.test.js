import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders homepage text from Body.js', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Looking for the main text from Body.js
  const homepageText = screen.getByText(/your health our priority/i);
  expect(homepageText).toBeInTheDocument();
});