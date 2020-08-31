//Ruta para buscar
const { Router } = require('express');
//const express = require('express');
//const router = express.Router();
const { buscarProducto } = require('../controllers/productoController');

const router = Router();

//Busca 
router.post(
    '/',
    buscarProducto
);

module.exports = router;