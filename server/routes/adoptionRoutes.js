const express = require('express');
const router = express.Router();
const {
    createAdoptionRequest,
    getMyAdoptionRequests,
    getAdoptionRequests,
    updateAdoptionStatus,
} = require('../controllers/adoptionController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').post(protect, createAdoptionRequest).get(protect, admin, getAdoptionRequests);
router.route('/my-requests').get(protect, getMyAdoptionRequests);
router.route('/:id').put(protect, admin, updateAdoptionStatus);

module.exports = router;
