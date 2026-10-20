// =======================================================================
//  CATEGORÍAS Y TIPOS DE BEBIDA
// =======================================================================

// Categorías principales. En cada producto, `category` debe ser uno de estos id.
export const categories = [
  { id: "bebidas", label: "Bebidas", note: "Selección de bebidas" },
 // { id: "powerful", label: "PowerFul", note: "Cápsulas para lavarropas" },
  // id: "croppers", label: "Croppers", note: "Snacks y granola" },
  { id: "nivea", label: "Nivea", note: "Cuidado personal" },
  { id: "sc-johnson", label: "SC Johnson", note: "Off!, Raid y Blem" },
];

// Tipos de bebida. ► PARA AGREGAR UNO NUEVO: sumá una línea acá y listo
//   (aparece solo en la sección "Distribuimos" y en los filtros).
// En el producto se usa así:  category: 'bebidas', subcategory: 'vinos'
export const drinkTypes = [
  { id: "vinos", label: "Vinos" },
  { id: "whisky", label: "Whisky" },
  { id: "ron", label: "Ron" },
  { id: "conac", label: "Coñac" },
  { id: "gin", label: "Gin" },
  { id: "tequila", label: "Tequila" },
  { id: "pisco", label: "Pisco" },
  { id: "licores", label: "Licores" },
  { id: "aperitivos", label: "Aperitivos" },
  { id: "fernet", label: "Fernet" },
  { id: "jagger", label: "Jagger" },
  { id: "espumantes", label: "Espumantes" }
];

// Qué categorías (además de las bebidas) aparecen en la sección "Distribuimos".
const wallCategoryIds = ["nivea", "sc-johnson"];

export const wallItems = [
  ...drinkTypes.map((d) => ({
    label: d.label,
    category: "bebidas",
    subcategory: d.id,
  })),
  ...categories
    .filter((c) => wallCategoryIds.includes(c.id))
    .map((c) => ({ label: c.label, category: c.id, subcategory: null })),
];
