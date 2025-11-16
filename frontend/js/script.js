// ============================================
// EPK WEBSITE - JAVASCRIPT
// ============================================

// Smooth Scroll for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Scroll to Top Button (Optional Enhancement)
function createScrollToTopButton() {
    if (document.querySelector('.scroll-to-top')) return;
    
    const button = document.createElement('button');
    button.className = 'scroll-to-top';
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        padding: 0.75rem 1rem;
        background-color: #c700ff;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        font-size: 1.25rem;
        transition: opacity 0.3s ease, background-color 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            button.style.display = 'flex';
            button.style.alignItems = 'center';
            button.style.justifyContent = 'center';
        } else {
            button.style.display = 'none';
        }
    });
    
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#66fcf1';
        this.style.color = '#0b0c10';
    });
    
    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#c700ff';
        this.style.color = 'white';
    });
}

// Add Animation to Cards on Scroll
function observeCards() {
    const cards = document.querySelectorAll('.card');
    
    if (!('IntersectionObserver' in window)) {
        cards.forEach(card => {
            card.style.opacity = '1';
        });
        return;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
}

// Add CSS Animation Keyframes Dynamically
function addKeyframes() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Handle Email and Phone Links
function setupContactLinks() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Allow default behavior (opens email client)
            console.log('Email link clicked:', this.href);
        });
    });
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Phone link clicked:', this.href);
        });
    });
}

// Track External Link Clicks
function trackExternalLinks() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('External link clicked:', this.href);
            // You can send this data to your backend for analytics
            trackEvent('external_link', {
                url: this.href,
                text: this.textContent,
                timestamp: new Date().toISOString()
            });
        });
    });
}

// Analytics Tracking (Optional)
function trackEvent(eventName, eventData) {
    console.log(`Event: ${eventName}`, eventData);
    
    // Uncomment below to send to backend
    /*
    fetch('/api/analytics', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            event: eventName,
            data: eventData
        })
    }).catch(error => console.error('Analytics error:', error));
    */
}

// Form Submission Handler (if added later)
function setupFormHandler() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted:', new FormData(this));
            // Send form data to backend
            submitForm(this);
        });
    });
}

// Submit Form Data to Backend
function submitForm(formElement) {
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData);
    
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Form submitted successfully:', result);
        alert('Thank you! Your message has been sent.');
        formElement.reset();
    })
    .catch(error => {
        console.error('Form submission error:', error);
        alert('Error submitting form. Please try again.');
    });
}

// Initialize All Functions
function init() {
    addKeyframes();
    createScrollToTopButton();
    observeCards();
    setupContactLinks();
    trackExternalLinks();
    setupFormHandler();
    console.log('EPK Website initialized successfully');
}

// Run on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export functions for external use (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        trackEvent,
        submitForm,
        init
    };
}
