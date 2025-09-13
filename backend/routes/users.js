const express = require('express');
const router = express.Router();

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
router.get('/profile', async (req, res) => {
    try {
        // TODO: Get user from token
        res.json({
            success: true,
            user: {
                id: '1',
                name: 'Sample Farmer',
                phone: '+91-9876543210',
                location: 'Punjab',
                farmSize: '5 acres',
                crops: ['Wheat', 'Rice']
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;