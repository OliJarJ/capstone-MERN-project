// models/Contact.js

const mongoose = require('mongoose');

//creating mongoose schema
// const Schema = mongoose.Schema;

const Contact = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },

});

module.exports = mongoose.model('contact', Contact);

