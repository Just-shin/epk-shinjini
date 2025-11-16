// Analytics Controller
const analyticsEvents = [];

const logEvent = (req, res) => {
    try {
        const { event, data } = req.body;

        if (!event) {
            return res.status(400).json({ error: 'Event name is required' });
        }

        const eventData = {
            id: Date.now(),
            event,
            data: data || {},
            timestamp: new Date().toISOString(),
            userAgent: req.headers['user-agent']
        };

        analyticsEvents.push(eventData);

        console.log('Analytics event logged:', event);

        // TODO: Store in database
        // TODO: Send to analytics service (Google Analytics, Mixpanel, etc.)

        res.status(200).json({
            success: true,
            message: 'Event logged successfully'
        });
    } catch (error) {
        console.error('Analytics logging error:', error);
        res.status(500).json({ error: 'Error logging event', details: error.message });
    }
};

const getSummary = (req, res) => {
    // TODO: Add authentication middleware
    const summary = {
        totalEvents: analyticsEvents.length,
        eventTypes: [...new Set(analyticsEvents.map(e => e.event))],
        recentEvents: analyticsEvents.slice(-10)
    };

    res.json(summary);
};

module.exports = {
    logEvent,
    getSummary
};
