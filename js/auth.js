// Handle user login
document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get the form input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Basic validation (You can enhance this later)
    if (!username || !password) {
      alert('Please fill in both username and password');
      return;
    }
  
    // Dummy login validation (For testing purposes, replace with real authentication)
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      window.location.href = 'dashboard.html'; // Redirect to dashboard (or another page)
    } else {
      alert('Invalid credentials. Please try again.');
    }
  });
  
  // Handle user signup
  document.getElementById('signup-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get the form input values
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    // Basic validation (You can enhance this later)
    if (!username || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    // Dummy signup (For testing purposes, replace with real signup logic)
    alert('Signup successful!');
    window.location.href = 'login.html'; // Redirect to login page after signup
  });
  
  // Example logout function (to be added in a logout button on your website)
  function logout() {
    // Here you can clear user session data if implemented, like localStorage or cookies
    alert('You have logged out.');
    window.location.href = 'index.html'; // Redirect to homepage
  }
  