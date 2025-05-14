document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navUl = document.querySelector('nav ul');
    if (menuBtn && navUl) {
        menuBtn.addEventListener('click', function() {
            navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});