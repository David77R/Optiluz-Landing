const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    const abierto = navLinks.classList.toggle('abierto');
    navToggle.setAttribute('aria-expanded', abierto);
});

navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('abierto');
        navToggle.setAttribute('aria-expanded', false);
    });
});