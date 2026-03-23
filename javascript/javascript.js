const menuOpenBtn = document.getElementById('menuOpenBtn');
const menuCloseBtn = document.getElementById('menuCloseBtn');
const mainNav = document.getElementById('mainNav');
const menuOverlay = document.getElementById('menuOverlay');

function openMenu() {
  mainNav.classList.add('active');
  menuOverlay.classList.add('active');
  menuOpenBtn.setAttribute('aria-expanded', 'true');
  
  // Disables background scrolling
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mainNav.classList.remove('active');
  menuOverlay.classList.remove('active');
  menuOpenBtn.setAttribute('aria-expanded', 'false');
  
  // Restores scrolling
  document.body.style.overflow = 'auto';
}

// Button click events
menuOpenBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);

// Close menu if clicking on the darkened area (overlay)
menuOverlay.addEventListener('click', closeMenu);

// ==========================================
// Animation initialization on loading
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Triggers smooth fade-in animation when the site is ready (Defined in style.css)
  document.body.classList.add('fade-in-on-load');
});
