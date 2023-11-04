const button = document.getElementById('register-login-button');
const popupContainer = document.getElementById('popup-container');
const closeButton = document.getElementById('close-popup');

// Add click event to show the popup
button.addEventListener('click', () => {
  popupContainer.style.display = 'flex'; // Display the popup
});

// Add click event to close the popup
closeButton.addEventListener('click', () => {
  popupContainer.style.display = 'none'; // Hide the popup
});