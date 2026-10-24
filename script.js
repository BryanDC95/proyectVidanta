//Obtener el header
const header = document.querySelector('header');
const logo = document.querySelector('.logo-img');

//Escuchar el evento de scroll
window.addEventListener('scroll', function () {
    if (window.scrollY > window.innerHeight) {
        header.className = 'scrolled';
        logo.src = "/IMG/img/vv-logo-cafe.png";
    } else {
        header.className = '';
        logo.src = "IMG/img/vv-logo.png";
    }
});

new Splide( '#galeria',{
    perPage:4,
    perMove:1
} ).mount();

new Splide( '#galeria-resort',{
    perPage:8,
    perMove:1
} ).mount();

new Splide( '#galeria-2',{
    perPage:4,
    perMove:1
} ).mount();
