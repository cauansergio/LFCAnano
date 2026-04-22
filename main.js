/* ══════════════════════════════════
   HEADER — scroll behavior
═════════════════════════════════ */
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ══════════════════════════════════
   MENU MOBILE
═════════════════════════════════ */
const burger     = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  burger.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
});

function closeMenu() {
  mobileMenu.classList.remove('open');
  burger.classList.remove('open');
}

/* ══════════════════════════════════
   REVEAL on scroll
═════════════════════════════════ */
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

/* ══════════════════════════════════
   ACTIVE NAV link highlight
═════════════════════════════════ */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a, .nav-mobile a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}`
      ? 'var(--white)'
      : '';
  });
}, { passive: true });

/* ══════════════════════════════════
   FORM submit (demo)
═════════════════════════════════ */
function submitForm(e) {
  e.preventDefault();
  const btn = e.target;
  btn.textContent = 'Enviando…';
  btn.style.background = 'var(--teal-600)';
  setTimeout(() => {
    btn.textContent = 'Mensagem Enviada ✓';
    btn.style.background = '#1d8a4a';
    setTimeout(() => {
      btn.textContent = 'Enviar Mensagem →';
      btn.style.background = '';
    }, 3000);
  }, 1400);
}
