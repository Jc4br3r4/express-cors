// Requires 
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
// Inicializar variables
var app = express();


// Cors
app.use(cors({ origin: ["http://localhost:4200", "http://localhost"] }));
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "POST, GET , PUT , DELETE");
//     next();
// });

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Importar rutas

var appRoute = require('./routes/app');
var usuarioRoute = require('./routes/usuario');
var loginRoute = require('./routes/login');
var hospitalRoute = require('./routes/hospital');
var medicoRoute = require('./routes/medico');
var busquedaRoute = require('./routes/busqueda');
var uploadRoute = require('./routes/upload');
var imagenesRoute = require('./routes/imagenes');

// Conexion a la base de datos

var uri = "mongodb://localhost:27017/Hospitales";
mongoose.connection.openUri(uri, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
});


// Rutas

app.use('/', appRoute);

app.use('/usuarios', usuarioRoute);
app.use('/login', loginRoute);
app.use('/hospitales', hospitalRoute);
app.use('/medicos', medicoRoute);
app.use('/busqueda', busquedaRoute);
app.use('/upload', uploadRoute);
app.use('/imagenes', imagenesRoute);


// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});
