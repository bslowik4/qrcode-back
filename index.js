const express = require('express');
const app = express();
const port = 3001;
const path = require('path');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const idRoutes = require('./routes/idRoutes');
app.use('/edit', idRoutes);

const videoRoutes = require('./routes/videoRoutes');
app.use('/video', videoRoutes);

const { generateQRCode } = require('./controllers/qrcodeController');
app.get('/qrcode/:id', (req, res) => {
  const url = `http://localhost:3001/video/${req.params.id}`; // Replace with your desired URL
  const qrSvg = generateQRCode(url);
  
  res.type('svg');
  res.send(qrSvg);
});



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});