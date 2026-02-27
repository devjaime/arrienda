// Scraper para Portal Inmobiliario Chile
// Busca propiedades en venta para inversión (sin pie, para rentar)

export interface PropertyListing {
  id: string;
  title: string;
  price: number;
  priceUF?: number;
  currency: 'CLP' | 'UF';
  location: string;
  commune: string;
  region: string;
  bedrooms: number;
  bathrooms: number;
  m2: number;
  m2Built?: number;
  propertyType: 'departamento' | 'casa' | 'penthouse' | 'townhouse' | 'otro';
  floor?: number;
  totalFloors?: number;
  parking: number;
  bodega: number;
  amenities: string[];
  photos: string[];
  url: string;
  publisher: string;
  publishedDate?: string;
  
  // Datos para análisis de inversión
  estimatedRent?: number; // Valor arriendo mensual estimado
  expenseEstimate?: number; // Gastos mensuales estimados (comunes, contribuciones, seguro)
  yieldPercentage?: number; // Rentabilidad bruta anual
}

export interface InvestmentAnalysis {
  property: PropertyListing;
  purchase: {
    price: number;
    pie: number; // Pie en UF
    credit: number; // Crédito hipotecario necesario
    monthlyPayment?: number; // Dividendo hipotecario
  };
  income: {
    monthlyRent: number;
    annualRent: number;
  };
  expenses: {
    monthly: number;
    annual: number;
    commonExpenses: number;
    contributions: number;
    insurance: number;
    maintenance: number;
  };
  yield: {
    gross: number;
    net: number;
    capRate: number;
  };
  roi?: number; // Retorno sobre inversión
}

// Configuración de scraping
const BASE_URL = 'https://www.portalinmobiliario.com';
const REGIONS = {
  rm: 'metropolitana',
  valparaiso: 'valparaiso',
  biobio: 'biobio',
  maule: 'maule'
};

// Headers para evitar bloqueo
const headers = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'Accept-Language': 'es-CL,es;q=0.9,en;q=0.8',
  'Accept-Encoding': 'gzip, deflate, br',
};

/**
 * Convierte precio string a número
 */
function parsePrice(priceStr: string): number {
  // Limpia el string y extrae números
  const clean = priceStr.replace(/[^\d]/g, '');
  return parseInt(clean) || 0;
}

/**
 * Convierte UF a pesos chilenos (valor aproximado)
 */
function ufToCLP(uf: number): number {
  const UF_VALUE = 38000; // Valor aproximado, debería actualizarse
  return uf * UF_VALUE;
}

/**
 * Estima el valor de arriendo basado en m2 y ubicación
 * Esta es una estimación simple - en producción usaría datos reales
 */
function estimateRent(m2: number, commune: string, bedrooms: number): number {
  // Tarifa base por m2 según zona (UF/m2 promedio)
  const rentPerM2: Record<string, number> = {
    // Santiago centro
    'santiago': 0.45,
    'las condes': 0.55,
    'providencia': 0.50,
    'nunoa': 0.48,
    'vitacura': 0.52,
    'maipu': 0.35,
    'la florida': 0.32,
    'san bernardo': 0.25,
    // Valparaíso
    'valparaiso': 0.30,
    'viña del mar': 0.40,
    // Biobío
    'concepcion': 0.35,
    'chiguayante': 0.25,
    // Maule
    'talca': 0.22,
    'curico': 0.20
  };
  
  const ufPerM2 = rentPerM2[commune.toLowerCase()] || 0.35;
  const estimatedUF = m2 * ufPerM2;
  return ufToCLP(estimatedUF);
}

/**
 * Estima gastos mensuales de la propiedad
 */
function estimateExpenses(m2: number, propertyType: string, commune: string): number {
  // Gastos comunes aproximados (UF)
  const commonPerM2 = propertyType === 'departamento' ? 0.003 : 0.001;
  const commonExpensesUF = m2 * commonPerM2;
  
  // Contribuciones (aproximado anual / 12)
  const contributionsUF = (m2 * 0.00012) / 12;
  
  // Seguro (UF/año)
  const insuranceUF = 3 / 12;
  
  // Mantención (2% del valor approx)
  const maintenanceUF = 0;
  
  return ufToCLP(commonExpensesUF + contributionsUF + insuranceUF + maintenanceUF);
}

/**
 * Analiza una propiedad para inversión
 */
export function analyzeForInvestment(property: PropertyListing, pieUF: number = 0): InvestmentAnalysis {
  const priceCLP = property.currency === 'UF' ? ufToCLP(property.price) : property.price;
  const pieCLP = ufToCLP(pieUF);
  const creditNeeded = Math.max(0, priceCLP - pieCLP);
  
  // Estimar dividendo hipotecario (tasa approx 5% anual, 20 años)
  let monthlyPayment = 0;
  if (creditNeeded > 0) {
    const annualRate = 0.05 / 12;
    const months = 240; // 20 años
    monthlyPayment = creditNeeded * (annualRate * Math.pow(1 + annualRate, months)) / 
                     (Math.pow(1 + annualRate, months) - 1);
  }
  
  // Estimar arriendo
  const estimatedRent = property.estimatedRent || estimateRent(property.m2, property.commune, property.bedrooms);
  
  // Estimar gastos
  const expenses = estimateExpenses(property.m2, property.propertyType, property.commune);
  
  // Calcular rentabilidades
  const annualRent = estimatedRent * 12;
  const annualExpenses = expenses * 12 + ufToCLP(2); // +2 UF mantenimiento anual
  const grossYield = (annualRent / priceCLP) * 100;
  const netYield = ((annualRent - annualExpenses) / priceCLP) * 100;
  const capRate = netYield; // Similar a net yield para propósitos prácticos
  
  // Calcular ROI (considerando plusvalía假设 3% anual)
  const annualAppreciation = priceCLP * 0.03;
  const totalReturn = annualRent - annualExpenses + annualAppreciation;
  const roi = pieCLP > 0 ? (totalReturn / pieCLP) * 100 : 0;
  
  return {
    property,
    purchase: {
      price: priceCLP,
      pie: pieUF,
      credit: creditNeeded,
      monthlyPayment
    },
    income: {
      monthlyRent: estimatedRent,
      annualRent
    },
    expenses: {
      monthly: expenses,
      annual: annualExpenses,
      commonExpenses: ufToCLP(property.m2 * 0.003),
      contributions: ufToCLP(property.m2 * 0.00012 / 12),
      insurance: ufToCLP(3 / 12),
      maintenance: ufToCLP(2 / 12)
    },
    yield: {
      gross: grossYield,
      net: netYield,
      capRate
    },
    roi
  };
}

/**
 * Genera un mock de propiedades para demo
 */
export function generateMockProperties(): PropertyListing[] {
  return [
    {
      id: '1',
      title: 'Hermoso departamento en Las Condes - Excelente oportunidad',
      price: 4500, // UF
      priceUF: 4500,
      currency: 'UF',
      location: 'Av. Las Condes 1234, Las Condes',
      commune: 'las condes',
      region: 'metropolitana',
      bedrooms: 2,
      bathrooms: 2,
      m2: 75,
      m2Built: 80,
      propertyType: 'departamento',
      floor: 15,
      totalFloors: 25,
      parking: 1,
      bodega: 1,
      amenities: ['Piscina', 'Gimnasio', 'Seguridad 24h', 'Terraza'],
      photos: [],
      url: 'https://portalinmobiliario.com/p/12345',
      publisher: 'Corredora ABC',
      estimatedRent: ufToCLP(22), // 22 UF/mes
      expenseEstimate: ufToCLP(5) // 5 UF/mes gastos
    },
    {
      id: '2',
      title: 'Departamento centro de Santiago - Alta demanda arriendo',
      price: 3200,
      priceUF: 3200,
      currency: 'UF',
      location: 'Huérfanos 1000, Santiago Centro',
      commune: 'santiago',
      region: 'metropolitana',
      bedrooms: 1,
      bathrooms: 1,
      m2: 45,
      propertyType: 'departamento',
      floor: 8,
      totalFloors: 20,
      parking: 0,
      bodega: 1,
      amenities: ['Seguridad', 'Lavandería', 'Terraza'],
      photos: [],
      url: 'https://portalinmobiliario.com/p/12346',
      publisher: 'Inmobiliaria XYZ',
      estimatedRent: ufToCLP(18),
      expenseEstimate: ufToCLP(4)
    },
    {
      id: '3',
      title: 'Casa en Maipú - Ideal inversión familiar',
      price: 3800,
      priceUF: 3800,
      currency: 'UF',
      location: 'Camino a Melipilla 4500, Maipú',
      commune: 'maipu',
      region: 'metropolitana',
      bedrooms: 3,
      bathrooms: 2,
      m2: 120,
      m2Built: 150,
      propertyType: 'casa',
      parking: 2,
      bodega: 1,
      amenities: ['Jardín', 'Terraza', 'Pieza servicio'],
      photos: [],
      url: 'https://portalinmobiliario.com/p/12347',
      publisher: 'Corredora Chile',
      estimatedRent: ufToCLP(25),
      expenseEstimate: ufToCLP(4)
    },
    {
      id: '4',
      title: 'Penthouse Viña del Mar -Frente al mar',
      price: 8500,
      priceUF: 8500,
      currency: 'UF',
      location: 'Av. Marina 200, Viña del Mar',
      commune: 'viña del mar',
      region: 'valparaiso',
      bedrooms: 3,
      bathrooms: 3,
      m2: 180,
      propertyType: 'penthouse',
      floor: 12,
      totalFloors: 15,
      parking: 2,
      bodega: 1,
      amenities: ['Vista al mar', 'Piscina', 'Gimnasio', 'Spa', 'Concierge'],
      photos: [],
      url: 'https://portalinmobiliario.com/p/12348',
      publisher: 'Premium Properties',
      estimatedRent: ufToCLP(45),
      expenseEstimate: ufToCLP(10)
    },
    {
      id: '5',
      title: 'Departamento Núñez - Récord en rental yield',
      price: 2800,
      priceUF: 2800,
      currency: 'UF',
      location: 'Av. José Pedro Alessandri 500, Núñez',
      commune: 'nunoa',
      region: 'metropolitana',
      bedrooms: 2,
      bathrooms: 1,
      m2: 55,
      propertyType: 'departamento',
      floor: 3,
      totalFloors: 10,
      parking: 1,
      bodega: 0,
      amenities: ['Seguridad', 'Quincho'],
      photos: [],
      url: 'https://portalinmobiliario.com/p/12349',
      publisher: 'Inmobiliaria Norte',
      estimatedRent: ufToCLP(20),
      expenseEstimate: ufToCLP(3.5)
    }
  ];
}

/**
 * Filtra propiedades por criterios de inversión
 */
export function filterInvestmentProperties(
  properties: PropertyListing[],
  options: {
    minYield?: number;
    maxPrice?: number;
    minBedrooms?: number;
    regions?: string[];
    propertyTypes?: string[];
  }
): PropertyListing[] {
  return properties.filter(p => {
    // Precio máximo
    const priceCLP = p.currency === 'UF' ? ufToCLP(p.price) : p.price;
    if (options.maxPrice && priceCLP > options.maxPrice) return false;
    
    // Habitaciones mínimas
    if (options.minBedrooms && p.bedrooms < options.minBedrooms) return false;
    
    // Región
    if (options.regions && options.regions.length > 0) {
      if (!options.regions.includes(p.region)) return false;
    }
    
    // Tipo de propiedad
    if (options.propertyTypes && options.propertyTypes.length > 0) {
      if (!options.propertyTypes.includes(p.propertyType)) return false;
    }
    
    // Yield mínimo (calculamos estimado)
    if (options.minYield) {
      const rent = p.estimatedRent || estimateRent(p.m2, p.commune, p.bedrooms);
      const yield_ = (rent * 12 / priceCLP) * 100;
      if (yield_ < options.minYield) return false;
    }
    
    return true;
  });
}

/**
 * Ordena propiedades por rentabilidad
 */
export function sortByYield(properties: PropertyListing[], ascending = false): PropertyListing[] {
  return [...properties].sort((a, b) => {
    const priceACL = a.currency === 'UF' ? ufToCLP(a.price) : a.price;
    const priceBCLP = b.currency === 'UF' ? ufToCLP(b.price) : b.price;
    
    const rentA = a.estimatedRent || estimateRent(a.m2, a.commune, a.bedrooms);
    const rentB = b.estimatedRent || estimateRent(b.m2, b.commune, b.bedrooms);
    
    const yieldA = (rentA * 12 / priceACL) * 100;
    const yieldB = (rentB * 12 / priceBCLP) * 100;
    
    return ascending ? yieldA - yieldB : yieldB - yieldA;
  });
}
