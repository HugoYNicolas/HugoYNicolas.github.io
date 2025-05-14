document.addEventListener('DOMContentLoaded', function() {
    // Lista de productos (puedes ampliarla)
    const productos = [
      {
        nombre: 'Nike Mercurial Speed 009', 
        img: "img/botasnike.jpg", 
        marca: 'nike',
        categoria: 'calzado', 
        deporte: 'futbol',
        precio: 289.99, 
        descripcion: "Las Nike Mercurial Dream Speed 009 ofrecen velocidad, amortiguación Air Zoom y tracción dinámica para superar a la defensa con facilidad."
      },
      {
        nombre: 'Chaqueta Nike Dri-Fit Form', 
        img: "img/chaquetanike.jpg",
        marca: 'nike',
        categoria: 'ropa', 
        deporte: 'running',
        precio: 12.99,
        descripcion: "Camiseta técnica con tecnología Dri-FIT, ideal para tus entrenamientos más exigentes."
      },
      {
        nombre: 'Nike Dri-FIT ADV Ace', 
        img: "img/viseranike.png",
        marca: 'nike',
        categoria: 'accesorios', 
        deporte: 'tenis',
        precio: 29.99,
        descripcion: "Visera ligera y transpirable, perfecta para el tenis, con tejido que capilariza el sudor y diseño AeroBill acortado para máxima concentración en el juego."
      },
      {
        nombre: 'Camiseta Nike Los Angeles Lakers Icon Edition Lebron James', 
        img: "img/lakersnike.jpg",
        marca: 'nike',
        categoria: 'equipos', 
        deporte: 'baloncesto',
        precio: 104.99,
        descripcion: "La camiseta Los Angeles Lakers Icon Edition LeBron James combina tradición y estilo profesional con tejido transpirable, ideal para apoyar a tu equipo y jugar con comodidad."
      },
      {
        nombre: 'Balón adidas Real Madrid 2024-2025', 
        img: "img/balonadidas.jpg",
        marca: 'adidas',
        categoria: 'accesorios', 
        deporte: 'baloncesto',
        precio: 39.99,
        descripcion: "Mejora tu juego mientras representas al Real Madrid con este balón adidas 2024-2025, fabricado en caucho resistente y con un diseño que luce las 3 bandas y el escudo del equipo."
      },
      {
        nombre: 'Tenis Adidas Clásicas Swift Run', 
        img: "img/tenisadidas.jpg",
        marca: 'adidas',
        categoria: 'calzado', 
        deporte: 'tenis',
        precio: 99.99,
        descripcion: "Diseñadas para dominar la pista, estas zapatillas de tenis adidas ofrecen sujeción, tracción y comodidad para rendir al máximo en cada punto."
      },
      {
        nombre: 'Camiseta adidas FC Bayern Primera Equipación Authentic 2024-2025', 
        img: "img/bayernadidas.jpg",
        marca: 'adidas',
        categoria: 'equipos', 
        deporte: 'futbol',
        precio: 119.99,
        descripcion: "La camiseta FC Bayern Authentic 2024-2025 combina tradición y rendimiento con un diseño en tonos rojos, detalles termotransferidos y tecnología HEAT.RDY para mantener la frescura en el campo."
      },
      {
      nombre: 'Pantalón largo adidas Essentials 3 Stripes', 
        img: "img/runningadidas.jpg",
        marca: 'adidas',
        categoria: 'ropa', 
        deporte: 'running',
        precio: 29.99,
        descripcion: "Este pantalón adidas tiene todo lo que necesitas para presumir de estilo deportivo en tu día a día. Combínalo con cualquier cosa, desde una camiseta estampada hasta una camisa holgada."
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
