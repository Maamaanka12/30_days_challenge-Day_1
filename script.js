

(function () {
  'use strict';

  // ─── DOM refs ───
  const header = document.querySelector('.site-header');
  const toggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link:not(.nav-cta)');
  const sections = document.querySelectorAll('section[id]');

  // ─── Mobile menu toggle ───
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when any nav link is clicked
    const allNavLinks = nav.querySelectorAll('.nav-link');
    allNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ─── Header scroll effect ───
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        header.classList.toggle('scrolled', window.scrollY > 20);
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initial check

  // ─── Active nav link on scroll ───
  function setActiveNav() {
    let current = '';
    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', setActiveNav, { passive: true });
  setActiveNav();

  // ─── Scroll reveal (Intersection Observer) ───
  const revealElements = document.querySelectorAll(
    '.feature-card, .service-card, .doctor-card, .medicine-card, .about-text, .about-features, .cta-card, .hero-stats'
  );

  revealElements.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealElements.forEach((el) => observer.observe(el));
  } else {
    // show everything immediately
    revealElements.forEach((el) => el.classList.add('visible'));
  }

  //  Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();