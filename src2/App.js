import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import './App.css';

function App() {
  // State to manage the current page
  const [currentPage, setCurrentPage] = useState('registration'); // Default to registration page

  // Function to switch between pages
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // Render the appropriate page based on the current state
  const renderPage = () => {
    switch (currentPage) {
      case 'registration':
        return <RegistrationForm />;
      case 'login':
        return <LoginForm />;
      default:
        return null;
    }
  };

  return (
    <div className="Appbg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)` }}>
      <div>
        {/* Navigation links */}
        <nav>
          <button onClick={() => navigateTo('registration')}>Register</button>
          <button onClick={() => navigateTo('login')}>Login</button>
        </nav>

        {/* Render the current page */}
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
