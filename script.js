// Navbar Scroll Effect
window.addEventListener("scroll", function() {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        nav.style.height = "70px";
        nav.style.background = "rgba(5, 5, 5, 0.9)";
    } else {
        nav.style.height = "85px";
        nav.style.background = "rgba(5, 5, 5, 0.7)";
    }
});

// Mobile Menu (Simple toggle)
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Mobile menu styling can be added in CSS as needed
});