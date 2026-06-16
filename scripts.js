/* Shared behaviour for every page: mobile menu, FAQ accordion,
   scroll-in animations, and auto-updating footer year. */

document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile navigation toggle ---
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(open));
    });
    // Close the menu after tapping a link (mobile)
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  // --- FAQ accordion ---
  document.querySelectorAll('.faq__q').forEach((q) => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      const isOpen = q.getAttribute('aria-expanded') === 'true';
      // Close all
      document.querySelectorAll('.faq__q').forEach((other) => {
        other.setAttribute('aria-expanded', 'false');
        other.nextElementSibling.setAttribute('data-open', 'false');
      });
      // Open this one if it was closed
      if (!isOpen) {
        q.setAttribute('aria-expanded', 'true');
        answer.setAttribute('data-open', 'true');
      }
    });
  });

  // --- Scroll-in animations ---
  const animated = document.querySelectorAll('[data-animate]');
  if (animated.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    animated.forEach((el) => observer.observe(el));
  } else {
    animated.forEach((el) => el.classList.add('in-view'));
  }

  // --- Auto year in footer ---
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
