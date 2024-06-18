const uploadProcessedPhotos = (req, res) => {
  if (!req.files || req.files.length === 0) {
      return res.status(400).send('No files uploaded.');
  }
  const uploadedFiles = req.files.map(file => file.path);
  res.send(`Processed photos uploaded successfully: ${uploadedFiles.join(', ')}`);
};

module.exports = {
  uploadProcessedPhotos
};


