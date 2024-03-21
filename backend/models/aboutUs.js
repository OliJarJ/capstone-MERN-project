//models/aboutUs.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AboutUsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = AboutUs = mongoose.model('aboutUs', AboutUsSchema);