// Function to toggle the hamburger menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    // Toggle the active class to show or hide the menu
    navLinks.classList.toggle('active');
  }
  
  // You can add additional JavaScript functionalities as needed
  // Example: Scroll to top button
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  
  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  };
  
  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  