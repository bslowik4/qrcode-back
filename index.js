const express = require('express');
const app = express();
const port = 3001;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


const idRoutes = require('./routes/idRoutes');
app.use('/edit', idRoutes);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});