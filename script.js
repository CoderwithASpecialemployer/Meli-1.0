// Mobile Menu Toggle
const toggle = document.querySelector('.nav-toggle');
const menu   = document.querySelector('.nav-menu');
toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Scroll‑Fade‑In mit Intersection Observer API  [oai_citation_attribution:15‡MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API?utm_source=chatgpt.com) [oai_citation_attribution:16‡MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver?utm_source=chatgpt.com)
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.section, .hero-content, .card, .gallery img');
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

// Teilen‑Feature via Web Share API  [oai_citation_attribution:17‡MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API?utm_source=chatgpt.com)
const shareBtn = document.getElementById('shareBtn');
if (shareBtn) {
  shareBtn.addEventListener('click', async () => {
    const data = {
      title: 'Änderungsschneiderei Meli',
      text: 'Entdecke die Änderungsschneiderei Meli in Recklinghausen!',
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

// Kontaktformular‑Mockup (nur lokal)  [oai_citation_attribution:18‡MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps?utm_source=chatgpt.com)
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Danke für Ihre Nachricht! Wir melden uns bald bei Ihnen.');
    form.reset();
  });
}
