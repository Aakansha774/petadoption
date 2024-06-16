// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database connection
mongoose.connect('mongodb://localhost:27017/petcare', {
  useNewUrlParser: true, // No longer needed
  useUnifiedTopology: true, // No longer needed
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Schema and model
const petSchema = new mongoose.Schema({
  petDescription: String,
  location: String,
  dateFound: String,
  contactName: String,
  contactEmail: String,
  contactPhone: String,
  image: String,
});

const Pet = mongoose.model('Pet', petSchema);

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Routes
app.post('/report', upload.single('image'), async (req, res) => {
  try {
    const newPet = new Pet({
      petDescription: req.body.petDescription,
      location: req.body.location,
      dateFound: req.body.dateFound,
      contactName: req.body.contactName,
      contactEmail: req.body.contactEmail,
      contactPhone: req.body.contactPhone,
      image: req.file ? `/uploads/${req.file.filename}` : '',
    });

    await newPet.save();
    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ message: 'Error reporting pet', error });
  }
});

app.get('/pets', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pets', error });
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
