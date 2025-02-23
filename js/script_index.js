const heartContainer = document.querySelector('.heart-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = Math.random() * 100 + 'vw';

    heart.style.animationDelay = Math.random() * 5 + 's'; 
    
    heartContainer.appendChild(heart);

    heart.addEventListener('animationiteration', () => {
      heart.remove();
    });
}

setInterval(createHeart, 500);

const textBox = document.getElementById('text-box');
const changingText = document.getElementById('changing-text');
let currentTextIndex = 0;
const textContents = [
    "Once upon a time, on this very day...",
    "The universe decided the world needed a little more light,",
    "A little more warmth, and a little more magic,",
    "So it sent you."
];

const catBox = document.getElementById('cat-box');
const repoBox = document.getElementById('repo-box');
const catQuestion = document.getElementById('cat-question');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

function showNextText() {
  if (currentTextIndex < textContents.length) {
    changingText.textContent = textContents[currentTextIndex];
    textBox.classList.remove('hidden'); 
    currentTextIndex++;

    setTimeout(() => {
        textBox.classList.add('hidden'); 

        if (currentTextIndex < textContents.length) { 
            setTimeout(showNextText, 500); 
        } else {
            setTimeout(() => { 
                catBox.classList.remove('hidden');
            }, 500); 
        }

    }, 3000);

    } else {
      textBox.classList.add('hidden');
      catBox.classList.remove('hidden');
    }
}

yesButton.addEventListener('click', () => {
  window.location.href = "main.html"; 
});

noButton.addEventListener('click', () => {
  catBox.classList.add('hidden');
  repoBox.classList.remove('hidden');
});

showNextText();
