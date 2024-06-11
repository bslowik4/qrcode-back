const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const imageController = require('../controllers/imageController');

router.get('/:id', clientController.getClient);

router.post('/', imageController.getImage);

module.exports = router;