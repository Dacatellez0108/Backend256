const Productos = require('../models/Productos');

//funcion agregar clientes

exports.agregarProductos = async (req, res) => {

    try {
        let productos = new Productos(req.body);
        await productos.save();
        res.json(productos);


    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar un producto');
    }
}

// funcion buscar clientes 
exports.buscarProductos = async (req, res) => {
    try {

        const productos = await Productos.find();
        res.json(productos)
        console.log(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar un producto');
    }

}

exports.mostrarProductos = async (req, res) => {
    try {
        let productos = await Productos.findById(req.params.id);
        if (!productos) {
            res.status(404).send({ msg: "Producto no encontrado con ese id" });
        }else{
            res.json(productos);
        }
    

    } catch (error) {
            console.log(error);
            res.status(500).send('hubo un error al modificar los productos');
        }
    }
       
//esta funcion es para actualizar un cliente 

    exports.actualizarProductos = async (req, res) => {
        try {
            const productos = await Productos.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });


            if (!productos) {
                res.status(404).send({ msg: "producto no encontrado con ese id" });
            } else {
                res.json(productos);

            }
        } catch (error) {
            console.log(error);
            res.status(500).send('hubo un error al modificar los productos');
        }
    }
        
// funcion para eliminar cliente 
    exports.eliminarProductos = async (req, res) => {
        try {

            const productos = await Productos.findById(req.params.id);
            if (!productos) {
                res.status(404).json({ msg: "producto no encontrado con ese id" })
            } else {
                await Productos.findOneAndDelete({ _id: req.params.id });
                res.json({ msg: "El producto ha  sido eliminado" });
            }

        } catch (error) {
            console.log(error);
            res.status(500).send('hubo un error al eliminar un Producto');
        }
    }

