// models/AboutUs.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AboutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = About = mongoose.model('about', AboutSchema);