const stars = document.querySelector('.stars');
const stars2 = document.querySelector('.stars2');
const stars3 = document.querySelector('.stars3');

function moveStar(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  stars.style.left = `${mouseX}px`;
  stars.style.top = `${mouseY}px`;
  stars2.style.left = `${mouseX}px`;
  stars2.style.top = `${mouseY}px`;
  stars3.style.left = `${mouseX}px`;
  stars3.style.top = `${mouseY}px`;
}

document.addEventListener('mousemove', moveStar);
