# MaxFace Dental Care - Dr. Yoshita Mazumder

A professional dental care website for MaxFace Dental Care, providing comprehensive information about dental services, treatments, and patient care.

## 🦷 About

MaxFace Dental Care is a modern, responsive dental clinic website featuring information about dental treatments, services, and facilitating patient communication. The website is designed to provide an informative and user-friendly experience for patients seeking dental care services.

## 📋 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean and professional interface built with WordPress and Elementor
- **Contact Forms**: Integrated contact forms for patient inquiries and appointment requests
- **Service Information**: Detailed information about dental treatments and procedures
- **Interactive Elements**: Smooth animations and transitions using GSAP and ScrollTrigger
- **Certificate Management**: Secure SSL certificates for HTTPS support
- **WordPress Integration**: Built on WordPress CMS with Elementor page builder

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Bootstrap 4
- **JavaScript** - Interactive features and animations
- **Font Awesome** - Icon library
- **Google Fonts (Sora)** - Typography

### WordPress & Plugins
- **WordPress CMS** - Content management system
- **Elementor** - Page builder (v3.33.4)
- **ElementsKit** - Additional Elementor widgets
- **Contact Form 7** - Form handling (v6.1.4)

### JavaScript Libraries
- **GSAP** (GreenSock Animation Platform) - Animations
- **ScrollTrigger** - Scroll-based animations
- **SplitText** - Text animation effects
- **Three.js** - 3D graphics and effects
- **jQuery** - DOM manipulation
- **Imagesloaded** - Image loading detection
- **Magic Cursor** - Custom cursor effects
- **Smooth Scroll** - Enhanced scrolling experience

### Security
- **SSL/TLS Certificates** - HTTPS encryption
- Certificate files stored in `/certificates/`

## 📁 Project Structure

```
maxfacedentalbd.com/
├── assets/                    # Static assets
│   ├── css/                  # Stylesheets
│   ├── js/                   # JavaScript files
│   ├── fonts/                # Custom fonts
│   └── images/               # Image assets
├── certificates/             # SSL certificates
│   ├── maxfacedentalbd.cert # SSL certificate
│   └── maxfacedentalbd.key  # Private key
├── denture/                  # WordPress installation
│   ├── wp-content/          # WordPress content
│   │   ├── plugins/         # WordPress plugins
│   │   ├── themes/          # WordPress themes
│   │   └── uploads/         # Media uploads
│   ├── wp-includes/         # WordPress core files
│   └── wp-json/             # REST API endpoints
├── contact-us_files/         # Contact page assets
├── index.html               # Homepage (455KB)
├── contact-us.html          # Contact page (122KB)
└── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Web server (Apache/Nginx)
- PHP 7.4 or higher
- MySQL 5.7+ or MariaDB 10.3+
- SSL certificates configured
- WordPress 6.x

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd maxfacedentalbd.com
   ```

2. **Configure Web Server**
   - Point your web server document root to the project directory
   - Ensure proper file permissions (644 for files, 755 for directories)
   - Configure SSL certificates from the `certificates/` directory

3. **SSL Certificate Setup**
   ```bash
   # The certificates are located in:
   # - certificates/maxfacedentalbd.cert
   # - certificates/maxfacedentalbd.key

   # Configure your web server to use these certificates
   # Example for Apache:
   # SSLCertificateFile /path/to/certificates/maxfacedentalbd.cert
   # SSLCertificateKeyFile /path/to/certificates/maxfacedentalbd.key
   ```

4. **WordPress Configuration** (if using WordPress backend)
   - Import the WordPress database
   - Update `wp-config.php` with database credentials
   - Configure WordPress admin panel
   - Activate required plugins

5. **File Permissions**
   ```bash
   # Set correct permissions
   find . -type f -exec chmod 644 {} \;
   find . -type d -exec chmod 755 {} \;
   chmod 600 certificates/*.key
   ```

## 🌐 Pages

- **Home** (`index.html`) - Main landing page with services overview
- **Contact Us** (`contact-us.html`) - Contact form and location information

## 🎨 Customization

### Styling
- Main styles are in `/assets/css/`
- WordPress theme styles in `/denture/wp-content/themes/denture/`
- Custom CSS can be added through Elementor or theme customizer

### JavaScript
- Custom scripts in `/assets/js/`
- Theme functions in `/denture/wp-content/themes/denture/assets/js/function.js`

### Content Management
- Use WordPress admin panel for content updates
- Elementor visual editor for page layouts
- Contact Form 7 for form management

## 📱 Responsive Breakpoints

The site uses Bootstrap's responsive grid system:
- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: 768px - 1200px
- **Large Desktop**: > 1200px

## 🔒 Security Notes

- SSL certificates are included for HTTPS
- Keep WordPress and plugins updated regularly
- Private keys are stored securely in `certificates/` directory
- **Important**: Never commit private keys to public repositories
- Use environment variables for sensitive configuration

## 🧪 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Dependencies

Key frontend dependencies:
- Bootstrap 4.x
- jQuery 3.x
- GSAP 3.x
- Font Awesome 6.x
- Elementor 3.33.4
- Contact Form 7 6.1.4

## 🤝 Contributing

If you're working on this project:

1. Create a feature branch
2. Make your changes
3. Test thoroughly across browsers
4. Submit for review

## 📄 License

This project is proprietary software for MaxFace Dental Care.

## 👨‍⚕️ Contact

**Dr. Yoshita Mazumder**
MaxFace Dental Care

For technical support or inquiries, please use the contact form on the website.

## 🔧 Maintenance

### Regular Tasks
- Update WordPress core and plugins monthly
- Backup database and files weekly
- Monitor SSL certificate expiration
- Check for broken links and images
- Review and respond to contact form submissions

### Performance Optimization
- Optimize images before upload
- Enable caching (WordPress plugins available)
- Minify CSS/JS files in production
- Use CDN for static assets if needed

## 📈 Development Notes

- Total project size: ~108MB
- Main page size: 455KB
- Contact page size: 122KB
- Uses WordPress REST API endpoints
- Theme: Denture by Awaiken Themes

---

**Last Updated**: February 2024
**Version**: 1.0.0
