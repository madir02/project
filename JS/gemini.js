const messageForm = document.querySelector('.chat-form');
const messageList = document.querySelector('.chat-messages');

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const messageInput = document.querySelector('.chat-form input');
  const messageValue = messageInput.value;

  // Create a new message element
  const message = document.createElement('li');
  message.classList.add('chat-message', 'me');
  message.textContent = messageValue;

  // Append the new message to the message list
  messageList.appendChild(message);

  // Clear the message input field
  messageInput.value = '';

})
