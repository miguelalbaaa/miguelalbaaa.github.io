document.addEventListener('DOMContentLoaded', () => {
    // 1. TEMA OSCURO / CLARO
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.body.removeAttribute('data-theme');
            icon.className = 'fa-solid fa-moon';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            icon.className = 'fa-solid fa-sun';
        }
    });

    // 2. MANEJO DEL FORMULARIO DE CONTACTO (CONSIGNA 8)
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        if (nombre && email && mensaje) {
            formStatus.style.color = '#10b981';
            formStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i> ¡Gracias ' + nombre + '! Tu mensaje ha sido enviado con éxito.';
            contactForm.reset();
            
            setTimeout(() => {
                formStatus.innerHTML = '';
            }, 5000);
        } else {
            formStatus.style.color = '#ef4444';
            formStatus.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Por favor completa todos los campos.';
        }
    });
});
