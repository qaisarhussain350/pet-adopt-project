const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String, // e.g., Dog, Cat, Mouse
        required: true,
    },
    breed: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    likes: [{ type: String }],
    dislikes: [{ type: String }],
    games: [{ type: String }],
    imageUrl: {
        type: String,
        required: true, // URL to image
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    isAdopted: {
        type: Boolean,
        required: true,
        default: false,
    },
}, {
    timestamps: true,
});

const Pet = mongoose.model('Pet', petSchema);
module.exports = Pet;
