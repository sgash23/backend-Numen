const FarmaciaModel = require("../models/farmacia");

const addFarmController = async (req, res) => {
    try {
        const { nom_farm, cod_farm, fono_farm, direccion, abierto} = req.body;
        const newFarm = new FarmaciaModel({nom_farm, cod_farm, fono_farm, direccion, abierto});
        await newFarm.save();
        res.json({message: 'Farmacia Creada Satisfactoriamente'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message + 'No se ha podido crear la Farmacia'})
    }
}

const getFarmController = async (req, res) => {
    try {
        const allFarms = await FarmaciaModel.find();
        res.json(allFarms)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message + 'No se ha podido acceder a las Farmacias'})
    }
}

const getNom_FarmController = async (req, res) => {
    try {
        const { nom_farm }  = req.params;
        const farm = await FarmaciaModel.findOne({nom_farm});
        if(!farm) return res.status(404).json({message: `Farmacia con el nombre '${nom_farm}' no encontrada`})
        res.json(farm)
    } catch (error) {
        console.log(error)
        res.status(404).json({message: error.message + 'No se ha podido acceder al nombre de la Farmacia'})
    }
}

module.exports = { addFarmController, getFarmController, getNom_FarmController};