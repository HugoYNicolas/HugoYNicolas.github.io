// Lista de productos (puedes ampliarla)
const productos = [
  {nombre: 'Zapatillas Running Pro', categoria: 'calzado', deporte: 'running', marca: 'nike', precio: 89.99},
  {nombre: 'Camiseta Nike Training', categoria: 'ropa', deporte: 'fitness', marca: 'nike', precio: 24.99},
  {nombre: 'Balón Fútbol Adidas', categoria: 'accesorios', deporte: 'futbol', marca: 'adidas', precio: 29.99},
  // Añade más productos aquí...
];

// Función para mostrar productos en el DOM
function mostrarProductos(productosFiltrados) {
  const contenedor = document.querySelector('.productos-grid');
  contenedor.innerHTML = '';
  if (productosFiltrados.length === 0) {
    contenedor.innerHTML = '<p>No se encontraron productos que coincidan con el filtro.</p>';
    return;
  }
  productosFiltrados.forEach(prod => {
    const div = document.createElement('article');
    div.className = 'producto-card';
    div.innerHTML = `
      <img src="img/${prod.nombre.toLowerCase().replace(/ /g, '-')}.jpg" alt="${prod.nombre}">
      <div class="producto-info">
        <h3>${prod.nombre}</h3>
        <span class="marca">${prod.marca}</span>
        <span class="categoria">${prod.categoria}</span>
        <span class="deporte">${prod.deporte}</span>
        <p class="precio">${prod.precio.toFixed(2)} €</p>
        <button class="btn-primario" onclick="agregarAlCarrito('${prod.nombre}', ${prod.precio})">Añadir al carrito</button>
      </div>
    `;
    contenedor.appendChild(div);
  });
}

// Función para filtrar productos
function filtrarProductos() {
  const inputBusqueda = document.querySelector('.filtros input[type="text"]').value.toLowerCase();
  const categoria = document.querySelector('.filtros select:nth-of-type(1)').value.toLowerCase();
  const deporte = document.querySelector('.filtros select:nth-of-type(2)').value.toLowerCase();
  const marca = document.querySelector('.filtros select:nth-of-type(3)').value.toLowerCase();

  const productosFiltrados = productos.filter(prod => {
    const coincideBusqueda = prod.nombre.toLowerCase().includes(inputBusqueda) || prod.marca.toLowerCase().includes(inputBusqueda);
    const coincideCategoria = categoria === '' || prod.categoria.toLowerCase() === categoria;
    const coincideDeporte = deporte === '' || prod.deporte.toLowerCase() === deporte;
    const coincideMarca = marca === '' || prod.marca.toLowerCase() === marca;
    return coincideBusqueda && coincideCategoria && coincideDeporte && coincideMarca;
  });

  mostrarProductos(productosFiltrados);
}

// Evento para el formulario de filtros
const formularioFiltros = document.querySelector('.filtros form');
formularioFiltros.addEventListener('submit', e => {
  e.preventDefault();
  filtrarProductos();
});

// Mostrar todos los productos al cargar la página
mostrarProductos(productos);
