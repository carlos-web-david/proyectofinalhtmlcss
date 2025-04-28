// Variables para la paginación
let currentPage = 1;
const productsPerPage = 15;
let products = [];

// Elementos del DOM
const productsContainer = document.getElementById('products-container');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const pageInfo = document.getElementById('page-info');

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
  // Cargar productos desde localStorage
  products = getProducts();
  
  // Mostrar productos y configurar paginación
  updateProductsDisplay();
  
  // Configurar eventos para botones de paginación
  prevPageBtn.addEventListener('click', goToPreviousPage);
  nextPageBtn.addEventListener('click', goToNextPage);
});

// Actualizar la visualización de productos según la página actual
function updateProductsDisplay() {
  // Calcular índices para la página actual
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);
  
  // Limpiar el contenedor de productos
  productsContainer.innerHTML = '';
  
  // Generar HTML para cada producto
  currentProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    // Formatear precio con separador de miles
    const formattedPrice = formatCurrency(product.precio);
    
    productCard.innerHTML = `
      <img src="img/${product.imagen}" alt="${product.nombre}" onerror="this.src='img/placeholder.jpg'">
      <h3>${product.nombre}</h3>
      <div class="product-details">
        <p><strong>Categoría:</strong> ${product.categoria}</p>
        <p><strong>Código:</strong> ${product.codigo}</p>
        <p><strong>Incluye:</strong> ${product.caracteristicas}</p>
        <p><strong>Disponibles:</strong> ${product.stock} unidades</p>
        <p class="price">${formattedPrice}</p>
      </div>
    `;
    
    productsContainer.appendChild(productCard);
  });
  
  // Actualizar información de página y estado de botones
  updatePaginationControls();
}

// Ir a la página anterior
function goToPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    updateProductsDisplay();
  }
}

// Ir a la página siguiente
function goToNextPage() {
  const totalPages = Math.ceil(products.length / productsPerPage);
  
  if (currentPage < totalPages) {
    currentPage++;
    updateProductsDisplay();
  }
}

// Actualizar controles de paginación
function updatePaginationControls() {
  const totalPages = Math.ceil(products.length / productsPerPage);
  
  // Actualizar texto informativo
  pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
  
  // Habilitar/deshabilitar botones según la página actual
  prevPageBtn.disabled = currentPage === 1;
  nextPageBtn.disabled = currentPage === totalPages;
  
  // Añadir/quitar clase visual para botones deshabilitados
  if (prevPageBtn.disabled) {
    prevPageBtn.classList.add('disabled');
  } else {
    prevPageBtn.classList.remove('disabled');
  }
  
  if (nextPageBtn.disabled) {
    nextPageBtn.classList.add('disabled');
  } else {
    nextPageBtn.classList.remove('disabled');
  }
}

// Formatear número como moneda (COP)
function formatCurrency(value) {
  return '$ ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}