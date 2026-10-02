/* ==========================================
   CARGA DE MÓDULOS SIGI
========================================== */

let moduloActual = "";


/* ==========================================
   CARGAR MÓDULO
========================================== */

async function cargarModulo(modulo) {

    const contenido =
        document.getElementById("contenido");

    if (!contenido) return;


    try {

        /* ======================================
           CARGAR HTML DEL MÓDULO
        ====================================== */

        const respuesta =
            await fetch(`pages/${modulo}.html`);


        if (!respuesta.ok) {

            throw new Error(
                `No se pudo cargar pages/${modulo}.html`
            );

        }


        const html =
            await respuesta.text();


        contenido.innerHTML = html;


        /* ======================================
           CARGAR JAVASCRIPT DEL MÓDULO
        ====================================== */

        let script =
            document.getElementById(
                "script-modulo"
            );


        /*
           Si ya existe un script anterior,
           lo eliminamos.
        */

        if (script) {

            script.remove();

        }


        /*
           Creamos el script correspondiente
           al módulo actual.
        */

        script =
            document.createElement("script");


        script.src =
            `js/modules/${modulo}.js`;


        script.id =
            "script-modulo";


        /*
           Cuando el JS terminó de cargar,
           inicializamos el módulo.
        */

        script.onload = function () {

            inicializarModulo(modulo);

        };


        document.body.appendChild(script);


        /* ======================================
           RECORDAR MÓDULO ACTUAL
        ====================================== */

        moduloActual =
            modulo;


        /* ======================================
           ICONOS
        ====================================== */

        if (
            typeof lucide !==
            "undefined"
        ) {

            lucide.createIcons();

        }


    } catch (error) {

        console.error(
            "Error cargando módulo:",
            error
        );


        contenido.innerHTML = `

            <div style="
                padding:30px;
                background:white;
                border-radius:12px;
            ">

                <h2>Error</h2>

                <p>
                    No se pudo cargar el módulo
                    <strong>${modulo}</strong>.
                </p>

            </div>

        `;

    }

}


/* ==========================================
   INICIALIZAR MÓDULO
========================================== */

function inicializarModulo(modulo) {


    /* ======================================
       ALUMNOS
    ====================================== */

    if (
        modulo === "alumnos" &&
        typeof window.inicializarAlumnos ===
        "function"
    ) {

        window.inicializarAlumnos();

    }


    /* ======================================
       INSCRIPCIONES
    ====================================== */

    if (
        modulo === "inscripciones" &&
        typeof window.inicializarInscripciones ===
        "function"
    ) {

        window.inicializarInscripciones();

    }


    /* ======================================
       OTROS MÓDULOS
    ====================================== */

    /*
       Acá iremos agregando:

       cuotas
       legajos
       constancias
       alertas
       reportes
       usuarios
       configuración

       a medida que los desarrollemos.
    */


    if (
        typeof lucide !==
        "undefined"
    ) {

        lucide.createIcons();

    }

}


/* ==========================================
   INICIO DEL SISTEMA
========================================== */

window.onload = function () {

    cargarModulo("inicio");

};