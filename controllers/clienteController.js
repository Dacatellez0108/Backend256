const Cliente = require('../models/Cliente');


//funcion agregar clientes

exports.agregarClientes = async (req, res) => {

    try {
        let clientes = new Cliente(req.body);
        await clientes.save();
        res.json(clientes);


    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar un cliente');
    }
}

// funcion buscar clientes 
exports.buscarClientes = async (req, res) => {
    try {

        const clientes = await Cliente.find();
        res.json(clientes)
        console.log(clientes);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar un cliente');
    }

}

exports.mostrarClientes = async (req, res) => {
    try {
        let clientes = await Cliente.findById(req.params.id);
        if (!clientes) {
            res.status(404).send({ msg: "Cliente no encontrado con ese id" });
        }else{
            res.json(clientes);
        }
    

    } catch (error) {
            console.log(error);
            res.status(500).send('hubo un error al modificar los clientes');
        }
    }
//esta funcion es para actualizar un cliente 

    exports.actualizarClientes = async (req, res) => {
        try {
            const clientes = await Cliente.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });


            if (!clientes) {
                res.status(404).send({ msg: "cliente no encontrado con ese id" });
            } else {
                res.json(clientes);

            }
        } catch (error) {
            console.log(error);
            res.status(500).send('hubo un error al modificar los clientes');
        }
    }
// funcion para eliminar cliente 
    exports.eliminarClientes = async (req, res) => {
        try {

            const clientes = await Cliente.findById(req.params.id);
            if (!clientes) {
                res.status(404).json({ msg: "cliente no encontrado con ese id" })
            } else {
                await Cliente.findOneAndDelete({ _id: req.params.id });
                res.json({ msg: "El cliente ha  sido eliminado" });
            }

        } catch (error) {
            console.log(error);
            res.status(500).send('hubo un error al eliminar un cliente');
        }
    }

