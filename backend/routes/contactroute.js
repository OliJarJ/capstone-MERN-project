const express = require('express');
const{
    createContact,
    getContact,
   

} = require('../controllers/contactcontrollers')
const router = express.Router();

// GET all workouts
router.get('/', getContact) 

// POST a new workout
router.post('/', createContact)


module.exports = router