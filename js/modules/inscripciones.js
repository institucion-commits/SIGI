/* ==========================================
   MÓDULO DE INSCRIPCIONES
========================================== */

const inscripciones = [

    {
        id: 1,
        legajo: "00000001",
        nombre: "Juan",
        apellido: "Pérez",
        dni: "42345678",
        carrera: "Tec. Sup. en Administración",
        anexo: "E.E.P. N.º 518",
        anio: "3.º Año",
        fecha: "15/03/2026",
        estado: "Aprobada",
        documentacion: "Completa"
    },

    {
        id: 2,
        legajo: "00000002",
        nombre: "María",
        apellido: "Gómez",
        dni: "41888777",
        carrera: "Profesorado de Primaria",
        anexo: "Central",
        anio: "2.º Año",
        fecha: "18/03/2026",
        estado: "Pendiente",
        documentacion: "Pendiente"
    },

    {
        id: 3,
        legajo: "00000003",
        nombre: "Carlos",
        apellido: "Rodríguez",
        dni: "40123456",
        carrera: "Tec. Sup. en Enfermería",
        anexo: "E.E.P. N.º 274",
        anio: "1.º Año",
        fecha: "20/03/2026",
        estado: "Aprobada",
        documentacion: "Completa"
    },

    {
        id: 4,
        legajo: "00000004",
        nombre: "Lucía",
        apellido: "Fernández",
        dni: "42987654",
        carrera: "Tec. en Construcción de Obras Civiles",
        anexo: "Villa Ángela",
        anio: "2.º Año",
        fecha: "22/03/2026",
        estado: "Observada",
        documentacion: "Pendiente"
    }

];


/* ==========================================
   INICIALIZAR MÓDULO
========================================== */

function inicializarInscripciones() {

    cargarFiltrosInscripciones();

    actualizarIndicadoresInscripciones();

    mostrarInscripciones(inscripciones);


    /* ======================================
       BUSCADOR
    ====================================== */

    const buscador =
        document.getElementById("buscarInscripcion");

    if (buscador) {

        buscador.oninput =
            aplicarFiltrosInscripciones;

    }


    /* ======================================
       FILTROS
    ====================================== */

    const filtros = [

        "filtroAnexoInscripcion",

        "filtroCarreraInscripcion",

        "filtroAnioInscripcion",

        "filtroEstadoInscripcion"

    ];


    filtros.forEach(id => {

        const filtro =
            document.getElementById(id);

        if (filtro) {

            filtro.onchange =
                aplicarFiltrosInscripciones;

        }

    });


    /* ======================================
       NUEVA INSCRIPCIÓN
    ====================================== */

    const btnNuevaInscripcion =
        document.getElementById(
            "btnNuevaInscripcion"
        );


    if (btnNuevaInscripcion) {

        btnNuevaInscripcion.onclick = () => {

            alert(
                "La función Nueva Inscripción estará disponible próximamente."
            );

        };

    }


    /* ======================================
       ICONOS
    ====================================== */

    if (typeof lucide !== "undefined") {

        lucide.createIcons();

    }

}


/* ==========================================
   CARGAR FILTROS
========================================== */

function cargarFiltrosInscripciones() {

    const anexos = [
        ...new Set(
            inscripciones.map(
                inscripcion =>
                    inscripcion.anexo
            )
        )
    ];


    const carreras = [
        ...new Set(
            inscripciones.map(
                inscripcion =>
                    inscripcion.carrera
            )
        )
    ];


    const anios = [
        ...new Set(
            inscripciones.map(
                inscripcion =>
                    inscripcion.anio
            )
        )
    ];


    const estados = [
        ...new Set(
            inscripciones.map(
                inscripcion =>
                    inscripcion.estado
            )
        )
    ];


    llenarSelect(
        "filtroAnexoInscripcion",
        anexos
    );


    llenarSelect(
        "filtroCarreraInscripcion",
        carreras
    );


    llenarSelect(
        "filtroAnioInscripcion",
        anios
    );


    llenarSelect(
        "filtroEstadoInscripcion",
        estados
    );

}


/* ==========================================
   LLENAR SELECT
========================================== */

function llenarSelect(id, valores) {

    const select =
        document.getElementById(id);

    if (!select) return;


    valores.forEach(valor => {

        const option =
            document.createElement("option");

        option.value = valor;

        option.textContent = valor;

        select.appendChild(option);

    });

}


/* ==========================================
   INDICADORES
========================================== */

function actualizarIndicadoresInscripciones() {

    const total =
        inscripciones.length;


    const aprobadas =
        inscripciones.filter(
            inscripcion =>
                inscripcion.estado === "Aprobada"
        ).length;


    const pendientes =
        inscripciones.filter(
            inscripcion =>
                inscripcion.estado === "Pendiente"
        ).length;


    const documentacionPendiente =
        inscripciones.filter(
            inscripcion =>
                inscripcion.documentacion ===
                "Pendiente"
        ).length;


    const totalElement =
        document.getElementById(
            "totalInscripciones"
        );

    if (totalElement) {

        totalElement.textContent =
            total;

    }


    const aprobadasElement =
        document.getElementById(
            "inscripcionesAprobadas"
        );

    if (aprobadasElement) {

        aprobadasElement.textContent =
            aprobadas;

    }


    const pendientesElement =
        document.getElementById(
            "inscripcionesPendientes"
        );

    if (pendientesElement) {

        pendientesElement.textContent =
            pendientes;

    }


    const documentacionElement =
        document.getElementById(
            "documentacionPendiente"
        );

    if (documentacionElement) {

        documentacionElement.textContent =
            documentacionPendiente;

    }

}


/* ==========================================
   MOSTRAR INSCRIPCIONES
========================================== */

function mostrarInscripciones(lista) {

    const tabla =
        document.getElementById(
            "tabla-inscripciones"
        );


    if (!tabla) return;


    tabla.innerHTML = "";


    if (lista.length === 0) {

        tabla.innerHTML = `

            <tr>

                <td
                    colspan="8"
                    style="text-align:center;"
                >

                    No se encontraron
                    inscripciones.

                </td>

            </tr>

        `;

        return;

    }


    lista.forEach(inscripcion => {

        const iniciales =
            inscripcion.nombre.charAt(0) +
            inscripcion.apellido.charAt(0);


        let claseEstado = "";


        if (
            inscripcion.estado ===
            "Aprobada"
        ) {

            claseEstado =
                "estado-aprobada";

        }


        if (
            inscripcion.estado ===
            "Pendiente"
        ) {

            claseEstado =
                "estado-pendiente";

        }


        if (
            inscripcion.estado ===
            "Observada"
        ) {

            claseEstado =
                "estado-observada";

        }


        const documentacionCompleta =
            inscripcion.documentacion ===
            "Completa";


        tabla.innerHTML += `

            <tr>

                <td>

                    <div
                        class="col-alumno-inscripcion"
                    >

                        <div
                            class="avatar-inscripcion"
                        >

                            ${iniciales.toUpperCase()}

                        </div>


                        <div>

                            <strong>

                                ${inscripcion.apellido},
                                ${inscripcion.nombre}

                            </strong>


                            <small>

                                Legajo
                                ${inscripcion.legajo}

                            </small>

                        </div>

                    </div>

                </td>


                <td>

                    ${inscripcion.dni}

                </td>


                <td>

                    ${inscripcion.carrera}

                </td>


                <td>

                    ${inscripcion.anexo}

                </td>


                <td>

                    ${inscripcion.fecha}

                </td>


                <td>

                    <span
                        class="estado-inscripcion
                        ${claseEstado}"
                    >

                        ${inscripcion.estado}

                    </span>

                </td>


                <td>

                    <span
                        class="estado-documentacion
                        ${
                            documentacionCompleta
                                ? "documentacion-completa"
                                : "documentacion-pendiente"
                        }"
                    >

                        <i
                            data-lucide="${
                                documentacionCompleta
                                    ? "circle-check"
                                    : "clock"
                            }"
                        ></i>


                        ${inscripcion.documentacion}

                    </span>

                </td>


                <td>

                    <div
                        class="acciones-inscripcion"
                    >

                        <button
                            class="accion-inscripcion"
                            title="Ver inscripción"
                            onclick="
                                verInscripcion(
                                    ${inscripcion.id}
                                )
                            "
                        >

                            <i
                                data-lucide="eye"
                            ></i>

                        </button>


                        <button
                            class="accion-inscripcion"
                            title="Revisar documentación"
                            onclick="
                                revisarDocumentacion(
                                    ${inscripcion.id}
                                )
                            "
                        >

                            <i
                                data-lucide="file-check-2"
                            ></i>

                        </button>

                    </div>

                </td>

            </tr>

        `;

    });


    if (typeof lucide !== "undefined") {

        lucide.createIcons();

    }

}


/* ==========================================
   BUSCADOR Y FILTROS
========================================== */

function aplicarFiltrosInscripciones() {

    const buscador =
        document.getElementById(
            "buscarInscripcion"
        );


    const texto =
        buscador
            ? buscador.value
                .toLowerCase()
                .trim()
            : "";


    const filtroAnexo =
        document.getElementById(
            "filtroAnexoInscripcion"
        );


    const anexo =
        filtroAnexo
            ? filtroAnexo.value
            : "";


    const filtroCarrera =
        document.getElementById(
            "filtroCarreraInscripcion"
        );


    const carrera =
        filtroCarrera
            ? filtroCarrera.value
            : "";


    const filtroAnio =
        document.getElementById(
            "filtroAnioInscripcion"
        );


    const anio =
        filtroAnio
            ? filtroAnio.value
            : "";


    const filtroEstado =
        document.getElementById(
            "filtroEstadoInscripcion"
        );


    const estado =
        filtroEstado
            ? filtroEstado.value
            : "";


    const resultado =
        inscripciones.filter(
            inscripcion => {


                const coincideTexto =

                    !texto ||

                    inscripcion.legajo
                        .toLowerCase()
                        .includes(texto) ||

                    inscripcion.dni
                        .toLowerCase()
                        .includes(texto) ||

                    inscripcion.nombre
                        .toLowerCase()
                        .includes(texto) ||

                    inscripcion.apellido
                        .toLowerCase()
                        .includes(texto);


                const coincideAnexo =

                    !anexo ||

                    inscripcion.anexo ===
                    anexo;


                const coincideCarrera =

                    !carrera ||

                    inscripcion.carrera ===
                    carrera;


                const coincideAnio =

                    !anio ||

                    inscripcion.anio ===
                    anio;


                const coincideEstado =

                    !estado ||

                    inscripcion.estado ===
                    estado;


                return (

                    coincideTexto &&

                    coincideAnexo &&

                    coincideCarrera &&

                    coincideAnio &&

                    coincideEstado

                );

            }
        );


    mostrarInscripciones(resultado);

}


/* ==========================================
   VER INSCRIPCIÓN
========================================== */

function verInscripcion(id) {

    const inscripcion =
        inscripciones.find(
            registro =>
                registro.id === id
        );


    if (!inscripcion) return;


    alert(

        `Inscripción de
        ${inscripcion.nombre}
        ${inscripcion.apellido}

Legajo:
${inscripcion.legajo}

DNI:
${inscripcion.dni}

Carrera:
${inscripcion.carrera}

Estado:
${inscripcion.estado}`

    );

}


/* ==========================================
   REVISAR DOCUMENTACIÓN
========================================== */

function revisarDocumentacion(id) {

    const inscripcion =
        inscripciones.find(
            registro =>
                registro.id === id
        );


    if (!inscripcion) return;


    alert(

        `Documentación de
        ${inscripcion.nombre}
        ${inscripcion.apellido}

Estado:
${inscripcion.documentacion}`

    );

}


/* ==========================================
   EXPONER INICIALIZACIÓN
========================================== */

window.inicializarInscripciones =
    inicializarInscripciones;