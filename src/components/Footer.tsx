const FOOTER_LINKS = {
  plataforma: [
    { label: "Buscar Propiedades", href: "/#propiedades" },
    { label: "Publicar Propiedad", href: "/#" },
    { label: "Renta Corta", href: "/#propiedades" },
    { label: "Largo Plazo", href: "/#propiedades" },
    { label: "Corredor Virtual", href: "/#servicios" },
  ],
  servicios: [
    { label: "Como Funcionan los Pagos", href: "/como-funcionan-los-pagos" },
    { label: "Comisiones y Tarifas", href: "/comisiones" },
    { label: "Aseo Profesional", href: "/#servicios" },
    { label: "Gasfiteria", href: "/#servicios" },
    { label: "Gestion Legal", href: "/#servicios" },
  ],
  empresa: [
    { label: "Por Que Arrienda.cl", href: "/por-que-arrienda" },
    { label: "Nuestro Equipo", href: "/por-que-arrienda#equipo" },
    { label: "Terminos y Condiciones", href: "/terminos-y-condiciones" },
    { label: "Politica de Privacidad", href: "/terminos-y-condiciones#seccion-12" },
    { label: "Contacto", href: "mailto:hola@arrienda.cl" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">
                Arrien<span className="text-secondary">da</span>.cl
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              La plataforma de arriendos mas segura de Chile.
              Renta corta y larga con pagos protegidos y servicios
              complementarios. Hecho por chilenos, para Chile.
            </p>
            <div className="flex gap-3">
              {["instagram", "facebook", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links - Plataforma */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Plataforma</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.plataforma.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Servicios */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Servicios</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.servicios.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Empresa */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Empresa</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2025 Arrienda.cl - Todos los derechos reservados. Santiago, Chile.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <a href="/terminos-y-condiciones" className="hover:text-gray-300 transition-colors">
              Terminos
            </a>
            <span className="text-gray-700">|</span>
            <a href="/comisiones" className="hover:text-gray-300 transition-colors">
              Comisiones
            </a>
            <span className="text-gray-700">|</span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Pagos seguros SSL
            </span>
          </div>
        </div>

        {/* Author */}
        <div className="mt-6 pt-4 border-t border-gray-800/50 text-center">
          <p className="text-[11px] text-gray-600">
            Desarrollado por Jaime Hernandez &middot;{" "}
            <a href="mailto:hernandez.hs@gmail.com" className="hover:text-gray-400 transition-colors">
              hernandez.hs@gmail.com
            </a>{" "}
            &middot;{" "}
            <a href="https://wa.me/56949288019" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
              +56 9 4928 8019
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
