document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 800,
    once: false,
    mirror: true,
    offset: 100,
    easing: 'ease-in-out',
    delay: 0,
    disable: false
  });
});

document.addEventListener('alpine:init', () => {
  // Refresh AOS when Alpine.js components change
  setTimeout(() => {
    AOS.refresh();
  }, 100);
});
