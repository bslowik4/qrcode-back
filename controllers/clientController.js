const {createVideo} = require('../utils/createVideo');

exports.getClient = (req, res) => {
    const clientId = req.params.id
    res.send(`Details of user with ID: ${clientId}`)
}

exports.renderVideo = (req, res) => {
    const clientId = req.params.id
    res.send(`Details of user with ID: ${clientId}`)
    console.log('../uploads/test1.png')
    createVideo(['./uploads/test1.png','./uploads/test2.png'])
}