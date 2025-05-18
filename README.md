DeliBreakfast - Proyecto Final Fundamentos Web
Descripción del Proyecto
DeliBreakfast es una aplicación web estática para la gestión de un catálogo de desayunos sorpresa. Permite registrar nuevos productos, visualizar el catálogo completo con paginación, y realizar búsquedas filtradas según diferentes criterios.
Este proyecto fue desarrollado como trabajo final para la asignatura de Fundamentos Web, aplicando conocimientos de HTML, CSS y JavaScript para crear una solución funcional y visualmente atractiva.
Funcionalidades Principales
1. Catálogo de Productos

Visualización de todos los desayunos disponibles en formato de tarjetas
Paginación con 15 productos por página
Diseño responsive que se adapta a diferentes dispositivos

2. Registro de Productos

Formulario completo para añadir nuevos desayunos
Validaciones para cada campo:

Nombre: máximo 20 caracteres
Categoría: selector con opciones predefinidas
Imagen: selector con 10 opciones disponibles
Código: mínimo 8 caracteres, con al menos una mayúscula, una minúscula y dos números
Precio: valor numérico en pesos colombianos
Stock: cantidad disponible
Características: descripción de los elementos incluidos



3. Sistema de Búsqueda

Filtros por nombre, categoría y precio máximo
Simulación de proceso asíncrono con indicador de carga
Visualización de resultados en formato de tabla
Paginación de resultados con 10 elementos por página

4. Indicaciones de Uso

Página informativa sobre cómo utilizar el sistema
Descripción detallada de los requerimientos para registrar productos
Ejemplos de códigos válidos e inválidos

Tecnologías Utilizadas

HTML5: Estructura semántica del contenido
CSS3: Estilos visuales y diseño responsive
JavaScript (Vanilla): Interactividad y funcionalidades dinámicas
LocalStorage: Persistencia de datos en el navegador

Estructura del Proyecto
/
├── index.html              # Página principal (catálogo)
├── registro.html           # Formulario de registro de productos
├── busqueda.html           # Página de búsqueda con filtros
├── resultados.html         # Visualización de resultados de búsqueda
├── indicaciones.html       # Guía de uso del sistema
├── css/
│   └── styles.css          # Estilos compartidos por todas las páginas
├── js/
│   ├── data.js             # Datos iniciales y funciones de manejo de productos
│   ├── index.js            # Lógica de la página principal y paginación
│   ├── registro.js         # Validaciones y procesamiento del formulario
│   ├── busqueda.js         # Implementación de filtros y búsqueda
│   ├── resultados.js       # Visualización y paginación de resultados
│   └── indicaciones.js     # Script mínimo para la página de indicaciones
└── img/                    # Imágenes de los productos
Instalación y Uso

Clona este repositorio en tu máquina local o descárgalo como archivo ZIP
Abre el archivo index.html en cualquier navegador web moderno
Navega por las diferentes secciones usando la barra de navegación

No se requieren dependencias externas ni servidores para ejecutar la aplicación.
Persistencia de Datos
La aplicación utiliza localStorage para mantener los datos de los productos entre sesiones. Al iniciar por primera vez, se carga un conjunto de 50 productos predefinidos como datos iniciales.
Flujo de Interacción

Visualización de Productos: La página principal muestra el catálogo completo con paginación
Registro de Productos: El usuario puede añadir nuevos desayunos usando el formulario
Validación: Al registrar un producto, se validan todos los campos según los criterios establecidos
Búsqueda: El usuario puede filtrar productos según diferentes criterios
Resultados: Los productos que coinciden con los filtros se muestran en una tabla paginada

Características Adicionales

Diseño Responsive: Se adapta a diferentes tamaños de pantalla
Efectos Visuales: Transiciones y animaciones para mejorar la experiencia de usuario
Validaciones Robustas: Control detallado de la entrada de datos
Mensajes Informativos: Retroalimentación clara para el usuario

Línea de Negocio
Este proyecto se enfoca en la línea de negocio "Desayunos sorpresas", ofreciendo una plataforma para la gestión de productos que permiten regalar experiencias especiales para ocasiones como cumpleaños, aniversarios, celebraciones y fechas importantes.