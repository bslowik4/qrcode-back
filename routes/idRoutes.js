const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const imageController = require('../controllers/imageController');
const upload = require('../middleware/imageUploadMiddleware.js');
const authMiddleware = require('../middleware/authMiddleware');


router.get('/:id', clientController.getClient);

router.post('/:id/create', authMiddleware, clientController.renderVideo);

router.post('/:id/image', authMiddleware, upload.array('processed_photo', 2), imageController.uploadProcessedPhotos);

module.exports = router;