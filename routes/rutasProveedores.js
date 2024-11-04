const express = require('express');
const router = express.Router();
const proveedoresController = require('../controllers/proveedoresController');

// rutas de la crud

router.post('/', proveedoresController.agregarProveedores); // metodo agregar 
router.get('/', proveedoresController.buscarProveedores); //metodo buscar 
router.get('/:id', proveedoresController.mostrarProveedores); // metodo mostrar
//router.patch('/:id', proveedoresController.modificarProveedores); metodo patch para modificar
router.put('/:id', proveedoresController.actualizarProveedores); // metodo para actualziar y/o modificar
router.delete('/:id', proveedoresController.eliminarProveedores); // metodo eliminar 

module.exports = router;

