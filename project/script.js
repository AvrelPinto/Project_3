// Smooth scrolling for nav links
const navLinks = document.querySelectorAll('a.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Alert button function
function showAlert() {
  alert("Welcome to Kuwait City Guide! For more details, visit Kuwait Tourism Office.");
}

// Fade-in animation on scroll
const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeIns.forEach(section => {
  observer.observe(section);
});