"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
              </svg>
            </div>
            <span className="text-xl font-bold text-primary-dark">
              Arrien<span className="text-secondary">da</span>.cl
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/#como-funciona" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="/#propiedades" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
              Propiedades
            </a>
            <a href="/comisiones" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
              Comisiones
            </a>
            <a href="/inversion" className="text-sm font-medium text-secondary hover:text-secondary-dark transition-colors">
              🏠 Invertir
            </a>
            <a href="/como-funcionan-los-pagos" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
              Pagos
            </a>
            <a href="/por-que-arrienda" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
              Por Que Nosotros
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm font-medium text-primary hover:text-primary-dark transition-colors px-4 py-2">
              Iniciar Sesion
            </button>
            <button className="text-sm font-semibold bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary-dark transition-colors">
              Publicar Propiedad
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-text-secondary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-3">
              <a href="/#como-funciona" className="text-sm font-medium text-text-secondary hover:text-primary px-2 py-2">Como Funciona</a>
              <a href="/#propiedades" className="text-sm font-medium text-text-secondary hover:text-primary px-2 py-2">Propiedades</a>
              <a href="/comisiones" className="text-sm font-medium text-text-secondary hover:text-primary px-2 py-2">Comisiones</a>
              <a href="/como-funcionan-los-pagos" className="text-sm font-medium text-text-secondary hover:text-primary px-2 py-2">Pagos</a>
              <a href="/por-que-arrienda" className="text-sm font-medium text-text-secondary hover:text-primary px-2 py-2">Por Que Nosotros</a>
              <hr className="border-gray-100" />
              <button className="text-sm font-medium text-primary text-left px-2 py-2">Iniciar Sesion</button>
              <button className="text-sm font-semibold bg-primary text-white px-5 py-2.5 rounded-lg">Publicar Propiedad</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
