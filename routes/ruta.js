//Ruta para buscar
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

//Busca 
router.post('/',
    productoController.buscarProducto
);

module.exports = router;