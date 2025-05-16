// Wait for document to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();
            
            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Scroll smoothly to the target
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Account for fixed navbar
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
    
    // Add active class to nav items on scroll and handle navbar color
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Get all sections
        const sections = document.querySelectorAll('section, header');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current section's nav link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
        
        // Reveal animations on scroll
        revealElementsOnScroll();
        
        // Handle navbar background change
        handleNavbarBackground();
    });
    
    // Add fixed navbar background on scroll
    const navbar = document.querySelector('.navbar');
    
    function handleNavbarBackground() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }
    
    // Initial call to set navbar state correctly on page load
    handleNavbarBackground();
    
    // Apply animation classes to elements
    function initAnimations() {
        // Hero section animations
        document.querySelector('.hero-section h1').classList.add('slide-right');
        document.querySelector('.hero-section h2').classList.add('slide-right', 'stagger-delay-1');
        document.querySelector('.hero-section .lead').classList.add('slide-right', 'stagger-delay-2');
        document.querySelector('.hero-section .btn').classList.add('slide-right', 'stagger-delay-3');
        
        // Add fade-in animations to other sections
        document.querySelectorAll('.section-title').forEach(title => {
            if (!title.parentElement.classList.contains('hero-section')) {
                title.classList.add('fade-in');
            }
        });
        
        // Add animation to skill cards
        document.querySelectorAll('.skill-card').forEach((card, index) => {
            card.classList.add('fade-in');
            card.classList.add(`stagger-delay-${index % 4 + 1}`);
        });
        
        // Add animation to experience cards
        document.querySelectorAll('.experience-card').forEach((item, index) => {
            item.classList.add('slide-right');
            item.classList.add(`stagger-delay-${index % 4 + 1}`);
        });
        
        // Add animation to education items
        document.querySelectorAll('.education-item, .certification-item').forEach((item, index) => {
            item.classList.add('fade-in');
            item.classList.add(`stagger-delay-${index % 3 + 1}`);
        });
        
        // Add animation to contact items
        document.querySelectorAll('.contact-item').forEach((item, index) => {
            item.classList.add('slide-left');
            item.classList.add(`stagger-delay-${index + 1}`);
        });
        
        // Add animation to footer content
        document.querySelectorAll('.footer-content > div').forEach((item, index) => {
            item.classList.add('fade-in');
            item.classList.add(`stagger-delay-${index + 1}`);
        });
        
        // Trigger initial animations for visible elements
        revealElementsOnScroll();
    }
    
    // Reveal elements as they come into view
    function revealElementsOnScroll() {
        const elements = document.querySelectorAll('.fade-in, .slide-right, .slide-left');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }
    
    // Initialize animations after a slight delay
    setTimeout(initAnimations, 200);
    
    // Add hover effects to skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.icon-container i');
            icon.classList.add('fa-beat');
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.icon-container i');
            icon.classList.remove('fa-beat');
        });
    });
    
    // Add animations to experience cards
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderLeftWidth = '10px';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderLeftWidth = '5px';
        });
    });
    
    // Preloader (optional)
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(preloader);
    
    window.addEventListener('load', function() {
        // Remove preloader after everything loads
        setTimeout(function() {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 500);
    });
}); 