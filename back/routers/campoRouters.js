const express = require('express');
const router = express.Router();
const campoController = require('../controllers/CampoController.js');

router.get('/', campoController.getAllCampos);
router.get('/:id', campoController.getCampoById);
router.post('/', campoController.createCampo);
router.put('/:id', campoController.updateCampo);
router.delete('/:id', campoController.deleteCampo);

module.exports = router;
