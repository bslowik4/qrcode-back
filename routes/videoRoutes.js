const express = require('express');
const { getVideo } = require('../controllers/videoController');

const router = express.Router();

router.get('/:id', getVideo);

module.exports = router;
