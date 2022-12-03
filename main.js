const soccerBall = document.querySelector('.soccer-ball');

// Set the cursor position variables on mouse move
document.addEventListener('mousemove', event => {
  soccerBall.style.setProperty('--cursor-x', event.clientX + 'px');
  soccerBall.style.setProperty('--cursor-y', event.clientY + 'px');
});