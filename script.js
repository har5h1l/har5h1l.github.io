// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav ul li a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Animation for elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.featured-card, .project-card, .article-card, .preview-text, .preview-image, .research-item, .contact-form, .contact-info-section');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize animation
    document.querySelectorAll('.featured-card, .project-card, .article-card, .preview-text, .preview-image, .research-item, .contact-form, .contact-info-section').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    // Trigger animation on initial load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Hero section animation
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const heroVisual = document.querySelector('.hero-visual');
        if (heroVisual) {
            heroSection.addEventListener('mousemove', (e) => {
                const rect = heroSection.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                heroVisual.style.setProperty('--x', `${x}%`);
                heroVisual.style.setProperty('--y', `${y}%`);
            });
        }
    }

    // Page header animation
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader) {
        // Add the visual element
        const pageHeaderVisual = document.createElement('div');
        pageHeaderVisual.className = 'page-header-visual';
        pageHeader.appendChild(pageHeaderVisual);

        // Add mousemove event listener
        pageHeader.addEventListener('mousemove', (e) => {
            const rect = pageHeader.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            pageHeaderVisual.style.setProperty('--x', `${x}%`);
            pageHeaderVisual.style.setProperty('--y', `${y}%`);
        });
    }

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking elsewhere
        document.addEventListener('click', function(e) {
            if (!e.target.closest('nav') && !e.target.closest('.mobile-menu-toggle')) {
                navMenu.classList.remove('active');
            }
        });
        
        // Close menu when a menu item is clicked
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
}); 