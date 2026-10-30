document.addEventListener('DOMContentLoaded', () => {
  // Obtener todos los elementos que tienen la clase de animación
  const animatableElements = document.querySelectorAll('.reveal');

  // Si el navegador no soporta IntersectionObserver, mostramos todo inmediatamente
  if (!('IntersectionObserver' in window)) {
    animatableElements.forEach(el => el.classList.add('active'));
    return;
  }

  // Configuración del observador
  const observerOptions = {
    root: null, // Usa el viewport del navegador
    rootMargin: '0px 0px -80px 0px', // Activa la animación 80px antes de entrar por completo
    threshold: 0.1 // Requiere que al menos el 10% del elemento sea visible
  };

  // Crear el observador
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Si el elemento es visible en el viewport
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Dejar de observar para que la animación ocurra solo una vez
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Registrar cada elemento en el observador
  animatableElements.forEach(el => {
    observer.observe(el);
  });
});
