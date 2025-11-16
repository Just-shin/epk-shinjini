// Contact Controller
const contactMessages = [];

const submitContact = (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // Validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const contactData = {
            id: Date.now(),
            name,
            email,
            phone: phone || 'Not provided',
            subject,
            message,
            timestamp: new Date().toISOString(),
            status: 'new'
        };

        contactMessages.push(contactData);

        console.log('New contact message:', contactData);

        // TODO: Send email notification to admin
        // TODO: Store in database

        res.status(201).json({
            success: true,
            message: 'Your message has been received. We will get back to you soon!',
            data: contactData
        });
    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({ error: 'Error submitting contact form', details: error.message });
    }
};

const getContacts = (req, res) => {
    // TODO: Add authentication middleware
    res.json({
        total: contactMessages.length,
        messages: contactMessages
    });
};

module.exports = {
    submitContact,
    getContacts
};
