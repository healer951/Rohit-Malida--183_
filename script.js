// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Sticky navbar effect
const header = document.querySelector('header');
const sticky = header.offsetTop;

window.addEventListener('scroll', () => {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Form validation
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const message = form.querySelector('textarea').value.trim();

        if (name && email && message) {
            alert('Form submitted successfully!');
            form.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
}

// Mobile menu toggle (for future implementation)
const navLinks = document.querySelector('.nav-links');
navLinks.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
