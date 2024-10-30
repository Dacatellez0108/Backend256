const mongoose = require ('mongoose');

const productosSchema = mongoose.Schema({

  
    nombre:{
        type: String,
        required: true
    },
    cantidad:{
        type: Number,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    
    categoria:{
        type: String,
        required: true
    },
},{versionkey:false});
module.exports = mongoose.model('Productos', productosSchema );