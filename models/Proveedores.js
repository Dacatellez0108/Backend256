const mongoose = require ('mongoose');

const ProveedoresSchema = mongoose.Schema({


    nombres:{
        type: String,
        required: true
    },
    ciudad:{
        type: String,
        required: true
    },
    documento:{
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
    direccion:{
        type: String,
        required: true
    },
},{versionkey:false});
module.exports = mongoose.model('Proveedores', ProveedoresSchema );