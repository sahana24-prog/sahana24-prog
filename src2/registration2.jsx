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

  const formInputs = [
    { label: 'Full Name:', type: 'text', id: 'name', name: 'name', value: formData.name, onChange: handleChange, pattern: "[a-zA-Z\s]+", title: "Only alphabetical characters are allowed" },
    { label: 'Gender:', type: 'radio', id: 'male', name: 'gender', value: 'male', checked: formData.gender === 'male', onChange: handleChange },
    { label: 'Gender:', type: 'radio', id: 'female', name: 'gender', value: 'female', checked: formData.gender === 'female', onChange: handleChange },
    { label: 'Email:', type: 'email', id: 'email', name: 'email', value: formData.email, onChange: handleChange },
    { label: 'Phone number:', type: 'tel', id: 'phone', name: 'phone', value: formData.phone, onChange: handleChange, pattern: "[0-9]{10}", required: true },
    { label: 'Check-in Date:', type: 'date', id: 'checkin', name: 'checkin', value: formData.checkin, onChange: handleChange },
    { label: 'Check-in Time:', type: 'time', id: 'checkin-time', name: 'checkinTime', value: formData.checkinTime, onChange: handleChange },
    { label: 'Check-out Date:', type: 'date', id: 'checkout', name: 'checkout', value: formData.checkout, onChange: handleChange },
    { label: 'Check-out Time:', type: 'time', id: 'checkout-time', name: 'checkoutTime', value: formData.checkoutTime, onChange: handleChange },
    { label: 'Number of Adults:', type: 'number', id: 'adults', name: 'adults', value: formData.adults, onChange: handleChange },
    { label: 'Number of Children:', type: 'number', id: 'children', name: 'children', value: formData.children, onChange: handleChange },
    { label: 'Room Type:', type: 'select', id: 'roomtype', name: 'roomType', value: formData.roomType, onChange: handleChange, options: [
      { value: '', text: 'Select Room Type' },
      { value: 'single', text: 'Single' },
      { value: 'double', text: 'Double' },
      { value: 'suite', text: 'Suite' }
    ]},
    { label: 'Special Requests:', type: 'textarea', id: 'specialreq', name: 'specialReq', value: formData.specialReq, onChange: handleChange }
  ];

  return (
    <div style={{ backgroundImage: url('htl.jpeg'), backgroundSize: 'cover', minHeight: '100vh' }}>
      <h1>Hotel Booking Form</h1>
      <form onSubmit={handleSubmit}>
        {formInputs.map((input, index) => (
          <React.Fragment key={index}>
            <label htmlFor={input.id}>{input.label}</label>
            {input.type === 'select' ? (
              <select id={input.id} name={input.name} value={input.value} onChange={input.onChange}>
                {input.options.map((option, index) => (
                  <option key={index} value={option.value}>{option.text}</option>
                ))}
              </select>
            ) : input.type === 'textarea' ? (
              <textarea id={input.id} name={input.name} value={input.value} onChange={input.onChange}></textarea>
            ) : (
              <input {...input} />
            )}
            <br /><br />
          </React.Fragment>
        ))}
        <input type="reset" value="Reset" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default RegistrationForm;