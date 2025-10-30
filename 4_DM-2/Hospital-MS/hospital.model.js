const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    completeAddress: {
        type: String,
        required: true
    },
    specializedIn: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Hospital', hospitalSchema);