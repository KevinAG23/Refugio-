// JavaScript Document
function validarCampo(campo, idError, regex, mensajeError) {
        var valorCampo = campo.value;
        var errorElement = document.getElementById(idError);

        if (!regex.test(valorCampo)) {
            errorElement.innerHTML = mensajeError;
            return false;
        } else {
            errorElement.innerHTML = '';
            return true;
        }
    }

    document.getElementById('nombre').addEventListener('input', function () {
        validarCampo(this, 'errorNombre', /^[a-zA-Z\s]+$/, 'Por favor, ingrese un nombre válido.');
    });

    document.getElementById('celular').addEventListener('input', function () {
        validarCampo(this, 'errorCelular', /^\d+$/, 'Por favor, ingrese un número de celular válido (solo dígitos).');
    });

    document.getElementById('email').addEventListener('input', function () {
        validarCampo(this, 'errorEmail', /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Por favor, ingrese una dirección de correo electrónico válida.');
    });

    document.getElementById('mensaje').addEventListener('input', function () {
        validarCampo(this, 'errorMensaje', /.+/, 'Por favor, ingrese un mensaje.');
    });


 $(document).ready(function () {
            // Manejador de clic para los elementos de navegación
            $('.navbar-nav a').on('click', function (e) {
                e.preventDefault();

                // Obtener el destino del enlace (por ejemplo, #service, #gallery, etc.)
                var target = $(this).attr('href');

                // Desplazar la página hacia el elemento de destino con una animación
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);
            });
        });