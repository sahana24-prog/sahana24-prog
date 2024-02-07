function validateRegistration() {
    var username = document.getElementById('username').value;
    var usernameRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/; // Mix of characters and numbers
  
    if (!usernameRegex.test(username)) {
      alert('Username must be a mixture of characters and numbers.');
      return false;
    }
  
    var password = document.getElementById('password').value;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  
    if (!passwordRegex.test(password)) {
      alert('Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one number, and one special character.');
      return false;
    }
  
    return true;
  }