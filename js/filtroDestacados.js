document.addEventListener('DOMContentLoaded', function() {
  // Lista de productos (puedes ampliarla)
  const productos = [
    {
      nombre: 'Nike Mercurial Speed 009', 
      img: "img/botasnike.jpg", 
      marca: 'Nike',
      categoria: 'Calzado', 
      deporte: 'Fútbol',
      precio: 289.99, 
      descripcion: "Las Nike Mercurial Dream Speed 009 ofrecen velocidad, amortiguación Air Zoom y tracción dinámica para superar a la defensa con facilidad."
    },
    {
      nombre: 'Camiseta Nike Los Angeles Lakers Icon Edition Lebron James', 
      img: "img/lakersnike.jpg",
      marca: 'Nike',
      categoria: 'Equipos', 
      deporte: 'Baloncesto',
      precio: 104.99,
      descripcion: "La camiseta Los Angeles Lakers Icon Edition LeBron James combina tradición y estilo profesional con tejido transpirable, ideal para apoyar a tu equipo y jugar con comodidad."
    },
    {
      nombre: 'Camiseta Jordan Paris Saint-Germain x Jordan Tercera Equipación 2023-2024', 
      img: "img/psgjordan.jpg",
      marca: 'Jordan',
      categoria: 'Equipos', 
      deporte: 'Fútbol',
      precio: 59.99,
      descripcion: "La camiseta tercera equipación PSG 2023/24 fusiona el estilo urbano con el fútbol de élite, con el icónico Jordan Elephant Print y tecnología Nike Match para máximo rendimiento y frescura."
    },
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
        <img src="${prod.img}" alt="${prod.nombre}">
        <div class="producto-info">
          <h3>${prod.nombre}</h3>
          <span class="marca">${prod.marca}</span>
          <span class="categoria">${prod.categoria}</span>
          <span class="deporte">${prod.deporte}</span>
          <p class="precio">${prod.precio.toFixed(2)} €</p>
          ${prod.descripcion ? `<p class="descripcion">${prod.descripcion}</p>` : ''}
          <button class="btn-primario" onclick="agregarAlCarrito('${prod.nombre}', ${prod.precio})">Añadir al carrito</button>
        </div>
      `;
      contenedor.appendChild(div);
    });
  }

  // Función para filtrar productos
  function filtrarProductos() {
    const inputBusqueda = document.querySelector('.filtros input[type="text"]').value.toLowerCase();
    const marca = document.querySelector('.filtros select:nth-of-type(1)').value.toLowerCase();
    const categoria = document.querySelector('.filtros select:nth-of-type(2)').value.toLowerCase();
    const deporte = document.querySelector('.filtros select:nth-of-type(3)').value.toLowerCase();

    const productosFiltrados = productos.filter(prod => {
      const coincideBusqueda = prod.nombre.toLowerCase().includes(inputBusqueda) || 
                              prod.marca.toLowerCase().includes(inputBusqueda);
      const coincideCategoria = categoria === '' || prod.categoria.toLowerCase() === categoria;
      const coincideDeporte = deporte === '' || prod.deporte.toLowerCase() === deporte;
      const coincideMarca = marca === '' || prod.marca.toLowerCase() === marca;
      return coincideBusqueda && coincideCategoria && coincideDeporte && coincideMarca;
    });

    mostrarProductos(productosFiltrados);
  }

  // Manejo de parámetros de URL
  const urlParams = new URLSearchParams(window.location.search);
  const marcaFiltro = urlParams.get('marca');

  if (marcaFiltro) {
    const selectMarca = document.querySelector('.filtros select:nth-of-type(1)');
    if (selectMarca) {
      selectMarca.value = marcaFiltro.toLowerCase();
      // Filtramos después de que el DOM esté listo
      setTimeout(() => filtrarProductos(), 0);
    }
  }

  // Evento para el formulario de filtros
  const formularioFiltros = document.querySelector('.filtros form');
  if (formularioFiltros) {
    formularioFiltros.addEventListener('submit', e => {
      e.preventDefault();
      filtrarProductos();
    });
  }

  mostrarProductos(productos);
});
