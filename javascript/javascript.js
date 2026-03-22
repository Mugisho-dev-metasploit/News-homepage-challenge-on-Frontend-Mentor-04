const menuOpenBtn = document.getElementById('menuOpenBtn');
const menuCloseBtn = document.getElementById('menuCloseBtn');
const mainNav = document.getElementById('mainNav');
const menuOverlay = document.getElementById('menuOverlay');

function openMenu() {
  mainNav.classList.add('active');
  menuOverlay.classList.add('active');
  menuOpenBtn.setAttribute('aria-expanded', 'true');
  
  // Désactive le défilement de l'arrière-plan
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mainNav.classList.remove('active');
  menuOverlay.classList.remove('active');
  menuOpenBtn.setAttribute('aria-expanded', 'false');
  
  // Restaure le défilement
  document.body.style.overflow = 'auto';
}

// Événements sur les clics de boutons
menuOpenBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);

// Fermeture du menu si on clique sur la zone assombrie (overlay)
menuOverlay.addEventListener('click', closeMenu);

// ==========================================
// Initialisation des animations au chargement
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Déclenche l'animation d'apparition fluide lorsque le site est prêt (Défini dans style.css)
  document.body.classList.add('fade-in-on-load');
});
