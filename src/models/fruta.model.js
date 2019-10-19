// IMPORT
const { Schema, model } = require('mongoose');

// SCHEMA DEFINITION
const FrutaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, `El nombre es requerido`]
    },
    color: {
        type: String,
        required: [true, `El color es requerido`]
    },
    temporada: {
        type: Boolean,
        required: [true, `La temporada es requerida`]
    }
});


module.exports = model('Fruta', FrutaSchema);