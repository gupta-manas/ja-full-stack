var mongoose = require('mongoose');

var MyBeanSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: true
    },
    Message: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('MyBean', MyBeanSchema);