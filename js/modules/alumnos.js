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
    provincia: "Chaco",

edad: 25,
telefono: "3624-123456",
whatsapp: "3624-123456",
email: "juan.perez@email.com",
domicilio: "Av. Ejemplo 123",
contactoEmergencia: "Ana Pérez",
telefonoEmergencia: "3624-654321",

    carrera: "Tec. Sup. en Administración",
    anio: "3° Año",
    anexo: "EEP N° 518",
    ingreso: "15/03/2024",
    comision: "A",
    turno: "Noche",
    directorEstudios: "Lic. Ana Fernández",
estadoAcademico: "Regular",
materias: "Matemática III, Administración General, Economía",  
cuotasDetalle: [
    {
        periodo: "Marzo 2026",
        vencimiento: "20/03/2026",
        importe: 20000,
        estado: "Pagada",
        fechaPago: "18/03/2026"
    },
    {
        periodo: "Abril 2026",
        vencimiento: "20/04/2026",
        importe: 20000,
        estado: "Pagada",
        fechaPago: "19/04/2026"
    },
    {
        periodo: "Mayo 2026",
        vencimiento: "20/05/2026",
        importe: 20000,
        estado: "Pendiente",
        fechaPago: "-"
    },
    {
        periodo: "Junio 2026",
        vencimiento: "20/06/2026",
        importe: 20000,
        estado: "Pendiente",
        fechaPago: "-"
    }
],
observaciones: [
    {
        fecha: "15/04/2026",
        tipo: "Administrativa",
        texto: "Presentó documentación pendiente.",
        registradoPor: "Administración"
    },
    {
        fecha: "22/04/2026",
        tipo: "Académica",
        texto: "Se comunicó con Dirección de Estudios.",
        registradoPor: "Bedelía"
    }
],

historial: [
    {
        fecha: "15/03/2025",
        tipo: "Inscripción",
        area: "Administración",
        texto: "Alta del alumno en SIGI."
    },
    {
        fecha: "18/03/2025",
        tipo: "Documentación presentada",
        area: "Bedelía",
        texto: "Se incorporó documentación al expediente."
    },
    {
        fecha: "20/03/2026",
        tipo: "Pago registrado",
        area: "Administración",
        texto: "Se registró el pago de la cuota correspondiente a marzo de 2026."
    },
    {
        fecha: "22/04/2026",
        tipo: "Actualización académica",
        area: "Dirección de Estudios",
        texto: "Se actualizó la información académica del alumno."
    }
],

archivos: [
    {
        nombre: "DNI - Juan Perez.pdf",
        tipo: "PDF",
        categoria: "DNI",
        fecha: "15/03/2025",
        cargadoPor: "Administración"
    },
    {
        nombre: "Partida de nacimiento.pdf",
        tipo: "PDF",
        categoria: "Partida de nacimiento",
        fecha: "15/03/2025",
        cargadoPor: "Bedelía"
    },
    {
        nombre: "Ficha de inscripción.pdf",
        tipo: "PDF",
        categoria: "Ficha de inscripción",
        fecha: "18/03/2025",
        cargadoPor: "Administración"
    }
],

estado: "Activo",
    cuotas: false,
    documentos: {
    dni: true,
    partidaNacimiento: true,
    tituloSecundario: true,
    fichaInscripcion: true
},
},

   {
    id: 2,
    legajo: "00000002",
    dni: "41888777",
    apellido: "Gómez",
    nombre: "María",
    
    provincia: "Chaco",
edad: 23,
telefono: "3624-987654",
whatsapp: "3624-987654",
email: "maria.gomez@email.com",
domicilio: "Calle Ejemplo 456",
contactoEmergencia: "Carlos Gómez",
telefonoEmergencia: "3624-456789",

    carrera: "Profesorado de Primaria",
    anio: "2° Año",
    anexo: "Central",
    ingreso: "18/03/2025",
    comision: "B",
    turno: "Noche",
    directorEstudios: "Prof. Laura Gómez",
estadoAcademico: "Regular",
materias: "Didáctica General, Psicología Educacional, Lengua",
 cuotasDetalle: [
    {
        periodo: "Marzo 2026",
        vencimiento: "20/03/2026",
        importe: 20000,
        estado: "Pagada",
        fechaPago: "20/03/2026"
    },
    {
        periodo: "Abril 2026",
        vencimiento: "20/04/2026",
        importe: 20000,
        estado: "Pendiente",
        fechaPago: "-"
    },
    {
        periodo: "Mayo 2026",
        vencimiento: "20/05/2026",
        importe: 20000,
        estado: "Pendiente",
        fechaPago: "-"
    }
],  

observaciones: [
    {
        fecha: "10/04/2026",
        tipo: "Administrativa",
        texto: "Se recibió documentación para completar el expediente.",
        registradoPor: "Administración"
    }
],

historial: [
    {
        fecha: "18/03/2025",
        tipo: "Inscripción",
        area: "Administración",
        texto: "Alta del alumno en SIGI."
    },
    {
        fecha: "18/03/2025",
        tipo: "Documentación presentada",
        area: "Bedelía",
        texto: "Se incorporó documentación inicial al expediente."
    },
    {
        fecha: "20/03/2026",
        tipo: "Pago registrado",
        area: "Administración",
        texto: "Se registró el pago de la cuota correspondiente a marzo de 2026."
    }
],

archivos: [
    {
        nombre: "DNI - Maria Gomez.pdf",
        tipo: "PDF",
        categoria: "DNI",
        fecha: "18/03/2025",
        cargadoPor: "Administración"
    },
    {
        nombre: "Ficha de inscripción.pdf",
        tipo: "PDF",
        categoria: "Ficha de inscripción",
        fecha: "18/03/2025",
        cargadoPor: "Bedelía"
    }
],

estado: "Activo",
    cuotas: true,
    documentos: {
    dni: true,
    partidaNacimiento: true,
    tituloSecundario: false,
    fichaInscripcion: true
},
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


// ======================================
// INICIALIZAR MÓDULO ALUMNOS
// ======================================

function inicializarAlumnos() {

    const buscador = document.getElementById("buscarAlumno");

    if (buscador) {
        buscador.oninput = aplicarFiltros;
    }

    const filtroAnexo = document.getElementById("filtroAnexo");

    if (filtroAnexo) {
        filtroAnexo.onchange = aplicarFiltros;
    }

    const filtroCarrera = document.getElementById("filtroCarrera");

    if (filtroCarrera) {
        filtroCarrera.onchange = aplicarFiltros;
    }

    const filtroEstado = document.getElementById("filtroEstado");

    if (filtroEstado) {
        filtroEstado.onchange = aplicarFiltros;
    }

    renderizarTabla();
    actualizarIndicadores();
    cargarFiltros();
}

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

window.inicializarAlumnos = inicializarAlumnos;