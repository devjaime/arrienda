const TESTIMONIALS = [
  {
    name: "Carolina M.",
    role: "Arrendataria en Providencia",
    text: "Encontre departamento en 2 dias. El sistema de reviews me dio confianza total en el dueno. El pago retenido me hizo sentir segura.",
    rating: 5,
    avatar: "CM",
  },
  {
    name: "Roberto S.",
    role: "Arrendador en Vina del Mar",
    text: "Publique mi propiedad y en una semana tenia 3 interesados con buena reputacion. El contrato digital fue rapido y legal.",
    rating: 5,
    avatar: "RS",
  },
  {
    name: "Francisca L.",
    role: "Arrendataria temporal en Pucon",
    text: "Arrende una cabana por 2 semanas. Todo impecable, el servicio de aseo antes de llegar fue un plus increible.",
    rating: 5,
    avatar: "FL",
  },
];

const TRUST_FEATURES = [
  {
    title: "Pago Retenido",
    description: "Tu pago se retiene hasta confirmar check-in o firma de contrato. Sin riesgos para ninguna parte.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Verificacion de Identidad",
    description: "Verificamos identidad de arrendadores y arrendatarios con documento de identidad.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
  },
  {
    title: "Reviews Bidireccionales",
    description: "Tanto arrendadores como arrendatarios son evaluados. Transparencia total.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Soporte 24/7",
    description: "Equipo de soporte disponible por chat, email y telefono. Resolvemos disputas de forma justa.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-secondary bg-amber-50 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Confianza y Seguridad
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Tu tranquilidad es nuestra prioridad
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Mecanismos de proteccion para que tanto duenos como arrendatarios
            operen con total seguridad y transparencia.
          </p>
        </div>

        {/* Trust features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TRUST_FEATURES.map((feature, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                {feature.icon}
              </div>
              <h4 className="font-bold text-text-primary mb-2">{feature.title}</h4>
              <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Payment flow visualization */}
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 sm:p-10 text-white mb-16">
          <h3 className="text-xl font-bold mb-6 text-center">Flujo de Pago Seguro</h3>
          <div className="grid sm:grid-cols-4 gap-4 text-center">
            {[
              { step: "1", label: "Arrendatario paga", sub: "Con tarjeta de credito" },
              { step: "2", label: "Pago retenido", sub: "En cuenta segura" },
              { step: "3", label: "Check-in o Firma", sub: "Confirmacion mutua" },
              { step: "4", label: "Pago liberado", sub: "Al arrendador" },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                  {item.step}
                </div>
                <p className="font-semibold text-sm">{item.label}</p>
                <p className="text-xs text-blue-200 mt-1">{item.sub}</p>
                {i < 3 && (
                  <div className="hidden sm:block absolute top-5 -right-2 text-blue-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className={`w-4 h-4 ${s <= t.rating ? "text-secondary" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
