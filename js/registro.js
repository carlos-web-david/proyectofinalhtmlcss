// Elementos del DOM
const form = document.getElementById('producto-form');
const categoriaSelect = document.getElementById('categoria');
const btnLimpiar = document.getElementById('btn-limpiar');
const mensajeDiv = document.getElementById('mensaje');

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
  // Cargar las categorías en el selector
  cargarCategorias();
  
  // Configurar eventos
  form.addEventListener('submit', registrarProducto);
  btnLimpiar.addEventListener('click', limpiarFormulario);
});

// Cargar categorías disponibles en el selector
function cargarCategorias() {
  // Obtener categorías únicas
  const categorias = getCategories();
  
  // Limpiar opciones existentes excepto la primera
  while (categoriaSelect.options.length > 1) {
    categoriaSelect.remove(1);
  }
  
  // Añadir cada categoría como opción
  categorias.forEach(categoria => {
    const option = document.createElement('option');
    option.value = categoria;
    option.textContent = categoria;
    categoriaSelect.appendChild(option);
  });
}

// Manejar el envío del formulario
function registrarProducto(event) {
  event.preventDefault();
  
  // Validar campos
  if (!validarFormulario()) {
    return false;
  }
  
  // Obtener valores del formulario
  const nombre = document.getElementById('nombre').value.trim();
  const categoria = document.getElementById('categoria').value;
  const imagen = document.getElementById('imagen').value;
  const codigo = document.getElementById('codigo').value.trim();
  const precio = parseInt(document.getElementById('precio').value);
  const stock = parseInt(document.getElementById('stock').value);
  const caracteristicas = document.getElementById('caracteristicas').value.trim();
  
  // Obtener productos actuales
  const productos = getProducts();
  
  // Crear nuevo producto
  const nuevoProducto = {
    id: Date.now(), // Usar timestamp como id único
    nombre,
    categoria,
    imagen,
    codigo,
    precio,
    stock,
    caracteristicas
  };
  
  // Añadir el nuevo producto
  productos.push(nuevoProducto);
  
  // Guardar en localStorage
  saveProducts(productos);
  
  // Mostrar mensaje de éxito
  mostrarMensaje('Desayuno sorpresa registrado con éxito', 'exito');
  
  // Limpiar formulario
  limpiarFormulario();
  
  // Redirigir a la página principal después de 1.5 segundos
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1500);
  
  return false;
}

// Validar todos los campos del formulario
function validarFormulario() {
  // Obtener valores del formulario
  const nombre = document.getElementById('nombre').value.trim();
  const categoria = document.getElementById('categoria').value;
  const imagen = document.getElementById('imagen').value;
  const codigo = document.getElementById('codigo').value.trim();
  const precio = document.getElementById('precio').value;
  const stock = document.getElementById('stock').value;
  const caracteristicas = document.getElementById('caracteristicas').value.trim();
  
  // Validar nombre (máximo 20 caracteres)
  if (nombre.length === 0 || nombre.length > 20) {
    mostrarMensaje('El nombre debe tener entre 1 y 20 caracteres', 'error');
    return false;
  }
  
  // Validar categoría seleccionada
  if (!categoria) {
    mostrarMensaje('Debe seleccionar una categoría', 'error');
    return false;
  }
  
  // Validar imagen seleccionada
  if (!imagen) {
    mostrarMensaje('Debe seleccionar una imagen', 'error');
    return false;
  }
  
  // Validar código (mínimo 8 caracteres, incluir mayúscula, minúscula y 2 números)
  if (codigo.length < 8) {
    mostrarMensaje('El código debe tener al menos 8 caracteres', 'error');
    return false;
  }
  
  const tieneMayuscula = /[A-Z]/.test(codigo);
  const tieneMinuscula = /[a-z]/.test(codigo);
  const cantidadNumeros = (codigo.match(/\d/g) || []).length;
  
  if (!tieneMayuscula || !tieneMinuscula || cantidadNumeros < 2) {
    mostrarMensaje('El código debe incluir al menos una mayúscula, una minúscula y dos números', 'error');
    return false;
  }
  
  // Validar precio
  if (!precio || precio <= 0) {
    mostrarMensaje('El precio debe ser un número positivo', 'error');
    return false;
  }
  
  // Validar stock
  if (!stock || stock <= 0) {
    mostrarMensaje('El stock debe ser un número positivo', 'error');
    return false;
  }
  
  // Validar características
  if (!caracteristicas) {
    mostrarMensaje('Debe ingresar lo que incluye el desayuno sorpresa', 'error');
    return false;
  }
  
  // Si todas las validaciones pasan
  return true;
}

// Limpiar todos los campos del formulario
function limpiarFormulario() {
  form.reset();
  mensajeDiv.style.display = 'none';
}

// Mostrar mensaje (error o éxito)
function mostrarMensaje(texto, tipo) {
  mensajeDiv.textContent = texto;
  mensajeDiv.style.display = 'block';
  
  // Establecer clases según el tipo de mensaje
  if (tipo === 'error') {
    mensajeDiv.className = 'mensaje-error';
  } else {
    mensajeDiv.className = 'mensaje-exito';
  }
}