// Mobile nav toggle
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('navMenu');

toggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
  toggle.classList.toggle('active');
});
