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

function showNextText() {
    if (currentTextIndex < textContents.length) {
        changingText.textContent = textContents[currentTextIndex];
        textBox.classList.remove('hidden'); // Show the box
        currentTextIndex++;

        setTimeout(() => {
            textBox.classList.add('hidden'); // Hide after 3 seconds
            if (currentTextIndex < textContents.length) { // Show next text if available
                setTimeout(showNextText, 500); // Delay before showing the next text
            }
        }, 3000);

    } else {
        // All texts shown, you can add any final actions here if you want
        // For example, you could reset currentTextIndex to 0 to loop again
        // or leave it as is to have nothing more happen.
    }
}

// Start showing the first text
showNextText();