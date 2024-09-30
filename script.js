const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('nav-links') && !e.target.classList.contains('burger')) {
    navLinks.classList.remove('active');
    burger.classList.remove('active');
  }
});