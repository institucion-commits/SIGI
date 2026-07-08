// ======================================
// MÓDULO GESTIÓN DE ALUMNOS
// ======================================

// Base de datos temporal
const alumnos = [

    {
        id: 1,
        legajo: "00000001",
        dni: "42345678",
        apellido: "Pérez",
        nombre: "Juan",
        carrera: "Tec. Sup. en Administración",
        anio: "3° Año",
        anexo: "EEP N° 518",
        estado: "Activo",
        cuotas: false,
        documentacion: true
    },

    {
        id: 2,
        legajo: "00000002",
        dni: "41888777",
        apellido: "Gómez",
        nombre: "María",
        carrera: "Profesorado de Primaria",
        anio: "2° Año",
        anexo: "Central",
        estado: "Activo",
        cuotas: true,
        documentacion: false
    }

];

console.log(alumnos);

// ======================================
// DIBUJAR TABLA
// ======================================

function renderizarTabla(lista = alumnos) {

    const tabla = document.getElementById("tabla-alumnos");

    tabla.innerHTML = "";

    lista.forEach(alumno => {

        tabla.innerHTML += `

        <tr>

            <td class="col-alumno">

                <div class="avatar-alumno">

                    ${alumno.nombre.charAt(0)}${alumno.apellido.charAt(0)}

                </div>

                <div>

                    <strong>${alumno.apellido}, ${alumno.nombre}</strong><br>

                    <small>Legajo: ${alumno.legajo}</small><br>

                    <small>DNI: ${alumno.dni}</small>

                </div>

            </td>

            <td>${alumno.carrera}</td>

            <td>

                <span class="badge-activo">

                    ${alumno.estado}

                </span>

            </td>

            <td>

                ${alumno.cuotas ? "💰" : ""}

                ${alumno.documentacion ? "📄" : ""}

            </td>

            <td>

                Sin movimientos

            </td>

            <td>

    <button
    class="accion"
    onclick="abrirExpediente(${alumno.id})">

    <i data-lucide="eye"></i>

</button>

                <button class="accion">

                    <i data-lucide="pencil"></i>

                </button>

            </td>

        </tr>

        `;

    });

    lucide.createIcons();

}


// ==============================
// BUSCADOR
// ==============================

document
    .getElementById("buscarAlumno")
    .addEventListener("input", aplicarFiltros);

document
    .getElementById("filtroAnexo")
    .addEventListener("change", aplicarFiltros);

document
    .getElementById("filtroCarrera")
    .addEventListener("change", aplicarFiltros);

document
    .getElementById("filtroEstado")
    .addEventListener("change", aplicarFiltros);

// ======================================
// ACTUALIZAR INDICADORES
// ======================================

function actualizarIndicadores() {

    const activos = alumnos.filter(a => a.estado === "Activo").length;

    const suspendidos = alumnos.filter(a => a.estado === "Suspendido").length;

    const egresados = alumnos.filter(a => a.estado === "Egresado").length;

    const completos = alumnos.filter(a => a.documentacion).length;

    const porcentaje = Math.round((completos / alumnos.length) * 100);

    document.getElementById("totalActivos").textContent = activos;

    document.getElementById("totalSuspendidos").textContent = suspendidos;

    document.getElementById("totalEgresados").textContent = egresados;

    document.getElementById("totalExpedientes").textContent = porcentaje + "%";

}

// ======================================
// APLICAR FILTROS
// ======================================

function aplicarFiltros() {

    const texto = document
        .getElementById("buscarAlumno")
        .value
        .toLowerCase();

    const anexo = document.getElementById("filtroAnexo").value;
    const carrera = document.getElementById("filtroCarrera").value;
    const estado = document.getElementById("filtroEstado").value;

    const resultado = alumnos.filter(alumno => {

        const coincideTexto =

            alumno.legajo.toLowerCase().includes(texto) ||

            alumno.dni.toLowerCase().includes(texto) ||

            alumno.nombre.toLowerCase().includes(texto) ||

            alumno.apellido.toLowerCase().includes(texto);

        const coincideAnexo =
            anexo === "" || alumno.anexo === anexo;

        const coincideCarrera =
            carrera === "" || alumno.carrera === carrera;

        const coincideEstado =
            estado === "" || alumno.estado === estado;

        return (
            coincideTexto &&
            coincideAnexo &&
            coincideCarrera &&
            coincideEstado
        );

    });

    renderizarTabla(resultado);

}

// ======================================
// CARGAR FILTROS
// ======================================

function cargarFiltros() {

    const filtroCarrera = document.getElementById("filtroCarrera");
    const filtroAnexo = document.getElementById("filtroAnexo");
    const filtroEstado = document.getElementById("filtroEstado");

    const carreras = [...new Set(alumnos.map(a => a.carrera))];
    const anexos = [...new Set(alumnos.map(a => a.anexo))];
    const estados = [...new Set(alumnos.map(a => a.estado))];

    carreras.forEach(carrera => {
        filtroCarrera.innerHTML += `<option value="${carrera}">${carrera}</option>`;
    });

    anexos.forEach(anexo => {
        filtroAnexo.innerHTML += `<option value="${anexo}">${anexo}</option>`;
    });

    estados.forEach(estado => {
        filtroEstado.innerHTML += `<option value="${estado}">${estado}</option>`;
    });

}

// ======================================
// ABRIR EXPEDIENTE
// ======================================

function abrirExpediente(id) {

    const alumnoSeleccionado = alumnos.find(a => a.id === id);

    sessionStorage.setItem(
        "alumnoSeleccionado",
        JSON.stringify(alumnoSeleccionado)
    );

    cargarModulo("expediente-alumno");

}

renderizarTabla();
actualizarIndicadores();
cargarFiltros();