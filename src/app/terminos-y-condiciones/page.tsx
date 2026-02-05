import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Terminos y Condiciones | Arrienda.cl",
  description:
    "Terminos y condiciones de uso de la plataforma Arrienda.cl. Conoce tus derechos y responsabilidades como usuario.",
};

export default function TerminosPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        badge="Documento Legal"
        title="Terminos y Condiciones de Uso"
        subtitle="Ultima actualizacion: Febrero 2025. Al utilizar Arrienda.cl, aceptas los siguientes terminos que regulan el uso de nuestra plataforma."
      />

      <main className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Table of Contents */}
          <nav className="bg-surface rounded-2xl p-6 mb-12 border border-gray-100">
            <h2 className="font-bold text-text-primary mb-4 text-lg">Indice</h2>
            <ol className="grid sm:grid-cols-2 gap-2 text-sm">
              {[
                "Naturaleza de la Plataforma",
                "Registro y Cuentas",
                "Roles: Arrendadores y Arrendatarios",
                "Publicacion de Propiedades",
                "Proceso de Reserva y Arriendo",
                "Sistema de Pagos y Retenciones",
                "Comisiones y Tarifas",
                "Servicios Complementarios",
                "Sistema de Reputacion y Reviews",
                "Limitacion de Responsabilidad",
                "Resolucion de Disputas",
                "Proteccion de Datos",
                "Propiedad Intelectual",
                "Modificaciones",
                "Ley Aplicable y Jurisdiccion",
              ].map((item, i) => (
                <li key={i}>
                  <a href={`#seccion-${i + 1}`} className="text-primary hover:text-primary-dark transition-colors flex items-center gap-2">
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary shrink-0">
                      {i + 1}
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Content */}
          <div className="prose-custom space-y-12">

            {/* 1 */}
            <section id="seccion-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">1</span>
                <h2 className="text-xl font-bold text-text-primary">Naturaleza de la Plataforma</h2>
              </div>
              <div className="pl-11 space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>
                  Arrienda.cl (en adelante &ldquo;la Plataforma&rdquo;) es un servicio de intermediacion tecnologica
                  operado por Arrienda SpA, sociedad constituida bajo las leyes de la Republica de Chile,
                  con domicilio en Santiago.
                </p>
                <p>
                  <strong className="text-text-primary">La Plataforma actua exclusivamente como intermediaria tecnologica</strong> entre
                  personas que desean arrendar propiedades (&ldquo;Arrendadores&rdquo;) y personas que buscan
                  arrendar (&ldquo;Arrendatarios&rdquo;). Arrienda.cl <strong className="text-text-primary">no es parte en los contratos de arriendo</strong> que
                  se celebren entre usuarios, no es propietaria de las propiedades publicadas, ni ejerce
                  control sobre el estado, legalidad, seguridad o calidad de las mismas.
                </p>
                <p>
                  La Plataforma no actua como inmobiliaria, corredora de propiedades regulada, ni como
                  entidad financiera. El servicio de &ldquo;corredor virtual&rdquo; es una herramienta tecnologica
                  de asistencia y no constituye corretaje de propiedades en los terminos de la Ley N&#176; 18.795.
                </p>
              </div>
            </section>

            {/* 2 */}
            <section id="seccion-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">2</span>
                <h2 className="text-xl font-bold text-text-primary">Registro y Cuentas</h2>
              </div>
              <div className="pl-11 space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>
                  Para utilizar la Plataforma, los usuarios deben registrarse proporcionando informacion
                  veraz y actualizada. El usuario es responsable de la confidencialidad de sus credenciales.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Debes ser mayor de 18 anos y tener capacidad legal para contratar.</li>
                  <li>La informacion proporcionada debe ser veridica. Datos falsos pueden resultar en la suspension permanente de la cuenta.</li>
                  <li>Cada persona puede mantener una unica cuenta. Las cuentas multiples seran eliminadas.</li>
                  <li>Arrienda.cl se reserva el derecho de verificar identidad mediante documentos oficiales (cedula de identidad o pasaporte).</li>
                  <li>El usuario es responsable de todas las actividades realizadas desde su cuenta.</li>
                </ul>
              </div>
            </section>

            {/* 3 */}
            <section id="seccion-3">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">3</span>
                <h2 className="text-xl font-bold text-text-primary">Roles: Arrendadores y Arrendatarios</h2>
              </div>
              <div className="pl-11 space-y-4 text-sm text-text-secondary leading-relaxed">
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <h4 className="font-bold text-primary mb-2">Arrendadores</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Declaran ser propietarios o tener autorizacion legal para arrendar la propiedad publicada.</li>
                    <li>Son responsables de la veracidad de la informacion, fotografias y condiciones publicadas.</li>
                    <li>Se comprometen a mantener la propiedad en condiciones habitables y conforme a la legislacion vigente.</li>
                    <li>Aceptan que la Plataforma retenga el pago hasta la confirmacion del check-in o la firma del contrato.</li>
                    <li>Son responsables del cumplimiento tributario (declaracion de ingresos por arriendo ante el SII).</li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                  <h4 className="font-bold text-secondary mb-2">Arrendatarios</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Se comprometen a utilizar la propiedad conforme a lo acordado y en buen estado.</li>
                    <li>Aceptan el proceso de verificacion de identidad previo a la reserva.</li>
                    <li>Son responsables de los danos causados a la propiedad durante su estadia o periodo de arriendo.</li>
                    <li>Aceptan que los pagos se realizan a traves de la Plataforma y no directamente al arrendador.</li>
                    <li>Se comprometen a dejar un review honesto al finalizar la experiencia.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4 */}
            <section id="seccion-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">4</span>
                <h2 className="text-xl font-bold text-text-primary">Publicacion de Propiedades</h2>
              </div>
              <div className="pl-11 space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>
                  Las publicaciones deben contener informacion precisa y fotografias reales de la propiedad.
                  Arrienda.cl se reserva el derecho de rechazar, modificar o eliminar publicaciones que:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Contengan informacion falsa o enganosa.</li>
                  <li>Incluyan fotografias que no correspondan a la propiedad real.</li>
                  <li>Ofrezcan propiedades que no cumplan con la normativa sanitaria o habitacional vigente.</li>
                  <li>Contengan contenido discriminatorio, ofensivo o ilegal.</li>
                  <li>Dupliquen publicaciones existentes del mismo arrendador.</li>
                </ul>
                <p>
                  La publicacion basica es gratuita. Arrienda.cl ofrece opciones de publicacion destacada
                  con tarifas descritas en la seccion de Comisiones.
                </p>
              </div>
            </section>

            {/* 5 */}
            <section id="seccion-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">5</span>
                <h2 className="text-xl font-bold text-text-primary">Proceso de Reserva y Arriendo</h2>
              </div>
              <div className="pl-11 space-y-3 text-sm text-text-secondary leading-relaxed">
                <div className="bg-surface rounded-xl p-4 border border-gray-100">
                  <h4 className="font-bold text-text-primary mb-2">Renta Corta (1 noche a 3 meses)</h4>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>El arrendatario solicita una reserva y realiza el pago con tarjeta de credito.</li>
                    <li>El pago se retiene en una cuenta segura de la Plataforma.</li>
                    <li>El arrendador tiene 24 horas para aceptar o rechazar la solicitud.</li>
                    <li>Una vez realizado el check-in, ambas partes confirman y el pago se libera al arrendador (menos la comision).</li>
                    <li>En caso de cancelacion, aplican las politicas de cancelacion seleccionadas por el arrendador.</li>
                  </ol>
                </div>
                <div className="bg-surface rounded-xl p-4 border border-gray-100 mt-3">
                  <h4 className="font-bold text-text-primary mb-2">Largo Plazo (6 meses o mas)</h4>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>El arrendatario expresa interes y agenda una visita (virtual o presencial).</li>
                    <li>Si ambas partes acuerdan, se genera un contrato digital a traves de la Plataforma.</li>
                    <li>El arrendatario paga el primer mes y garantia a traves de la Plataforma.</li>
                    <li>Una vez firmado el contrato digitalmente por ambas partes, el primer pago se libera.</li>
                    <li>Los pagos mensuales posteriores se realizan a traves de la Plataforma automaticamente.</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* 6 */}
            <section id="seccion-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">6</span>
                <h2 className="text-xl font-bold text-text-primary">Sistema de Pagos y Retenciones</h2>
              </div>
              <div className="pl-11 space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>
                  Todos los pagos se procesan a traves de proveedores de pago certificados bajo las normas
                  PCI-DSS. Arrienda.cl no almacena datos de tarjetas de credito.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong className="text-text-primary">Retencion de pagos:</strong> El dinero pagado por el arrendatario se retiene en una cuenta segura hasta que se confirme la prestacion efectiva del servicio.</li>
                  <li><strong className="text-text-primary">Liberacion:</strong> El pago se libera al arrendador dentro de 48 horas habiles posteriores a la confirmacion.</li>
                  <li><strong className="text-text-primary">Disputas:</strong> En caso de disputa, el pago permanece retenido hasta que el equipo de Arrienda.cl medie una resolucion. La resolucion no excede los 15 dias habiles.</li>
                  <li><strong className="text-text-primary">Moneda:</strong> Todos los pagos se procesan en Pesos Chilenos (CLP).</li>
                  <li><strong className="text-text-primary">Reembolsos:</strong> Los reembolsos se procesan al mismo medio de pago dentro de 5 a 10 dias habiles, segun la politica de cancelacion aplicable.</li>
                </ul>
              </div>
            </section>

            {/* 7 */}
            <section id="seccion-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">7</span>
                <h2 className="text-xl font-bold text-text-primary">Comisiones y Tarifas</h2>
              </div>
              <div className="pl-11 space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>
                  Arrienda.cl cobra comisiones por facilitar las transacciones entre las partes.
                  Las tarifas vigentes se detallan en la pagina de <a href="/comisiones" className="text-primary font-medium hover:underline">Comisiones</a> y pueden
                  ser actualizadas con previo aviso de 30 dias.
                </p>
                <p>
                  Las comisiones se descuentan automaticamente del pago antes de la liberacion al arrendador.
                  El arrendatario puede ver el desglose completo de costos antes de confirmar cualquier reserva.
                </p>
              </div>
            </section>

            {/* 8 */}
            <section id="seccion-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">8</span>
                <h2 className="text-xl font-bold text-text-primary">Servicios Complementarios</h2>
              </div>
              <div className="pl-11 space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>
                  Arrienda.cl ofrece acceso a servicios de terceros que incluyen, pero no se limitan a:
                  aseo profesional, gasfiteria, electricidad, gestion legal y redaccion de contratos.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-sm font-medium text-amber-800">
                    <strong>Importante:</strong> Los servicios complementarios son prestados por terceros independientes.
                    Arrienda.cl facilita la conexion y el cobro, pero <strong>no es responsable de la calidad,
                    puntualidad o resultado</strong> de los servicios prestados por estos proveedores.
                    Cada proveedor opera bajo sus propias condiciones de servicio.
                  </p>
                </div>
              </div>
            </section>

            {/* 9 */}
            <section id="seccion-9">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">9</span>
                <h2 className="text-xl font-bold text-text-primary">Sistema de Reputacion y Reviews</h2>
              </div>
              <div className="pl-11 space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>
                  El sistema de reviews es bidireccional: tanto arrendadores como arrendatarios se evaluan mutuamente
                  al finalizar cada transaccion.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Los reviews deben ser honestos, respetuosos y basados en la experiencia real.</li>
                  <li>Los reviews no pueden contener informacion personal, contenido ofensivo o difamatorio.</li>
                  <li>Arrienda.cl se reserva el derecho de moderar y eliminar reviews que incumplan las politicas.</li>
                  <li>Los reviews no pueden ser comprados, intercambiados ni manipulados.</li>
                  <li>La reputacion se calcula como promedio ponderado de las ultimas evaluaciones.</li>
                  <li>Usuarios con reputacion por debajo de 3.0 pueden ver sus cuentas restringidas.</li>
                </ul>
              </div>
            </section>

            {/* 10 */}
            <section id="seccion-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">10</span>
                <h2 className="text-xl font-bold text-text-primary">Limitacion de Responsabilidad</h2>
              </div>
              <div className="pl-11 space-y-3 text-sm text-text-secondary leading-relaxed">
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <p className="font-semibold text-red-800 mb-3">
                    Arrienda.cl, como plataforma de intermediacion tecnologica, NO sera responsable de:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-red-700">
                    <li>El estado, condiciones, legalidad, seguridad o habitabilidad de las propiedades publicadas.</li>
                    <li>La veracidad de la informacion proporcionada por arrendadores o arrendatarios.</li>
                    <li>Danos materiales o personales ocurridos en las propiedades arrendadas.</li>
                    <li>Incumplimiento de los contratos de arriendo celebrados entre las partes.</li>
                    <li>Perdidas economicas derivadas de arriendos fallidos, cancelaciones o disputas entre usuarios.</li>
                    <li>La conducta, solvencia o antecedentes de los usuarios registrados en la Plataforma.</li>
                    <li>Interrupciones del servicio por causas de fuerza mayor, fallos tecnicos o mantenimiento.</li>
                    <li>Resultados de los servicios complementarios prestados por terceros.</li>
                    <li>Diferencias entre las expectativas del usuario y la experiencia real del arriendo.</li>
                    <li>Decisiones tomadas por los usuarios basadas en la informacion disponible en la Plataforma.</li>
                  </ul>
                </div>
                <p className="font-medium text-text-primary">
                  La responsabilidad maxima de Arrienda.cl ante cualquier reclamacion se limitara al monto
                  de las comisiones efectivamente cobradas en la transaccion objeto de la disputa.
                </p>
              </div>
            </section>

            {/* 11 */}
            <section id="seccion-11">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">11</span>
                <h2 className="text-xl font-bold text-text-primary">Resolucion de Disputas</h2>
              </div>
              <div className="pl-11 space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>
                  En caso de conflicto entre usuarios, se seguira el siguiente procedimiento:
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li><strong className="text-text-primary">Negociacion directa:</strong> Las partes intentaran resolver el conflicto directamente a traves del chat de la Plataforma.</li>
                  <li><strong className="text-text-primary">Mediacion de Arrienda.cl:</strong> Si no hay acuerdo en 48 horas, cualquiera de las partes puede solicitar mediacion gratuita.</li>
                  <li><strong className="text-text-primary">Resolucion:</strong> El equipo de Arrienda.cl evaluara las evidencias (fotos, mensajes, contrato) y emitira una recomendacion dentro de 15 dias habiles.</li>
                  <li><strong className="text-text-primary">Instancia judicial:</strong> Si la mediacion no es satisfactoria, las partes podran recurrir a los tribunales ordinarios de justicia.</li>
                </ol>
                <p>
                  La mediacion de Arrienda.cl es <strong className="text-text-primary">no vinculante</strong> y tiene caracter de recomendacion.
                  Las partes conservan en todo momento su derecho a recurrir a la justicia ordinaria.
                </p>
              </div>
            </section>

            {/* 12 */}
            <section id="seccion-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">12</span>
                <h2 className="text-xl font-bold text-text-primary">Proteccion de Datos Personales</h2>
              </div>
              <div className="pl-11 space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>
                  Arrienda.cl cumple con la Ley N&#176; 19.628 sobre Proteccion de la Vida Privada y se
                  compromete a proteger los datos personales de sus usuarios.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Los datos personales se utilizan exclusivamente para la operacion de la Plataforma.</li>
                  <li>No se comparten datos con terceros salvo para procesamiento de pagos y cumplimiento legal.</li>
                  <li>Los usuarios pueden solicitar la eliminacion de sus datos en cualquier momento.</li>
                  <li>Se implementan medidas de seguridad tecnicas y organizativas para proteger la informacion.</li>
                </ul>
              </div>
            </section>

            {/* 13 */}
            <section id="seccion-13">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">13</span>
                <h2 className="text-xl font-bold text-text-primary">Propiedad Intelectual</h2>
              </div>
              <div className="pl-11 space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>
                  Todo el contenido de la Plataforma (diseno, codigo, marca, logotipos, textos) es propiedad de
                  Arrienda SpA y esta protegido por las leyes de propiedad intelectual de Chile.
                </p>
                <p>
                  Los usuarios conservan la propiedad de sus fotografias y descripciones, pero otorgan a Arrienda.cl
                  una licencia no exclusiva, gratuita y revocable para mostrarlas en la Plataforma y materiales
                  promocionales.
                </p>
              </div>
            </section>

            {/* 14 */}
            <section id="seccion-14">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">14</span>
                <h2 className="text-xl font-bold text-text-primary">Modificaciones</h2>
              </div>
              <div className="pl-11 space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>
                  Arrienda.cl se reserva el derecho de modificar estos Terminos y Condiciones en cualquier
                  momento. Las modificaciones se notificaran a los usuarios con al menos 30 dias de anticipacion
                  a traves de correo electronico y notificacion en la Plataforma.
                </p>
                <p>
                  El uso continuado de la Plataforma despues de la entrada en vigencia de las modificaciones
                  constituye aceptacion de los nuevos terminos.
                </p>
              </div>
            </section>

            {/* 15 */}
            <section id="seccion-15">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">15</span>
                <h2 className="text-xl font-bold text-text-primary">Ley Aplicable y Jurisdiccion</h2>
              </div>
              <div className="pl-11 space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>
                  Estos Terminos se rigen por las leyes de la Republica de Chile. Cualquier controversia
                  que no pueda resolverse mediante los mecanismos internos de la Plataforma sera sometida
                  a los tribunales ordinarios de justicia de la ciudad de Santiago de Chile.
                </p>
                <div className="bg-surface rounded-xl p-4 border border-gray-100 mt-4">
                  <p className="text-xs text-text-muted">
                    <strong className="text-text-secondary">Normativa aplicable:</strong> Ley N&#176; 18.101 sobre Arrendamiento de Predios Urbanos,
                    Codigo Civil de Chile, Ley N&#176; 19.496 sobre Proteccion del Consumidor,
                    Ley N&#176; 19.628 sobre Proteccion de Datos Personales.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-surface rounded-2xl p-8 border border-gray-100">
              <h3 className="font-bold text-text-primary mb-2">Contacto Legal</h3>
              <p className="text-sm text-text-secondary">
                Para consultas sobre estos terminos, escribenos a{" "}
                <a href="mailto:legal@arrienda.cl" className="text-primary font-medium hover:underline">
                  legal@arrienda.cl
                </a>
              </p>
              <p className="text-xs text-text-muted mt-2">
                Arrienda SpA &middot; Santiago, Chile &middot; Documento vigente desde el 1 de febrero de 2025
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
