import type { Link, LocalizedString } from './types';

export const profile = {
  name: 'Rafael Ibarra',
  fullName: 'Rafael Ibarra Beltrán',
  role: 'Software Engineer',
  location: 'Tijuana, Baja California, Mexico',
  positioning: 'Backend · Cloud · DevOps · AI Integrations',
  currentStatus: {
    es: 'Estudiante de Ingeniería de Software en la Universidad Autónoma de Baja California, terminando la carrera en 2026.',
    en: 'Software Engineering student at Universidad Autónoma de Baja California, finishing the degree in 2026.'
  } satisfies LocalizedString,
  intro: {
    es: 'Construyo sistemas backend confiables, productos web full-stack y soluciones orientadas a la nube con arquitectura limpia, APIs seguras y flujos de despliegue prácticos.',
    en: 'I build reliable backend systems, full-stack web products, and cloud-oriented solutions with clean architecture, secure APIs, and practical deployment workflows.'
  } satisfies LocalizedString,
  about: {
    es: 'Soy estudiante de Ingeniería de Software en Tijuana, México, actualmente terminando mi carrera en UABC. Mi trabajo se enfoca en desarrollo backend, sistemas orientados a la nube, bases de datos, prácticas DevOps e integraciones con AI. Disfruto resolver problemas complejos, aprender tecnologías nuevas con rapidez y construir software limpio, eficiente y útil.',
    en: "I'm a Software Engineering student based in Tijuana, Mexico, currently finishing my degree at UABC. My work focuses on backend development, cloud-oriented systems, databases, DevOps practices, and AI integrations. I enjoy solving complex problems, learning new technologies quickly, and building software that is clean, efficient, and useful."
  } satisfies LocalizedString,
  availability: {
    es: 'Disponible para oportunidades en Software Engineering, Backend, Cloud y AI integrations.',
    en: 'Available for opportunities in Software Engineering, Backend, Cloud, and AI integrations.'
  } satisfies LocalizedString,
  links: {
    github: {
      label: 'GitHub',
      href: 'https://github.com/Rafael-Ibarra-Beltran'
    },
    linkedin: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rafael-ibarra/'
    }
  } satisfies Record<'github' | 'linkedin', Link>,
  images: {
    hero: '/images/rafael-hero.png',
    secondary: '/images/rafael-secondary.png'
  }
};
