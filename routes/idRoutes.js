const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const imageController = require('../controllers/imageController');
const upload = require('../middleware/imageUploadMiddleware.js');


router.get('/:id', clientController.getClient);

router.post('/:id/create', clientController.renderVideo);

router.post('/:id/image', upload.array('processed_photo', 2), imageController.uploadProcessedPhotos);

module.exports = router;