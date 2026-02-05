const STEPS = [
  {
    number: "01",
    title: "Busca y Compara",
    description:
      "Filtra por region, comuna, tipo de arriendo y presupuesto. Revisa fotos, reviews y la reputacion del arrendador.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: "bg-blue-50 text-primary",
  },
  {
    number: "02",
    title: "Reserva con Seguridad",
    description:
      "Paga con tarjeta de credito. El dinero queda retenido hasta confirmar check-in (corto plazo) o firma de contrato (largo plazo).",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "bg-emerald-50 text-accent-dark",
  },
  {
    number: "03",
    title: "Arrienda Tranquilo",
    description:
      "Accede a servicios de aseo, gasfiteria, abogados y corredor virtual. Ambas partes son evaluadas con reviews al finalizar.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
      </svg>
    ),
    color: "bg-amber-50 text-secondary",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-primary bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Proceso Simple
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Como Funciona Arrienda.cl
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Arrendar o publicar tu propiedad nunca fue tan facil. Tres pasos
            para conectar con confianza y seguridad.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] border-t-2 border-dashed border-gray-200 z-0" />
              )}

              <div className="relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow z-10">
                {/* Number badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center mb-5`}>
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dual value proposition */}
        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-100">
            <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Para Arrendatarios
            </h4>
            <p className="text-sm text-text-secondary">
              Busca con filtros avanzados, lee reviews reales, paga con
              tarjeta y ten respaldo legal. Sin sorpresas.
            </p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-6 border border-amber-100">
            <h4 className="font-bold text-secondary mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Para Arrendadores
            </h4>
            <p className="text-sm text-text-secondary">
              Publica gratis, filtra arrendatarios por reputacion, cobra
              automaticamente y accede a servicios de mantencion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
