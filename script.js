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