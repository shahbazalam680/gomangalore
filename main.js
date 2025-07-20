// Simple JS for navigation highlighting and FAQ animation
document.addEventListener('DOMContentLoaded', function() {
    // Highlight navigation on scroll
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 80;
            if(scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    // Simple animation for FAQ
    document.querySelectorAll('details').forEach((detail) => {
        detail.addEventListener('toggle', () => {
            if(detail.open) {
                detail.style.backgroundColor = '#ffe06633';
            } else {
                detail.style.backgroundColor = '#f0f0f4';
            }
        });
    });
});
