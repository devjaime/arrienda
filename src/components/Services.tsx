const SERVICES = [
  {
    title: "Corredor Virtual",
    description:
      "Un corredor de propiedades digital que te guia en todo el proceso: publicacion, busqueda, negociacion y cierre. Sin comisiones ocultas.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    highlight: true,
  },
  {
    title: "Gestion Legal",
    description:
      "Abogados especializados en contratos de arriendo. Redaccion, revision y firma digital de contratos para renta corta y larga.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    color: "from-purple-500 to-purple-700",
    bgLight: "bg-purple-50",
    highlight: false,
  },
  {
    title: "Aseo Profesional",
    description:
      "Servicio de limpieza profunda entre arriendos cortos o mantencion periodica para arriendos de largo plazo. Coordinado desde la app.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50",
    highlight: false,
  },
  {
    title: "Gasfiteria y Mantenciones",
    description:
      "Red de gasfiteres, electricistas y maestros certificados. Solicita reparaciones directamente y el costo se asigna segun contrato.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "from-orange-500 to-red-500",
    bgLight: "bg-orange-50",
    highlight: false,
  },
  {
    title: "Pagos Seguros",
    description:
      "Retencion de pagos con tarjeta de credito hasta confirmar satisfaccion. Liberacion automatica o disputa mediada. Sin fraudes.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    color: "from-cyan-500 to-blue-600",
    bgLight: "bg-cyan-50",
    highlight: false,
  },
  {
    title: "Reviews y Reputacion",
    description:
      "Sistema bidireccional: arrendatarios evaluan propiedades y duenos, y viceversa. Reputacion visible y transparente para ambas partes.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    color: "from-yellow-500 to-amber-600",
    bgLight: "bg-yellow-50",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-accent-dark bg-emerald-50 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Servicios Complementarios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Mas que un arriendo, una experiencia completa
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Ofrecemos un ecosistema de servicios para que arrendadores y
            arrendatarios tengan todo resuelto desde un solo lugar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 border transition-all hover:shadow-lg cursor-pointer group ${
                service.highlight
                  ? "bg-gradient-to-br from-primary to-primary-dark text-white border-transparent row-span-1"
                  : "bg-white border-gray-100 hover:border-primary/20"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  service.highlight
                    ? "bg-white/20"
                    : service.bgLight
                }`}
              >
                <div className={service.highlight ? "text-white" : `bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}>
                  {service.icon}
                </div>
              </div>

              <h3 className={`text-lg font-bold mb-2 ${service.highlight ? "text-white" : "text-text-primary"}`}>
                {service.title}
              </h3>

              <p className={`text-sm leading-relaxed ${service.highlight ? "text-blue-100" : "text-text-secondary"}`}>
                {service.description}
              </p>

              <div className={`mt-4 flex items-center gap-1 text-sm font-medium ${
                service.highlight
                  ? "text-secondary-light"
                  : "text-primary group-hover:text-primary-dark"
              }`}>
                Saber mas
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
