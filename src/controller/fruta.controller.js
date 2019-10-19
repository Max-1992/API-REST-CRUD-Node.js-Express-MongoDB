// IMPORTS SERVICES
const frutaService = require('../services/fruta.services');

// IMPORT RESPONSE
const { success, error, notFound } = require('../response');

// Grabar en la Base de Datos
const saveFruta = async(req, res) => {
    try {
        const fruta = req.body;

        if (!fruta.nombre || !fruta.color || !fruta.temporada) {
            const err = `No se han enviado correctamente los parámetros`;
            return notFound(req, res, err, 400);
        };

        const newFruta = await frutaService.add(fruta)
        return success(req, res, { fruta: newFruta }, 201);
    } catch (err) {
        return error(req, res, err, 500)
    }
};


// Listar todos los registros de la Base de Datos
const getAllFrutas = async(req, res) => {
    try {
        const frutas = await frutaService.getAll();
        return success(req, res, frutas, 200);
    } catch (err) {
        return error(req, res, err, 500);
    }
};


// Listar un registro especifico de la Base de Datos
const getFruta = async(req, res) => {
    try {
        const { id } = req.params;
        const fruta = await frutaService.get(id);

        if (!fruta) {
            const err = `No existe registro con el ID: ${id}, por favor revise su petición`;
            return notFound(req, res, err, 404);
        }

        return success(req, res, { fruta }, 200)
    } catch (err) {
        return error(req, res, err, 500)
    }
};


// Actualizar Registro de la Base de Datos
const updateFruta = async(req, res) => {
    try {
        const { id } = req.params;
        const fruta = req.body;
        const updateFruta = await frutaService.update(id, fruta);

        if (!updateFruta) {
            const err = `No se a podido actualizar recurso con el ID: ${id}, el registro no existe `;
            return notFound(req, res, err, 404);
        }

        return success(req, res, { fruta: updateFruta }, 200);
    } catch (err) {
        return error(req, res, err, 500)
    }
}


// Eliminar registro de la Base de Datos
const deleteFruta = async(req, res) => {
    try {
        const { id } = req.params;
        const frutaDeleted = await frutaService.delete(id);

        if (!frutaDeleted) {
            const err = `No se ha podido eliminar el recurso, el registro con ID ${id}, no existe`;
            return notFound(req, res, err, 404);
        }

        return success(req, res, { frutaDeleted }, 200);
    } catch (err) {
        return error(req, res, err, 500);
    }
}


module.exports = {
    saveFruta,
    getAllFrutas,
    getFruta,
    updateFruta,
    deleteFruta
}