const Empleados = require('../models/Empleados');



//funcion agregar clientes

exports.agregarEmpleados = async (req, res) => {

    try {
        let empleados = new Empleados(req.body);
        await empleados.save();
        res.json(empleados);


    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar un cliente');
    }
}

// funcion buscar clientes 
exports.buscarEmpleados = async (req, res) => {
    try {

        const empleados = await Empleados.find();
        res.json(empleados)
        console.log(empleados);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar un cliente');
    }

}

exports.mostrarEmpleados = async (req, res) => {
    try {
        let empleados = await Empleados.findById(req.params.id);
        if (!empleados) {
            res.status(404).send({ msg: "Cliente no encontrado con ese id" });
        }else{
            res.json(empleados);
        }
    

    } catch (error) {
            console.log(error);
            res.status(500).send('hubo un error al modificar los clientes');
        }
    }
//esta funcion es para actualizar un cliente 

    exports.actualizarEmpleados = async (req, res) => {
        try {
            const empleados = await Empleados.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });


            if (!empleados) {
                res.status(404).send({ msg: "cliente no encontrado con ese id" });
            } else {
                res.json(empleados);

            }
        } catch (error) {
            console.log(error);
            res.status(500).send('hubo un error al modificar los clientes');
        }
    }
// funcion para eliminar cliente 
    exports.eliminarEmpleados = async (req, res) => {
        try {

            const empleados = await Empleados.findById(req.params.id);
            if (!empleados) {
                res.status(404).json({ msg: "cliente no encontrado con ese id" })
            } else {
                await Empleados.findOneAndDelete({ _id: req.params.id });
                res.json({ msg: "El cliente ha  sido eliminado" });
            }

        } catch (error) {
            console.log(error);
            res.status(500).send('hubo un error al eliminar un cliente');
        }
    }

