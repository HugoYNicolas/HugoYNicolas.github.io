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
      img: "img/viseranike.webp",
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
      descripcion: "Comodidad y estilo se unen en este pantalón adidas de corte clásico, con las icónicas 3 bandas y un diseño versátil ideal para tu día a día."
    },
    {
      nombre: 'Calcetines Jordan Everyday Cushioned Poly Ankle 144 (3 Pares)', 
        img: "img/mediasjordan.jpg",
        marca: 'jordan',
        categoria: 'accesorios', 
        deporte: 'running',
        precio: 19.99,
        descripcion: "Estos calcetines Jordan tobilleros ofrecen transpirabilidad, sujeción y frescura gracias a su tejido que capilariza el sudor y se adapta al puente del pie."
    },
    {
      nombre: 'Pantalón corto Jordan Minnesota Timberwolves Statement Edition', 
        img: "img/pantalonjordan.jpg",
        marca: 'jordan',
        categoria: 'ropa', 
        deporte: 'baloncesto',
        precio: 55.99,
        descripcion: "Luce los colores de los Timberwolves con este pantalón corto Statement Edition, con tejido de malla transpirable y detalles auténticos para rendir en la cancha o destacar en la calle."
    },
    {
      nombre: 'Camiseta Jordan Paris Saint-Germain x Jordan Tercera Equipación 2023-2024', 
        img: "img/psgjordan.jpg",
        marca: 'jordan',
        categoria: 'equipos', 
        deporte: 'futbol',
        precio: 59.99,
        descripcion: "La camiseta tercera equipación PSG 2023/24 fusiona el estilo urbano con el fútbol de élite, con el icónico Jordan Elephant Print y tecnología Nike Match para máximo rendimiento y frescura."
    },
    {
      nombre: 'Zapatilla Jordan Air Jordan 1 Retro High OG UNC Reimagined Preescolar', 
        img: "img/calzadojordan.jpg",
        marca: 'jordan',
        categoria: 'calzado', 
        deporte: 'baloncesto',
        precio: 89.99,
        descripcion: "Las Air Jordan 1 rinden homenaje a los inicios de MJ en la University of North Carolina, con colores clásicos que celebran el origen de su leyenda."
    },
    {
      nombre: 'Zapatilla Puma PWR Hybrid', 
        img: "img/calzadopuma.jpg",
        marca: 'puma',
        categoria: 'calzado', 
        deporte: 'running',
        precio: 79.99,
        descripcion: "Las zapatillas PUMA combinan tracción, amortiguación y estabilidad con tecnologías como PUMAGRIP, ProFoam y PWRTAPE para un rendimiento potente y preciso en cada paso."
    },
    {
      nombre: 'Conjunto Puma Portugal Segunda Equipación 2024-2025', 
        img: "img/pumaportugal.jpg",
        marca: 'puma',
        categoria: 'equipos', 
        deporte: 'futbol',
        precio: 62.99,
        descripcion: "La segunda equipación de Portugal destaca con un diseño audaz y dinámico, fusionando arte, tecnología y fútbol en una camiseta ideal para el partido o el día a día."
    },
    {
      nombre: 'Pantalón largo Puma teamRISE', 
        img: "img/ropapuma.jpg",
        marca: 'puma',
        categoria: 'ropa', 
        deporte: 'futbol',
        precio: 23.99,
        descripcion: "Estos pantalones de entrenamiento de fútbol para hombre están diseñados para ofrecer la máxima comodidad durante tus sesiones diarias, ya sea con calor o con frío."
    },
    {
      nombre: 'Camiseta Puma Graphics Running Faster', 
        img: "img/camisetapuma.jpg",
        marca: 'puma',
        categoria: 'ropa', 
        deporte: 'running',
        precio: 19.99,
        descripcion: "La camiseta Puma Graphics Running Faster combina comodidad y rendimiento, con un diseño dinámico y tejido transpirable para mantenerte fresco durante el entrenamiento."
    },
    {
      nombre: 'Gorra Under Armour UA Blitzing', 
        img: "img/gorrounderarmour.jpg",
        marca: 'underarmour',
        categoria: 'accesorios', 
        deporte: 'running',
        precio: 22.99,
        descripcion: "La banda HeatGear® combina protección solar con tecnología que capilariza el sudor, manteniendo la frescura y comodidad gracias a su tejido transpirable y diseño elástico."
    },
    {
      nombre: 'Sudadera Under Armour Rival Fleece Logo Black', 
        img: "img/sudaderaunderarmour.jpg",
        marca: 'underarmour',
        categoria: 'ropa', 
        deporte: 'running',
        precio: 39.99,
        descripcion: "La sudadera Under Armour Rival Fleece Logo Black fusiona comodidad y estilo, con un tejido de felpa suave y un diseño clásico con logo bordado para un ajuste cómodo y versátil."
    },
    {
      nombre: 'Zapatillas Under Armour Jet 23', 
        img: "img/calzadounderarmour.jpg",
        marca: 'underarmour',
        categoria: 'ropa', 
        deporte: 'running',
        precio: 55.99,
        descripcion: "Ajustadas y listas para el despegue. La mediasuela de Micro G te proporciona la amortiguación que necesitas, mientras que la parte superior resistente resulta ideal dentro y fuera de la cancha."
    },
    {
      nombre: 'Bota Under Armour Magnetico Select 4 FG', 
        img: "img/futbolunderarmour.jpg",
        marca: 'underarmour',
        categoria: 'calzado', 
        deporte: 'futbol',
        precio: 69.99,
        descripcion: "Bota de fútbol Under Amour Magnético Select 4 FG. Botas de gama base elaboradas con piel sintética para campos de césped natural."
    },
    {
      nombre: 'Asics Tennis Wear 24', 
        img: "img/camisetaasics.jpg",
        marca: 'asics',
        categoria: 'ropa', 
        deporte: 'tenis',
        precio: 89.99,
        descripcion: "La camiseta Asics Tennis Wear 24 ofrece ligereza y frescura con su diseño hueco y tejido de secado rápido, pensada para los entusiastas del tenis que buscan rendimiento y comodidad en la pista."
    },
    {
      nombre: 'Asics Wear Australian Open 2024', 
        img: "img/camiseta2asics.jpg",
        marca: 'asics',
        categoria: 'ropa', 
        deporte: 'tenis',
        precio: 109.99,
        descripcion: "La camiseta Asics Wear Australian Open 2024 combina tecnología de secado rápido con un diseño ligero y transpirable, ideal para ofrecer máximo rendimiento y comodidad en los partidos más exigentes del torneo."
    },
    {
      nombre: 'Pantalones cortos Australian Open', 
        img: "img/pantalonasics.jpg",
        marca: 'asics',
        categoria: 'ropa', 
        deporte: 'tenis',
        precio: 84.99,
        descripcion: "La camiseta Asics Wear Australian Open 2024 combina tecnología de secado rápido con un diseño ligero y transpirable, ideal para ofrecer máximo rendimiento y comodidad en los partidos más exigentes del torneo."
    },
    {
      nombre: 'Pro Muñequeras Cortas', 
        img: "img/muñequerasasics.jpg",
        marca: 'asics',
        categoria: 'accesorios', 
        deporte: 'tenis',
        precio: 8.99,
        descripcion: "Asics Pro son las muñequeras de tenis cortas que, gracias al tejido suave, absorben el sudor y garantizan una comodidad inigualable durante todo el partido."    
    },
    /*
    {
      nombre: '', 
        img: "img/runningadidas.jpg",
        marca: 'adidas',
        categoria: 'ropa', 
        deporte: 'running',
        precio: .99,
        descripcion: ""
    },
    */
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
