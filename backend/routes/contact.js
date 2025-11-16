// Contact Route Handler
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// POST - Submit contact form
router.post('/', contactController.submitContact);

// GET - Retrieve contact submissions (admin only - add authentication later)
router.get('/', contactController.getContacts);

module.exports = router;
