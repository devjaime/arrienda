import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Comisiones y Tarifas | Arrienda.cl",
  description:
    "Conoce las comisiones de Arrienda.cl para renta corta, largo plazo y servicios complementarios. Sin costos ocultos, transparencia total.",
};

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const SERVICIOS_COMPLEMENTARIOS = [
  {
    servicio: "Aseo Profesional",
    descripcion: "Limpieza profunda entre arriendos o mantencion periodica",
    desde: "$35.000",
    cobro: "Por servicio",
    comision: "15%",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    servicio: "Gestion Legal",
    descripcion: "Redaccion y revision de contratos de arriendo",
    desde: "$45.000",
    cobro: "Por contrato",
    comision: "10%",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    servicio: "Gasfiteria",
    descripcion: "Reparaciones de gasfiteria, filtraciones, griferia",
    desde: "$25.000",
    cobro: "Por visita + materiales",
    comision: "12%",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    servicio: "Electricidad",
    descripcion: "Reparaciones electricas, instalaciones, tableros",
    desde: "$30.000",
    cobro: "Por visita + materiales",
    comision: "12%",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    servicio: "Cerrajeria",
    descripcion: "Cambio de chapas, copias de llaves, cerraduras inteligentes",
    desde: "$20.000",
    cobro: "Por servicio",
    comision: "12%",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    servicio: "Corredor Virtual",
    descripcion: "Asistencia completa en publicacion, negociacion y cierre",
    desde: "Gratis",
    cobro: "Incluido en comision",
    comision: "0%",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function ComisionesPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        badge="Transparencia Total"
        title="Comisiones y Tarifas"
        subtitle="Sin costos ocultos. Aqui detallamos cada comision que cobra Arrienda.cl por tipo de arriendo y servicio complementario."
      />

      <main className="bg-surface">
        {/* Intro */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm text-center">
            <h2 className="text-xl font-bold text-text-primary mb-3">Nuestro Modelo es Simple</h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Publicar es gratis. Solo cobramos una comision cuando se concreta una transaccion exitosa.
              El arrendador recibe el monto del arriendo menos la comision. El arrendatario paga una pequena
              tarifa de servicio. <strong className="text-text-primary">Ambas partes ven el desglose completo antes de confirmar.</strong>
            </p>
          </div>
        </div>

        {/* Main pricing cards */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Renta Corta */}
            <div className="bg-white rounded-2xl border-2 border-primary overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-primary to-primary-light p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-bold">Renta Corta</h3>
                </div>
                <p className="text-sm text-blue-100">1 noche a 3 meses</p>
              </div>

              <div className="p-6 space-y-6">
                {/* Arrendador */}
                <div>
                  <h4 className="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Comision al Arrendador
                  </h4>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-extrabold text-primary">5%</span>
                    <span className="text-sm text-text-muted">del monto total</span>
                  </div>
                  <p className="text-xs text-text-secondary">
                    Se descuenta automaticamente antes de liberar el pago. Si arriendas a $50.000/noche por 3 noches ($150.000), recibes $142.500.
                  </p>
                </div>

                <hr className="border-gray-100" />

                {/* Arrendatario */}
                <div>
                  <h4 className="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    Tarifa de Servicio al Arrendatario
                  </h4>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-extrabold text-secondary">8%</span>
                    <span className="text-sm text-text-muted">sobre el subtotal</span>
                  </div>
                  <p className="text-xs text-text-secondary">
                    Se muestra al arrendatario antes de pagar. Para un arriendo de $150.000, la tarifa es $12.000. Total a pagar: $162.000.
                  </p>
                </div>

                <hr className="border-gray-100" />

                {/* Desglose ejemplo */}
                <div className="bg-blue-50 rounded-xl p-4">
                  <h5 className="text-xs font-bold text-primary mb-3">EJEMPLO: 3 noches a $50.000/noche</h5>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-text-secondary">
                      <span>Subtotal arriendo</span>
                      <span className="font-medium">$150.000</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>Tarifa servicio (8%)</span>
                      <span className="font-medium">$12.000</span>
                    </div>
                    <div className="flex justify-between font-bold text-text-primary border-t border-blue-200 pt-1.5">
                      <span>Arrendatario paga</span>
                      <span>$162.000</span>
                    </div>
                    <div className="flex justify-between text-red-500 text-xs mt-2">
                      <span>Comision arrendador (5%)</span>
                      <span>-$7.500</span>
                    </div>
                    <div className="flex justify-between font-bold text-accent-dark border-t border-blue-200 pt-1.5">
                      <span>Arrendador recibe</span>
                      <span>$142.500</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Largo Plazo */}
            <div className="bg-white rounded-2xl border-2 border-accent-dark overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-accent-dark to-accent p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <h3 className="text-xl font-bold">Largo Plazo</h3>
                </div>
                <p className="text-sm text-emerald-100">6 meses o mas</p>
              </div>

              <div className="p-6 space-y-6">
                {/* Arrendador */}
                <div>
                  <h4 className="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-dark rounded-full" />
                    Comision al Arrendador
                  </h4>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-extrabold text-accent-dark">3%</span>
                    <span className="text-sm text-text-muted">mensual</span>
                  </div>
                  <p className="text-xs text-text-secondary">
                    Comision mensual mas baja por el compromiso de largo plazo. Para un arriendo de $500.000/mes, recibes $485.000 mensuales.
                  </p>
                </div>

                <hr className="border-gray-100" />

                {/* Arrendatario */}
                <div>
                  <h4 className="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    Tarifa de Servicio al Arrendatario
                  </h4>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-extrabold text-secondary">50%</span>
                    <span className="text-sm text-text-muted">del primer mes (una sola vez)</span>
                  </div>
                  <p className="text-xs text-text-secondary">
                    Pago unico al momento de concretar el arriendo. Para un arriendo de $500.000/mes, la tarifa es $250.000 por unica vez.
                  </p>
                </div>

                <hr className="border-gray-100" />

                {/* Desglose ejemplo */}
                <div className="bg-emerald-50 rounded-xl p-4">
                  <h5 className="text-xs font-bold text-accent-dark mb-3">EJEMPLO: Arriendo a $500.000/mes por 12 meses</h5>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-text-secondary">
                      <span>Primer mes + garantia</span>
                      <span className="font-medium">$1.000.000</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>Tarifa unica (50% primer mes)</span>
                      <span className="font-medium">$250.000</span>
                    </div>
                    <div className="flex justify-between font-bold text-text-primary border-t border-emerald-200 pt-1.5">
                      <span>Arrendatario paga al inicio</span>
                      <span>$1.250.000</span>
                    </div>
                    <div className="flex justify-between text-text-secondary mt-3">
                      <span>Pago mensual posterior</span>
                      <span className="font-medium">$500.000</span>
                    </div>
                    <div className="flex justify-between text-red-500">
                      <span>Comision mensual (3%)</span>
                      <span>-$15.000</span>
                    </div>
                    <div className="flex justify-between font-bold text-accent-dark border-t border-emerald-200 pt-1.5">
                      <span>Arrendador recibe/mes</span>
                      <span>$485.000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Servicios Complementarios */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-text-primary mb-2">Servicios Complementarios</h2>
            <p className="text-sm text-text-secondary">Tarifas de los proveedores + comision de intermediacion de Arrienda.cl</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICIOS_COMPLEMENTARIOS.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {s.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-sm">{s.servicio}</h4>
                    <p className="text-xs text-text-muted">{s.cobro}</p>
                  </div>
                </div>
                <p className="text-xs text-text-secondary mb-3">{s.descripcion}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-text-muted">Desde</span>
                    <p className="font-bold text-primary text-sm">{s.desde}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-text-muted">Comision Arrienda.cl</span>
                    <p className="font-bold text-secondary text-sm">{s.comision}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparativa */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl font-bold text-text-primary mb-6 text-center">Comparativa de Comisiones</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-3 px-4 text-text-muted font-medium">Concepto</th>
                      <th className="text-center py-3 px-4 font-bold text-primary">Arrienda.cl</th>
                      <th className="text-center py-3 px-4 text-text-muted font-medium">Airbnb</th>
                      <th className="text-center py-3 px-4 text-text-muted font-medium">Corredora Tradicional</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    <tr>
                      <td className="py-3 px-4 text-text-secondary">Comision arrendador (corto)</td>
                      <td className="py-3 px-4 text-center font-bold text-primary">5%</td>
                      <td className="py-3 px-4 text-center text-text-muted">3-5%</td>
                      <td className="py-3 px-4 text-center text-text-muted">N/A</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-text-secondary">Tarifa arrendatario (corto)</td>
                      <td className="py-3 px-4 text-center font-bold text-primary">8%</td>
                      <td className="py-3 px-4 text-center text-text-muted">14-16%</td>
                      <td className="py-3 px-4 text-center text-text-muted">N/A</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-text-secondary">Comision arrendador (largo)</td>
                      <td className="py-3 px-4 text-center font-bold text-primary">3%/mes</td>
                      <td className="py-3 px-4 text-center text-text-muted">No disponible</td>
                      <td className="py-3 px-4 text-center text-text-muted">50-100% primer mes</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-text-secondary">Servicios complementarios</td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center gap-1 text-accent-dark font-medium">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Incluidos
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center text-text-muted">Limitados</td>
                      <td className="py-3 px-4 text-center text-text-muted">No incluidos</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-text-secondary">Pago retenido</td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center gap-1 text-accent-dark font-medium">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Si
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center text-text-muted">Si</td>
                      <td className="py-3 px-4 text-center text-text-muted">No</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-text-secondary">Gestion legal incluida</td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center gap-1 text-accent-dark font-medium">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Opcional
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center text-text-muted">No</td>
                      <td className="py-3 px-4 text-center text-text-muted">Basica</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-text-secondary">Cobertura local (Chile)</td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-flex items-center gap-1 text-accent-dark font-medium">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          16 regiones
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center text-text-muted">Global (poco local)</td>
                      <td className="py-3 px-4 text-center text-text-muted">Por zona</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Nota final */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-gradient-to-br from-primary-dark to-primary rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-bold mb-3">Sin Costos Ocultos. Nunca.</h3>
            <p className="text-sm text-blue-100 max-w-xl mx-auto mb-6">
              Todas las comisiones se muestran al usuario antes de confirmar cualquier transaccion.
              Si tienes dudas, nuestro equipo de soporte esta disponible 24/7.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/como-funcionan-los-pagos" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm">
                Ver Flujo de Pagos Completo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/por-que-arrienda" className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/25 transition-colors text-sm">
                Por Que Arrienda.cl
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
