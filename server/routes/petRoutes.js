const express = require('express');
const router = express.Router();
const {
    getPets,
    getPetById,
    createPet,
    updatePet,
    deletePet,
} = require('../controllers/petController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(getPets).post(protect, admin, createPet);
router.route('/:id').get(getPetById).put(protect, admin, updatePet).delete(protect, admin, deletePet);

module.exports = router;
