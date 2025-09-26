// Iniciar animaciones AOS
AOS.init();

// Menú responsive (si quieres agregar uno dinámico luego)
document.getElementById('menu-toggle')?.addEventListener('click', function() {
  document.querySelector('nav ul').classList.toggle('show');
});
