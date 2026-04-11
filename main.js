// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');
const menuLinks = document.querySelectorAll('.menu-link');

menuToggle.addEventListener('click', () => mobileMenu.classList.add('open'));
menuClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
menuLinks.forEach(l => l.addEventListener('click', () => mobileMenu.classList.remove('open')));

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Screenshot carousel in hero (auto-rotate)
const heroScreens = [
  'screenshots/Cliente%20lista%20eventos.jpg',
  'screenshots/Cliente%20lista%20fichas.jpg',
  'screenshots/Cliente%20apresenta%20ficha.jpg',
  'screenshots/Dashboard%20do%20Comerciante.jpg',
];

let heroIdx = 0;
const heroImg = document.querySelector('.phone-mockup__screen img');
if (heroImg) {
  setInterval(() => {
    heroIdx = (heroIdx + 1) % heroScreens.length;
    heroImg.style.opacity = '0';
    heroImg.style.transition = 'opacity .4s';
    setTimeout(() => {
      heroImg.src = heroScreens[heroIdx];
      heroImg.style.opacity = '1';
    }, 400);
  }, 3000);
}
