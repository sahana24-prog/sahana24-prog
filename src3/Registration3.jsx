import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation (e.g., check for empty fields, password strength)
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Send data to backend for further processing (e.g., user registration)
    try {
      const response = await fetch('https://your-api-endpoint.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Registration successful, redirect user to dashboard or login page
        window.location.href = '/login';
      } else {
        // Handle errors (e.g., display error message)
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div  style={{ backgroundImage: `url('htl.jpeg')`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <h1>Sign Up for Our SaaS Platform</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default RegistrationForm;