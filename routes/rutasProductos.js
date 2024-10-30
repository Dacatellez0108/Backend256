const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// rutas de la crud

router.post('/', productosController.agregarProductos); // metodo agregar 


module.exports = router;