const hamburger = document.querySelector('.hamburger');
const menuSidebar = document.querySelector('.menu-sidebar');

hamburger.addEventListener('click', () => {
    menuSidebar.classList.toggle('active');
});