const fs = require('fs');
const path = require('path');

const getVideo = (req, res) => {
  const videoPath = path.join(__dirname, '../videos', req.params.id, req.params.id + '.mp4');
  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;

  const head = {
    'Content-Length': fileSize,
    'Content-Type': 'video/mp4',
  };

  res.writeHead(200, head);
  fs.createReadStream(videoPath).pipe(res);
};

module.exports = { getVideo };
