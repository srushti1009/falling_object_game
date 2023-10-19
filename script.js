const character = document.querySelector('.character');
const fallingObject = document.querySelector('.falling-object');
const scoreDisplay = document.getElementById('score');

let score = 0;

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

function moveCharacter(event) {
    const speed = 10;
    const characterPosition = character.style.left ? parseInt(character.style.left) : 125; // Initial position
    if (event.key === 'ArrowLeft' && characterPosition > 0) {
        character.style.left = `${characterPosition - speed}px`;
    }
    if (event.key === 'ArrowRight' && characterPosition < 250) {
        character.style.left = `${characterPosition + speed}px`;
    }
}

function checkCollision() {
    const characterRect = character.getBoundingClientRect();
    const objectRect = fallingObject.getBoundingClientRect();

    if (
        characterRect.left < objectRect.right &&
        characterRect.right > objectRect.left &&
        characterRect.top < objectRect.bottom &&
        characterRect.bottom > objectRect.top
    ) {
        score++;
        updateScore();
        fallingObject.style.top = '0';
        const randomX = Math.floor(Math.random() * 270); 
        fallingObject.style.left = `${randomX}px`;
    }
}

document.addEventListener('keydown', moveCharacter);

setInterval(checkCollision, 50); 
