
// Navbar toggle for Bootstrap
document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.querySelector('.navbar-toggler');
    const navMenu = document.querySelector('.navbar-collapse');

    toggler.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
