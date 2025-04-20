// Mobile Menu Toggle
const toggle = document.querySelector('.nav-toggle');
const menu   = document.querySelector('.nav-menu');
toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Scroll‑Fade‑In mit Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.section, .hero-content, .card');
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  els.forEach(el => {
    el.classList.add('hidden');
    obs.observe(el);
  });
});

// Teilen-Funktion
const shareBtn = document.getElementById('shareBtn');
if (shareBtn) {
  shareBtn.addEventListener('click', async () => {
    const data = {
      title: 'Änderungsschneiderei Meli',
      text: 'Entdecke die Änderungsschneiderei Meli in Aachen!',
      url: window.location.href
    };
    if (navigator.share) {
      try {
        await navigator.share(data);
      } catch (err) {
        console.error('Teilen abgebrochen', err);
      }
    } else {
      window.prompt('Link kopieren und teilen:', window.location.href);
    }
  });
}

// Kontaktformular‑Mockup
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Danke für Ihre Nachricht! Wir melden uns bald bei Ihnen.');
    form.reset();
  });
}
