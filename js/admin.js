// Handle the admin login form submission (with hardcoded username and password)
document.getElementById('admin-login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Hardcoded admin credentials
    const adminUsername = 'ADMIN';
    const adminPassword = 'Pass123';
  
    // Check if the entered username and password match the hardcoded ones
    if (username === adminUsername && password === adminPassword) {
      // Redirect to admin dashboard on successful login
      window.location.href = '/admin-dashboard'; // Replace with your dashboard URL
    } else {
      // Show an error message if login fails
      alert('Invalid credentials, please try again!');
    }
  });
  
  // Admin Dashboard - Example functionality (e.g., data fetch or actions)
  document.getElementById('fetch-dashboard-data').addEventListener('click', function () {
    // Fetch some data for the dashboard (e.g., number of users, recent activities)
    fetch('/api/dashboard-data')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Update dashboard UI with the fetched data
        document.getElementById('user-count').textContent = data.userCount;
        document.getElementById('recent-activity').textContent = data.recentActivity;
      })
      .catch(error => console.error('Error fetching dashboard data:', error));
  });
  