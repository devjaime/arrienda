const FEATURED_REGIONS = [
  {
    name: "Region Metropolitana",
    properties: 850,
    cities: "Santiago, Providencia, Las Condes, Nunoa",
    gradient: "from-blue-600 to-indigo-700",
    popular: true,
  },
  {
    name: "Valparaiso",
    properties: 420,
    cities: "Vina del Mar, Valparaiso, Con Con",
    gradient: "from-cyan-500 to-blue-600",
    popular: true,
  },
  {
    name: "Araucania",
    properties: 310,
    cities: "Pucon, Villarrica, Temuco",
    gradient: "from-emerald-500 to-teal-600",
    popular: true,
  },
  {
    name: "Los Lagos",
    properties: 280,
    cities: "Puerto Varas, Puerto Montt, Osorno",
    gradient: "from-green-500 to-emerald-600",
    popular: false,
  },
  {
    name: "Biobio",
    properties: 190,
    cities: "Concepcion, Talcahuano, Chillan",
    gradient: "from-purple-500 to-indigo-600",
    popular: false,
  },
  {
    name: "Coquimbo",
    properties: 175,
    cities: "La Serena, Coquimbo, Ovalle",
    gradient: "from-amber-500 to-orange-600",
    popular: false,
  },
  {
    name: "O'Higgins",
    properties: 120,
    cities: "Rancagua, San Fernando, Pichilemu",
    gradient: "from-rose-500 to-pink-600",
    popular: false,
  },
  {
    name: "Maule",
    properties: 95,
    cities: "Talca, Curico, Linares",
    gradient: "from-violet-500 to-purple-600",
    popular: false,
  },
];

export default function RegionsSection() {
  return (
    <section id="regiones" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-primary bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Cobertura Nacional
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Presentes en las 16 regiones de Chile
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Desde Arica hasta Magallanes, encuentra arriendos en cualquier
            parte del pais. Busca por region y comuna.
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURED_REGIONS.map((region, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl cursor-pointer group"
            >
              <div className={`bg-gradient-to-br ${region.gradient} p-6 h-44 flex flex-col justify-between transition-all group-hover:scale-[1.02]`}>
                {/* Popular badge */}
                {region.popular && (
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-semibold bg-white/25 backdrop-blur-sm text-white px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {region.name}
                  </h3>
                  <p className="text-sm text-white/70">{region.cities}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white/90">
                    {region.properties} propiedades
                  </span>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map placeholder + all regions */}
        <div className="mt-12 bg-surface rounded-2xl p-8 border border-gray-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-text-primary text-lg">
                  2.500+ propiedades en todo Chile
                </h4>
                <p className="text-sm text-text-secondary">
                  Cobertura en las 16 regiones, desde el desierto hasta la Patagonia
                </p>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors text-sm shrink-0">
              Explorar Mapa
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
