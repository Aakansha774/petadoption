const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  petDescription: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model('Pet', petSchema);
