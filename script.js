
document.addEventListener('DOMContentLoaded', function() {
    // Typing animation for name
    const typingName = document.getElementById('typingName');
    const nameText = typingName ? typingName.textContent : '';
    typingName.textContent = '';
    let i = 0;
    function typeWriter() {
        if (i < nameText.length) {
            typingName.textContent += nameText.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }
    typeWriter();

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Contact button functionality
    const contactBtn = document.getElementById('contactBtn');
    contactBtn.addEventListener('click', function() {
        alert('Thank you for your interest! Please send an email to manpreet@example.com to get in touch.');
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(51, 51, 51, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#333';
            header.style.backdropFilter = 'none';
        }
    });
});
