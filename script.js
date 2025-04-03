// DOM Elements
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const sections = document.querySelectorAll('section');

// Mobile Menu Toggle
if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Shrink navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.padding = '15px 0';
    }
});

// Form submission handling
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // You would normally send this data to a server
        // For demonstration, we'll just show an alert
        alert(`Thank you for your message, ${name}! I will get back to you soon.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-item, .project-card, .timeline-item, .education-item, .certificate-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});

// Type effect for hero section
const typeEffect = () => {
    const text = "Building innovative solutions through code";
    const heroText = document.querySelector('.hero-text');
    let index = 0;
    
    if (heroText) {
        heroText.innerHTML = '';
        
        const typing = setInterval(() => {
            if (index < text.length) {
                heroText.innerHTML += text.charAt(index);
                index++;
            } else {
                clearInterval(typing);
            }
        }, 100);
    }
};

// Uncomment to enable typing effect
// document.addEventListener('DOMContentLoaded', typeEffect);
