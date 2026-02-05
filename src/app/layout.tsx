import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arrienda.cl | Arriendos Cortos y Largos en Chile",
  description:
    "Plataforma de arriendos en Chile con pagos seguros, reviews verificados, corredor virtual y servicios complementarios. Renta corta y larga en las 16 regiones.",
  keywords: [
    "arriendo",
    "arrendar",
    "chile",
    "renta corta",
    "renta larga",
    "departamento",
    "casa",
    "alquiler",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
