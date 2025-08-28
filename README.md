# Columbia Undergraduate Wealth Management Club Website

A modern, responsive website built for the Columbia Undergraduate Wealth Management Club (CUWMC) featuring a professional design with smooth animations and mobile-first approach.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and hover effects
- **Navigation**: Fixed navbar with smooth scrolling to sections
- **Mobile Menu**: Hamburger menu for mobile devices
- **Contact Form**: Application form for club recruitment
- **Social Media Integration**: LinkedIn and Instagram buttons
- **EB Garamond Font**: Elegant typography as requested

## File Structure

```
cuwmc/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/
    └── imgs/
        ├── logos/
        │   └── crop-cuwmc-pen-white-copy.png
        └── columbia-campusandcityfromnwcb.day_.eileenbarroso.jpg
```

## Setup Instructions

1. **Download/Clone**: Save all files to your web server or local development environment
2. **Assets**: Ensure the image files are in the correct `assets/imgs/` directory structure
3. **Open**: Open `index.html` in a web browser to view the website

## Customization Guide

### Colors
The website uses a sophisticated color palette:
- **Primary**: `#1f2647` (Dark blue for navbar and buttons)
- **Secondary**: `#ffd700` (Gold for accents and highlights)
- **Background**: `#f8f9fa` (Light gray for alternating sections)

### Font
- **Primary Font**: EB Garamond (loaded from Google Fonts)
- **Fallback**: Serif fonts

### Content Updates

#### Navigation Links
Update the navigation menu in `index.html`:
```html
<ul class="nav-menu">
    <li class="nav-item">
        <a href="#about" class="nav-link">About</a>
    </li>
    <!-- Add or modify other navigation items -->
</ul>
```

#### Social Media Links
Update the social media URLs in `index.html`:
```html
<a href="YOUR_LINKEDIN_URL" class="social-btn linkedin">
    <i class="fab fa-linkedin"></i>
</a>
<a href="YOUR_INSTAGRAM_URL" class="social-btn instagram">
    <i class="fab fa-instagram"></i>
</a>
```

#### Executive Board
Update board member information in the Board section:
```html
<div class="board-member">
    <div class="member-photo">
        <!-- Add actual member photos here -->
        <i class="fas fa-user"></i>
    </div>
    <h3>Position Title</h3>
    <p>Member Name</p>
    <p class="member-year">Class of 202X</p>
</div>
```

#### Statistics
Update the statistics in the About section:
```html
<div class="stat">
    <h3>Your Number</h3>
    <p>Your Statistic</p>
</div>
```

### Adding New Sections
To add a new section, follow this template:
```html
<section id="new-section" class="section">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <div class="section-content">
            <!-- Your content here -->
        </div>
    </div>
</section>
```

### Styling Customization
Modify `styles.css` to change:
- Colors
- Spacing
- Typography
- Layout
- Animations

### JavaScript Functionality
The `script.js` file handles:
- Mobile navigation
- Smooth scrolling
- Form validation
- Scroll animations
- Social media link placeholders

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Lazy Loading**: Images load as they come into view
- **Smooth Animations**: CSS transitions and transforms
- **Responsive Images**: Optimized for different screen sizes
- **Minimal JavaScript**: Lightweight and efficient

## Deployment

### Local Development
1. Open `index.html` in a web browser
2. Use a local server for testing (recommended)

### Web Server
1. Upload all files to your web server
2. Ensure the directory structure is maintained
3. Test all functionality on the live server

### GitHub Pages
1. Push code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main` or `master`)

## Maintenance

### Regular Updates
- Update board member information
- Refresh statistics and achievements
- Add new programs or events
- Update social media links

### Content Management
- Keep information current and accurate
- Regularly update photos and graphics
- Monitor form submissions
- Check for broken links

## Support

For technical support or customization questions:
1. Check the HTML, CSS, and JavaScript files for comments
2. Review browser console for any errors
3. Test on different devices and browsers
4. Validate HTML and CSS using online validators

## License

This website template is created for the Columbia Undergraduate Wealth Management Club. Please ensure all content and images are properly licensed for your use.

---

**Built with ❤️ for CUWMC**
