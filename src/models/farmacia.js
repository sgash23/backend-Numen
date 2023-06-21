const { Schema, mongoose } = require("mongoose");

const FarmaciaSchema = new Schema({
    nom_farm: {
        type: String,
        unique: true
    },
    cod_farm: {
        type: Number,
        required: [true, 'El codigo es obligatorio'],
    },
    fono_farm: {
        type: Number,
        unique: true
    },
    direccion: {
        type: String,
        unique: true
    },
    abierto: {
        type: Boolean,
        defaul: true
    }
});

const FarmaciaModel = mongoose.model('Farmacia', FarmaciaSchema);
module.exports = FarmaciaModel;