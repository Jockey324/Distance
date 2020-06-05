const menuBtn = document.querySelector('.m_menu');
const menu = document.querySelector('.menu_sidebar');

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
});