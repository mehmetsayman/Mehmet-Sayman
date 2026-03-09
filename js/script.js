document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });


    // --- Navbar Background on Scroll ---
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });


    // --- Scroll Reveal Animations & Progress Bars ---
    const revealElements = document.querySelectorAll('.reveal');
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        // Reveal standard elements
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });

        // Trigger progress bars fill animation
        progressBars.forEach(bar => {
            const elementTop = bar.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                // Get the target width from data attribute and apply it
                const targetWidth = bar.getAttribute('data-width');
                if (bar.style.width !== targetWidth) {
                    bar.style.width = targetWidth;
                }
            }
        });
    };

    // Initial check
    revealOnScroll();
    
    // Listen for scroll
    window.addEventListener('scroll', revealOnScroll);


    // --- Typing Effect (Optional simple setup for Hero title) ---
    // Could add advanced typing effect here if needed, 
    // but CSS gradients are handling the visual weight right now.

    // Active Link Highlight on Scroll
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
