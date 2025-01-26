document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const nav = document.querySelector('nav');

    menu.addEventListener('click', () => {
        nav.classList.toggle('show-nav');
    });
});