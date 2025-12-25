const AdoptionRequest = require('../models/AdoptionRequest');
const Pet = require('../models/Pet');

// @desc    Create a new adoption request
// @route   POST /api/adoptions
// @access  Private
const createAdoptionRequest = async (req, res) => {
    const { petId, message } = req.body;

    const pet = await Pet.findById(petId);

    if (!pet) {
        return res.status(404).json({ message: 'Pet not found' });
    }

    if (pet.isAdopted) {
        return res.status(400).json({ message: 'Pet is already adopted' });
    }

    // Check if user already requested this pet
    const existingRequest = await AdoptionRequest.findOne({
        user: req.user.id,
        pet: petId,
    });

    if (existingRequest) {
        return res.status(400).json({ message: 'You have already requested to adopt this pet' });
    }

    const adoptionRequest = await AdoptionRequest.create({
        user: req.user.id,
        pet: petId,
        message,
        status: 'Pending',
    });

    res.status(201).json(adoptionRequest);
};

// @desc    Get logged in user's requests
// @route   GET /api/adoptions/my-requests
// @access  Private
const getMyAdoptionRequests = async (req, res) => {
    const requests = await AdoptionRequest.find({ user: req.user.id }).populate('pet');
    res.json(requests);
};

// @desc    Get all adoption requests (Admin only)
// @route   GET /api/adoptions
// @access  Private/Admin
const getAdoptionRequests = async (req, res) => {
    const requests = await AdoptionRequest.find({}).populate('user', 'name email').populate('pet', 'name');
    res.json(requests);
};

// @desc    Update adoption request status
// @route   PUT /api/adoptions/:id
// @access  Private/Admin
const updateAdoptionStatus = async (req, res) => {
    const request = await AdoptionRequest.findById(req.params.id);

    if (!request) {
        return res.status(404).json({ message: 'Request not found' });
    }

    request.status = req.body.status || request.status;
    const updatedRequest = await request.save();

    // If approved, mark pet as adopted
    if (updatedRequest.status === 'Approved') {
        const pet = await Pet.findById(request.pet);
        if (pet) {
            pet.isAdopted = true;
            await pet.save();
        }
    }

    res.json(updatedRequest);
};

module.exports = {
    createAdoptionRequest,
    getMyAdoptionRequests,
    getAdoptionRequests,
    updateAdoptionStatus,
};
