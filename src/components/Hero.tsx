"use client";
import { useState } from "react";

const REGIONES = [
  "Arica y Parinacota",
  "Tarapaca",
  "Antofagasta",
  "Atacama",
  "Coquimbo",
  "Valparaiso",
  "Metropolitana",
  "O'Higgins",
  "Maule",
  "Nuble",
  "Biobio",
  "Araucania",
  "Los Rios",
  "Los Lagos",
  "Aysen",
  "Magallanes",
];

const COMUNAS_SAMPLE: Record<string, string[]> = {
  Metropolitana: ["Santiago", "Providencia", "Las Condes", "Nunoa", "Vitacura", "La Florida", "Maipu", "Puente Alto"],
  Valparaiso: ["Valparaiso", "Vina del Mar", "Con Con", "Quilpue", "Villa Alemana"],
  Biobio: ["Concepcion", "Talcahuano", "Chillan", "Los Angeles"],
  Coquimbo: ["La Serena", "Coquimbo", "Ovalle"],
  Araucania: ["Temuco", "Pucon", "Villarrica"],
  "Los Lagos": ["Puerto Montt", "Puerto Varas", "Osorno", "Castro"],
};

export default function Hero() {
  const [tipoArriendo, setTipoArriendo] = useState<"corto" | "largo">("corto");
  const [region, setRegion] = useState("");
  const [comuna, setComuna] = useState("");

  const comunasDisponibles = region && COMUNAS_SAMPLE[region] ? COMUNAS_SAMPLE[region] : [];

  return (
    <section className="relative pt-16 min-h-[90vh] flex items-center bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Plataforma #1 de arriendos en Chile
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Arrienda con
              <span className="text-secondary-light"> confianza</span>,
              <br />
              vive con
              <span className="text-secondary-light"> tranquilidad</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-xl leading-relaxed">
              Conectamos arrendadores y arrendatarios con pagos seguros,
              reputacion verificada y servicios complementarios.
              Renta corta o larga, tu decides.
            </p>

            <div className="flex items-center gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Pagos protegidos
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Reviews verificados
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Todo Chile
              </div>
            </div>
          </div>

          {/* Right: Search Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
            {/* Toggle corto/largo */}
            <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
              <button
                onClick={() => setTipoArriendo("corto")}
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                  tipoArriendo === "corto"
                    ? "bg-primary text-white shadow-md"
                    : "text-text-secondary hover:text-primary"
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Renta Corta
                </span>
              </button>
              <button
                onClick={() => setTipoArriendo("largo")}
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                  tipoArriendo === "largo"
                    ? "bg-primary text-white shadow-md"
                    : "text-text-secondary hover:text-primary"
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Largo Plazo
                </span>
              </button>
            </div>

            {/* Subtitle */}
            <p className="text-xs text-text-muted mb-4">
              {tipoArriendo === "corto"
                ? "Arriendos desde 1 noche hasta 3 meses. Ideal para turismo y estadias temporales."
                : "Arriendos desde 6 meses. Contratos gestionados con respaldo legal."}
            </p>

            {/* Region */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-text-secondary mb-1.5">Region</label>
              <select
                value={region}
                onChange={(e) => { setRegion(e.target.value); setComuna(""); }}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-gray-50"
              >
                <option value="">Selecciona una region</option>
                {REGIONES.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            {/* Comuna */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-text-secondary mb-1.5">Comuna</label>
              <select
                value={comuna}
                onChange={(e) => setComuna(e.target.value)}
                disabled={!region}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-gray-50 disabled:opacity-50"
              >
                <option value="">{region ? "Selecciona una comuna" : "Primero selecciona region"}</option>
                {comunasDisponibles.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Date range for short term */}
            {tipoArriendo === "corto" && (
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">Check-in</label>
                  <input type="date" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">Check-out</label>
                  <input type="date" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-gray-50" />
                </div>
              </div>
            )}

            {/* Budget for long term */}
            {tipoArriendo === "largo" && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-text-secondary mb-1.5">Presupuesto mensual (CLP)</label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-gray-50">
                  <option value="">Cualquier presupuesto</option>
                  <option value="300000">Hasta $300.000</option>
                  <option value="500000">Hasta $500.000</option>
                  <option value="800000">Hasta $800.000</option>
                  <option value="1200000">Hasta $1.200.000</option>
                  <option value="9999999">Mas de $1.200.000</option>
                </select>
              </div>
            )}

            {/* Search Button */}
            <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Buscar Propiedades
            </button>

            {/* Stats */}
            <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100 text-center">
              <div>
                <p className="text-lg font-bold text-primary">2.500+</p>
                <p className="text-xs text-text-muted">Propiedades</p>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <p className="text-lg font-bold text-primary">16</p>
                <p className="text-xs text-text-muted">Regiones</p>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <p className="text-lg font-bold text-primary">4.8</p>
                <p className="text-xs text-text-muted">Evaluacion</p>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <p className="text-lg font-bold text-primary">15k+</p>
                <p className="text-xs text-text-muted">Usuarios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
