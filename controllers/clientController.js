const {createVideo} = require('../utils/createVideo');
const loadAllFilesWithId = require('../utils/loadAllFilesWithId');


exports.getClient = (req, res) => {
    const clientId = req.params.id
    res.send(`Details of user with ID: ${clientId}`)
}

exports.renderVideo = async (req, res) => {
    const clientId = req.params.id
    res.send(`Details of user with ID: ${clientId}`)
    const clientPhotos = await loadAllFilesWithId(clientId)
    console.log(clientPhotos)
    await createVideo(clientPhotos, clientId)
}