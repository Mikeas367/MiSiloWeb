const express = require('express');
const router = express.Router();
const siloController = require('../controllers/SiloController.js');

router.get('/', siloController.getAllSilos);
router.get('/:id', siloController.getSiloById);
router.post('/', siloController.createSilo);
router.put('/:id', siloController.updateSilo);
router.delete('/:id', siloController.deleteSilo);

module.exports = router;
