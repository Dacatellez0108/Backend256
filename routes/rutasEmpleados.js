const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleadosController');

// rutas de la crud

router.post('/', empleadosController.agregarEmpleados); // metodo agregar 
router.get('/', empleadosController.buscarEmpleados); //metodo buscar 
router.get('/:id', empleadosController.mostrarEmpleados); // metodo mostrar
//router.patch('/:id', empleadosController.modificarEmpleados); metodo patch para modificar
router.put('/:id', empleadosController.actualizarEmpleados); // metodo para actualziar y/o modificar
router.delete('/:id', empleadosController.eliminarEmpleados); // metodo eliminar 

module.exports = router;

