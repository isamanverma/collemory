document.addEventListener("DOMContentLoaded", function() {
  const updatingText = document.querySelector('.updating-text');
  const words = ["College", "Memory", "Fun", "Friends", "Talks"];
  let currentIndex = 0;
  let currentWord = words[currentIndex];
  let currentCharIndex = 0;

  function typeWriterEffect() {
    if (currentCharIndex < currentWord.length) {
      updatingText.textContent = currentWord.substr(0, currentCharIndex + 1);
      currentCharIndex++;
      setTimeout(typeWriterEffect, 100); // Adjust the typing speed as desired
    } else {
      setTimeout(eraseText, 1000); // Adjust the delay before erasing the text as desired
    }
  }

  function eraseText() {
    if (currentCharIndex >= 0) {
      updatingText.textContent = currentWord.substr(0, currentCharIndex);
      currentCharIndex--;
      setTimeout(eraseText, 50); // Adjust the erasing speed as desired
    } else {
      currentIndex = (currentIndex + 1) % words.length;
      currentWord = words[currentIndex];
      setTimeout(typeWriterEffect, 500); // Adjust the delay before typing the next word as desired
    }
  }

  typeWriterEffect();
});

