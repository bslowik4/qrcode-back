const videoshow = require('videoshow')

function createVideo(images) {
  
  videoshow(images)
    .save('video.mp4')
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