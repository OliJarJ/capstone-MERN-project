<<<<<<< HEAD
// routes/aboutroutes.js
=======
// routes/home.js
>>>>>>> 20524742db2dc9c521fdc57aa97c3600fd06bb3c

const express = require('express');
const router = express.Router();

<<<<<<< HEAD
const AboutUs = require('../models/aboutUs');

// GET request to fetch homepage content
router.get('/', (req, res) => {
  Home.findOne()
    .then(aboutUs => {
      if (!aboutUs) {
        return res.status(404).json({ nohomefound: 'No homepage content found' });
      }
      res.json(aboutUs);
=======
const About = require('../models/AboutUs');

// GET request to fetch homepage content
router.get('/', (req, res) => {
  About.findOne()
    .then(about => {
      if (!about) {
        return res.status(404).json({ noaboutfound: 'No content found' });
      }
      res.json(about);
>>>>>>> 20524742db2dc9c521fdc57aa97c3600fd06bb3c
    })
    .catch(err => res.status(500).json(err));
});
