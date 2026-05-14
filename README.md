# Portafolio de Rafael Ibarra

Portafolio personal de software engineering de Rafael Ibarra, enfocado en Backend, Cloud, DevOps e integraciones con AI.

## Descripción

Este proyecto es un portafolio single-page construido con Astro y TypeScript. Incluye una interfaz dark minimal, contenido bilingüe, diseño responsive, detalles sutiles de terminal/ASCII y configuración para publicar en GitHub Pages con dominio personalizado.

## Características

- Contenido bilingüe en español e inglés
- Detección automática de idioma con switch manual
- Diseño responsive para móvil, tablet y desktop
- Estilo visual oscuro inspirado en terminal
- Retrato ASCII en la sección Sobre mí
- Secciones de experiencia, proyectos, tech stack, educación, certificaciones y contacto
- Favicon personalizado e imagen para vista previa social
- Soporte para dominio personalizado en GitHub Pages

## Stack

- Astro
- React islands
- TypeScript
- Tailwind CSS
- Bun
- GitHub Pages

## Desarrollo

Instalar dependencias:

```sh
bun install
```

Iniciar el servidor de desarrollo:

```sh
bun run dev
```

Generar el build de producción:

```sh
bun run build
```

Previsualizar el build localmente:

```sh
bun run preview
```

## Despliegue

El sitio está configurado para el dominio personalizado:

```txt
https://rafaelibarra.me
```

El archivo `public/CNAME` está incluido para que GitHub Pages pueda usar el dominio personalizado.

## Estructura

```txt
src/
  components/   React island principal del portafolio
  data/         Contenido y datos del sitio
  pages/        Entrada principal de Astro
  styles/       Estilos globales con Tailwind/CSS
public/
  images/       Imágenes de perfil y logo
  CNAME         Dominio personalizado para GitHub Pages
```
