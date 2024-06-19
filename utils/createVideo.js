const videoshow = require('videoshow');
const fs = require('fs');
const path = require('path');

const createVideo = (images, id) => {
  const outputDirectory = path.join(__dirname, '..', 'videos', id.toString());
  const outputVideoPath = path.join(outputDirectory, 'video.mp4');
  
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }

  videoshow(images)
    .save(outputVideoPath)
    .on('start', function (command) {
      console.log('ffmpeg process started:', command);
    })
    .on('error', function (err) {
      console.error('Error:', err);
    })
    .on('end', function (output) {
      console.log('Video created in:', output);
    });
};

module.exports = {
  createVideo
};
