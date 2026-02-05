import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Como Funcionan los Pagos | Arrienda.cl",
  description:
    "Guia completa del sistema de pagos de Arrienda.cl: retenciones, liberaciones, comisiones y flujo paso a paso para arrendadores y arrendatarios.",
};

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const FASES_RENTA_CORTA = [
  {
    fase: "1",
    titulo: "Solicitud de Reserva",
    quien: "Arrendatario",
    descripcion: "El arrendatario encuentra una propiedad, selecciona fechas y solicita la reserva. En este momento se le cobra el monto total a su tarjeta de credito.",
    detalle: "El cobro se procesa inmediatamente pero el dinero NO llega al arrendador. Queda retenido en una cuenta segura de Arrienda.cl operada por nuestro procesador de pagos certificado PCI-DSS.",
    estado: "Pago cobrado y retenido",
    color: "bg-blue-500",
  },
  {
    fase: "2",
    titulo: "Confirmacion del Arrendador",
    quien: "Arrendador",
    descripcion: "El arrendador recibe la solicitud con el perfil y reputacion del arrendatario. Tiene 24 horas para aceptar o rechazar.",
    detalle: "Si el arrendador rechaza o no responde en 24 horas, el pago se devuelve automaticamente al arrendatario (5-10 dias habiles segun el banco emisor).",
    estado: "Pago sigue retenido",
    color: "bg-indigo-500",
  },
  {
    fase: "3",
    titulo: "Check-in Confirmado",
    quien: "Ambas partes",
    descripcion: "El dia del check-in, ambas partes confirman a traves de la app que la entrega se realizo correctamente.",
    detalle: "El arrendatario tiene 24 horas desde el check-in para reportar discrepancias con la publicacion (fotos no coinciden, problemas de habitabilidad, etc.). Si no reporta, se asume conformidad.",
    estado: "Pago en periodo de gracia (24h)",
    color: "bg-violet-500",
  },
  {
    fase: "4",
    titulo: "Liberacion del Pago",
    quien: "Automatico",
    descripcion: "Pasadas las 24 horas sin reclamo, el pago se libera automaticamente al arrendador, descontando la comision de Arrienda.cl.",
    detalle: "El deposito al arrendador se realiza dentro de 48 horas habiles a su cuenta bancaria registrada. Recibira un comprobante por email con el desglose: monto bruto, comision y monto neto.",
    estado: "Pago liberado al arrendador",
    color: "bg-emerald-500",
  },
  {
    fase: "5",
    titulo: "Reviews Mutuos",
    quien: "Ambas partes",
    descripcion: "Al finalizar la estadia (check-out), ambas partes son invitadas a dejar un review del otro.",
    detalle: "Los reviews se publican simultaneamente para evitar represalias. La reputacion de ambas partes se actualiza. Esto impacta futuras transacciones.",
    estado: "Transaccion cerrada",
    color: "bg-teal-500",
  },
];

const FASES_LARGO_PLAZO = [
  {
    fase: "1",
    titulo: "Manifestacion de Interes",
    quien: "Arrendatario",
    descripcion: "El arrendatario ve la propiedad, revisa la reputacion del dueno y expresa interes. No se cobra nada aun.",
    detalle: "En esta etapa el arrendatario puede agendar una visita virtual (videollamada guiada por el arrendador) o presencial. Arrienda.cl coordina la agenda.",
    estado: "Sin cobro",
    color: "bg-blue-500",
  },
  {
    fase: "2",
    titulo: "Acuerdo y Contrato Digital",
    quien: "Ambas partes",
    descripcion: "Si ambas partes acuerdan, se genera un contrato de arriendo digital a traves de Arrienda.cl con asistencia legal opcional.",
    detalle: "El contrato incluye: monto del arriendo, duracion, clausulas de terminacion anticipada, inventario de la propiedad y responsabilidades de cada parte. Se firma digitalmente con validez legal en Chile (Ley 19.799).",
    estado: "Contrato en redaccion",
    color: "bg-indigo-500",
  },
  {
    fase: "3",
    titulo: "Primer Pago + Garantia",
    quien: "Arrendatario",
    descripcion: "Se cobra al arrendatario el primer mes de arriendo mas el mes de garantia con tarjeta de credito.",
    detalle: "La garantia queda retenida por Arrienda.cl durante toda la duracion del contrato. El primer mes se retiene hasta la firma efectiva del contrato y entrega de llaves.",
    estado: "Primer mes + garantia retenidos",
    color: "bg-violet-500",
  },
  {
    fase: "4",
    titulo: "Firma y Entrega de Llaves",
    quien: "Ambas partes",
    descripcion: "Ambas partes firman el contrato digitalmente y se realiza la entrega de la propiedad con un acta de estado.",
    detalle: "El acta de estado incluye fotos del estado actual de la propiedad. Esto protege a ambas partes al momento de la devolucion. El primer mes de arriendo se libera al arrendador dentro de 48 horas.",
    estado: "Primer mes liberado",
    color: "bg-emerald-500",
  },
  {
    fase: "5",
    titulo: "Cobros Mensuales Automaticos",
    quien: "Automatico",
    descripcion: "Cada mes se cobra automaticamente a la tarjeta del arrendatario y se deposita al arrendador dentro de 48 horas.",
    detalle: "El arrendador recibe su pago el dia 5 de cada mes (por el arriendo del mes anterior). Si el cobro falla (tarjeta rechazada), se reintenta 3 veces en 5 dias y se notifica a ambas partes.",
    estado: "Cobro recurrente activo",
    color: "bg-cyan-500",
  },
  {
    fase: "6",
    titulo: "Termino y Devolucion de Garantia",
    quien: "Ambas partes",
    descripcion: "Al finalizar el contrato, se realiza una inspeccion comparando el acta de estado inicial. Si no hay danos, la garantia se devuelve al arrendatario.",
    detalle: "Si hay danos, el arrendador puede solicitar un descuento de la garantia con evidencia fotografica. Arrienda.cl media si no hay acuerdo. Ambas partes dejan review final.",
    estado: "Garantia devuelta o ajustada",
    color: "bg-teal-500",
  },
];

const PREGUNTAS_FRECUENTES = [
  {
    pregunta: "Que pasa si el arrendatario no paga un mes?",
    respuesta: "Si el cobro automatico falla, se reintenta 3 veces en 5 dias. Si sigue fallando, se notifica al arrendador y se inicia un proceso de mediacion. Arrienda.cl no garantiza pagos, pero el historial de morosidad afecta la reputacion del arrendatario."
  },
  {
    pregunta: "Puedo recibir pagos fuera de la plataforma?",
    respuesta: "Los pagos deben procesarse a traves de Arrienda.cl para mantener la proteccion de ambas partes. Pagos fuera de la plataforma anulan las garantias y mediacion de Arrienda.cl."
  },
  {
    pregunta: "En cuanto tiempo recibo mi dinero como arrendador?",
    respuesta: "En renta corta: 48 horas habiles despues de la confirmacion de check-in. En largo plazo: el dia 5 de cada mes para el arriendo del mes anterior. La primera transferencia puede tomar hasta 5 dias habiles para verificar la cuenta."
  },
  {
    pregunta: "Que medios de pago acepta Arrienda.cl?",
    respuesta: "Aceptamos tarjetas de credito Visa, Mastercard y American Express. Proximamente incorporaremos debito automatico (PAC) y transferencia bancaria para pagos de largo plazo."
  },
  {
    pregunta: "Que pasa con el IVA y los impuestos?",
    respuesta: "La comision de Arrienda.cl incluye IVA. Los arrendadores son responsables de declarar sus ingresos por arriendo ante el SII. Arrienda.cl proporciona un reporte anual de ingresos para facilitar la declaracion."
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

function FaseCard({
  fase,
}: {
  fase: (typeof FASES_RENTA_CORTA)[number];
}) {
  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 ${fase.color} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg shrink-0 z-10`}>
          {fase.fase}
        </div>
        <div className="w-0.5 bg-gray-200 flex-1 mt-2" />
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="font-bold text-text-primary text-lg">{fase.titulo}</h3>
            <span className="text-xs font-medium bg-gray-100 text-text-secondary px-2.5 py-0.5 rounded-full">
              {fase.quien}
            </span>
          </div>
          <p className="text-sm text-text-primary font-medium mb-2">
            {fase.descripcion}
          </p>
          <p className="text-sm text-text-secondary leading-relaxed mb-3">
            {fase.detalle}
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-primary to-primary-light px-3 py-1 rounded-full">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {fase.estado}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PagosPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        badge="Guia de Pagos"
        title="Como Funcionan los Pagos en Arrienda.cl"
        subtitle="Entende paso a paso como se procesan, retienen y liberan los pagos. Transparencia total para arrendadores y arrendatarios."
      />

      <main className="bg-surface">
        {/* Intro */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h2 className="font-bold text-text-primary text-lg mb-2">Principio Fundamental: Pago Retenido</h2>
                <p className="text-sm text-text-secondary leading-relaxed">
                  En Arrienda.cl, <strong className="text-text-primary">el dinero nunca va directo al arrendador</strong>.
                  Siempre pasa por una cuenta segura de retencion. Esto protege al arrendatario de fraudes y al arrendador
                  de cancelaciones de ultimo minuto. El pago se libera solo cuando ambas partes confirman que la transaccion
                  fue satisfactoria.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RENTA CORTA */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-primary">Renta Corta</h2>
              <p className="text-sm text-text-secondary">Arriendos de 1 noche a 3 meses</p>
            </div>
          </div>

          <div className="ml-0 sm:ml-2">
            {FASES_RENTA_CORTA.map((fase) => (
              <FaseCard key={fase.fase} fase={fase} />
            ))}
          </div>
        </div>

        {/* LARGO PLAZO */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-accent-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-primary">Largo Plazo</h2>
              <p className="text-sm text-text-secondary">Arriendos de 6 meses o mas con contrato</p>
            </div>
          </div>

          <div className="ml-0 sm:ml-2">
            {FASES_LARGO_PLAZO.map((fase) => (
              <FaseCard key={fase.fase} fase={fase} />
            ))}
          </div>
        </div>

        {/* Resumen visual */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-gradient-to-br from-primary-dark to-primary rounded-2xl p-8 sm:p-10 text-white">
            <h3 className="text-xl font-bold mb-6 text-center">Resumen: Cuando Recibes tu Dinero</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <h4 className="font-bold text-secondary-light mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Renta Corta
                </h4>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Cobro inmediato al arrendatario
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Retencion hasta check-in + 24h
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Deposito en 48h habiles
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <h4 className="font-bold text-secondary-light mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Largo Plazo
                </h4>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Primer mes liberado tras firma
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Cobros recurrentes automaticos
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Deposito el dia 5 de cada mes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">Preguntas Frecuentes sobre Pagos</h2>
          <div className="space-y-4">
            {PREGUNTAS_FRECUENTES.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-sm transition-shadow">
                <h4 className="font-bold text-text-primary mb-2 flex items-start gap-2">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs font-bold shrink-0 mt-0.5">?</span>
                  {faq.pregunta}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed pl-8">
                  {faq.respuesta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
