const express = require('express');
const { addFarmController, getFarmController, getNom_FarmController } = require('../controller/farmController');
const router = express.Router();

router.post('/farmacia', addFarmController)
router.get('/farmacia', getFarmController)
router.get('/farmacia/:farm', getNom_FarmController)

module.exports = router;