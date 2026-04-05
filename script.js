const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle?.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
  });
});
