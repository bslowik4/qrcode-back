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

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});