document.addEventListener('DOMContentLoaded', function() {
    const logintoggle = document.getElementById('login-toggle');

    logintoggle.addEventListener('click', function() {
        window.location.href = 'login.html'; // Redirect to login.html
    });

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
