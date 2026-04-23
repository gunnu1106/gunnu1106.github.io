'use strict';

// TYPING ANIMATION
const roles = ['Full Stack Developer', 'Frontend Developer', 'AI/ML Engineer', 'Python Developer', 'Web Developer'];
let ri = 0, ci = 0, deleting = false;
const typed = document.getElementById('typed');

function type() {
  const cur = roles[ri];
  typed.textContent = deleting ? cur.substring(0, ci - 1) : cur.substring(0, ci + 1);
  deleting ? ci-- : ci++;
  if (!deleting && ci === cur.length) setTimeout(() => deleting = true, 2000);
  else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  setTimeout(type, deleting ? 50 : 90);
}
type();

// NAVBAR SCROLL
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', scrollY > 60);
});

// CONTACT FORM
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formMsg').style.display = 'block';
  e.target.reset();
  setTimeout(() => document.getElementById('formMsg').style.display = 'none', 5000);
});

// HAMBURGER
document.getElementById('hamburger').addEventListener('click', () => {
  const links = document.getElementById('navLinks');
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  });
});

// SCROLL ANIMATIONS
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.style.opacity = '1'; });
}, { threshold: 0.1 });
document.querySelectorAll('.skill-box, .project-card, .cert-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transition = 'opacity 0.5s ease, transform 0.3s ease';
  observer.observe(el);
});
