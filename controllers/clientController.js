exports.getClient = (req, res) => {
    const clientId = req.params.id
    res.send(`Details of user with ID: ${clientId}`)
}