const mongoose = require ('mongoose');

const EmpleadosSchema = mongoose.Schema({

    nombres:{
        type: String,
        required: true
    },
    cargo:{
        type: String,
        required: true
    },
    salario:{
        type: Number,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    },
    fecha_ingreso:{
        type: Date,
        required: true
    },
},{versionkey:false});
module.exports = mongoose.model('Empleados', EmpleadosSchema );