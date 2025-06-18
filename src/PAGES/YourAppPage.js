import React, { useState } from 'react';

function YourAppPage({ appointments = [] }) {
  const [appointmentList, setAppointmentList] = useState(appointments);

  const handleCancel = (srno) => {
    const confirmCancel = window.confirm('Are you sure you want to cancel this appointment?');
    if (confirmCancel) {
      setAppointmentList(appointmentList.filter((appt) => appt.srno !== srno));
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📋 Appointment Records</h2>
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
          }}
        >
          <thead style={{ backgroundColor: '#f8f9fa' }}>
            <tr>
              <th>Sr. No</th>
              <th>Name</th>
              <th>Phone No.</th>
              <th>Date & Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointmentList.map((appt, index) => (
              <tr key={appt.srno}>
                <td>{index + 1}</td>
                <td>{appt.name}</td>
                <td>{appt.phone}</td>
                <td>{new Date(appt.date).toLocaleString()}</td>
                <td>
                  <button
                    onClick={() => handleCancel(appt.srno)}
                    style={{
                      backgroundColor: '#ff4d4f',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      cursor: 'pointer',
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