let rojo = 0;
let verde = 0;
let azul = 0;

function ajustar(color, cantidad) {
    if (color === 'rojo') {
        rojo+= cantidad;
        if (rojo> 255) {
            rojo = 255;
        } else if (rojo < 0) {
            rojo= 0;
        }
        actualizar('rojo', `Rojo: ${rojo}`);
    } else if (color === 'verde') {
        verde += cantidad;
        if (verde > 255) {
            verde = 255;
        } else if (verde < 0) {
            verde = 0;
        }
        actualizar('verde', `Verde: ${verde}`);
    } else if (color === 'azul') {
        azul += cantidad;
        if (azul > 255) {
            azul = 255;
        } else if (azul < 0) {
            azul = 0;
        }
        actualizar('azul', `Azul: ${azul}`);
    }

    // Actualizar el color de fondo del cuerpo
    document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

// Función para actualizar el texto en el HTML
function actualizar(numeroelemento, texto) {
    const elemento = document.getElementById(numeroelemento);
    if (elemento) {
        // Usar innerHTML aquí para actualizar el texto
        elemento.innerHTML = texto;
    }
}

// Asignar eventos a los botones para ajustar los colores
document.getElementById('rsubir').addEventListener('click', function() {
    ajustar('rojo', 5);
});

document.getElementById('rbajar').addEventListener('click', function() {
    ajustar('rojo', -5);
});

document.getElementById('vsubir').addEventListener('click', function() {
    ajustar('verde', 5);
});

document.getElementById('vbajar').addEventListener('click', function() {
    ajustar('verde', -5);
});

document.getElementById('asubir').addEventListener('click', function() {
    ajustar('azul', 5);
});

document.getElementById('abajar').addEventListener('click', function() {
    ajustar('azul', -5);
});