const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const cardsRoute = require('./routes/cards');
app.use('/api', cardsRoute);

mongoose.connect('mongodb://localhost:27017/petDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error(err);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
