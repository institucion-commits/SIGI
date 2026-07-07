// =============================
// CARGA DE MÓDULOS SIGI
// =============================

async function cargarModulo(modulo) {

    const contenido = document.getElementById("contenido");

    try {

        const respuesta = await fetch(`pages/${modulo}.html`);

        const html = await respuesta.text();

        contenido.innerHTML = html;

        lucide.createIcons();

    } catch (error) {

        contenido.innerHTML = `
            <h2>Error</h2>
            <p>No se pudo cargar el módulo.</p>
        `;

        console.error(error);

    }

}
// =============================
// MÓDULO INICIAL
// =============================

window.onload = function () {

    cargarModulo("inicio");

}