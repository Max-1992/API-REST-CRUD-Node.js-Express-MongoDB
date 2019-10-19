// ROUTER CONFIG
const { Router } = require('express');
const router = Router();


// IMPORTS CONTROLLRS
const controller = require('../../controller/fruta.controller');

router.get('/', controller.getAllFrutas);
router.get('/:id', controller.getFruta);
router.post('/', controller.saveFruta);
router.put('/:id', controller.updateFruta);
router.delete('/:id', controller.deleteFruta);


module.exports = router;