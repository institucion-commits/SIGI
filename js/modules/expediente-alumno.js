// ======================================
// EXPEDIENTE DEL ALUMNO
// ======================================

//======================================
// CONTENEDOR
//======================================

const contenidoTab = document.getElementById("contenidoTab");
const tabs = document.querySelectorAll(".tab");

//======================================
// CARGAR PESTAÑA
//======================================

async function cargarTab(nombreTab) {

    try {

        const respuesta = await fetch(`pages/expediente/${nombreTab}.html`);

        const html = await respuesta.text();

        contenidoTab.innerHTML = html;

        lucide.createIcons();

    } catch (error) {

        contenidoTab.innerHTML = `
            <h2>Error</h2>
            <p>No se pudo cargar la pestaña.</p>
        `;

        console.error(error);

    }

}

//======================================
// EVENTOS
//======================================

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("activo"));

        tab.classList.add("activo");

        cargarTab(tab.dataset.tab);

    });

});

//======================================
// PRIMERA PESTAÑA
//======================================

cargarTab("datos-personales");