const express = require('express');
const router = express.Router();
const tipoSiloController = require('../controllers/tiposiloController.js');

router.get('/', tipoSiloController.getAllTiposSilo);
router.get('/:id', tipoSiloController.getTipoSiloById);
router.post('/', tipoSiloController.createTipoSilo);
router.put('/:id', tipoSiloController.updateTipoSilo);
router.delete('/:id', tipoSiloController.deleteTipoSilo);

module.exports = router;
