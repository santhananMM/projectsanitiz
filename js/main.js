document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const sideMenu = document.getElementById('sideMenu');
    function closeMenu() {
        sideMenu.classList.remove('open');
        menuBtn.classList.remove('open');
        menuBtn.innerHTML = '&#9776;';
    }
    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        sideMenu.classList.toggle('open');
        menuBtn.classList.toggle('open');
        if (sideMenu.classList.contains('open')) {
            menuBtn.innerHTML = '&times;';
        } else {
            menuBtn.innerHTML = '&#9776;';
        }
    });
    sideMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    document.addEventListener('click', function(e) {
        if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            closeMenu();
        }
    });
    // Allow closeMenu to be called from HTML
    window.closeMenu = closeMenu;
});