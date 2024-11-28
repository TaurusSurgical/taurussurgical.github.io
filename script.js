// Add any interactive effects here if needed
// For now, the bubbles have CSS hover effects, but you can add JavaScript interactions later.

document.addEventListener("DOMContentLoaded", function () {
    const bubbles = document.querySelectorAll('.bubble');
    
    bubbles.forEach(bubble => {
      bubble.addEventListener('mouseover', function() {
        bubble.style.transform = 'scale(1.1)';
      });
      bubble.addEventListener('mouseout', function() {
        bubble.style.transform = 'scale(1)';
      });
    });
  });
  