const express = require('express');
const path = require('path');
const app = express();

// Configuración del motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// ===============================
// RUTA DASHBOARD
// ===============================
app.get('/', (req, res) => {
    res.render('dashboard', { active: 'dashboard' });
});

// ===============================
// RUTA USUARIOS
// ===============================
app.get('/usuarios', (req, res) => {

    const usuarios = [
        { nombre: "Karen", rol: "Administradora", estado: "Activo" },
        { nombre: "Ana", rol: "Roomie", estado: "Inactivo" },
        { nombre: "Luis", rol: "Anfitrión", estado: "Activo" }
    ];

    res.render('usuarios', { 
        usuarios,
        active: 'usuarios'
    });
});

// ===============================
// RUTA PROPIEDADES
// ===============================
app.get('/propiedades', (req, res) => {

    const propiedades = [
        { nombre: "Depto Centro", ubicacion: "Centro Histórico", precio: "$3500" },
        { nombre: "Cuarto Universitario", ubicacion: "Zona UAC", precio: "$2500" }
    ];

    res.render('propiedades', { 
        propiedades,
        active: 'propiedades'
    });
});

// ===============================
// RUTA CONFIGURACIÓN
// ===============================
app.get('/configuracion', (req, res) => {
    res.render('configuracion', { 
        active: 'configuracion'
    });
});

// ===============================
// INICIAR SERVIDOR
// ===============================
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});