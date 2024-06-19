const videoshow = require('videoshow')

const createVideo = (images, id) => {
  videoshow(images)
    .save(`/videos/${id}/video.mp4`)
    .on('start', function (command) {
      console.log('ffmpeg process started:', command)
    })
    .on('error', function (err) {
      console.error('Error:', err)
    })
    .on('end', function (output) {
      console.log('Video created in:', output)
    })
}

module.exports = {
    createVideo
}