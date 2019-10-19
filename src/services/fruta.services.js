// IMPORT SCHEMA
const Fruta = require('../models/fruta.model');


// Grabar en la Base de Datos
const saveFruta = async(datafruta) => {
    try {
        const fruta = new Fruta(datafruta)
        const newfruta = await fruta.save();
        return newfruta;
    } catch (err) {
        return Promise.reject(err);
    }
};


// Listar todos los registros de la Base de Datos
const getAllFrutas = async() => {
    try {
        const frutas = await Fruta.find({}).sort({ nombre: 1 }).exec();
        return frutas;
    } catch (err) {
        return Promise.reject(err)
    }
};


// Listar un registro especifico de la Base de Datos
const getFruta = async(id) => {
    try {
        const fruta = await Fruta.findById(id);
        return fruta;
    } catch (err) {
        return Promise.reject(err)
    }
};


// Actualizar Registro de la Base de Datos
const updateFruta = async(id, dataFruta) => {
    try {
        const updateFruta = await Fruta.findByIdAndUpdate(id, dataFruta, { new: true });
        return updateFruta;
    } catch (err) {
        return Promise.reject(err)
    }
}


// Eliminar registro de la Base de Datos
const deleteFruta = async(id) => {
    try {
        const frutaDeleted = await Fruta.findByIdAndDelete(id);
        return frutaDeleted;
    } catch (err) {
        return Promise.reject(err);
    }
};


module.exports = {
    add: saveFruta,
    getAll: getAllFrutas,
    get: getFruta,
    update: updateFruta,
    delete: deleteFruta
}