// Menu mobile toggle (facoltativo)
const menu = document.querySelector('nav');
document.querySelector('.logo img').addEventListener('click', () => {
  menu.classList.toggle('active');
});
