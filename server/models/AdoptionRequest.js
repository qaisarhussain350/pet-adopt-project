const mongoose = require('mongoose');

const adoptionRequestSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    pet: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Pet',
    },
    status: {
        type: String,
        required: true,
        default: 'Pending', // Pending, Approved, Rejected
    },
    message: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const AdoptionRequest = mongoose.model('AdoptionRequest', adoptionRequestSchema);
module.exports = AdoptionRequest;
