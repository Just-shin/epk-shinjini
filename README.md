# Shinjini Moitra - Interactive EPK Website

An elegant, modern Electronic Press Kit (EPK) website for Hindustani Classical Vocalist Shinjini Moitra. Built with responsive design, smooth interactions, and a professional backend for booking and contact management.

## Project Structure

```
EPK_Shin/
├── frontend/
│   ├── css/
│   │   └── styles.css           # Custom CSS styles
│   └── js/
│       └── script.js            # Frontend JavaScript
├── backend/
│   ├── server.js                # Express.js server
│   ├── routes/
│   │   ├── contact.js           # Contact form routes
│   │   ├── analytics.js         # Analytics tracking routes
│   │   └── booking.js           # Booking management routes
│   ├── controllers/
│   │   ├── contactController.js # Contact logic
│   │   ├── analyticsController.js # Analytics logic
│   │   └── bookingController.js # Booking logic
│   └── models/                  # Database models (future)
├── HTML/
│   └── index.html               # Main HTML page
├── Images/
│   ├── Stage_1.jpg
│   └── Stage_2.jpg
├── package.json                 # Dependencies
├── .env                         # Environment variables
└── README.md                    # This file
```

## Features

- **Responsive Design**: Mobile-friendly layout with Tailwind CSS
- **Dark Theme**: Modern dark aesthetic with neon accents (cyan and purple)
- **Interactive Elements**: Smooth scroll, fade-in animations, hover effects
- **Media Gallery**: High-resolution performance images
- **Video Integration**: YouTube video embedding with fallback
- **Contact Form**: Direct contact submission with backend handling
- **Booking System**: Event booking requests management
- **Analytics Tracking**: Event tracking for website analytics
- **Social Integration**: Links to YouTube and Instagram

## Tech Stack

### Frontend
- HTML5
- CSS3 (Custom styles)
- JavaScript (Vanilla)
- Tailwind CSS (Framework)
- Font Awesome (Icons)

### Backend
- Node.js
- Express.js
- CORS support
- Environment variable management

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```
   cd EPK_Shin
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Configure environment variables**
   - Copy `.env` file and set values for your environment
   - Default configuration uses localhost:5000

4. **Start the development server**
   ```
   npm run dev
   ```
   Or for production:
   ```
   npm start
   ```

5. **Access the website**
   - Open browser: `http://localhost:5000`

## API Endpoints

### Contact
- **POST** `/api/contact` - Submit contact form
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "subject": "Inquiry",
    "message": "Your message here"
  }
  ```

- **GET** `/api/contact` - Get all contact submissions (admin)

### Booking
- **POST** `/api/booking` - Submit booking request
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "eventType": "Concert",
    "eventDate": "2025-12-15",
    "venue": "Concert Hall",
    "budget": "Amount in INR",
    "notes": "Additional details"
  }
  ```

- **GET** `/api/booking` - Get all bookings (admin)
- **PUT** `/api/booking/:id` - Update booking status

### Analytics
- **POST** `/api/analytics` - Log event
  ```json
  {
    "event": "external_link",
    "data": {
      "url": "https://...",
      "timestamp": "2025-11-16T..."
    }
  }
  ```

- **GET** `/api/analytics/summary` - Get analytics summary

## Development

### Frontend Development
- Edit `/frontend/css/styles.css` for styling
- Edit `/frontend/js/script.js` for interactivity
- HTML is in `/HTML/index.html`

### Backend Development
- Add new routes in `/backend/routes/`
- Add logic in `/backend/controllers/`
- Define models in `/backend/models/` (when using database)

### Adding Features

1. **Email Notifications** (Contact/Booking confirmations)
   - Install nodemailer: `npm install nodemailer`
   - Configure SMTP in `.env`
   - Update controllers to send emails

2. **Database Integration** (PostgreSQL, MongoDB, etc.)
   - Install database driver
   - Create models in `/backend/models/`
   - Update controllers to use database

3. **Authentication** (Admin dashboard)
   - Install: `npm install jsonwebtoken bcryptjs`
   - Create auth middleware
   - Protect admin routes

## File Descriptions

### Frontend Files

**`frontend/css/styles.css`**
- Custom CSS variables for colors
- Component styles (card, button, hero, etc.)
- Responsive breakpoints
- Animation keyframes

**`frontend/js/script.js`**
- Smooth scroll navigation
- Scroll-to-top button
- Card fade-in animations
- Contact link tracking
- External link analytics

### Backend Files

**`backend/server.js`**
- Express server setup
- Middleware configuration
- Route mounting
- Error handling

**`backend/routes/contact.js`**
- Contact form routes

**`backend/routes/booking.js`**
- Booking management routes

**`backend/routes/analytics.js`**
- Analytics event routes

**`backend/controllers/contactController.js`**
- Contact form logic
- Email sending (future)

**`backend/controllers/bookingController.js`**
- Booking creation
- Booking status updates

**`backend/controllers/analyticsController.js`**
- Event logging
- Analytics summary

## Styling

### Color Scheme
- **Primary Dark**: `#0b0c10` (Background)
- **Secondary Dark**: `#1f2833` (Cards)
- **Accent Neon**: `#66fcf1` (Cyan - Highlights)
- **Accent Purple**: `#c700ff` (Purple - Secondary highlights)
- **Light Gray**: `#c5c6c7` (Text)

### Fonts
- **Sans-serif**: Inter (Body text)
- **Serif**: Playfair Display (Headings)

## Deployment

### Deploy to Netlify (Frontend only)
1. Push frontend files to GitHub
2. Connect repo to Netlify
3. Set build command: `npm install`
4. Set publish directory: `/`

### Deploy to Heroku (Full Stack)
1. Initialize git repo: `git init`
2. Create Heroku app: `heroku create epk-shinjini`
3. Deploy: `git push heroku main`
4. View: `heroku open`

### Deploy to Vercel (Frontend)
1. Push to GitHub
2. Import project in Vercel
3. Auto-deploy on push

## Future Enhancements

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Payment integration (for bookings)
- [ ] Blog/News section
- [ ] Video gallery
- [ ] Client testimonials
- [ ] Availability calendar
- [ ] Email subscription
- [ ] Multi-language support

## Troubleshooting

### Images not showing
- Check image paths (relative to current file location)
- Images should be in `/Images/` folder
- Path from `HTML/index.html` should be `../Images/filename.jpg`

### CSS not loading
- Verify `frontend/css/styles.css` path
- Clear browser cache
- Check file permissions

### API errors
- Ensure backend is running (`npm run dev`)
- Check CORS settings in `server.js`
- Verify request headers and body format

### Port already in use
- Change PORT in `.env`
- Or kill process using port 5000: `lsof -ti:5000 | xargs kill -9` (macOS/Linux)

## Support & Contact

- **Email**: moitra.shinjini@gmail.com
- **Phone**: +91 8910449117
- **Location**: Ranikuthi, Kolkata, WB, India
- **YouTube**: @justshin17
- **Instagram**: @existential_meowsis

## License

© 2025 Shinjini Moitra. All rights reserved.

---

**Website Design**: Interactive EPK
**Last Updated**: November 2025
