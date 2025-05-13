// Carrito simple
let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  alert(`${nombre} añadido al carrito.`);
}

// Reserva de actividades deportivas
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('reserva-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const actividad = document.getElementById('actividad').value;

    const reserva = { nombre, email, telefono, fecha, hora, actividad };
    guardarReserva(reserva);

    fetch('php/Reserva_Deporte.php', {
      method: 'POST',
      body: new URLSearchParams(reserva),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then(response => response.text())
    .then(data => {
      mostrarConfirmacion(data);
      form.reset();
    })
    .catch(error => console.error('Error al enviar la reserva:', error));
  });
});

function guardarReserva(reserva) {
  let reservas = JSON.parse(localStorage.getItem('reservas')) || [];
  reservas.push(reserva);
  localStorage.setItem('reservas', JSON.stringify(reservas));
}

function mostrarConfirmacion(mensaje) {
  const confirmacion = document.createElement('div');
  confirmacion.className = 'confirmacion';
  confirmacion.textContent = mensaje;
  document.body.appendChild(confirmacion);
  setTimeout(() => {
    confirmacion.remove();
  }, 5000);
}

// Formulario de contacto (puedes adaptarlo para enviar a correo.php)
document.getElementById('contacto-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Aquí podrías enviar los datos a correo.php con fetch o AJAX
  mostrarConfirmacion('Mensaje enviado correctamente. Gracias por contactarnos.');
  this.reset();
});
