// routes/home.js

const express = require('express');
const router = express.Router();

const About = require('../models/AboutUs');

// GET request to fetch homepage content
router.get('/', (req, res) => {
  About.findOne()
    .then(about => {
      if (!about) {
        return res.status(404).json({ noaboutfound: 'No content found' });
      }
      res.json(about);
    })
    .catch(err => res.status(500).json(err));
});
