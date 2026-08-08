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