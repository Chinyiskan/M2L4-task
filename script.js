// ============================================================
//  MercaYa — ShopRegister  |  script.js
//  M2L4 · JavaScript Bootcamp 2026
// ============================================================
//  INSTRUCCIONES:
//  → Este es el único archivo que debes editar.
//  → El HTML y CSS ya están listos. Tu trabajo es JavaScript.
//  → No borres nada de lo que ya existe.
// ============================================================


// ────────────────────────────────────────────────────────────
//  SECCIÓN 1 — FUNCIONES DE VALIDACIÓN
//  Cada función recibe el valor del campo y retorna true o false.
//  Las dos primeras ya están listas como guía — completa las demás.
//
//  🎫 TICKET 1 — Completa las funciones de validación vacías.
//  El patrón es siempre el mismo: si el dato no cumple la regla,
//  return false. Si cumple, return true.
// ────────────────────────────────────────────────────────────

// ✅ Ya implementada — úsala como guía para las demás
function validarNombre(nombre) {
    if (nombre.trim() === "" || nombre.trim().length < 3) return false;
    return true;
}

// ✅ Ya implementada — esta era difícil, te la regalamos
function validarFecha(fecha) {
    if (fecha === "") return false;
    let hoy = new Date();
    let nacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    if (edad < 18) return false;
    return true;
}

// TODO — el país no puede estar vacío
function validarPais(pais) {

}

// TODO — la ciudad no puede estar vacía
function validarCiudad(ciudad) {

}

// TODO — debe contener "@" y "."
function validarEmail(email) {

}

// TODO — debe tener exactamente 10 caracteres
function validarTelefono(telefono) {

}

// TODO — no puede estar vacía
function validarDireccion(direccion) {

}

// TODO — mínimo 8 caracteres
function validarPassword(password) {

}

// TODO — debe ser igual a password
function validarConfirmPassword(password, confirmPassword) {

}


// ────────────────────────────────────────────────────────────
//  SECCIÓN 2 — FUNCIONES DE UI (ya implementadas ✅)
// ────────────────────────────────────────────────────────────

// Muestra un mensaje de error debajo del campo indicado
function mostrarError(idError, mensaje) {
    document.getElementById(idError).textContent = mensaje;
}

// Limpia todos los mensajes de error del formulario
function limpiarErrores() {
    document.getElementById("error-nombre").textContent = "";
    document.getElementById("error-fecha").textContent = "";
    document.getElementById("error-pais").textContent = "";
    document.getElementById("error-ciudad").textContent = "";
    document.getElementById("error-email").textContent = "";
    document.getElementById("error-telefono").textContent = "";
    document.getElementById("error-direccion").textContent = "";
    document.getElementById("error-password").textContent = "";
    document.getElementById("error-confirmPassword").textContent = "";
}

// Recibe un objeto con los datos y retorna el HTML del resumen
function generarTarjeta(datos) {
    return `
        <p><strong>Nombre:</strong> ${datos.nombre}</p>
        <p><strong>Fecha de nacimiento:</strong> ${datos.fecha}</p>
        <p><strong>País:</strong> ${datos.pais}</p>
        <p><strong>Ciudad:</strong> ${datos.ciudad}</p>
        <p><strong>Correo:</strong> ${datos.email}</p>
        <p><strong>Teléfono:</strong> ${datos.telefono}</p>
        <p><strong>Dirección:</strong> ${datos.direccion}</p>
    `;
}


// ────────────────────────────────────────────────────────────
//  SECCIÓN 3 — MANEJADOR DEL SUBMIT
//
//  🎫 TICKET 2 — Conecta el formulario, lee los campos,
//  llama a tus funciones de validación y muestra la tarjeta.
//  Sigue los pasos en orden — el patrón del nombre ya está
//  completo como guía en cada paso.
// ────────────────────────────────────────────────────────────

document.getElementById("formRegistro").addEventListener("submit", function (evento) {

    // Paso 1 — Detener el comportamiento por defecto y limpiar errores
    evento.preventDefault();
    limpiarErrores();

    // Paso 2 — Leer los valores de los 9 campos
    // ✅ El primero ya está como guía — completa los demás
    let nombre = document.getElementById("inputNombre").value;
    let fecha = // TODO
        let pais = // TODO
            let ciudad = // TODO
            let email = // TODO
            let telefono = // TODO
            let direccion = // TODO
            let password = // TODO
            let confirmPassword = // TODO


    // Paso 3 — Validar campo por campo en orden
    // ✅ El nombre ya está como guía — replica el patrón para los demás
    if (!validarNombre(nombre)) {
        mostrarError("error-nombre", "El nombre es obligatorio y debe tener al menos 3 caracteres.");
        return;
    }

    // TODO — valida fecha
    // TODO — valida pais
    // TODO — valida ciudad
    // TODO — valida email
    // TODO — valida telefono
    // TODO — valida direccion
    // TODO — valida password
    // TODO — valida confirmPassword


    // Paso 4 — Si todo pasó, construir el objeto con los datos
    // ✅ La estructura ya está — agrégale los campos que faltan
    let datosRegistro = {
        nombre: nombre,
        // TODO — agrega los demás campos aquí
    };

    // Paso 5 — Mostrar la tarjeta de éxito (ya implementado ✅)
    document.getElementById("summaryGrid").innerHTML = generarTarjeta(datosRegistro);
    document.querySelector(".form-section").style.display = "none";
    document.getElementById("resultadoRegistro").style.display = "block";

});


// ════════════════════════════════════════════════════════════
//  🔥 EXTRA BONUS: VALIDACIÓN DE EMAIL MEJORADA
// ════════════════════════════════════════════════════════════
//
//  La función validarEmail() actual solo verifica que el email
//  contenga "@" y ".". El problema: "@." pasaría la validación.
//
//  Mejórala para que además verifique:
//  · Que haya al menos un carácter ANTES del @
//  · Que haya al menos un carácter ENTRE el @ y el .
//  · Que haya al menos un carácter DESPUÉS del .
//
//  Pista: puedes usar email.indexOf("@") para saber en qué
//  posición está el @ y trabajar con esas posiciones.

// ────────────────────────────────────────────────────────────
//  TOGGLE CONTRASEÑA (ya implementado ✅ — no lo modifiques) 
// te lo dejamos aqui como una curiosidad 😉
// ────────────────────────────────────────────────────────────
document.querySelectorAll(".toggle-password").forEach(function (btn) {
    btn.addEventListener("click", function () {
        const input = document.getElementById(btn.getAttribute("data-target"));
        input.type = input.type === "password" ? "text" : "password";
    });
});