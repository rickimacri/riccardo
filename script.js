// Animazione per le card e il form di contatto al caricamento della pagina
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  const featureCards = document.querySelectorAll('.feature-card');

  // Animazione delle feature card
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  featureCards.forEach(card => observer.observe(card));

  // Animazione del form di contatto
  setTimeout(() => {
    form.classList.add('visible');
  }, 300);  // Ritardo per il form
});

