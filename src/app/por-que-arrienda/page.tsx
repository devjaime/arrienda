import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Por Que Arrienda.cl | Hecho por Chilenos, para Chile",
  description:
    "Descubre que hace diferente a Arrienda.cl de Airbnb y las corredoras tradicionales. Equipo chileno, mercado local, servicios completos.",
};

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const DIFERENCIAS = [
  {
    titulo: "Renta Corta Y Larga en un Solo Lugar",
    nosotros: "Ofrecemos arriendos de 1 noche hasta contratos de anos, con flujos y comisiones optimizadas para cada caso.",
    airbnb: "Airbnb esta pensado casi exclusivamente para estadia corta y turismo. No tiene gestion de contratos de largo plazo.",
    corredora: "Las corredoras trabajan solo largo plazo. No manejan renta corta ni tienen plataforma digital integrada.",
    icono: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    titulo: "Conocimiento del Mercado Chileno",
    nosotros: "Entendemos las comunas, el SII, la Ley de Arriendos, el peso chileno, Transbank y como se arrienda en Chile de verdad.",
    airbnb: "Plataforma global con soporte en ingles, pagos en dolares y nula comprension de la legislacion chilena.",
    corredora: "Conocen lo local, pero operan de forma manual, sin tecnologia y con comisiones abusivas del 50-100% del primer mes.",
    icono: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    titulo: "Servicios Complementarios Integrados",
    nosotros: "Aseo, gasfiteria, electricidad, gestion legal, contratos digitales y corredor virtual. Todo desde la misma plataforma.",
    airbnb: "Solo limpieza basica coordinada por el host. Sin servicios de mantencion ni gestion legal.",
    corredora: "Sin servicios post-arriendo. Una vez firmado el contrato, el arrendador queda solo.",
    icono: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    titulo: "Reputacion Bidireccional Real",
    nosotros: "Tanto duenos como arrendatarios son evaluados. Un mal arrendatario tiene reputacion baja visible. Un mal dueno tambien.",
    airbnb: "Reviews existen pero el sistema es global y no refleja la realidad del mercado chileno.",
    corredora: "No existe sistema de reputacion. No sabes si el arrendatario anterior dejo el depto en buenas condiciones.",
    icono: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    titulo: "Pagos en Pesos Chilenos con Retencion",
    nosotros: "Pagos con tarjeta de credito en CLP, retencion hasta confirmacion, deposito en cuenta bancaria chilena en 48 horas.",
    airbnb: "Pagos en dolares con conversion. Costos bancarios adicionales. Sin retencion local.",
    corredora: "Transferencia directa sin proteccion. Si el arrendatario no paga, el dueno tiene que perseguirlo solo.",
    icono: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    titulo: "Cobertura Nacional por Region y Comuna",
    nosotros: "Busqueda estructurada por las 16 regiones y comunas de Chile. Desde Arica hasta Punta Arenas.",
    airbnb: "Busqueda por mapa global. No entiende la estructura administrativa de Chile.",
    corredora: "Opera en su zona geografica solamente. Si necesitas otra region, necesitas otra corredora.",
    icono: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
];

const EQUIPO = [
  {
    nombre: "Direccion Tecnologica",
    descripcion: "Ingenieros de software con experiencia en startups fintech y proptech chilenas. Hemos construido plataformas de pagos y marketplaces que operan en Chile.",
    experiencia: "+15 anos combinados",
  },
  {
    nombre: "Operaciones y Mercado",
    descripcion: "Equipo con experiencia directa en el mercado inmobiliario chileno: corredores, administradores de propiedades y especialistas en arriendo.",
    experiencia: "+20 anos combinados",
  },
  {
    nombre: "Legal y Compliance",
    descripcion: "Abogados especializados en derecho inmobiliario, proteccion al consumidor y regulacion fintech en Chile.",
    experiencia: "+12 anos combinados",
  },
  {
    nombre: "Diseno y Experiencia",
    descripcion: "Disenadores UX/UI enfocados en crear experiencias intuitivas para el usuario chileno, con research local y testing con usuarios reales.",
    experiencia: "+10 anos combinados",
  },
];

const VALORES = [
  {
    titulo: "Transparencia",
    descripcion: "Cero costos ocultos. Comisiones claras. Reviews visibles. Sabes exactamente lo que pagas y lo que recibes.",
    icono: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    titulo: "Proteccion",
    descripcion: "Pagos retenidos, verificacion de identidad, contratos digitales. Cada mecanismo esta disenado para proteger a ambas partes.",
    icono: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    titulo: "Cercania",
    descripcion: "Somos chilenos construyendo para chilenos. Hablamos tu idioma, conocemos tus comunas y entendemos tus necesidades.",
    icono: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    titulo: "Innovacion Local",
    descripcion: "Combinamos tecnologia de clase mundial con conocimiento profundo del mercado chileno. No somos una copia, somos la solucion.",
    icono: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function PorQueArriendaPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        badge="Hecho en Chile"
        title="Por Que Arrienda.cl"
        subtitle="No somos una copia de Airbnb ni una corredora con pagina web. Somos un equipo chileno que construyo la plataforma que el mercado de arriendos necesitaba."
      />

      <main className="bg-white">
        {/* Manifiesto */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-br from-primary-dark to-primary rounded-2xl p-8 sm:p-10 text-white text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
              Creemos que arrendar en Chile puede ser mejor
            </h2>
            <p className="text-blue-100 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
              En Chile, arrendar un departamento es un proceso lleno de friccion: corredoras con comisiones
              abusivas, falta de transparencia, pagos sin proteccion y cero servicios post-arriendo.
              Airbnb resolvio el turismo, pero no el arriendo. Las corredoras resolvieron el papeleo,
              pero no la experiencia. Nosotros resolvemos ambos.
            </p>
          </div>
        </div>

        {/* Comparativa detallada */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-primary bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
              Comparativa Detallada
            </span>
            <h2 className="text-3xl font-bold text-text-primary">
              Arrienda.cl vs. la Competencia
            </h2>
          </div>

          <div className="space-y-6">
            {DIFERENCIAS.map((d, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Header */}
                <div className="bg-surface p-5 flex items-center gap-3 border-b border-gray-100">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    {d.icono}
                  </div>
                  <h3 className="font-bold text-text-primary text-lg">{d.titulo}</h3>
                </div>

                {/* Comparison Grid */}
                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                  {/* Arrienda.cl */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-xs font-bold text-accent-dark uppercase">Arrienda.cl</span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{d.nosotros}</p>
                  </div>
                  {/* Airbnb */}
                  <div className="p-5 bg-gray-50/50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 bg-gray-300 rounded-full" />
                      <span className="text-xs font-bold text-text-muted uppercase">Airbnb</span>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">{d.airbnb}</p>
                  </div>
                  {/* Corredora */}
                  <div className="p-5 bg-gray-50/50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 bg-gray-300 rounded-full" />
                      <span className="text-xs font-bold text-text-muted uppercase">Corredora Tradicional</span>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">{d.corredora}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Valores */}
        <div className="bg-surface py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold text-secondary bg-amber-50 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
                Nuestros Valores
              </span>
              <h2 className="text-3xl font-bold text-text-primary">
                En que creemos
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALORES.map((v, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                    {v.icono}
                  </div>
                  <h4 className="font-bold text-text-primary mb-2">{v.titulo}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{v.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Equipo */}
        <div className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold text-accent-dark bg-emerald-50 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
                Nuestro Equipo
              </span>
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Chilenos construyendo para Chile
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                No somos una empresa extranjera adaptando un producto global. Somos un equipo de
                profesionales chilenos con experiencia directa en tecnologia, inmobiliaria y fintech local.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {EQUIPO.map((e, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {e.nombre.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary">{e.nombre}</h4>
                      <span className="text-xs text-primary font-medium">{e.experiencia}</span>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{e.descripcion}</p>
                </div>
              ))}
            </div>

            {/* Chile identity */}
            <div className="mt-12 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-700" />
              <div className="absolute top-4 left-8 text-4xl">&#9733;</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3">
                  Orgullosamente Hecho en Chile
                </h3>
                <p className="text-red-100 text-sm max-w-xl mx-auto">
                  Desde Santiago hacia las 16 regiones. Entendemos la realidad del arriendo en Chile
                  porque la vivimos. Somos la solucion local para un problema local.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs font-medium">
                  <span className="bg-white/20 px-3 py-1.5 rounded-full">Sociedad Chilena (SpA)</span>
                  <span className="bg-white/20 px-3 py-1.5 rounded-full">Pagos en CLP</span>
                  <span className="bg-white/20 px-3 py-1.5 rounded-full">Ley N&#176; 18.101</span>
                  <span className="bg-white/20 px-3 py-1.5 rounded-full">SII Compliant</span>
                  <span className="bg-white/20 px-3 py-1.5 rounded-full">16 Regiones</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-primary-dark to-primary py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Listo para arrendar de forma diferente?
            </h2>
            <p className="text-blue-100 mb-8">
              Unete a la plataforma que esta cambiando como se arrienda en Chile.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/" className="w-full sm:w-auto bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors text-sm text-center">
                Explorar Propiedades
              </a>
              <a href="/comisiones" className="w-full sm:w-auto bg-secondary hover:bg-secondary-light text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm text-center">
                Ver Comisiones
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
