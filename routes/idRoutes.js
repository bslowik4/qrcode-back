const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const imageController = require('../controllers/imageController');
const upload = require('../middlewares/imageUploadMiddleare.js');


router.get('/:id', clientController.getClient);

router.post('/:id/image', upload.array('images', 2), uploadController.uploadFiles);

router.post('/:id/create', clientController.renderVideo);

router.post('/:id/video', clientController.createVideo);

module.exports = router;