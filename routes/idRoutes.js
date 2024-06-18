const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const imageController = require('../controllers/imageController');
const upload = require('../middleware/imageUploadMiddleware.js');


router.get('/:id', clientController.getClient);

router.post('/:id/create', clientController.renderVideo);

router.post('/:id/video', clientController.createVideo);

router.post('/:id/image', upload.array('images', 2), imageController.uploadFiles);

module.exports = router;