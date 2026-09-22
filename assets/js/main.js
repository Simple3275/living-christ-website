document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navbar Toggle
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Footer Dynamic Year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Simple Scroll Reveal Observer
  const observerOptions = {
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    revealObserver.observe(el);
  });

  // Copy Account Number Logic
  const copyBtn = document.getElementById('copy-acct-btn');
  const acctNumber = document.getElementById('acct-number');
  const copyStatus = document.getElementById('copy-status');

  if (copyBtn && acctNumber) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(acctNumber.textContent.trim()).then(() => {
        if (copyStatus) {
          copyStatus.textContent = 'Account number copied!';
          copyStatus.classList.remove('opacity-0');
          setTimeout(() => copyStatus.classList.add('opacity-0'), 2000);
        }
      });
    });
  }
});