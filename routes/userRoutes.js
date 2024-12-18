const express = require('express');
const { getUserProfile, getAllUsers, updateUserProfile, deleteUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/profile', protect, getUserProfile);
router.get('/', protect, getAllUsers);
router.put('/profile', protect, updateUserProfile);
router.delete('/profile', protect, deleteUser);

module.exports = router;
