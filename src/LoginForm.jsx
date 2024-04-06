import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation
    const usernameRegex = /^[a-zA-Z\s]+$/;
    if (!usernameRegex.test(username)) {
      setLoginError('Please enter a valid username with only alphabetical characters.');
      return;
    }

    // Perform login logic (you can replace this with your own login API call)
    // For now, just redirect to another page
    window.location.href = '/hotel_booking.html'; // Replace with your booking page URL
  };

  return (
    <div style={{ backgroundImage: `url('htl.jpeg')`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} /><br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} required /><br /><br />
        <input type="submit" value="Login" />
        {loginError && <div className="error-message">{loginError}</div>}
      </form>
    </div>
  );
}

export default LoginForm;
