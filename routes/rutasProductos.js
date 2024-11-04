const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// rutas de la crud

router.post('/', productosController.agregarProductos); // metodo agregar 
router.get('/', productosController.buscarProductos); //metodo buscar 
router.get('/:id', productosController.mostrarProductos); // metodo mostrar
//router.patch('/:id', productosController.modificarProductos); metodo patch para modificar
router.put('/:id', productosController.actualizarProductos); // metodo para actualziar y/o modificar
router.delete('/:id', productosController.eliminarProductos); // metodo eliminar 


module.exports = router;