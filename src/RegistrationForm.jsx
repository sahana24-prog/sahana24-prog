import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    phone: '',
    checkin: '',
    checkinTime: '',
    checkout: '',
    checkoutTime: '',
    adults: '',
    children: '',
    roomType: '',
    specialReq: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation

    // For now, just redirect to login page
  };

  return (
    <div style={{ backgroundImage: `url('htl.jpeg')`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <h1>Hotel Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} pattern="[a-zA-Z\s]+" title="Only alphabetical characters are allowed" /><br /><br />
        
        <label>Gender:</label>
        <input type="radio" id="male" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
        <label htmlFor="female">Female</label><br /><br />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><br /><br />
        
        <label htmlFor="phone">Phone number:</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} pattern="[0-9]{10}" required /><br /><br />
        
        <label htmlFor="checkin">Check-in Date:</label>
        <input type="date" id="checkin" name="checkin" value={formData.checkin} onChange={handleChange} /><br /><br />
        
        <label htmlFor="checkin-time">Check-in Time:</label>
        <input type="time" id="checkin-time" name="checkinTime" value={formData.checkinTime} onChange={handleChange} /><br /><br />
        
        <label htmlFor="checkout">Check-out Date:</label>
        <input type="date" id="checkout" name="checkout" value={formData.checkout} onChange={handleChange} /><br /><br />
        
        <label htmlFor="checkout-time">Check-out Time:</label>
        <input type="time" id="checkout-time" name="checkoutTime" value={formData.checkoutTime} onChange={handleChange} /><br /><br />
        
        <label htmlFor="adults">Number of Adults:</label>
        <input type="number" id="adults" name="adults" value={formData.adults} onChange={handleChange} /><br /><br />
        
        <label htmlFor="children">Number of Children:</label>
        <input type="number" id="children" name="children" value={formData.children} onChange={handleChange} /><br /><br />
        
        <label htmlFor="roomtype">Room Type:</label>
        <select id="roomtype" name="roomType" value={formData.roomType} onChange={handleChange}>
          <option value="">Select Room Type</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="suite">Suite</option>
        </select><br /><br />
        
        <label htmlFor="specialreq">Special Requests:</label>
        <textarea id="specialreq" name="specialReq" value={formData.specialReq} onChange={handleChange}></textarea><br /><br />
        
        <input type="reset" value="Reset" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default RegistrationForm;
