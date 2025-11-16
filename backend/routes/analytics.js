// Analytics Route Handler
const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

// POST - Log analytics event
router.post('/', analyticsController.logEvent);

// GET - Get analytics summary
router.get('/summary', analyticsController.getSummary);

module.exports = router;
