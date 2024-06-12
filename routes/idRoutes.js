const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const imageController = require('../controllers/imageController');

router.get('/:id', clientController.getClient);

router.post('/image', imageController.upload.single('image'), imageController.uploadFile);

router.get('/:id/create', clientController.renderVideo);

module.exports = router;