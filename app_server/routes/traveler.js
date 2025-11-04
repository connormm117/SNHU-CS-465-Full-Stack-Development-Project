const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/traveler');

router.get('/', ctrl.index);
router.get('/trips', ctrl.listTrips);

module.exports = router;
