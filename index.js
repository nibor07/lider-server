const express = require('express');
require('dotenv').config();

const conectarDB = require('./config/db');
const cors = require('cors');

// crear el servidor
const app = express();

//Conectar a la base de datos
conectarDB();

//Habilitar Cors
app.use(cors());

app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 4000;

app.use('/api/buscar', require('./routes/ruta'));

// Definir la página main
app.get('/', (req, res) =>{
    res.send('Hola Nibor')
});
// arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
})