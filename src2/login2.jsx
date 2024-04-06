import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loginError, setLoginError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation
    const usernameRegex = /^[a-zA-Z\s]+$/;
    if (!usernameRegex.test(formData.username)) {
      setLoginError('Please enter a valid username with only alphabetical characters.');
      return;
    }

    // Perform login logic (you can replace this with your own login API call)
    // For now, just redirect to another page
    window.location.href = '/hotel_booking.html'; // Replace with your booking page URL
  };

  const formInputs = [
    { label: 'Username:', type: 'text', id: 'username', name: 'username', value: formData.username, onChange: handleChange },
    { label: 'Password:', type: 'password', id: 'password', name: 'password', value: formData.password, onChange: handleChange, required: true }
  ];

  return (
    <div style={{ backgroundImage: url('htl.jpeg'), backgroundSize: 'cover', minHeight: '100vh' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {formInputs.map((input, index) => (
          <React.Fragment key={index}>
            <label htmlFor={input.id}>{input.label}</label>
            <input {...input} />
            <br /><br />
          </React.Fragment>
        ))}
        <input type="submit" value="Login" />
        {loginError && <div className="error-message">{loginError}</div>}
      </form>
    </div>
  );
}

export default LoginForm;