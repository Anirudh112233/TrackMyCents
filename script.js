document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const closeMenu = document.getElementById('close-menu');

    menuToggle.addEventListener('click', function() {
        sideMenu.classList.add('open');
    });

    closeMenu.addEventListener('click', function() {
        sideMenu.classList.remove('open');
    });
});
