import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loginError, setLoginError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform client-side validation
    if (!formData.email.trim() || !formData.password.trim()) {
      setLoginError('Please enter both email and password.');
      return;
    }

    // Perform login logic (you can replace this with your own login API call)
    try {
      const response = await fetch('https://your-api-endpoint.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Login successful, redirect user to dashboard or another page
        window.location.href = '/dashboard';
      } else {
        // Handle login errors
        const data = await response.json();
        setLoginError(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div style={{ backgroundImage: `url('htl.jpeg')`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <h1>Log In to Your SaaS Account</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />

        <button type="submit">Log In</button>

        {loginError && <div className="error-message">{loginError}</div>}
      </form>
    </div>
  );
}

export default LoginForm;