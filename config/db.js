const mongoose =require('mongoose');
require('dotenv').config();

// conexion mongo db
const conectarBD =() =>{

mongoose
.connect(process.env.DB_MONGO)
.then(() => console.log('estamos conectados con mongo'))
.catch((err) => console.log(err));
}

module.exports = conectarBD;
