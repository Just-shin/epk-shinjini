// Booking Route Handler
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// POST - Submit booking request
router.post('/', bookingController.submitBooking);

// GET - Retrieve booking requests (admin only)
router.get('/', bookingController.getBookings);

// PUT - Update booking status
router.put('/:id', bookingController.updateBooking);

module.exports = router;
