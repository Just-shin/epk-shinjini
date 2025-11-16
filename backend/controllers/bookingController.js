// Booking Controller
const bookings = [];

const submitBooking = (req, res) => {
    try {
        const { name, email, phone, eventType, eventDate, venue, budget, notes } = req.body;

        // Validation
        if (!name || !email || !eventType || !eventDate) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const bookingData = {
            id: Date.now(),
            name,
            email,
            phone: phone || 'Not provided',
            eventType,
            eventDate,
            venue: venue || 'To be determined',
            budget: budget || 'Not specified',
            notes: notes || '',
            timestamp: new Date().toISOString(),
            status: 'pending'
        };

        bookings.push(bookingData);

        console.log('New booking request:', bookingData);

        // TODO: Send confirmation email
        // TODO: Store in database
        // TODO: Notify admin

        res.status(201).json({
            success: true,
            message: 'Your booking request has been received. We will contact you shortly!',
            data: bookingData
        });
    } catch (error) {
        console.error('Booking submission error:', error);
        res.status(500).json({ error: 'Error submitting booking request', details: error.message });
    }
};

const getBookings = (req, res) => {
    // TODO: Add authentication middleware
    res.json({
        total: bookings.length,
        bookings: bookings
    });
};

const updateBooking = (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const booking = bookings.find(b => b.id == id);

        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }

        booking.status = status;
        booking.updatedAt = new Date().toISOString();

        console.log(`Booking ${id} updated to status: ${status}`);

        res.json({
            success: true,
            message: 'Booking updated successfully',
            data: booking
        });
    } catch (error) {
        console.error('Booking update error:', error);
        res.status(500).json({ error: 'Error updating booking', details: error.message });
    }
};

module.exports = {
    submitBooking,
    getBookings,
    updateBooking
};
