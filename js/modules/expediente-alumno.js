// ======================================
// EXPEDIENTE DEL ALUMNO
// ======================================

// ======================================
// ALUMNO SELECCIONADO
// ======================================

const alumnoSeleccionado = JSON.parse(
    sessionStorage.getItem("alumnoSeleccionado")
);

// ======================================
// DATOS DE LA CABECERA
// ======================================

document.getElementById("nombreAlumno").textContent =
    `${alumnoSeleccionado.apellido}, ${alumnoSeleccionado.nombre}`;

    // ======================================
// INICIALES DEL ALUMNO
// ======================================

const iniciales =
    `${alumnoSeleccionado.nombre.charAt(0)}${alumnoSeleccionado.apellido.charAt(0)}`;

document.getElementById("inicialesAlumno").textContent =
    iniciales.toUpperCase();

document.getElementById("legajoAlumno").textContent =
    alumnoSeleccionado.legajo;

document.getElementById("dniAlumno").textContent =
    alumnoSeleccionado.dni;

document.getElementById("carreraAlumno").textContent =
    alumnoSeleccionado.carrera;

document.getElementById("anexoAlumno").textContent =
    alumnoSeleccionado.anexo;

document.getElementById("ingresoAlumno").textContent =
    alumnoSeleccionado.ingreso;

document.getElementById("comisionAlumno").textContent =
    alumnoSeleccionado.comision;

document.getElementById("turnoAlumno").textContent =
    alumnoSeleccionado.turno;

document.getElementById("anioAlumno").textContent =
    alumnoSeleccionado.anio;


// ======================================
// CONTENEDOR
// ======================================

const contenidoTab = document.getElementById("contenidoTab");
const tabs = document.querySelectorAll(".tab");


// ======================================
// CARGAR PESTAÑA
// ======================================

async function cargarTab(nombreTab) {

    try {

        const respuesta = await fetch(
            `pages/expediente/${nombreTab}.html`
        );

        const html = await respuesta.text();

        contenidoTab.innerHTML = html;

        lucide.createIcons();


        // ======================================
        // DATOS PERSONALES
        // ======================================

        if (nombreTab === "datos-personales") {

            document.getElementById("datoNombre").textContent =
                `${alumnoSeleccionado.apellido}, ${alumnoSeleccionado.nombre}`;

            document.getElementById("datoDni").textContent =
                alumnoSeleccionado.dni;

            document.getElementById("datoEdad").textContent =
                `${alumnoSeleccionado.edad} años`;

            document.getElementById("datoProvincia").textContent =
                alumnoSeleccionado.provincia;

            document.getElementById("datoDomicilio").textContent =
                alumnoSeleccionado.domicilio;

            document.getElementById("datoTelefono").textContent =
                alumnoSeleccionado.telefono;

            document.getElementById("datoWhatsapp").textContent =
                alumnoSeleccionado.whatsapp;

            document.getElementById("datoEmail").textContent =
                alumnoSeleccionado.email;

            document.getElementById("datoEmergencia").textContent =
                alumnoSeleccionado.contactoEmergencia;

            document.getElementById("datoTelefonoEmergencia").textContent =
                alumnoSeleccionado.telefonoEmergencia;

        }


        // ======================================
        // DATOS ACADÉMICOS
        // ======================================

        if (nombreTab === "academico") {

            document.getElementById("academicoCarrera").textContent =
                alumnoSeleccionado.carrera;

            document.getElementById("academicoAnio").textContent =
                alumnoSeleccionado.anio;

            document.getElementById("academicoEstado").textContent =
                alumnoSeleccionado.estadoAcademico;

            document.getElementById("academicoAnexo").textContent =
                alumnoSeleccionado.anexo;

            document.getElementById("academicoComision").textContent =
                alumnoSeleccionado.comision;

            document.getElementById("academicoTurno").textContent =
                alumnoSeleccionado.turno;

            document.getElementById("academicoDirector").textContent =
                alumnoSeleccionado.directorEstudios;

            document.getElementById("academicoMaterias").textContent =
                alumnoSeleccionado.materias;

        }


        // ======================================
        // DOCUMENTACIÓN
        // ======================================

        if (nombreTab === "documentacion") {

            const documentos = alumnoSeleccionado.documentos;

            function mostrarEstado(id, presentado) {

                const elemento = document.getElementById(id);

                elemento.textContent =
                    presentado ? "Presentado" : "Pendiente";

                elemento.classList.add(
                    presentado
                        ? "documento-presentado"
                        : "documento-pendiente"
                );

            }

            mostrarEstado(
                "estadoDni",
                documentos.dni
            );

            mostrarEstado(
                "estadoPartida",
                documentos.partidaNacimiento
            );

            mostrarEstado(
                "estadoTitulo",
                documentos.tituloSecundario
            );

            mostrarEstado(
                "estadoFicha",
                documentos.fichaInscripcion
            );

        }


        // ======================================
        // CUOTAS
        // ======================================

        if (nombreTab === "cuotas") {

            const cuotas =
                alumnoSeleccionado.cuotasDetalle || [];

            const tabla =
                document.getElementById("tablaCuotas");

            tabla.innerHTML = "";

            let pagadas = 0;
            let pendientes = 0;
            let deuda = 0;

            cuotas.forEach(cuota => {

                if (cuota.estado === "Pagada") {

                    pagadas++;

                } else {

                    pendientes++;

                    deuda += cuota.importe;

                }

                tabla.innerHTML += `

                    <tr>

                        <td>${cuota.periodo}</td>

                        <td>${cuota.vencimiento}</td>

                        <td>
                            $${cuota.importe.toLocaleString("es-AR")}
                        </td>

                        <td>

                            <span class="
                                estado-cuota
                                ${cuota.estado === "Pagada"
                                    ? "cuota-pagada"
                                    : "cuota-pendiente"}
                            ">

                                ${cuota.estado}

                            </span>

                        </td>

                        <td>${cuota.fechaPago}</td>

                    </tr>

                `;

            });

            document.getElementById("cuotasPagadas").textContent =
                pagadas;

            document.getElementById("cuotasPendientes").textContent =
                pendientes;

            document.getElementById("deudaCuotas").textContent =
                `$${deuda.toLocaleString("es-AR")}`;

        }


        // ======================================
        // OBSERVACIONES
        // ======================================

        if (nombreTab === "observaciones") {

            const observaciones =
                alumnoSeleccionado.observaciones || [];

            const lista =
                document.getElementById("listaObservaciones");

            lista.innerHTML = "";


            // --------------------------------------
            // MOSTRAR OBSERVACIONES
            // --------------------------------------

            function renderizarObservaciones() {

                lista.innerHTML = "";

                if (observaciones.length === 0) {

                    lista.innerHTML = `
                        <div class="observacion-item">

                            <p>
                                No existen observaciones registradas.
                            </p>

                        </div>
                    `;

                    return;

                }

                observaciones.forEach(observacion => {

                    lista.innerHTML += `

                        <div class="observacion-item">

                            <div class="observacion-cabecera">

                                <strong>
                                    ${observacion.tipo}
                                </strong>

                                <span>
                                    ${observacion.fecha}
                                </span>

                            </div>

                            <p>
                                ${observacion.texto}
                            </p>

                            <small>
                                Registrado por:
                                ${observacion.registradoPor}
                            </small>

                        </div>

                    `;

                });

            }

            renderizarObservaciones();


            // --------------------------------------
            // ELEMENTOS DEL MODAL
            // --------------------------------------

            const modal =
                document.getElementById("modalObservacion");

            const btnNueva =
                document.getElementById("btnNuevaObservacion");

            const btnCerrar =
                document.getElementById("cerrarModalObservacion");

            const btnCancelar =
                document.getElementById("cancelarObservacion");

            const btnGuardar =
                document.getElementById("guardarObservacion");


            // --------------------------------------
            // ABRIR MODAL
            // --------------------------------------

            btnNueva.addEventListener("click", () => {

                modal.classList.add("visible");

            });


            // --------------------------------------
            // CERRAR MODAL
            // --------------------------------------

            function cerrarModal() {

                modal.classList.remove("visible");

            }

            btnCerrar.addEventListener(
                "click",
                cerrarModal
            );

            btnCancelar.addEventListener(
                "click",
                cerrarModal
            );


            // --------------------------------------
            // GUARDAR OBSERVACIÓN
            // --------------------------------------

            btnGuardar.addEventListener("click", () => {

                const tipo =
                    document.getElementById("tipoObservacion").value;

                const fecha =
                    document.getElementById("fechaObservacion").value;

                const texto =
                    document.getElementById("textoObservacion").value.trim();

                const registradoPor =
                    document.getElementById("registradoPor").value.trim();


                // VALIDACIÓN

                if (
                    !tipo ||
                    !fecha ||
                    !texto ||
                    !registradoPor
                ) {

                    alert(
                        "Complete todos los campos antes de guardar la observación."
                    );

                    return;

                }


                // CONVERTIR FECHA

                const fechaMostrar =
                    new Date(
                        `${fecha}T00:00:00`
                    ).toLocaleDateString(
                        "es-AR"
                    );


                // CREAR OBSERVACIÓN

                observaciones.push({

                    fecha: fechaMostrar,

                    tipo: tipo,

                    texto: texto,

                    registradoPor: registradoPor

                });


                // ACTUALIZAR LISTADO

                renderizarObservaciones();


                // CERRAR MODAL

                cerrarModal();


                // LIMPIAR FORMULARIO

                document.getElementById(
                    "tipoObservacion"
                ).value = "";

                document.getElementById(
                    "fechaObservacion"
                ).value = "";

                document.getElementById(
                    "textoObservacion"
                ).value = "";

                document.getElementById(
                    "registradoPor"
                ).value = "";

            });

        }
// ======================================
// HISTORIAL
// ======================================

if (nombreTab === "historial") {

    const historial =
        alumnoSeleccionado.historial || [];

    const lista =
        document.getElementById("listaHistorial");

    lista.innerHTML = "";


    if (historial.length === 0) {

        lista.innerHTML = `

            <div class="historial-vacio">

                <i data-lucide="history"></i>

                <p>
                    No existen movimientos registrados
                    en el historial.
                </p>

            </div>

        `;

        lucide.createIcons();

    } else {

        historial.forEach(movimiento => {

            lista.innerHTML += `

                <div class="item-historial">

                    <div class="punto-historial"></div>

                    <div class="contenido-historial">

                        <div class="cabecera-historial">

                            <div>

                                <strong>
                                    ${movimiento.tipo}
                                </strong>

                                <span>
                                    ${movimiento.area}
                                </span>

                            </div>

                            <time>
                                ${movimiento.fecha}
                            </time>

                        </div>

                        <p>
                            ${movimiento.texto}
                        </p>

                    </div>

                </div>

            `;

        });

    }

}

// ======================================
// ARCHIVOS
// ======================================

if (nombreTab === "archivos") {

    const archivos =
        alumnoSeleccionado.archivos || [];

    const lista =
        document.getElementById("listaArchivos");


    // ======================================
    // MOSTRAR ARCHIVOS
    // ======================================

    function renderizarArchivos() {

        lista.innerHTML = "";

        if (archivos.length === 0) {

            lista.innerHTML = `

                <tr>

                    <td colspan="6">

                        No existen archivos registrados
                        en el expediente.

                    </td>

                </tr>

            `;

            return;

        }


        archivos.forEach((archivo, indice) => {

            lista.innerHTML += `

                <tr>

                    <td>

                        <div class="archivo-nombre">

                            <i data-lucide="file-text"></i>

                            <span>
                                ${archivo.nombre}
                            </span>

                        </div>

                    </td>

                    <td>
                        ${archivo.categoria}
                    </td>

                    <td>

                        <span class="archivo-tipo">
                            ${archivo.tipo}
                        </span>

                    </td>

                    <td>
                        ${archivo.fecha}
                    </td>

                    <td>
                        ${archivo.cargadoPor}
                    </td>

                    <td>

                        <div class="acciones-archivo">

                            <button
                                class="btn-accion-archivo"
                                title="Ver archivo"
                                data-indice="${indice}"
                                data-accion="ver">

                                <i data-lucide="eye"></i>

                            </button>

                            <button
                                class="btn-accion-archivo"
                                title="Descargar archivo"
                                data-indice="${indice}"
                                data-accion="descargar">

                                <i data-lucide="download"></i>

                            </button>

                        </div>

                    </td>

                </tr>

            `;

        });


        lucide.createIcons();

    }


    // Mostrar archivos iniciales

    renderizarArchivos();


    // ======================================
    // MODAL
    // ======================================

    const modal =
        document.getElementById("modalArchivo");

    const btnSubir =
        document.getElementById("btnSubirArchivo");

    const btnCerrar =
        document.getElementById("cerrarModalArchivo");

    const btnCancelar =
        document.getElementById("cancelarArchivo");

    const btnGuardar =
        document.getElementById("guardarArchivo");


    // ======================================
    // ABRIR MODAL
    // ======================================

    btnSubir.addEventListener("click", () => {

        modal.classList.add("visible");

    });


    // ======================================
    // CERRAR MODAL
    // ======================================

    function cerrarModalArchivo() {

        modal.classList.remove("visible");

    }


    btnCerrar.addEventListener(
        "click",
        cerrarModalArchivo
    );

    btnCancelar.addEventListener(
        "click",
        cerrarModalArchivo
    );


    // ======================================
    // GUARDAR ARCHIVO
    // ======================================

    btnGuardar.addEventListener("click", () => {

        const categoria =
            document.getElementById(
                "categoriaArchivo"
            ).value;

        const inputArchivo =
            document.getElementById(
                "archivoSeleccionado"
            );

        const archivoSeleccionado =
            inputArchivo.files[0];


        // VALIDACIÓN

        if (!categoria) {

            alert(
                "Seleccione una categoría para el archivo."
            );

            return;

        }


        if (!archivoSeleccionado) {

            alert(
                "Seleccione un archivo antes de continuar."
            );

            return;

        }


        // ======================================
        // DATOS DEL ARCHIVO
        // ======================================

        const extension =
            archivoSeleccionado.name
                .split(".")
                .pop()
                .toUpperCase();


        const fecha =
            new Date().toLocaleDateString("es-AR");


        const url =
            URL.createObjectURL(
                archivoSeleccionado
            );


        // ======================================
        // AGREGAR ARCHIVO
        // ======================================

        archivos.push({

            nombre:
                archivoSeleccionado.name,

            tipo:
                extension,

            categoria:
                categoria,

            fecha:
                fecha,

            cargadoPor:
                "Recursos Humanos",

            url:
                url

        });


        // ======================================
        // ACTUALIZAR TABLA
        // ======================================

        renderizarArchivos();


        // ======================================
        // CERRAR MODAL
        // ======================================

        cerrarModalArchivo();


        // ======================================
        // LIMPIAR FORMULARIO
        // ======================================

        document.getElementById(
            "categoriaArchivo"
        ).value = "";

        inputArchivo.value = "";

    });


    // ======================================
    // ACCIONES DE ARCHIVOS
    // ======================================

    lista.addEventListener("click", (evento) => {

        const boton =
            evento.target.closest(
                ".btn-accion-archivo"
            );


        if (!boton) {
            return;
        }


        const indice =
            Number(
                boton.dataset.indice
            );

        const accion =
            boton.dataset.accion;

        const archivo =
            archivos[indice];


        if (!archivo) {
            return;
        }


        // ======================================
        // VER
        // ======================================

        if (accion === "ver") {

            if (archivo.url) {

                window.open(
                    archivo.url,
                    "_blank"
                );

            } else {

                alert(
                    "Este documento es un archivo de prueba del sistema."
                );

            }

        }


        // ======================================
        // DESCARGAR
        // ======================================

        if (accion === "descargar") {

            if (archivo.url) {

                const enlace =
                    document.createElement("a");

                enlace.href =
                    archivo.url;

                enlace.download =
                    archivo.nombre;

                enlace.click();

            } else {

                alert(
                    "Este documento es un archivo de prueba del sistema."
                );

            }

        }

    });

}

    } catch (error) {

        contenidoTab.innerHTML = `
            <h2>Error</h2>
            <p>No se pudo cargar la pestaña.</p>
        `;

        console.error(error);

    }

}


// ======================================
// EVENTOS DE LAS PESTAÑAS
// ======================================

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(t =>
            t.classList.remove("activo")
        );

        tab.classList.add("activo");

        cargarTab(tab.dataset.tab);

    });

});


// ======================================
// PRIMERA PESTAÑA
// ======================================

cargarTab("datos-personales");