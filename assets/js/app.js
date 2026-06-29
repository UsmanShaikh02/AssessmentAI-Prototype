/**
 * ============================================================
 * APP.JS — Minimal JavaScript for prototype interactions
 * AssessmentAI Prototype — Dashboard only
 * ============================================================
 */

(function () {
  'use strict';

  /* ---- DOM References ---- */
  var menuToggle = document.getElementById('menuToggle');
  var sidebar = document.getElementById('sidebar');
  var sidebarOverlay = document.getElementById('sidebarOverlay');

  /**
   * Opens the sidebar (mobile navigation)
   */
  function openSidebar() {
    sidebar.classList.add('sidebar--open');
    sidebarOverlay.classList.add('sidebar-overlay--visible');
    sidebarOverlay.style.display = 'block';
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  /**
   * Closes the sidebar (mobile navigation)
   */
  function closeSidebar() {
    sidebar.classList.remove('sidebar--open');
    sidebarOverlay.classList.remove('sidebar-overlay--visible');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';

    /* Hide overlay after transition completes */
    setTimeout(function () {
      if (!sidebar.classList.contains('sidebar--open')) {
        sidebarOverlay.style.display = 'none';
      }
    }, 300);
  }

  /**
   * Toggles sidebar open/closed state
   */
  function toggleSidebar() {
    if (sidebar.classList.contains('sidebar--open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }

  /* ---- Event Listeners ---- */

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleSidebar);
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
  }

  /* Close sidebar on window resize to desktop */
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      closeSidebar();
    }
  });

  /* Prevent default on non-functional nav links and buttons */
  var navLinks = document.querySelectorAll('.sidebar__item, .quick-action, .table-card__link, .btn');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
    });
  });

})();
