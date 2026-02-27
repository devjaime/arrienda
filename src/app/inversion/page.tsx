// Página de Oportunidades de Inversión Inmobiliaria
"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  generateMockProperties, 
  filterInvestmentProperties, 
  sortByYield,
  analyzeForInvestment,
  PropertyListing,
  InvestmentAnalysis
} from "@/lib/property-scraper";

export default function InvestmentOpportunities() {
  const [properties, setProperties] = useState<PropertyListing[]>(() => generateMockProperties());
  const [selectedProperty, setSelectedProperty] = useState<InvestmentAnalysis | null>(null);
  const [filters, setFilters] = useState({
    minYield: 4, // Porcentaje mínimo de rentabilidad
    maxPriceUF: 10000, // Precio máximo en UF
    minBedrooms: 1,
    region: 'todas',
    propertyType: 'todos',
    pieUF: 0 // Pie en UF que tienes
  });
  const [sortBy, setSortBy] = useState<'yield' | 'price' | 'roi'>('yield');
  
  // Filtrar y ordenar propiedades
  const filteredProperties = useMemo(() => {
    let filtered = filterInvestmentProperties(properties, {
      minYield: filters.minYield,
      maxPrice: filters.maxPriceUF * 38000, // UF a CLP
      minBedrooms: filters.minBedrooms,
      regions: filters.region !== 'todas' ? [filters.region] : undefined,
      propertyTypes: filters.propertyType !== 'todos' ? [filters.propertyType] : undefined
    });
    
    // Ordenar
    if (sortBy === 'yield') {
      filtered = sortByYield(filtered, false);
    } else if (sortBy === 'price') {
      filtered.sort((a, b) => a.price - b.price);
    }
    
    return filtered;
  }, [properties, filters, sortBy]);
  
  // Analizar propiedad seleccionada
  const handleAnalyze = (property: PropertyListing) => {
    const analysis = analyzeForInvestment(property, filters.pieUF);
    setSelectedProperty(analysis);
  };
  
  const formatUF = (value: number) => {
    return new Intl.NumberFormat('es-CL').format(value);
  };
  
  const formatCLP = (value: number) => {
    return new Intl.NumberFormat('es-CL', { 
      style: 'currency', 
      currency: 'CLP',
      maximumFractionDigits: 0 
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">🏠 Oportunidades de Inversión</h1>
          <p className="text-xl opacity-90">
            Encuentra propiedades en Chile con el mejor rendimiento para arriendo
          </p>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Filtros */}
        <section className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">🔍 Filtros de Búsqueda</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Rend. Mínima (%)</label>
              <input 
                type="number" 
                value={filters.minYield}
                onChange={(e) => setFilters({...filters, minYield: parseFloat(e.target.value) || 0})}
                className="w-full px-3 py-2 border rounded-lg"
                min="0"
                max="20"
                step="0.5"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Precio máx. (UF)</label>
              <input 
                type="number" 
                value={filters.maxPriceUF}
                onChange={(e) => setFilters({...filters, maxPriceUF: parseInt(e.target.value) || 0})}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Habitaciones</label>
              <select 
                value={filters.minBedrooms}
                onChange={(e) => setFilters({...filters, minBedrooms: parseInt(e.target.value)})}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Región</label>
              <select 
                value={filters.region}
                onChange={(e) => setFilters({...filters, region: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="todas">Todas</option>
                <option value="metropolitana">RM</option>
                <option value="valparaiso">Valparaíso</option>
                <option value="biobio">Biobío</option>
                <option value="maule">Maule</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Tipo</label>
              <select 
                value={filters.propertyType}
                onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="todos">Todos</option>
                <option value="departamento">Departamento</option>
                <option value="casa">Casa</option>
                <option value="penthouse">Penthouse</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Tu pie (UF)</label>
              <input 
                type="number" 
                value={filters.pieUF}
                onChange={(e) => setFilters({...filters, pieUF: parseInt(e.target.value) || 0})}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="0"
              />
            </div>
          </div>
        </section>
        
        {/* Stats rápidos */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-3xl font-bold text-emerald-600">{filteredProperties.length}</div>
            <div className="text-sm text-gray-500">Propiedades</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-3xl font-bold text-blue-600">
              {filteredProperties.length > 0 ? 
                (filteredProperties.reduce((acc, p) => {
                  const rent = p.estimatedRent || 0;
                  const price = p.currency === 'UF' ? p.price * 38000 : p.price;
                  return acc + (rent * 12 / price) * 100;
                }, 0) / filteredProperties.length).toFixed(1) : 0}%
            </div>
            <div className="text-sm text-gray-500">Rend. promedio</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-3xl font-bold text-purple-600">
              {formatUF(Math.min(...filteredProperties.map(p => p.price)))}
            </div>
            <div className="text-sm text-gray-500">Precio mín. (UF)</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-3xl font-bold text-orange-600">
              {formatUF(Math.max(...filteredProperties.map(p => p.price)))}
            </div>
            <div className="text-sm text-gray-500">Precio máx. (UF)</div>
          </div>
        </section>
        
        {/* Lista de propiedades */}
        <section className="grid md:lg-cols-2 gap-6">
          {filteredProperties.map((property) => {
            const priceCLP = property.currency === 'UF' ? property.price * 38000 : property.price;
            const rent = property.estimatedRent || property.m2 * 0.35 * 38000;
            const yield_ = (rent * 12 / priceCLP) * 100;
            
            return (
              <motion.div 
                key={property.id}
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">{property.title}</h3>
                      <p className="text-sm opacity-90">{property.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{formatUF(property.price)} UF</div>
                      <div className="text-sm opacity-90">{formatCLP(priceCLP)}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    <div className="text-center">
                      <div className="text-lg">🛏️</div>
                      <div className="text-sm font-medium">{property.bedrooms}</div>
                      <div className="text-xs text-gray-500">Dorms</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg">🚿</div>
                      <div className="text-sm font-medium">{property.bathrooms}</div>
                      <div className="text-xs text-gray-500">Baños</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg">📐</div>
                      <div className="text-sm font-medium">{property.m2}m²</div>
                      <div className="text-xs text-gray-500">Superficie</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg">🚗</div>
                      <div className="text-sm font-medium">{property.parking}</div>
                      <div className="text-xs text-gray-500">Estac.</div>
                    </div>
                  </div>
                  
                  {/* Rendibilidad */}
                  <div className="bg-emerald-50 rounded-lg p-3 mb-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-600">Arriendo estimado</div>
                        <div className="text-lg font-bold text-emerald-600">
                          {formatUF(Math.round(rent / 38000))} UF/mes
                        </div>
                        <div className="text-xs text-gray-500">{formatCLP(rent)}/mes</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Rentabilidad</div>
                        <div className="text-2xl font-bold text-emerald-600">{yield_.toFixed(1)}%</div>
                        <div className="text-xs text-gray-500">bruta anual</div>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleAnalyze(property)}
                    className="w-full py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors mb-2"
                  >
                    📊 Análisis Completo
                  </button>
                  <a 
                    href={property.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 border-2 border-emerald-600 text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition-colors block text-center"
                  >
                    🔗 Ver en Portal Inmobiliario
                  </a>
                </div>
              </motion.div>
            );
          })}
        </section>
        
        {filteredProperties.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <div className="text-4xl mb-4">🔍</div>
            <p>No se encontraron propiedades con esos filtros</p>
            <p className="text-sm">Intenta放宽ar los criterios de búsqueda</p>
          </div>
        )}
      </main>
      
      {/* Modal de análisis detallado */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">📊 Análisis de Inversión</h2>
                <button 
                  onClick={() => setSelectedProperty(null)}
                  className="text-white/80 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              <p className="opacity-90">{selectedProperty.property.location}</p>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Precio y financiamiento */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">💰 Compra</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span>Precio de compra</span>
                    <span className="font-bold">{formatUF(selectedProperty.purchase.price / 38000)} UF</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Tu pie</span>
                    <span className="font-bold">{formatUF(selectedProperty.purchase.pie)} UF</span>
                  </div>
                  {selectedProperty.purchase.credit > 0 && (
                    <div className="flex justify-between mb-2">
                      <span>Crédito necesario</span>
                      <span className="font-bold">{formatUF(selectedProperty.purchase.credit / 38000)} UF</span>
                    </div>
                  )}
                  {selectedProperty.purchase.monthlyPayment && selectedProperty.purchase.monthlyPayment > 0 && (
                    <div className="flex justify-between">
                      <span>Dividendo mensual</span>
                      <span className="font-bold text-red-600">
                        {formatUF(selectedProperty.purchase.monthlyPayment / 38000)} UF
                      </span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Ingresos */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">📈 Ingresos</h3>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span>Arriendo mensual</span>
                    <span className="font-bold text-emerald-600">
                      {formatUF(selectedProperty.income.monthlyRent / 38000)} UF
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Arriendo anual</span>
                    <span className="font-bold text-emerald-600">
                      {formatUF(selectedProperty.income.annualRent / 38000)} UF
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Gastos */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">📉 Gastos Mensuales</h3>
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span>Gastos comunes</span>
                    <span>{formatUF(selectedProperty.expenses.commonExpenses / 38000)} UF</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Contribuciones</span>
                    <span>{formatUF(selectedProperty.expenses.contributions / 38000)} UF</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Seguro</span>
                    <span>{formatUF(selectedProperty.expenses.insurance / 38000)} UF</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-red-200">
                    <span className="font-semibold">Total mensual</span>
                    <span className="font-bold text-red-600">
                      {formatUF(selectedProperty.expenses.monthly / 38000)} UF
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Rentabilidad */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">📊 Resumen Rentabilidad</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {selectedProperty.yield.gross.toFixed(1)}%
                    </div>
                    <div className="text-sm text-gray-600">Bruta</div>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-600">
                      {selectedProperty.yield.net.toFixed(1)}%
                    </div>
                    <div className="text-sm text-gray-600">Neta</div>
                  </div>
                  {selectedProperty.roi && (
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        {selectedProperty.roi.toFixed(1)}%
                      </div>
                      <div className="text-sm text-gray-600">ROI</div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Flujo mensual */}
              <div className="bg-gray-800 text-white rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Flujo mensual neto</span>
                  <span className={`text-2xl font-bold ${
                    (selectedProperty.income.monthlyRent - selectedProperty.expenses.monthly) > 0 
                      ? 'text-green-400' 
                      : 'text-red-400'
                  }`}>
                    {formatUF((selectedProperty.income.monthlyRent - selectedProperty.expenses.monthly) / 38000)} UF
                  </span>
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  {selectedProperty.income.monthlyRent - selectedProperty.expenses.monthly > 0 
                    ? '✅ Propuesta autofinanciable' 
                    : '⚠️ Requiere aporte adicional'}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
