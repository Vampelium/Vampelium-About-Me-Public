document.addEventListener('DOMContentLoaded', function() {
  const chatContainer = document.getElementById('chat-container');
  const inputField = document.getElementById('chat-input');
  const sendButton = document.getElementById('send-button');

  // intentDatabase is now loaded from keyword.js

  // Function to process the user message and determine the AI's response based on keywords
  function processMessage(message) {
    const lowerMessage = message.toLowerCase();
    for (let intent of intentDatabase) {
      for (let keyword of intent.keywords) {
        if (lowerMessage.includes(keyword.toLowerCase())) {
          return intent.response;
        }
      }
    }
    return "I'm not sure what you mean, sweetie. Could you rephrase that?";
  }

  // Function to add a message to the chat container
  function addMessage(content, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('chat-message', sender);
    msgDiv.textContent = content;
    chatContainer.appendChild(msgDiv);
    // Auto-scroll to the bottom of the chat
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  // Handle sending a message
  function handleSend() {
    const message = inputField.value.trim();
    if (message !== '') {
      addMessage(message, 'user');
      const response = processMessage(message);
      // Simulate a brief delay to give a natural feel
      setTimeout(() => {
        addMessage(response, 'ai');
      }, 500);
      inputField.value = '';
    }
  }

  sendButton.addEventListener('click', handleSend);
  inputField.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      handleSend();
    }
  });
});