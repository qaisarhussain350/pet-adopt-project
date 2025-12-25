const Pet = require('../models/Pet');

// @desc    Get all pets
// @route   GET /api/pets
// @access  Public
const getPets = async (req, res) => {
    const pets = await Pet.find({ isAdopted: false });
    res.json(pets);
};

// @desc    Get single pet
// @route   GET /api/pets/:id
// @access  Public
const getPetById = async (req, res) => {
    const pet = await Pet.findById(req.params.id);

    if (pet) {
        res.json(pet);
    } else {
        res.status(404).json({ message: 'Pet not found' });
    }
};

// @desc    Create a pet
// @route   POST /api/pets
// @access  Private/Admin
const createPet = async (req, res) => {
    const { name, type, breed, age, description, imageUrl, price, likes, dislikes, games } = req.body;

    const pet = new Pet({
        name,
        type,
        breed,
        age,
        description,
        imageUrl,
        price,
        likes,
        dislikes,
        games,
        user: req.user._id,
    });

    const createdPet = await pet.save();
    res.status(201).json(createdPet);
};

// @desc    Update a pet
// @route   PUT /api/pets/:id
// @access  Private/Admin
const updatePet = async (req, res) => {
    const { name, type, breed, age, description, imageUrl, price, likes, dislikes, games } = req.body;

    const pet = await Pet.findById(req.params.id);

    if (pet) {
        pet.name = name;
        pet.type = type;
        pet.breed = breed;
        pet.age = age;
        pet.description = description;
        pet.imageUrl = imageUrl;
        pet.price = price;
        pet.likes = likes;
        pet.dislikes = dislikes;
        pet.games = games;

        const updatedPet = await pet.save();
        res.json(updatedPet);
    } else {
        res.status(404).json({ message: 'Pet not found' });
    }
};

// @desc    Delete a pet
// @route   DELETE /api/pets/:id
// @access  Private/Admin
const deletePet = async (req, res) => {
    const pet = await Pet.findById(req.params.id);

    if (pet) {
        await pet.deleteOne();
        res.json({ message: 'Pet removed' });
    } else {
        res.status(404).json({ message: 'Pet not found' });
    }
};

module.exports = {
    getPets,
    getPetById,
    createPet,
    updatePet,
    deletePet,
};
