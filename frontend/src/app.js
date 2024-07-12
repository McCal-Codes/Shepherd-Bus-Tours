import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    address: '',
    accountOption: 'guest',
    emergencyName: '',
    emergencyPhone: '',
    isOrganizer: false,
    isGoing: false
  });

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = () => {
    axios.post('http://localhost:5000/api/users', formData)
      .then(response => {
        alert('Form submitted successfully!');
      })
      .catch(error => {
        alert('Failed to submit the form');
      });
  };

  const stepVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: '0' },
    exit: { opacity: 0, x: '100%' }
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <div className="form-container">
              {step === 1 && (
                <motion.div
                  className="form-section"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={stepVariants}
                >
                  <h2>Main Contact Details</h2>
                  <form>
                    <label>
                      Name:
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label>
                    <label>
                      Phone:
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                    </label>
                    <label>
                      Email:
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </label>
                    <label>
                      Date of Birth:
                      <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                    </label>
                    <label>
                      Address:
                      <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                    </label>
                    <label>
                      Account Options:
                      <select name="accountOption" value={formData.accountOption} onChange={handleChange} required>
                        <option value="guest">Checkout as Guest</option>
                        <option value="account">Create Account</option>
                      </select>
                    </label>
                    <button type="button" onClick={handleNext}>Next</button>
                  </form>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  className="form-section"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={stepVariants}
                >
                  <h2>Emergency Contact Details</h2>
                  <form>
                    <label>
                      Emergency Contact Name:
                      <input type="text" name="emergencyName" value={formData.emergencyName} onChange={handleChange} required />
                    </label>
                    <label>
                      Emergency Contact Phone:
                      <input type="tel" name="emergencyPhone" value={formData.emergencyPhone} onChange={handleChange} required />
                    </label>
                    <label>
                      Are you the organizer?
                      <input type="checkbox" name="isOrganizer" checked={formData.isOrganizer} onChange={handleChange} />
                    </label>
                    <label>
                      Are you going on the trip?
                      <input type="checkbox" name="isGoing" checked={formData.isGoing} onChange={handleChange} />
                    </label>
                    <button type="button" onClick={handlePrevious}>Previous</button>
                    <button type="button" onClick={handleNext}>Next</button>
                  </form>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  className="form-section"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={stepVariants}
                >
                  <h2>Review and Submit</h2>
                  <div>
                    <h3>Main Contact Details</h3>
                    <p>Name: {formData.name}</p>
                    <p>Phone: {formData.phone}</p>
                    <p>Email: {formData.email}</p>
                    <p>Date of Birth: {formData.dob}</p>
                    <p>Address: {formData.address}</p>
                    <p>Account Option: {formData.accountOption}</p>
                    <h3>Emergency Contact Details</h3>
                    <p>Emergency Contact Name: {formData.emergencyName}</p>
                    <p>Emergency Contact Phone: {formData.emergencyPhone}</p>
                    <p>Organizer: {formData.isOrganizer ? 'Yes' : 'No'}</p>
                    <p>Going on Trip: {formData.isGoing ? 'Yes' : 'No'}</p>
                  </div>
                  <button type="button" onClick={handlePrevious}>Previous</button>
                  <button type="button" onClick={handleSubmit}>Submit</button>
                </motion.div>
              )}
            </div>
          </Route>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
