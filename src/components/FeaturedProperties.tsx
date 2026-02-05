"use client";
import { useState } from "react";

interface Property {
  id: number;
  title: string;
  location: string;
  region: string;
  price: string;
  priceLabel: string;
  type: "corto" | "largo";
  bedrooms: number;
  bathrooms: number;
  area: number;
  rating: number;
  reviews: number;
  ownerRating: number;
  image: string;
  tags: string[];
  verified: boolean;
}

const PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Depto Moderno en Providencia",
    location: "Providencia, Santiago",
    region: "Metropolitana",
    price: "$45.000",
    priceLabel: "/noche",
    type: "corto",
    bedrooms: 2,
    bathrooms: 1,
    area: 65,
    rating: 4.9,
    reviews: 127,
    ownerRating: 4.8,
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    tags: ["WiFi", "Estacionamiento"],
    verified: true,
  },
  {
    id: 2,
    title: "Casa con Jardin en La Florida",
    location: "La Florida, Santiago",
    region: "Metropolitana",
    price: "$650.000",
    priceLabel: "/mes",
    type: "largo",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    rating: 4.7,
    reviews: 34,
    ownerRating: 4.9,
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    tags: ["Mascotas OK", "Jardin"],
    verified: true,
  },
  {
    id: 3,
    title: "Cabana Frente al Lago",
    location: "Pucon, Araucania",
    region: "Araucania",
    price: "$85.000",
    priceLabel: "/noche",
    type: "corto",
    bedrooms: 4,
    bathrooms: 2,
    area: 90,
    rating: 4.9,
    reviews: 203,
    ownerRating: 5.0,
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    tags: ["Lago", "Quincho"],
    verified: true,
  },
  {
    id: 4,
    title: "Departamento Vista al Mar",
    location: "Vina del Mar, Valparaiso",
    region: "Valparaiso",
    price: "$480.000",
    priceLabel: "/mes",
    type: "largo",
    bedrooms: 2,
    bathrooms: 1,
    area: 72,
    rating: 4.6,
    reviews: 56,
    ownerRating: 4.7,
    image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    tags: ["Vista Mar", "Amoblado"],
    verified: true,
  },
  {
    id: 5,
    title: "Loft en Barrio Italia",
    location: "Nunoa, Santiago",
    region: "Metropolitana",
    price: "$55.000",
    priceLabel: "/noche",
    type: "corto",
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    rating: 4.8,
    reviews: 89,
    ownerRating: 4.6,
    image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    tags: ["Metro Cerca", "Cocina"],
    verified: false,
  },
  {
    id: 6,
    title: "Casa Amplia en Concepcion",
    location: "Concepcion, Biobio",
    region: "Biobio",
    price: "$420.000",
    priceLabel: "/mes",
    type: "largo",
    bedrooms: 4,
    bathrooms: 3,
    area: 150,
    rating: 4.5,
    reviews: 22,
    ownerRating: 4.8,
    image: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    tags: ["Amplia", "Estacionamiento"],
    verified: true,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? "text-secondary" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-text-muted ml-1">({rating})</span>
    </div>
  );
}

export default function FeaturedProperties() {
  const [filter, setFilter] = useState<"todos" | "corto" | "largo">("todos");

  const filtered = filter === "todos" ? PROPERTIES : PROPERTIES.filter((p) => p.type === filter);

  return (
    <section id="propiedades" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <span className="inline-block text-xs font-semibold text-primary bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
              Propiedades Destacadas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Encuentra tu proximo hogar
            </h2>
          </div>

          {/* Filter pills */}
          <div className="flex gap-2 mt-4 sm:mt-0">
            {(["todos", "corto", "largo"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-text-secondary border border-gray-200 hover:border-primary"
                }`}
              >
                {f === "todos" ? "Todos" : f === "corto" ? "Renta Corta" : "Largo Plazo"}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group cursor-pointer"
            >
              {/* Image placeholder */}
              <div
                className="h-52 relative"
                style={{ background: property.image }}
              >
                {/* Type badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    property.type === "corto"
                      ? "bg-blue-500 text-white"
                      : "bg-emerald-500 text-white"
                  }`}>
                    {property.type === "corto" ? "Renta Corta" : "Largo Plazo"}
                  </span>
                </div>

                {/* Verified badge */}
                {property.verified && (
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-1.5" title="Propiedad verificada">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}

                {/* Favorite */}
                <button className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors">
                    {property.title}
                  </h3>
                  <div className="text-right shrink-0 ml-2">
                    <p className="font-bold text-primary">{property.price}</p>
                    <p className="text-xs text-text-muted">{property.priceLabel}</p>
                  </div>
                </div>

                <p className="text-sm text-text-secondary mb-3 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {property.location}
                </p>

                {/* Features */}
                <div className="flex items-center gap-4 text-xs text-text-muted mb-3">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    {property.bedrooms} Hab
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8m-8 4h8m-8 4h4" />
                    </svg>
                    {property.bathrooms} Bano
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    {property.area} m2
                  </span>
                </div>

                {/* Tags */}
                <div className="flex gap-1.5 mb-4">
                  {property.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-text-secondary px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Rating and owner */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div>
                    <StarRating rating={property.rating} />
                    <p className="text-xs text-text-muted mt-0.5">{property.reviews} reviews</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-xs font-bold">
                      {property.ownerRating}
                    </div>
                    <span className="text-xs text-text-muted">Dueno</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors text-sm border border-primary px-6 py-3 rounded-xl hover:bg-blue-50">
            Ver Todas las Propiedades
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
