<<<<<<< HEAD
//models/shop.js
=======
const mongoose = require('mongoose')

const Schema = mongoose.Schema

//the schema defines the structure of the model
//create a filter for the pets and products
const Shop = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('shop', Shop)

>>>>>>> 20524742db2dc9c521fdc57aa97c3600fd06bb3c
