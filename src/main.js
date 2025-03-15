// Mobile menu logic
const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMobileMenuButton = document.getElementById('close-mobile-menu');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
});

closeMobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
});