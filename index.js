const express = require('express');
require('dotenv').config();

//Configuracion BD
const conectarDB = require('./config/db');

//Para CORS
const cors = require('cors');

// crear el servidor
const app = express();

const port = process.env.SERVER_PORT || 4000;

//Habilitar Cors
app.use(cors());

// Directorio Público
app.use( express.static('public') );

// Lectura y parseo del body
app.use( express.json() );

app.use('/api/buscar', require('./routes/auths'));

//Conectar a la base de datos
conectarDB();

// Definir la página main
app.get('/', (req, res) =>{
    res.send('Hola Nibor')
});
// arrancar la app
//app.listen( port, '0.0.0.0', () => {
app.listen( port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})