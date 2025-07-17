// Add loading state management
document.addEventListener('DOMContentLoaded', () => {
  // Remove loading class after a brief delay to ensure smooth transitions
  setTimeout(() => {
    document.body.classList.remove('loading');
  }, 100);
});

// Fade-in animation for cards on scroll
const observer = new window.IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.glass-card.section').forEach(el => {
  el.classList.add('pre-fade');
  observer.observe(el);
}); 