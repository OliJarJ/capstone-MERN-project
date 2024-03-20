

const mongoose = require('mongoose');

Contact = mongoose.Contact({
    name: {type: String},
    email: {type: String},
    message: {type: String}
});

const Contact = mongoose.model('contact', Contact);

module.exports = router;

