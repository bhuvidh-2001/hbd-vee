const heartContainer = document.querySelector('.heart-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Random horizontal position
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Random animation delay for staggered effect
    heart.style.animationDelay = Math.random() * 5 + 's'; 
    
    heartContainer.appendChild(heart);

    // Remove heart after animation completes
    heart.addEventListener('animationiteration', () => {
      heart.remove();
    });
}

// Create hearts continuously
setInterval(createHeart, 500); // Adjust heart creation speed

const textBox = document.getElementById('text-box');
const changingText = document.getElementById('changing-text');
let currentTextIndex = 0;
const textContents = [
    "Happy Birthday, my special human!",
    "May your day be magical!",
    "Cheers to you and your joy!"
];

const catBox = document.getElementById('cat-box');
const repoBox = document.getElementById('repo-box');
const catQuestion = document.getElementById('cat-question'); // Get the question element
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

function showNextText() {
  if (currentTextIndex < textContents.length) {
    changingText.textContent = textContents[currentTextIndex];
    textBox.classList.remove('hidden'); // Show the box
    currentTextIndex++;

    setTimeout(() => {
        textBox.classList.add('hidden'); // Hide after 3 seconds

        if (currentTextIndex < textContents.length) { // Show next text if available
            setTimeout(showNextText, 500); // Delay before showing the next text
        } else {
            // All texts shown, show cat box
            setTimeout(() => { // Delay before showing cat box
                catBox.classList.remove('hidden');
            }, 500); // Small delay to allow fade-out
        }

    }, 3000);

    } else {
      textBox.classList.add('hidden');
      catBox.classList.remove('hidden');
    }
}

yesButton.addEventListener('click', () => {
  // Redirect to another page
  window.location.href = "main.html"; // Replace with your desired URL
});

noButton.addEventListener('click', () => {
  // Show the repo box
  catBox.classList.add('hidden');
  repoBox.classList.remove('hidden');
});

// Start showing the first text
showNextText();
