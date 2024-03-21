const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new Schema({
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
    // date_added: {
    //     type: Date,
    //     default: Date.now
    // },
});

module.exports = mongoose.model('contact', Contact);

