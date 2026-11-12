// 1. Acceder a los elementos del DOM

const nombre = document.querySelector("#nombre");
const boton = document.querySelector("#botonSaludar");
const mensaje = document.querySelector("#mensaje");


// 2. Crear una función

function saludar() {

    // Obtener el valor ingresado
    const nombreUsuario = nombre.value.trim();

    // 3. Validar: el nombre debe tener al menos 5 caracteres
    if (nombreUsuario.length < 5) {
        mensaje.textContent = "El nombre debe tener al menos 5 caracteres.";
        return; // Sale de la función y no muestra el saludo
    }

    // 4. Obtener la fecha actual en español
    const fechaActual = new Date().toLocaleDateString("es-EC", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    // Actualizar el contenido del DOM con el nuevo saludo
    mensaje.textContent =
        "¡Qué gusto verte, " + nombreUsuario +
        "! Hoy es " + fechaActual + ".";

}

// 5. Escuchar el evento del botón

boton.addEventListener("click", saludar);
