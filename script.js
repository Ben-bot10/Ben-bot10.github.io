// Add loading state management
document.addEventListener('DOMContentLoaded', () => {
  // Remove loading class after a brief delay to ensure smooth transitions
  setTimeout(() => {
    document.body.classList.remove('loading');
  }, 100);
});

// Animate glass sections/cards on scroll
const observer = new window.IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.glass[data-animate]').forEach(el => {
  observer.observe(el);
}); 