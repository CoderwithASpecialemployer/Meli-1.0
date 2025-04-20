// Mobile‐Nav Toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav   = document.querySelector('.site-nav');
navToggle.addEventListener('click', () => siteNav.classList.toggle('open'));

// Smooth Scroll für Ankerlinks
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const tgt = document.querySelector(link.getAttribute('href'));
    if (tgt) tgt.scrollIntoView({ behavior: 'smooth' });
    siteNav.classList.remove('open');
  });
});

// Night Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  themeToggle.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
});
