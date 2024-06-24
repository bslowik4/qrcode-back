const fs = require('fs');
const path = require('path');


const getVideo = (req, res) => {
  const videoPath = path.join(__dirname, '..', 'videos', req.params.id, 'video.mp4');
  fs.stat(videoPath, (err, stats) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return res.status(404).send('Video file not found');
      } else {
        console.error('Error accessing video file:', err);
        return res.status(500).send('Internal server error');
      }
    }

    const fileSize = stats.size;

    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    };

    res.writeHead(200, head);
    fs.createReadStream(videoPath).pipe(res);
  });
};

module.exports = { getVideo };

