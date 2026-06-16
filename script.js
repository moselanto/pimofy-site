/* ==========================================================================
   Pimofy Digital — Site JavaScript
   Handles: sticky header shadow, desktop dropdown, mobile menu,
            FAQ accordion, scroll-reveal animations, contact form.
   Vanilla JS, no dependencies. Deferred load (see <script defer>).
   ========================================================================== */
(function () {
  'use strict';

  /* --- 1) Sticky header shadow on scroll --------------------------------- */
  var header = document.querySelector('.header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* --- 2) Mobile menu toggle --------------------------------------------- */
  var burger = document.querySelector('.nav__burger');
  var menu = document.querySelector('.nav__menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    // Close menu when a real link (not the dropdown toggle) is tapped
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- 3) Dropdown (Solutions) — click + hover, keyboard accessible ------ */
  document.querySelectorAll('.dropdown').forEach(function (dd) {
    var toggle = dd.querySelector('.dropdown__toggle');
    if (!toggle) return;
    var setOpen = function (state) { dd.setAttribute('aria-expanded', String(state)); };

    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      setOpen(dd.getAttribute('aria-expanded') !== 'true');
    });
    // Desktop hover
    dd.addEventListener('mouseenter', function () { if (window.innerWidth > 760) setOpen(true); });
    dd.addEventListener('mouseleave', function () { if (window.innerWidth > 760) setOpen(false); });
    // Close on outside click / Escape
    document.addEventListener('click', function (e) { if (!dd.contains(e.target)) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  });

  /* --- 4) FAQ accordion --------------------------------------------------- */
  document.querySelectorAll('.faq__item').forEach(function (item) {
    var q = item.querySelector('.faq__q');
    var a = item.querySelector('.faq__a');
    if (!q || !a) return;
    q.setAttribute('aria-expanded', 'false');
    q.addEventListener('click', function () {
      var open = item.getAttribute('aria-expanded') === 'true';
      item.setAttribute('aria-expanded', String(!open));
      q.setAttribute('aria-expanded', String(!open));
      a.style.maxHeight = open ? null : a.scrollHeight + 'px';
    });
  });

  /* --- 5) Scroll-reveal animations (IntersectionObserver) ---------------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: show everything if IO unsupported
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* --- 6) Contact form (front-end only; wire to email/CRM later) --------- */
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Basic native validation already runs; on success show confirmation.
      var success = form.querySelector('.form__success');
      if (success) {
        success.classList.add('show');
        success.setAttribute('role', 'status');
      }
      form.reset();
      // NOTE for developer: POST form data to your backend / form service
      // (e.g. Formspree, Netlify Forms, or your CRM endpoint) here.
    });
  }

  /* --- 7) Footer year ----------------------------------------------------- */
  var yearEl = document.querySelector('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
