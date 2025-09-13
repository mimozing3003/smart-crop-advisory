const express = require('express');
const multer = require('multer');
const router = express.Router();

// Configure multer for image uploads
const upload = multer({
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed'));
        }
    }
});

// @desc    Upload and analyze crop image for pest detection
// @route   POST /api/pests/detect
// @access  Private
router.post('/detect', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No image uploaded' });
        }

        // TODO: Implement AI-based pest detection using TensorFlow/PyTorch
        // For now, return mock data
        res.json({
            success: true,
            detection: {
                pestName: 'Aphids',
                confidence: 0.87,
                severity: 'Medium',
                treatment: [
                    {
                        method: 'Neem Oil Spray',
                        dosage: '2ml per liter of water',
                        frequency: 'Every 7 days for 3 weeks'
                    },
                    {
                        method: 'Insecticidal Soap',
                        dosage: '5ml per liter of water',
                        frequency: 'Twice a week'
                    }
                ],
                preventiveMeasures: [
                    'Regular monitoring of crop',
                    'Maintain proper field hygiene',
                    'Use yellow sticky traps'
                ]
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});

// @desc    Get common pests for a specific crop
// @route   GET /api/pests/crop/:cropName
// @access  Private
router.get('/crop/:cropName', async (req, res) => {
    try {
        const { cropName } = req.params;
        
        // TODO: Fetch from database
        res.json({
            success: true,
            pests: [
                {
                    name: 'Bollworm',
                    description: 'Major pest affecting cotton crops',
                    symptoms: ['Holes in leaves', 'Damaged bolls'],
                    treatment: 'Bt spray or chemical pesticides'
                }
            ]
        });
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;