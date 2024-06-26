const express = require('express');
const { getVideo } = require('../controllers/videoController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/:id', authMiddleware, getVideo);

module.exports = router;
