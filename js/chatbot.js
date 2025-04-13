// Toggle chatbot visibility
function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    const isVisible = chatbotContainer.style.display === 'flex';
    chatbotContainer.style.display = isVisible ? 'none' : 'flex';
  }
  
  // Send message to chatbot
  function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
  
    if (message) {
      displayMessage('User: ' + message);
      input.value = ''; // Clear input field
  
      // Simulate chatbot response (you can connect this to your AI)
      setTimeout(() => {
        const response = 'Chatbot: I am here to help!';
        displayMessage(response);
      }, 1000);
    }
  }
  
  // Display message in the chat body
  function displayMessage(message) {
    const chatBody = document.getElementById('chat-body');
    const newMessage = document.createElement('p');
    newMessage.textContent = message;
    chatBody.appendChild(newMessage);
  
    // Scroll to the bottom
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  