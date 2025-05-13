// --- Carrito de compras ---

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Actualiza el contador del carrito en el icono
function actualizarContadorCarrito() {
  const contador = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  document.getElementById('carrito-contador').textContent = contador;
}

// Añadir producto al carrito
function agregarAlCarrito(nombre, precio) {
  // Busca si el producto ya está en el carrito
  const index = carrito.findIndex(prod => prod.nombre === nombre);
  if (index !== -1) {
    carrito[index].cantidad += 1;
  } else {
    carrito.push({ nombre, precio, cantidad: 1 });
  }
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarContadorCarrito();
}

// Mostrar el modal del carrito
function mostrarCarrito() {
  const modal = document.getElementById('carrito-modal');
  const lista = document.getElementById('carrito-lista');
  const total = document.getElementById('carrito-total');
  lista.innerHTML = '';
  let suma = 0;

  if (carrito.length === 0) {
    lista.innerHTML = '<p>Tu carrito está vacío.</p>';
    total.textContent = '0,00 €';
  } else {
    carrito.forEach((prod, i) => {
      suma += prod.precio * prod.cantidad;
      const div = document.createElement('div');
      div.className = 'carrito-producto';
      div.innerHTML = `
        <span class="carrito-producto-nombre">${prod.nombre}</span>
        <span class="carrito-producto-cantidad">x${prod.cantidad}</span>
        <span>${(prod.precio * prod.cantidad).toFixed(2)} €</span>
        <button class="carrito-producto-eliminar" onclick="eliminarDelCarrito(${i})" title="Eliminar">&times;</button>
      `;
      lista.appendChild(div);
    });
    total.textContent = suma.toFixed(2) + ' €';
  }
  modal.classList.add('activo');
}

// Eliminar producto del carrito
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarContadorCarrito();
  mostrarCarrito();
}

// Vaciar carrito
document.addEventListener('DOMContentLoaded', () => {
  actualizarContadorCarrito();

  // Abrir carrito al hacer clic en el icono
  document.querySelector('.carrito-icono').addEventListener('click', mostrarCarrito);

  // Cerrar modal
  document.querySelector('.cerrar-carrito').onclick = () => {
    document.getElementById('carrito-modal').classList.remove('activo');
  };

  // Vaciar carrito
  document.getElementById('vaciar-carrito').onclick = () => {
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
    mostrarCarrito();
  };

  // Cerrar modal al hacer clic fuera del contenido
  document.getElementById('carrito-modal').addEventListener('click', function(e) {
    if (e.target === this) this.classList.remove('activo');
  });
});

// Para los botones "Añadir al carrito" en productos.html pon:
//  
