const express = require('express');
const router = express.Router();

// @desc    Get all available crops
// @route   GET /api/crops
// @access  Private
router.get('/', async (req, res) => {
    try {
        res.json({
            success: true,
            crops: [
                { name: 'Wheat', season: 'Rabi', category: 'Cereal' },
                { name: 'Rice', season: 'Kharif', category: 'Cereal' },
                { name: 'Cotton', season: 'Kharif', category: 'Cash Crop' }
            ]
        });
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;