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

const form = document.querySelector('form');
const confirmacion = document.querySelector('.form-confirmacion');
const submitBtn = form.querySelector('button[type="submit"]');

const validaciones = {
    nombre: (valor) => valor.trim() !== '' || 'Por favor ingrese su nombre.',
    telefono: (valor) => /^[0-9\-\s]{7,}$/.test(valor.trim()) || 'Ingrese un teléfono válido (solo números).',
    mensaje: (valor) => valor.trim() !== '' || 'Cuéntenos brevemente qué necesita...',
};

function validarCampo(campo) {
    const grupo = campo.closest('.form-group');
    const errorSpan = grupo.querySelector('.error-message');
    const resultado = validaciones[campo.name](campo.value);

    if (resultado === true) {
        grupo.classList.remove('error');
        errorSpan.textContent = '';
        return true;
    }

    grupo.classList.add('error');
    errorSpan.textContent = resultado;
    return false;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const campos = form.querySelectorAll('input, textarea');
    let formularioValido = true;
    let primerError = null;

    campos.forEach((campo) => {
        if (!validarCampo(campo)) {
            formularioValido = false;
            if (!primerError) primerError = campo;
        }
    });

    if (!formularioValido) {
        primerError.focus();
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    setTimeout(() => {
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar';
        confirmacion.textContent = '¡Gracias! Le contactaremos pronto.';
    }, 900);
});

const heroImgs = document.querySelectorAll('.hero-img');
const puntos = document.querySelectorAll('.punto');
const heroGaleria = document.querySelector('#hero');
const prefiereMenosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let indiceHero = 0;
let intervaloHero;

function mostrarSlide(indice) {
    heroImgs[indiceHero].classList.remove('activa');
    puntos[indiceHero].classList.remove('activo');
    heroImgs[indice].classList.add('activa');
    puntos[indice].classList.add('activo');
    indiceHero = indice;
}

function siguienteSlide() {
    mostrarSlide((indiceHero + 1) % heroImgs.length);
}

function iniciarAutoplay() {
    if (!prefiereMenosMovimiento) {
        intervaloHero = setInterval(siguienteSlide, 4000);
    }
}

puntos.forEach((punto) => {
    punto.addEventListener('click', () => {
        clearInterval(intervaloHero);
        mostrarSlide(Number(punto.dataset.index));
        iniciarAutoplay();
    });
});
const heroSection = document.querySelector('#hero');
heroSection.addEventListener('mouseenter', () => clearInterval(intervaloHero));
heroSection.addEventListener('mouseleave', iniciarAutoplay);

iniciarAutoplay();

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((item) => {
    const boton = item.querySelector('.nav-link-btn');

    boton.addEventListener('click', (e) => {
        e.stopPropagation();
        const yaAbierto = item.classList.contains('abierto');

        navItems.forEach((otro) => {
            otro.classList.remove('abierto');
            otro.querySelector('.nav-link-btn').setAttribute('aria-expanded', 'false');
        });

        if (!yaAbierto) {
            item.classList.add('abierto');
            boton.setAttribute('aria-expanded', 'true');
        }
    });
});

document.addEventListener('click', () => {
    navItems.forEach((item) => {
        item.classList.remove('abierto');
        item.querySelector('.nav-link-btn').setAttribute('aria-expanded', 'false');
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navItems.forEach((item) => {
            item.classList.remove('abierto');
            item.querySelector('.nav-link-btn').setAttribute('aria-expanded', 'false');
        });
    }
});

let ultimoScroll = 0;
const headerEl = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollActual = window.scrollY;

    if (scrollActual > ultimoScroll && scrollActual > 100) {
        headerEl.classList.add('header-oculto');
    } else {
        headerEl.classList.remove('header-oculto');
    }

    ultimoScroll = scrollActual;
});

const titulosAnimados = document.querySelectorAll('.titulo-animado');
const prefiereMenosMovimientoTitulos = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefiereMenosMovimientoTitulos) {
    titulosAnimados.forEach((titulo) => titulo.classList.add('visible'));
} else {
    const observadorTitulos = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
                observadorTitulos.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.3 });

    titulosAnimados.forEach((titulo) => observadorTitulos.observe(titulo));
}