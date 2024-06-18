const uploadFiles = (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send('No files uploaded.');
  }
  const filePaths = req.files.map(file => file.path);
  res.send(`Files uploaded successfully: ${filePaths.join(', ')}`);
};

module.exports = {
  uploadFiles
};

