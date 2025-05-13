document.addEventListener('DOMContentLoaded', function() {
    // Lista de productos (puedes ampliarla)
    const productos = [
      {
        nombre: 'Zapatillas Running Pro', 
        img: "img/zapas.jpg", 
        categoria: 'calzado', 
        deporte: 'running', 
        marca: 'nike', 
        precio: 89.99, 
        descripcion: "Tecnología de amortiguación avanzada, suela antideslizante y diseño transpirable. Tallas 36-45."
      },
      {
        nombre: 'Camiseta Nike Training', 
        img: "img/camiseta-nike.jpg",  // Añade ruta de imagen
        categoria: 'ropa', 
        deporte: 'fitness', 
        marca: 'nike', 
        precio: 24.99,
        descripcion: "Descripción del producto"
      },
      {
        nombre: 'Balón Fútbol Adidas', 
        img: "img/balon-adidas.jpg",  // Añade ruta de imagen
        categoria: 'accesorios', 
        deporte: 'futbol', 
        marca: 'adidas', 
        precio: 29.99,
        descripcion: "Descripción del producto"
      },
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
      const categoria = document.querySelector('.filtros select:nth-of-type(1)').value.toLowerCase();
      const deporte = document.querySelector('.filtros select:nth-of-type(2)').value.toLowerCase();
      const marca = document.querySelector('.filtros select:nth-of-type(3)').value.toLowerCase();
  
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
      const selectMarca = document.querySelector('.filtros select:nth-of-type(3)');
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
  
    // Mostrar todos los productos al cargar inicialmente
    mostrarProductos(productos);
  });
  
  // Función global para el carrito (si está en otro archivo)
  function agregarAlCarrito(nombre, precio) {
    // Tu lógica del carrito aquí
  }
  
