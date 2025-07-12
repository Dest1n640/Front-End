const gameField = document.getElementById("game-field");
const movableImage = document.getElementById("movable-image");
let animationFrame;

gameField.addEventListener("click", (event) => {
  const fieldRect = gameField.getBoundingClientRect();
  const targetX = event.clientX - fieldRect.left - movableImage.offsetWidth / 2;
  const targetY = event.clientY - fieldRect.top - movableImage.offsetHeight / 2;

  cancelAnimationFrame(animationFrame); // Stop any ongoing animation

  function moveImage() {
    const currentX = parseFloat(movableImage.style.left) || 0;
    const currentY = parseFloat(movableImage.style.top) || 0;

    const dx = targetX - currentX;
    const dy = targetY - currentY;

    if (Math.abs(dx) < 1 && Math.abs(dy) < 1) {
      movableImage.style.left = `${targetX}px`;
      movableImage.style.top = `${targetY}px`;
      return; // Stop animation when close enough
    }

    movableImage.style.left = `${currentX + dx * 0.1}px`;
    movableImage.style.top = `${currentY + dy * 0.1}px`;

    animationFrame = requestAnimationFrame(moveImage);
  }

  moveImage();
});
