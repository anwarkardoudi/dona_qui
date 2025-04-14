document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-items img');
  
    // Configurazione dell'Intersection Observer per attivare l'animazione di zoom
    const observerOptions = {
      threshold: 0.1
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('zoom-animation');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    galleryImages.forEach(img => {
      observer.observe(img);
    });
  });
  