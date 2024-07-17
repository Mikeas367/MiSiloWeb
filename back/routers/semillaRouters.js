const express = require('express');
const router = express.Router();
const semillaController = require('../controllers/SemillaController.js');

router.get('/', semillaController.getAllSemillas);
router.get('/:id', semillaController.getSemillaById);
router.post('/', semillaController.createSemilla);
router.put('/:id', semillaController.updateSemilla);
router.delete('/:id', semillaController.deleteSemilla);

module.exports = router;
