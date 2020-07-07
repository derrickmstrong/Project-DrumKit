const removeTransition = (e) => {
  // Remove playing class
  e.target.classList.remove('playing');
};

const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  // Check if there is no audio then stop
  if (!audio) return;

  // Restart sound on every keypress
  audio.currentTime = 0;

  // Play audio
  audio.play();

  // Add .playing
  key.classList.add('playing');
};

// Convert NodeList into an Array
const keys = Array.from(document.querySelectorAll('.key'));

// Loop over keys and listen for transition end then remove transition
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

// Play Sound onKeydown
window.addEventListener('keydown', playSound);
