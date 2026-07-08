// =============================
// CARGA DE MÓDULOS SIGI
// =============================

async function cargarModulo(modulo) {

    const contenido = document.getElementById("contenido");

    try {

        const respuesta = await fetch(`pages/${modulo}.html`);

        const html = await respuesta.text();

        contenido.innerHTML = html;

        // Cargar el JavaScript del módulo si existe
try {

    const scriptAnterior = document.getElementById("script-modulo");

    if (scriptAnterior) {
        scriptAnterior.remove();
    }

    const script = document.createElement("script");

    script.src = `js/modules/${modulo}.js`;

    script.id = "script-modulo";

    document.body.appendChild(script);

} catch (e) {

    console.log("El módulo no tiene JavaScript.");

}

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