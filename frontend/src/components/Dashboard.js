import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      axios.get(`http://localhost:5000/api/users/${decoded.id}`)
        .then(response => {
          setUser(response.data);
          setTrips(response.data.trips);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {user && (
        <div>
          <h3>Welcome, {user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Date of Birth: {user.dob}</p>
          <p>Address: {user.address}</p>
          <h3>Scheduled Trips</h3>
          <ul>
            {trips.map(trip => (
              <li key={trip._id}>
                Destination: {trip.destination}, Date: {trip.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
