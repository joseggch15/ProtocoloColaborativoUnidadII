// Funciones de Validaciónssd
function validateNameOrSurname(field) {
    if (field.value.trim() === '') {
        return false;
    }
    field.value = field.value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return true;
}

function validateEmail(emailField) {
    const atSymbol = emailField.value.indexOf('@');
    const dot = emailField.value.lastIndexOf('.');
    if (atSymbol < 1 || dot <= atSymbol + 2 || dot === emailField.value.length - 1) {
        return false;
    }
    return true;
}

function validatePhone(phoneField) {
    if (phoneField.value === '') {
        return true;
    }
    for (let char of phoneField.value) {
        if (char < '0' || char > '9') {
            return false;
        }
    }
    return true;
}

function validateSubjectOrMessage(field, maxLength) {
    return field.value.length <= maxLength;
}

// Funciones para Manejar Bordes y Estados de Solo Lectura
function toggleReadonly(field) {
    field.readOnly = !field.readOnly;
}

function changeBorderColor(field, isWriting) {
    field.style.borderColor = isWriting ? 'blue' : 'black';
}

document.querySelectorAll('.validatable').forEach(field => {
    field.addEventListener('dblclick', () => toggleReadonly(field));
    field.addEventListener('input', () => changeBorderColor(field, true));
    field.addEventListener('blur', () => {
        changeBorderColor(field, false);
        toggleReadonly(field);
        // Aquí puedes llamar a la función de validación correspondiente
    });
});

// Lógica de las Estrellas de Valoración
let rating = 0;

function setStarRating(starIndex) {
    rating = starIndex;
    // Actualiza las estrellas aquí...
}

// Reemplazar '.star' por el selector correcto de tus estrellas
document.querySelectorAll('.star').forEach((star, index) => {
    star.addEventListener('mouseenter', () => {/* Cambiar a Tipo2 */});
    star.addEventListener('mouseleave', () => {/* Cambiar a Tipo1 */});
    star.addEventListener('click', () => setStarRating(index + 1));
});

// Botones del Formulario
document.getElementById('cancelButton').addEventListener('click', () => {
    // Redirige al inicio del sitio o realiza otra acción
});

document.getElementById('resetButton').addEventListener('click', () => {
    // Reinicia el formulario
});

document.getElementById('submitButton').addEventListener('click', (event) => {
    event.preventDefault();
    // Valida y envía el formulario
});
