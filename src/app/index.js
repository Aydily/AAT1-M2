function cargarFooter() {
  fetch('../pages/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });
}

document.addEventListener('DOMContentLoaded', cargarFooter);


console.log("....");

function callToCarousel() {
  fetch('/src/pages/carrosel.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('carrosel').innerHTML = data;
          new Carousel('#carrosel .carousel-container'); // Inicializar el carrusel después de cargar el HTML
      });
}

// JavaScript para hacer el navbar reutilizable (si es necesario)
document.addEventListener('DOMContentLoaded', callToCarousel);
