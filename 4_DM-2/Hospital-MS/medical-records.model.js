const mongoose = require('mongoose');

const medicalRecordsSchema = new mongoose.Schema({}, {
    timestamps: true
});

module.exports = mongoose.model('MedicalRecord', medicalRecordsSchema);