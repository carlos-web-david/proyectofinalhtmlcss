// Base de datos simulada para la tienda de desayunos sorpresa
const initialProducts = [
  {
    id: 1,
    nombre: "Desayuno Romántico",
    categoria: "Románticos",
    imagen: "desayuno_romantico.jpg",
    codigo: "DRom2023a",
    precio: 120000,
    stock: 15,
    caracteristicas: "Rosas, chocolate, jugo natural, sándwich gourmet",
    tiempoEntrega: 2
  },
  {
    id: 2,
    nombre: "Desayuno Cumpleaños",
    categoria: "Celebraciones",
    imagen: "desayuno_cumple.jpg",
    codigo: "DCum24b12",
    precio: 150000,
    stock: 10,
    caracteristicas: "Torta, globos, jugo, frutas y pancakes",
    tiempoEntrega: 3
  },
  {
    id: 3,
    nombre: "Desayuno Infantil",
    categoria: "Infantiles",
    imagen: "desayuno_infantil.jpg",
    codigo: "DInf45C78",
    precio: 90000,
    stock: 12,
    caracteristicas: "Pancakes con forma de personajes, chocolate y juguete",
    tiempoEntrega: 2
  },
  {
    id: 4,
    nombre: "Desayuno Ejecutivo",
    categoria: "Corporativos",
    imagen: "desayuno_ejecutivo.jpg",
    codigo: "DEje56F12",
    precio: 180000,
    stock: 8,
    caracteristicas: "Sándwich gourmet, café premium, jugo y frutas selectas",
    tiempoEntrega: 1
  },
  {
    id: 5,
    nombre: "Brunch Familiar",
    categoria: "Familiares",
    imagen: "brunch_familiar.jpg",
    codigo: "BFam78G34",
    precio: 230000,
    stock: 5,
    caracteristicas: "Variedad de panes, huevos, frutas y bebidas para 4 personas",
    tiempoEntrega: 4
  },
  {
    id: 6,
    nombre: "Desayuno Saludable",
    categoria: "Saludables",
    imagen: "desayuno_saludable.jpg",
    codigo: "DSal12H56",
    precio: 110000,
    stock: 20,
    caracteristicas: "Yogur, granola, frutas frescas y jugo verde",
    tiempoEntrega: 2
  },
  {
    id: 7,
    nombre: "Desayuno Aniversario",
    categoria: "Románticos",
    imagen: "desayuno_aniversario.jpg",
    codigo: "DAni34J89",
    precio: 170000,
    stock: 8,
    caracteristicas: "Champagne, fresas con chocolate, rosas y croissants",
    tiempoEntrega: 3
  },
  {
    id: 8,
    nombre: "Desayuno Graduación",
    categoria: "Celebraciones",
    imagen: "desayuno_graduacion.jpg",
    codigo: "DGra56K12",
    precio: 140000,
    stock: 10,
    caracteristicas: "Decoración temática, torta personalizada y bebidas",
    tiempoEntrega: 3
  },
  {
    id: 9,
    nombre: "Desayuno Sorpresa Básico",
    categoria: "Estándar",
    imagen: "desayuno_basico.jpg",
    codigo: "DBas78L34",
    precio: 80000,
    stock: 25,
    caracteristicas: "Café, jugo, tostadas y frutas con pequeño detalle",
    tiempoEntrega: 1
  },
  {
    id: 10,
    nombre: "Desayuno Premium",
    categoria: "Premium",
    imagen: "desayuno_premium.jpg",
    codigo: "DPre90M56",
    precio: 250000,
    stock: 5,
    caracteristicas: "Salmón, huevos benedictinos, mimosas y flores exóticas",
    tiempoEntrega: 4
  },
  {
    id: 11,
    nombre: "Picnic Mañanero",
    categoria: "Especiales",
    imagen: "picnic_mananero.jpg",
    codigo: "PPic12N78",
    precio: 200000,
    stock: 3,
    caracteristicas: "Cesta de picnic completa con mantel y decoración",
    tiempoEntrega: 5
  },
  {
    id: 12,
    nombre: "Desayuno Día de Madres",
    categoria: "Celebraciones",
    imagen: "desayuno_madres.jpg",
    codigo: "DMad34P90",
    precio: 155000,
    stock: 15,
    caracteristicas: "Decoración floral, dulces y tarjeta personalizada",
    tiempoEntrega: 3
  },
  {
    id: 13,
    nombre: "Desayuno Día del Padre",
    categoria: "Celebraciones",
    imagen: "desayuno_padres.jpg",
    codigo: "DPad56Q12",
    precio: 145000,
    stock: 15,
    caracteristicas: "Temática masculina, café premium y sándwiches gourmet",
    tiempoEntrega: 3
  },
  {
    id: 14,
    nombre: "Desayuno Halloween",
    categoria: "Temáticos",
    imagen: "desayuno_halloween.jpg",
    codigo: "DHal78R34",
    precio: 130000,
    stock: 8,
    caracteristicas: "Decoración de Halloween, pancakes temáticos y dulces",
    tiempoEntrega: 2
  },
  {
    id: 15,
    nombre: "Desayuno Navideño",
    categoria: "Temáticos",
    imagen: "desayuno_navidad.jpg",
    codigo: "DNSav90T5",
    precio: 160000,
    stock: 12,
    caracteristicas: "Decoración navideña, chocolate caliente y galletas",
    tiempoEntrega: 2
  },
  {
    id: 16,
    nombre: "Desayuno Boda",
    categoria: "Románticos",
    imagen: "desayuno_boda.jpg",
    codigo: "DBod12U78",
    precio: 280000,
    stock: 4,
    caracteristicas: "Champagne, decoración nupcial y selección gourmet",
    tiempoEntrega: 4
  },
  {
    id: 17,
    nombre: "Desayuno Baby Shower",
    categoria: "Celebraciones",
    imagen: "desayuno_babyshower.jpg",
    codigo: "DBab34V90",
    precio: 170000,
    stock: 10,
    caracteristicas: "Decoración infantil, dulces y pequeños detalles para bebé",
    tiempoEntrega: 3
  },
  {
    id: 18,
    nombre: "Desayuno Vegano",
    categoria: "Especiales",
    imagen: "desayuno_vegano.jpg",
    codigo: "DVeg56W12",
    precio: 140000,
    stock: 8,
    caracteristicas: "Opciones 100% veganas, leches vegetales y frutas orgánicas",
    tiempoEntrega: 2
  },
  {
    id: 19,
    nombre: "Desayuno Sin Gluten",
    categoria: "Especiales",
    imagen: "desayuno_singluten.jpg",
    codigo: "DSGl78X34",
    precio: 145000,
    stock: 6,
    caracteristicas: "Todos los elementos libres de gluten con certificación",
    tiempoEntrega: 2
  },
  {
    id: 20,
    nombre: "Desayuno San Valentín",
    categoria: "Románticos",
    imagen: "desayuno_sanvalentin.jpg",
    codigo: "DSVa90Y56",
    precio: 190000,
    stock: 20,
    caracteristicas: "Corazones, rosas, champagne y chocolates en forma de corazón",
    tiempoEntrega: 3
  },
  {
    id: 21,
    nombre: "Desayuno Empresarial",
    categoria: "Corporativos",
    imagen: "desayuno_empresarial.jpg",
    codigo: "DEmp12Z78",
    precio: 350000,
    stock: 8,
    caracteristicas: "Paquete para 6-8 personas con opciones gourmet variadas",
    tiempoEntrega: 5
  },
  {
    id: 22,
    nombre: "Desayuno Americano",
    categoria: "Internacionales",
    imagen: "desayuno_americano.jpg",
    codigo: "DAme34A90",
    precio: 130000,
    stock: 15,
    caracteristicas: "Pancakes, huevos revueltos, tocino y jugo de naranja",
    tiempoEntrega: 2
  },
  {
    id: 23,
    nombre: "Desayuno Francés",
    categoria: "Internacionales",
    imagen: "desayuno_frances.jpg",
    codigo: "DFra56B12",
    precio: 150000,
    stock: 12,
    caracteristicas: "Croissants, pain au chocolat, café y mermeladas artesanales",
    tiempoEntrega: 2
  },
  {
    id: 24,
    nombre: "Desayuno Tropical",
    categoria: "Especiales",
    imagen: "desayuno_tropical.jpg",
    codigo: "DTro78C34",
    precio: 120000,
    stock: 15,
    caracteristicas: "Frutas exóticas, jugos naturales y decoración tropical",
    tiempoEntrega: 1
  },
  {
    id: 25,
    nombre: "Desayuno Deportista",
    categoria: "Saludables",
    imagen: "desayuno_deportista.jpg",
    codigo: "DDep90D56",
    precio: 125000,
    stock: 18,
    caracteristicas: "Alto en proteínas, batido energético y frutos secos",
    tiempoEntrega: 2
  },
  {
    id: 26,
    nombre: "Desayuno Quinceañera",
    categoria: "Celebraciones",
    imagen: "desayuno_quinceanera.jpg",
    codigo: "DQui12E78",
    precio: 160000,
    stock: 8,
    caracteristicas: "Decoración rosa, dulces y detalles para la quinceañera",
    tiempoEntrega: 3
  },
  {
    id: 27,
    nombre: "Desayuno Despedida",
    categoria: "Celebraciones",
    imagen: "desayuno_despedida.jpg",
    codigo: "DDes34F90",
    precio: 140000,
    stock: 10,
    caracteristicas: "Decoración personalizada y mensajes de buenos deseos",
    tiempoEntrega: 2
  },
  {
    id: 28,
    nombre: "Desayuno Recuperación",
    categoria: "Especiales",
    imagen: "desayuno_recuperacion.jpg",
    codigo: "DRec56G12",
    precio: 135000,
    stock: 8,
    caracteristicas: "Opciones nutritivas para personas convalecientes con nota",
    tiempoEntrega: 2
  },
  {
    id: 29,
    nombre: "Merienda Tarde",
    categoria: "Especiales",
    imagen: "merienda_tarde.jpg",
    codigo: "MTar78H34",
    precio: 110000,
    stock: 12,
    caracteristicas: "Selección de té, galletas, sándwiches pequeños y dulces",
    tiempoEntrega: 2
  },
  {
    id: 30,
    nombre: "Desayuno Recién Casados",
    categoria: "Románticos",
    imagen: "desayuno_reciencasados.jpg",
    codigo: "DRec90J56",
    precio: 220000,
    stock: 5,
    caracteristicas: "Champagne, fresas, chocolate y decoración elegante",
    tiempoEntrega: 3
  },
  {
    id: 31,
    nombre: "Desayuno Primer Aniversario",
    categoria: "Románticos",
    imagen: "desayuno_primeraniversario.jpg",
    codigo: "DPri12K78",
    precio: 190000,
    stock: 7,
    caracteristicas: "Temática de papel, dulces y detalles personalizados",
    tiempoEntrega: 3
  },
  {
    id: 32,
    nombre: "Desayuno Mediterráneo",
    categoria: "Internacionales",
    imagen: "desayuno_mediterraneo.jpg",
    codigo: "DMed34L90",
    precio: 155000,
    stock: 9,
    caracteristicas: "Aceite de oliva, pan, aceitunas, quesos y frutas mediterráneas",
    tiempoEntrega: 2
  },
  {
    id: 33,
    nombre: "Desayuno Asiático",
    categoria: "Internacionales",
    imagen: "desayuno_asiatico.jpg",
    codigo: "DAsi56M12",
    precio: 165000,
    stock: 6,
    caracteristicas: "Arroz, sopa, pescado y té verde con decoración oriental",
    tiempoEntrega: 3
  },
  {
    id: 34,
    nombre: "Desayuno Negocios",
    categoria: "Corporativos",
    imagen: "desayuno_negocios.jpg",
    codigo: "DNeg78N34",
    precio: 200000,
    stock: 10,
    caracteristicas: "Elegante, minimalista, con café premium y pasteles gourmet",
    tiempoEntrega: 2
  },
  {
    id: 35,
    nombre: "Desayuno Profesores",
    categoria: "Corporativos",
    imagen: "desayuno_profesores.jpg",
    codigo: "DPro90P56",
    precio: 160000,
    stock: 15,
    caracteristicas: "Decoración académica, frutas, café y sándwiches variados",
    tiempoEntrega: 3
  },
  {
    id: 36,
    nombre: "Desayuno Buffet",
    categoria: "Familiares",
    imagen: "desayuno_buffet.jpg",
    codigo: "DBuf12Q78",
    precio: 280000,
    stock: 4,
    caracteristicas: "Variedad completa para 6 personas, opciones dulces y saladas",
    tiempoEntrega: 5
  },
  {
    id: 37,
    nombre: "Desayuno Pareja",
    categoria: "Románticos",
    imagen: "desayuno_pareja.jpg",
    codigo: "DPar34R90",
    precio: 185000,
    stock: 12,
    caracteristicas: "Preparado para dos, con decoración romántica y detalles",
    tiempoEntrega: 2
  },
  {
    id: 38,
    nombre: "Desayuno Pascua",
    categoria: "Temáticos",
    imagen: "desayuno_pascua.jpg",
    codigo: "DPas56S12",
    precio: 140000,
    stock: 8,
    caracteristicas: "Huevos de chocolate, decoración primaveral y dulces",
    tiempoEntrega: 2
  },
  {
    id: 39,
    nombre: "Desayuno Agradecimiento",
    categoria: "Estándar",
    imagen: "desayuno_agradecimiento.jpg",
    codigo: "DAgr78T34",
    precio: 130000,
    stock: 15,
    caracteristicas: "Incluye tarjeta personalizada de agradecimiento y flores",
    tiempoEntrega: 2
  },
  {
    id: 40,
    nombre: "Kit Preparación Desayuno",
    categoria: "Especiales",
    imagen: "kit_desayuno.jpg",
    codigo: "KDes90U56",
    precio: 160000,
    stock: 10,
    caracteristicas: "Ingredientes para preparar desayuno en casa con instrucciones",
    tiempoEntrega: 2
  },
  {
    id: 41,
    nombre: "Desayuno Mejórate Pronto",
    categoria: "Especiales",
    imagen: "desayuno_mejoratepront.jpg",
    codigo: "DMej12V78",
    precio: 145000,
    stock: 12,
    caracteristicas: "Infusiones, miel, galletas y mensaje de recuperación",
    tiempoEntrega: 2
  },
  {
    id: 42,
    nombre: "Desayuno Low Carb",
    categoria: "Saludables",
    imagen: "desayuno_lowcarb.jpg",
    codigo: "DLow34W90",
    precio: 150000,
    stock: 8,
    caracteristicas: "Bajo en carbohidratos, rico en proteínas y grasas saludables",
    tiempoEntrega: 2
  },
  {
    id: 43,
    nombre: "Desayuno Detox",
    categoria: "Saludables",
    imagen: "desayuno_detox.jpg",
    codigo: "DDet56X12",
    precio: 140000,
    stock: 10,
    caracteristicas: "Batidos verdes, infusiones, frutas y semillas depurativas",
    tiempoEntrega: 1
  },
  {
    id: 44,
    nombre: "Desayuno Halloween Kids",
    categoria: "Infantiles",
    imagen: "desayuno_halloweenkids.jpg",
    codigo: "DHak78Y34",
    precio: 125000,
    stock: 12,
    caracteristicas: "Versión infantil con dulces y decoraciones divertidas",
    tiempoEntrega: 2
  },
  {
    id: 45,
    nombre: "Desayuno Navidad Kids",
    categoria: "Infantiles",
    imagen: "desayuno_navidadkids.jpg",
    codigo: "DNak90Z56",
    precio: 130000,
    stock: 15,
    caracteristicas: "Temática infantil navideña con chocolate y galletas decoradas",
    tiempoEntrega: 2
  },
  {
    id: 46,
    nombre: "Brunch Deluxe",
    categoria: "Premium",
    imagen: "brunch_deluxe.jpg",
    codigo: "BDel12A78",
    precio: 290000,
    stock: 5,
    caracteristicas: "Experiencia completa con opciones saladas, dulces y bebidas",
    tiempoEntrega: 4
  },
  {
    id: 47,
    nombre: "Desayuno Mexicano",
    categoria: "Internacionales",
    imagen: "desayuno_mexicano.jpg",
    codigo: "DMex34B90",
    precio: 155000,
    stock: 8,
    caracteristicas: "Huevos rancheros, tortillas, guacamole y jugos frescos",
    tiempoEntrega: 2
  },
  {
    id: 48,
    nombre: "Desayuno Inglés",
    categoria: "Internacionales",
    imagen: "desayuno_ingles.jpg",
    codigo: "DIng56C12",
    precio: 160000,
    stock: 9,
    caracteristicas: "Huevos, salchichas, frijoles, tomates y té inglés",
    tiempoEntrega: 2
  },
  {
    id: 49,
    nombre: "Desayuno Alemán",
    categoria: "Internacionales",
    imagen: "desayuno_aleman.jpg",
    codigo: "DAle78D34",
    precio: 150000,
    stock: 7,
    caracteristicas: "Selección de panes, embutidos, quesos y mermeladas",
    tiempoEntrega: 2
  },
  {
    id: 50,
    nombre: "Desayuno Inauguración",
    categoria: "Corporativos",
    imagen: "desayuno_inauguracion.jpg",
    codigo: "DIn90E56",
    precio: 240000,
    stock: 6,
    caracteristicas: "Elegante con cinta de inauguración y champagne",
    tiempoEntrega: 4
  }
];

// Inicializar el localStorage si es la primera vez que se accede al sitio
function initializeLocalStorage() {
  if (!localStorage.getItem('productos')) {
    localStorage.setItem('productos', JSON.stringify(initialProducts));
  }
}

// Cargar productos desde localStorage
function getProducts() {
  return JSON.parse(localStorage.getItem('productos')) || [];
}

// Guardar productos en localStorage
function saveProducts(products) {
  localStorage.setItem('productos', JSON.stringify(products));
}

// Obtener las categorías únicas
function getCategories() {
  const products = getProducts();
  const categories = [...new Set(products.map(product => product.categoria))];
  return categories;
}

// Inicializar el localStorage al cargar el script
initializeLocalStorage();