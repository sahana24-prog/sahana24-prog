function validateForm() {
    var name = document.getElementById('name').value;
    var nameRegex = /^[a-zA-Z\s]+$/; // Regular expression to match only alphabets and spaces
  
    if (!nameRegex.test(name)) {
      alert('Please enter a valid name with only alphabetical characters.');
      return false;
    }
  
    var gender = document.querySelector('input[name="gender"]:checked');
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var checkinDate = document.getElementById('checkin').value;
    var checkinTime = document.getElementById('checkin-time').value;
    var checkoutDate = document.getElementById('checkout').value;
    var checkoutTime = document.getElementById('checkout-time').value;
    var adults = document.getElementById('adults').value;
    var children = document.getElementById('children').value;
    var roomType = document.getElementById('roomtype').value;
  
    if (!name || !gender || !email || !phone || !checkinDate || !checkinTime || !checkoutDate || !checkoutTime || !adults || !roomType) {
      alert('Please fill in all required fields.');
      return false;
    }
    return true;
  }