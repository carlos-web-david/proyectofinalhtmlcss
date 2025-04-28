// Elementos del DOM
const form = document.getElementById('busqueda-form');
const categoriasSelect = document.getElementById('filtro-categoria');
const btnLimpiar = document.getElementById('btn-limpiar');
const btnBuscar = document.getElementById('btn-buscar');
const loadingDiv = document.getElementById('loading');

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
  // Cargar las categorías en el selector
  cargarCategorias();
  
  // Configurar eventos
  form.addEventListener('submit', buscarProductos);
  btnLimpiar.addEventListener('click', limpiarFiltros);
});

// Cargar categorías disponibles en el selector
function cargarCategorias() {
  // Obtener categorías únicas
  const categorias = getCategories();
  
  // Limpiar opciones existentes excepto la primera
  while (categoriasSelect.options.length > 1) {
    categoriasSelect.remove(1);
  }
  
  // Añadir cada categoría como opción
  categorias.forEach(categoria => {
    const option = document.createElement('option');
    option.value = categoria;
    option.textContent = categoria;
    categoriasSelect.appendChild(option);
  });
}

// Buscar productos según los filtros
function buscarProductos(event) {
  event.preventDefault();
  
  // Obtener valores de los filtros
  const nombreFiltro = document.getElementById('filtro-nombre').value.trim().toLowerCase();
  const categoriaFiltro = document.getElementById('filtro-categoria').value;
  const precioMaximo = document.getElementById('filtro-precio').value ? parseFloat(document.getElementById('filtro-precio').value) : null;
  
  // Validar que al menos un filtro esté aplicado
  if (!nombreFiltro && !categoriaFiltro && !precioMaximo) {
    alert('Por favor, aplique al menos un filtro para realizar la búsqueda.');
    return;
  }
  
  // Mostrar indicador de carga
  loadingDiv.style.display = 'block';
  btnBuscar.disabled = true;
  
  // Simular proceso asíncrono con una promesa
  new Promise((resolve) => {
    // Obtener todos los productos
    const productos = getProducts();
    
    // Filtrar productos según criterios
    const resultadosFiltrados = productos.filter(producto => {
      let cumpleNombre = true;
      let cumpleCategoria = true;
      let cumplePrecio = true;
      
      // Filtrar por nombre
      if (nombreFiltro) {
        cumpleNombre = producto.nombre.toLowerCase().includes(nombreFiltro);
      }
      
      // Filtrar por categoría
      if (categoriaFiltro) {
        cumpleCategoria = producto.categoria === categoriaFiltro;
      }
      
      // Filtrar por precio máximo
      if (precioMaximo) {
        cumplePrecio = producto.precio <= precioMaximo;
      }
      
      // El producto debe cumplir todos los filtros aplicados
      return cumpleNombre && cumpleCategoria && cumplePrecio;
    });
    
    // Esperar 2 segundos para simular carga
    setTimeout(() => {
      resolve(resultadosFiltrados);
    }, 2000);
  })
  .then(resultados => {
    // Guardar resultados en localStorage para la página de resultados
    localStorage.setItem('resultadosBusqueda', JSON.stringify(resultados));
    
    // Redirigir a la página de resultados
    window.location.href = 'resultados.html';
  });
}

// Limpiar todos los filtros
function limpiarFiltros() {
  form.reset();
}