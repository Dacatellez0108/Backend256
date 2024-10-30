const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// rutas de la crud

router.post('/', clienteController.agregarClientes); // metodo agregar 
router.get('/', clienteController.buscarClientes); //metodo buscar 
router.get('/:id', clienteController.mostrarClientes); // metodo mostrar
//router.patch('/:id', clienteController.modificarClientes); metodo patch para modificar
router.put('/:id', clienteController.actualizarClientes); // metodo para actualziar y/o modificar
router.delete('/:id', clienteController.eliminarClientes); // metodo eliminar 

module.exports = router;

