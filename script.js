// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation
  document.querySelectorAll('.bottom-navigation a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
});

// Scroll to invitation section
function scrollToInvitation() {
  document.getElementById('invitation').scrollIntoView({ behavior: 'smooth' });
}


// script.js
function playSong() {
  const audio = document.getElementById('wedding-song');
  audio.play();
  document.getElementById('play-button').style.display = 'none'; // Hide the button after playing
}

// script.js
function updateCountdown() {
  const weddingDate = new Date('April 25, 2025 00:00:00').getTime(); // Set your wedding date here
  const now = new Date().getTime();
  const timeLeft = weddingDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

  // If the countdown is over, display a message
  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = '<p>🎉 The wedding day has arrived! 🎉</p>';
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();