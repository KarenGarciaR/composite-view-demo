# composite-view-demo
El patrón de diseño Composite View es un patrón de la capa de presentación que permite construir una vista principal a partir de múltiples sub-vistas reutilizables.
Su objetivo es:

*- Reducir duplicación de código.
*- Mejorar la modularidad.
*- Facilitar el mantenimiento.
*- Permitir reutilización de componentes visuales.

En este proyecto se implementó utilizando:

Node.js
Express
Motor de vistas EJS

---Arquitectura Aplicada--

El sistema sigue una estructura basada en el patrón MVC:
Modelo (Model): Datos simulados dentro de las rutas.
Vista (View): Archivos .ejs.
Controlador (Controller): app.js.

El patrón Composite View se implementa específicamente en la capa de Vistas.

---Implementación del Composite View---

La vista principal se compone de sub-vistas reutilizables mediante la directiva include del motor EJS.

*Ejemplo en dashboard.ejs*

<%- include('partials/header') %>
<%- include('partials/sidebar') %>

<div class="content">
</div>

<%- include('partials/footer') %>

Cada una de estas vistas parciales cumple una función específica:

header.ejs → Encabezado del sistema
sidebar.ejs → Menú de navegación
footer.ejs → Pie de página

La vista final se genera al combinar estos componentes en tiempo de renderizado.

---Estructura del Proyectoo---

composite-view-demo
│
├── app.js
│
├── views
│   ├── dashboard.ejs
│   ├── usuarios.ejs
│   ├── propiedades.ejs
│   ├── configuracion.ejs
│   └── partials
│       ├── header.ejs
│       ├── sidebar.ejs
│       └── footer.ejs
│
└── public
    └── css
        └── styles.css
        
----Funcionamiento del Flujo---

El usuario accede a una ruta (por ejemplo /usuarios).
app.js recibe la petición.
El controlador ejecuta:
res.render('usuarios', { datos });
El archivo usuarios.ejs incluye las vistas parciales.
El motor EJS compone la vista final.
El navegador recibe el HTML completo ya ensamblado.

----Instalacion----

Para ejecutar este proyecto en tu equipo, sigue los siguientes pasos:

1. Clona el repositorio:

git clone [<URL_DEL_REPOSITORIO>](https://github.com/KarenGarciaR/composite-view-demo.git)

2. Ingresa a la carpeta del proyecto:

cd composite-view-demo

3. Instala las dependencias necesarias:

*npm install*

--->Este comando instalará los paquetes requeridos, incluyendo:

*Express
*EJS

----Ejecución del Proyecto-----

Una vez instaladas las dependencias, ejecuta el siguiente comando:

"node app.js"

Si todo funciona correctamente, aparecerá en la terminal:

Servidor corriendo en http://localhost:3000

Luego abre tu navegador y accede a:

http://localhost:3000
y listo:D
