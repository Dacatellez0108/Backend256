const Proveedores = require('../models/Proveedores');


//funcion agregar clientes

exports.agregarProveedores= async (req, res) => {

    try {
        let proveedores = new Proveedores(req.body);
        await proveedores.save();
        res.json(proveedores);


    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar un proveedor');
    }
}

// funcion buscar clientes 
exports.buscarProveedores = async (req, res) => {
    try {

        const proveedores = await Proveedores.find();
        res.json(proveedores)
        console.log(proveedores);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar un Proveedor');
    }

}

exports.mostrarProveedores = async (req, res) => {
    try {
        let proveedores = await Proveedores.findById(req.params.id);
        if (!proveedores) {
            res.status(404).send({ msg: "Proveedor no encontrado con ese id" });
        }else{
            res.json(proveedores);
        }
    

    } catch (error) {
            console.log(error);
            res.status(500).send('hubo un error al modificar los proveedores');
        }
    }
//esta funcion es para actualizar un cliente 

    exports.actualizarProveedores = async (req, res) => {
        try {
            const proveedores = await Proveedores.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });


            if (!proveedores) {
                res.status(404).send({ msg: "Proveedor no encontrado con ese id" });
            } else {
                res.json(proveedores);

            }
        } catch (error) {
            console.log(error);
            res.status(500).send('hubo un error al modificar los clientes');
        }
    }
// funcion para eliminar cliente 
    exports.eliminarProveedores = async (req, res) => {
        try {

            const proveedores = await Proveedores.findById(req.params.id);
            if (!proveedores) {
                res.status(404).json({ msg: "Proveedor no encontrado con ese id" })
            } else {
                await Proveedores.findOneAndDelete({ _id: req.params.id });
                res.json({ msg: "El cliente ha  sido eliminado" });
            }

        } catch (error) {
            console.log(error);
            res.status(500).send('hubo un error al eliminar un proveedor');
        }
    }

