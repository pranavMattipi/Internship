import React, { useEffect, useState } from 'react';
import axios from 'axios';

function YourAppPage() {
  const [appointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get('https://68558f031789e182b37ba664.mockapi.io/appointments');
      setAppointmentList(res.data);
    } catch (err) {
      console.error('Error fetching appointments:', err);
    }
  };

  const handleCancel = async (id) => {
    const confirmCancel = window.confirm('Are you sure you want to cancel this appointment?');
    if (confirmCancel) {
      try {
        await axios.delete(`https://68558f031789e182b37ba664.mockapi.io/appointments/${id}`);
        fetchAppointments(); // Refresh the list after deletion
      } catch (err) {
        console.error('Error deleting appointment:', err);
      }
    }
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date)) throw new Error('Invalid Date');
      return date.toLocaleString();
    } catch (err) {
      return 'Invalid Date';
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ marginBottom: '1rem' }}>📋 Appointment Records</h2>

      {appointmentList.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          style={{
            width: '100%',
            marginTop: '1rem',
            borderCollapse: 'collapse',
            textAlign: 'left',
            backgroundColor: '#ffffff',
          }}
        >
          <thead style={{ backgroundColor: '#f8f9fa' }}>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone No.</th>
              <th>Doctor</th>
              <th>Date & Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointmentList.map((appt, index) => (
              <tr key={appt.id}>
                <td>{index + 1}</td>
                <td>{appt.name}</td>
                <td>{appt.phoneNo}</td>
                <td>{appt.doctor}</td>
                <td>{formatDate(appt.date)}</td>
                <td>
                  <button
                    onClick={() => handleCancel(appt.id)}
                    style={{
                      backgroundColor: '#ff4d4f',
                      color: 'white',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default YourAppPage;