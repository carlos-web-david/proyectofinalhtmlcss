// Variables para la paginación
let currentPage = 1;
const resultsPerPage = 10;
let resultados = [];

// Elementos del DOM
const tablaResultados = document.getElementById('tabla-resultados');
const resultadosBody = document.getElementById('resultados-body');
const totalResultadosSpan = document.getElementById('total-resultados');
const contenedorTabla = document.getElementById('contenedor-tabla');
const mensajeNoResultados = document.getElementById('mensaje-no-resultados');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const pageInfo = document.getElementById('page-info');
const btnLimpiar = document.getElementById('btn-limpiar');

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
  // Cargar resultados desde localStorage
  cargarResultados();
  
  // Mostrar resultados
  mostrarResultados();
  
  // Configurar eventos
  btnLimpiar.addEventListener('click', limpiarBusqueda);
  prevPageBtn.addEventListener('click', irPaginaAnterior);
  nextPageBtn.addEventListener('click', irPaginaSiguiente);
});

// Cargar resultados desde localStorage
function cargarResultados() {
  const resultadosGuardados = localStorage.getItem('resultadosBusqueda');
  
  if (resultadosGuardados) {
    resultados = JSON.parse(resultadosGuardados);
  } else {
    resultados = [];
  }
}

// Mostrar resultados en la tabla
function mostrarResultados() {
  // Actualizar contador de resultados
  totalResultadosSpan.textContent = resultados.length;
  
  // Verificar si hay resultados
  if (resultados.length === 0) {
    contenedorTabla.style.display = 'none';
    mensajeNoResultados.style.display = 'block';
    return;
  }
  
  // Mostrar tabla de resultados
  contenedorTabla.style.display = 'block';
  mensajeNoResultados.style.display = 'none';
  
  // Calcular índices para paginación
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = Math.min(startIndex + resultsPerPage, resultados.length);
  const currentResults = resultados.slice(startIndex, endIndex);
  
  // Limpiar tabla
  resultadosBody.innerHTML = '';
  
  // Generar filas para cada resultado
  currentResults.forEach(producto => {
    const row = document.createElement('tr');
    
    // Formatear precio
    const formattedPrice = formatCurrency(producto.precio);
    
    row.innerHTML = `
      <td><img src="img/${producto.imagen}" alt="${producto.nombre}" onerror="this.src='img/placeholder.jpg'"></td>
      <td>${producto.nombre}</td>
      <td>${producto.categoria}</td>
      <td>${producto.codigo}</td>
      <td>${formattedPrice}</td>
      <td>${producto.stock}</td>
      <td>${producto.caracteristicas}</td>
    `;
    
    resultadosBody.appendChild(row);
  });
  
  // Actualizar controles de paginación
  actualizarControlesPaginacion();
}

// Actualizar controles de paginación
function actualizarControlesPaginacion() {
  const totalPages = Math.ceil(resultados.length / resultsPerPage);
  
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

// Ir a página anterior
function irPaginaAnterior() {
  if (currentPage > 1) {
    currentPage--;
    mostrarResultados();
  }
}

// Ir a página siguiente
function irPaginaSiguiente() {
  const totalPages = Math.ceil(resultados.length / resultsPerPage);
  
  if (currentPage < totalPages) {
    currentPage++;
    mostrarResultados();
  }
}

// Limpiar búsqueda
function limpiarBusqueda() {
  // Eliminar resultados guardados
  localStorage.removeItem('resultadosBusqueda');
  
  // Redirigir a la página de búsqueda
  window.location.href = 'busqueda.html';
}

// Formatear número como moneda (COP)
function formatCurrency(value) {
  return '$ ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}