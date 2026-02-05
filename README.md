# Arrienda.cl

Plataforma de arriendos cortos y largos en Chile. Conecta arrendadores y arrendatarios con pagos seguros, reputacion verificada y servicios complementarios.

## Stack Tecnologico

| Tecnologia | Version |
|---|---|
| Next.js | 16 |
| React | 19 |
| TypeScript | 5.9 |
| Tailwind CSS | 4 |
| Deploy | Vercel |

## Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx                        # Landing principal
│   ├── layout.tsx                      # Layout raiz (SEO, fuentes)
│   ├── globals.css                     # Theme Tailwind personalizado
│   ├── comisiones/page.tsx             # Comisiones y tarifas
│   ├── como-funcionan-los-pagos/page.tsx  # Onboarding de pagos fase a fase
│   ├── por-que-arrienda/page.tsx       # Diferenciacion y equipo
│   └── terminos-y-condiciones/page.tsx # Terminos legales (15 secciones)
├── components/
│   ├── Navbar.tsx                      # Navegacion responsive
│   ├── Hero.tsx                        # Buscador con toggle corto/largo
│   ├── HowItWorks.tsx                  # Flujo en 3 pasos
│   ├── FeaturedProperties.tsx          # Propiedades con filtros y ratings
│   ├── Services.tsx                    # 6 servicios complementarios
│   ├── TrustSection.tsx                # Confianza, pagos retenidos, testimonios
│   ├── RegionsSection.tsx              # Cobertura 16 regiones
│   ├── CTASection.tsx                  # Call to action
│   ├── PageHeader.tsx                  # Header reutilizable para subpaginas
│   └── Footer.tsx                      # Footer con navegacion completa
```

## Funcionalidades Clave

- **Renta Corta y Larga** en una sola plataforma con flujos diferenciados
- **Busqueda por Region y Comuna** (16 regiones de Chile)
- **Toggle Renta Corta / Largo Plazo** con formulario adaptativo
- **Sistema de Reputacion Bidireccional** (arrendadores y arrendatarios)
- **Pagos Retenidos** con tarjeta de credito (cobro, retencion, liberacion)
- **Servicios Complementarios**: aseo, gasfiteria, electricidad, gestion legal, corredor virtual
- **Contratos Digitales** con firma electronica
- **Comisiones Transparentes**: 5%/8% corto plazo, 3%/50% largo plazo

## Paginas

| Ruta | Contenido |
|---|---|
| `/` | Landing principal con buscador, propiedades, servicios, regiones |
| `/comisiones` | Tabla de comisiones con ejemplos, comparativa vs Airbnb y corredoras |
| `/como-funcionan-los-pagos` | Onboarding visual fase por fase (renta corta: 5 fases, largo plazo: 6 fases) |
| `/por-que-arrienda` | Diferenciacion, valores, equipo chileno |
| `/terminos-y-condiciones` | 15 secciones legales con limitacion de responsabilidad |

## Ejecutar Localmente

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build produccion
npm run build

# Iniciar produccion
npm start
```

## Deploy en Vercel

El proyecto esta configurado para Vercel con:

- `vercel.json` con headers de seguridad y region Latam (`gru1`)
- `next.config.ts` con output standalone y compresion
- Build automatico al pushear a `main`

Para deployar: conectar el repositorio en [vercel.com/new](https://vercel.com/new) e importar `devjaime/arrienda`.

## Configuracion Vercel

| Setting | Valor |
|---|---|
| Framework | Next.js (auto-detectado) |
| Build Command | `npm run build` |
| Output Directory | default |
| Region | `gru1` (Sao Paulo - Latam) |
| Node.js | 18.x+ |

---

## Licencia

**Todos los derechos reservados.**

Este proyecto es propiedad intelectual de **Jaime Hernandez**. Queda prohibida su reproduccion, distribucion o modificacion sin autorizacion expresa del autor.

Contacto: hernandez.hs@gmail.com
