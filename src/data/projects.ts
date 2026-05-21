export const projects = [
  {
    title: 'AxoCred',
    highlight: '2nd Place — Crevolution Hackathon 2025',
    description: {
      es: 'Demo de gestión crediticia B2B impulsado por AI, enfocado en detección proactiva de riesgo, renegociación automatizada y asistencia financiera conversacional.',
      en: 'AI-powered B2B credit management demo focused on proactive risk detection, automated renegotiation, and conversational financial assistance.'
    },
    contribution: {
      es: 'Contribuí con funcionalidad backend, Server-Sent Events para respuestas en streaming en tiempo real, manejo de sesiones, orquestación del modelo Gemini, ajustes de UI, ideas de mascota/diseño para Axo assistant y una experiencia demo inmersiva con vistas intercambiables de MacBook y iPhone.',
      en: "Rafael's contribution: Backend functionality, Server-Sent Events for real-time streaming responses, session handling, Gemini model orchestration, UI adjustments, Axo assistant mascot/design ideas, and immersive demo experience with switchable MacBook and iPhone views."
    },
    stack: ['Next.js 15', 'React 18', 'TypeScript', 'Tailwind CSS 4', 'API Routes', 'Server-Sent Events', 'Gemini API'],
    links: [
      { label: 'Launch', href: 'https://axocred-demo.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/Rafael-Ibarra-Beltran/axocred-demo' }
    ]
  },
  {
    title: 'LegisConnect',
    highlight: '3rd Place — Elegis Tech³ Hackathon',
    description: {
      es: 'Plataforma civic-tech que conecta ciudadanos y legisladores mediante propuestas legislativas, espacios de discusión, herramientas de transparencia y participación pública.',
      en: 'Civic-tech platform that connects citizens and lawmakers through legislative proposals, discussion spaces, transparency tools, and public participation.'
    },
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'shadcn/ui', 'Lucide React', 'Vercel'],
    links: [
      { label: 'Launch', href: 'https://legis-connect.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/Rafael-Ibarra-Beltran/LegisConnect' }
    ]
  },
  {
    title: 'Yaocihuatl',
    highlight: 'Cyberdemocracy Hackathon Chihuahua 2026',
    description: {
      es: 'Plataforma institucional para detectar, documentar, preservar y canalizar casos de violencia política contra las mujeres en razón de género (VPMRG) en entornos digitales. Desplegada con arquitectura real: Next.js, FastAPI, PostgreSQL/pgvector, Redis, Docker y AWS EC2.',
      en: 'Institutional platform to detect, document, preserve, and channel cases of political violence against women based on gender (VPMRG) in digital environments. Deployed with real architecture: Next.js, FastAPI, PostgreSQL/pgvector, Redis, Docker, and AWS EC2.'
    },
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Pydantic v2', 'SQLAlchemy 2', 'Alembic', 'PostgreSQL', 'pgvector', 'Redis', 'Docker', 'AWS EC2', 'RAG'],
    links: [
      { label: 'Launch', href: 'https://yaocihuatl.com' },
      { label: 'GitHub', href: 'https://github.com/Rafael-Ibarra-Beltran/Yaocihuatl' }
    ]
  },
  {
    title: 'SummaryQ',
    description: {
      es: 'Plataforma de estudio para crear, gestionar, compartir y repasar flashcards organizadas en mazos. Incluye repetición espaciada, estadísticas de progreso, mazos públicos, perfiles, autenticación y tema oscuro/claro.',
      en: 'Study platform for creating, managing, sharing, and reviewing flashcards organized in decks. Includes spaced repetition, progress statistics, public decks, profiles, authentication, and dark/light theme.'
    },
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Supabase', 'PostgreSQL', 'Vercel'],
    links: [{ label: 'GitHub', href: 'https://github.com/Rafael-Ibarra-Beltran/SummaryQ' }]
  },
  {
    title: 'LibreStock',
    description: {
      es: 'Sistema de catálogo e inventario para librería con búsqueda, filtrado por categorías, flujos de usuario y funcionalidad administrativa de inventario.',
      en: 'Bookstore catalog and inventory management system with search, category filtering, user flows, and administrative inventory functionality.'
    },
    stack: ['HTML', 'CSS', 'PHP', 'MySQL'],
    links: [{ label: 'GitHub', href: 'https://github.com/Rafael-Ibarra-Beltran/LibreStock' }]
  },
  {
    title: 'GreenPlate',
    description: {
      es: 'Aplicación web full-stack para restaurante con páginas públicas, gestión de menú, dashboard administrativo protegido, base de datos MySQL, setup Dockerizado y configuración de despliegue con Nginx.',
      en: 'Full-stack restaurant web application with public pages, menu management, protected admin dashboard, MySQL database, Dockerized setup, and Nginx deployment configuration.'
    },
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MySQL', 'Nginx', 'Docker', 'Docker Compose'],
    links: [{ label: 'GitHub', href: 'https://github.com/Rafael-Ibarra-Beltran/GreenPlate' }]
  }
];
