import { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  MapPin,
  Menu,
  Sparkles,
  Terminal,
  X
} from 'lucide-react';
import type { SiteData } from '../data/site';
import type { Locale } from '../data/types';

type PortfolioProps = {
  data: SiteData;
  baseUrl: string;
};

const labels = {
  es: {
    nav: ['Inicio', 'Sobre mí', 'Experiencia', 'Proyectos', 'Stack', 'Educación', 'Certificaciones', 'Contacto'],
    sections: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos destacados',
      stack: 'Tech Stack',
      education: 'Educación',
      certifications: 'Certificaciones',
      contact: 'Contacto'
    },
    eyebrow: 'Portafolio técnico',
    locationLabel: 'Ubicación',
    statusLabel: 'Estado',
    focusLabel: 'Enfoque',
    availabilityLabel: 'Disponibilidad',
    ctas: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
      projects: 'Ver proyectos',
      contact: 'Contáctame'
    },
    heroAlt: 'Foto de Rafael Ibarra',
    secondaryAlt: 'Retrato de Rafael Ibarra',
    terminal: {
      whoami: 'Rafael Ibarra',
      focus: 'Backend · Cloud · DevOps · AI',
      status: 'Terminando Ingeniería de Software'
    },
    ascii: {
      command: 'ascii-render --source rafael',
      profile: 'profile: backend/cloud',
      mode: 'mode: human',
      status: 'status: available'
    },
    contribution: 'Contribución',
    contactIntro: 'Si mi perfil encaja con tu equipo o proyecto, el mejor canal para iniciar conversación es LinkedIn.',
    contactPrimary: 'Conectar en LinkedIn',
    contactSecondary: 'Ver GitHub',
    footer: 'Construido con Astro, TypeScript y Tailwind CSS.',
    menu: 'Abrir navegación',
    close: 'Cerrar navegación',
    switchTo: 'Cambiar a inglés'
  },
  en: {
    nav: ['Home', 'About', 'Experience', 'Projects', 'Stack', 'Education', 'Certifications', 'Contact'],
    sections: {
      about: 'About',
      experience: 'Experience',
      projects: 'Featured Projects',
      stack: 'Tech Stack',
      education: 'Education',
      certifications: 'Certifications',
      contact: 'Contact'
    },
    eyebrow: 'Technical portfolio',
    locationLabel: 'Location',
    statusLabel: 'Status',
    focusLabel: 'Focus',
    availabilityLabel: 'Availability',
    ctas: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
      projects: 'View projects',
      contact: 'Contact me'
    },
    heroAlt: 'Photo of Rafael Ibarra',
    secondaryAlt: 'Portrait of Rafael Ibarra',
    terminal: {
      whoami: 'Rafael Ibarra',
      focus: 'Backend · Cloud · DevOps · AI',
      status: 'Finishing Software Engineering degree'
    },
    ascii: {
      command: 'ascii-render --source rafael',
      profile: 'profile: backend/cloud',
      mode: 'mode: human',
      status: 'status: available'
    },
    contribution: 'Contribution',
    contactIntro: 'If my profile fits your team or project, LinkedIn is the best channel to start a conversation.',
    contactPrimary: 'Connect on LinkedIn',
    contactSecondary: 'View GitHub',
    footer: 'Built with Astro, TypeScript, and Tailwind CSS.',
    menu: 'Open navigation',
    close: 'Close navigation',
    switchTo: 'Switch to Spanish'
  }
} as const;

const navItems = [
  { id: 'home', index: 0 },
  { id: 'about', index: 1 },
  { id: 'experience', index: 2 },
  { id: 'projects', index: 3 },
  { id: 'stack', index: 4 },
  { id: 'education', index: 5 },
  { id: 'certifications', index: 6 },
  { id: 'contact', index: 7 }
] as const;

const primaryBtn = "inline-flex items-center justify-center gap-2 rounded-full border border-[#8BFAE5]/30 bg-[#8BFAE5]/12 px-5 py-3 text-sm font-semibold text-[#E6EDF3] shadow-[0_0_24px_rgba(139,250,229,0.10)] transition-all hover:-translate-y-0.5 hover:border-[#8BFAE5]/60 hover:bg-[#8BFAE5]/22 hover:shadow-[0_0_32px_rgba(139,250,229,0.18)]";
const secondaryBtn = "inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-[#E6EDF3] transition-all hover:border-[#8BFAE5]/40 hover:bg-white/[0.07] hover:-translate-y-0.5";
const ghostBtn = "inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-[#9BA7B4] transition-all hover:border-[#7AA2F7]/40 hover:text-[#E6EDF3] hover:-translate-y-0.5";

const heroAscii = String.raw`┌─ profile.render
│  RI :: backend/cloud
│  signal: calm + precise
└─ deploy-ready`;

const portraitAsciiDesktop = String.raw`                                   @@@@@@@@                                        
                                   @@@@@@@@@@@@@@@@@@@@@                                  
                                @@@@@@@@@@@@@@@@@@@@@@@@@@@                               
                             @@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                            
                           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                           
                         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                         
                        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                       
                      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                      
                     @@@@@@@@@+.:.......:-=#@@@@@@@%@@@@@@@@@@@@@@@@@                     
                    @@@@@@@-...........................:-+@@@@@@@@@@@@                    
                    @@@@@..................................:%@@@@@@@@@@                   
                   @@@@@......................................%@@@@@@@@@                  
                   @@@@....:....................................-@@@@@@@                  
                   @@@............................................@@@@@@                  
                  @@@=.........:.........:....................:.:.%@@@@@                  
                  @@@........................................:.-:.#@@@@@@                 
                  @@@..................................:........-.-@@@@@@                 
                   @@.....=---..............=@@@@@@@@@@@@@@+....-=.%@@@@@                 
                   @..-@@@@@@@@@@@@@@@-...#@@@@@@@+.....-@@@@@=:.=-.@@@@@                 
                   @.-@@=.......+@@=#=.....+::...............=@@-.:.=@@@@                 
                   @.@*............:--...:=+--....++*+=........=%+:-.@@@@                 
                   -.@......%@@@@@..=-....=+=..@@@%@@@@@@@@@-....=.-.@@@@                 
                   .....#@@@@@@@@@@.+==.-+=-=+..........-+@@%+.....-.=@@@                 
                   ....@@@.........=#-...=+-=..-=..................::.@@.....             
                   .............:=-+*:..-===*+-...-###====::+-.:....-.@..@@@.             
                   ....::.--+#=...#%-.....:-=#@%=....:-===:-.----*..=.@:...#.             
                  ...-:..........%:............=@@:............=-...-.@..*.=.             
                  ..-.....-....+#...@#++#@@@@...#@@+..........:--:..-:@#.==..             
                  =.-:........+#+-@@@@@###:-@@@@@..@#.........::.-...:@@.=..+             
                  ..:........:#:-%@#%==...=+%-......%+.........-::.=-=@@.=..              
                  ..-........#%...+%%-@@-@@%#%@@+@+..*-.........:=.+##@@...               
                  #..:-..:..@#.=@@%+=.........-..@@@#*@+.-::...=.=.+#@@@...               
                  @.....:..=@=%@*...+#@@@@@@@@@@@%=.==@@@+...=..-@=%#@@...                
                  @=.-...:-@@@@@@@@%%............-#@@@@@@@....#--@=#=@@@.                 
                   @+#=....==--.+%@............--.@%...=*+....=+.-:%-#@@                  
                   @=.+=-...-#...=%@@@@@@%@+#*@@@#+=....@..===*+--#+#@@                   
                    @.:--.=..@.....-==-......=-.........@..--..+++++#@-                   
                     #.*.@##.@-..-.....=+=@:--.=.:-..+..@%.=:@:#..@#@@                    
                     @%......%**...-:................#%+...-..=+.##@@+                    
                      @@@-#--%.*-................-:....%@#++.+@@%@@@*.                    
                       @@+++:@+#+..............:=:..=#.--#.@+*##@@@@.:                    
              -.....@@@@@@@%==%%@-:-+:-:........-%..+#@@%%#++++@@@@@.+#                   
            ......@@@@@@@@@@@#=%@@@-:.=-.=%-..:=.:.+%@@@@##@@@@@@%@.:+*...                
           .....@@@@@@@@@@@@@@@+.%@@@@..=-.=.=-%@@@@@%#####%@@@@@@-.++-%@..@@@            
         .....@@@@@@@@@@@@...@@@@%+-+#@@@@@@@@@@@@@@%@+@@@@@@@@@@..-**..@.-..@@           
      @.....*@@@@@@@@@@@@......@@@@@@#*%=+==:+@#*+*%%@@@@%@@@@@=...===..@..-..@@@         
    .......@@@@@@@@@@@@@........@@@@@@@%@@#@@%@@@@%@#@@@@@@@#.....:-:...%....=.-@@        
  ........@@@@@@@@@@@@%.........=.%@@@@@*%@@#@@#%#@@@@@@@%=............=...+....@@@@      
 ........@@@@@@@@@@@@.=........=#-..%+@#@%@@%%@@@@@@@#-..............:.:...-...@@@@@@@    
........@@@@@@@@@@@..............@....+-=:=++%%-.-:.................-....=....@@@@@@@@@@  
......:@@@@@@@@@@@...%.........:.@-.....--++==--..................=...=.....+@@@@@@@@@@@@@
.....-@@@@@@@@@@@...%..........-.%@.....................:........+--.......@@@@@@@@@@@@@@@
.....@@@@@@@@@@-...#-.............@*..........:................=..........@@@@@@@@@@@@@@@@
....@@@@@@@@@@.....#............=..@:..........:.:.......................@@@@@@@@@@@@@@@@@
....@@@@@@@@@.....-.................@...-....++.............:..-........@@@@@@@@@@@@@@@@@@
...#@@@@@@@@.....@...............*...@@=+................=-.=....+..-#.@@@@@@@@@@@@@@@@@@@
.=.@@@@@@@@.....@.................-.....-#+++:.........=%+.....@..=+..@@@@@@@@@@@@@@@@@@@@
...@@@@@@@.....@*.............................-...:-+++.:....#-......@@@@@@@@@@@@@@@@@@@..
...@@@@@+.....%......................-=.......:---..:......+........@@@@@@@@@@@@@@@@@@..-.
...@@@@:.....#...........................................--........@@@@@@@@@@@@@@@@@@.....
..@@@@......#......................:...+=...............+.........*@@@@@@@@@@@@@@@@@..@@..
..@@@.....:......-.........................%-:-#-=.....=.....::...@@@@@@@@@@@@@@@@@..@....
.*@.............-.....................................+.....%....@@@@@@@@@@@@@@@@@..@...-.
.@......:......-..................................:..#....=......@@@@@@@@@@@@@@@@.....+...
.....................................:-.............+-...+...=..@@@@@@@@@@@@@@@@@...@...=.
..................:................................=....+..::...@@@@@@@@@@@@@@@@...@..-...
.....=....:............:..--....................=.:-...+..=....#@@@@@@@@@@@@@@@...@....:+.
....@@@.............-.............................=...#........@@@@@@@@@@@@@@@@..@..--@...
.....-......................................:...%-...-....:....@@@@@@@@@@@@@@@..@:..**....
...............................................:....-.......-.%@@@@@@@@@@@@@@@.%+..%....%.
...............................................................@@@@@@@@@@@@@@............. `;

const portraitAsciiMobile = String.raw`                    @@@@                    
               @@@@@@@@@@@@@@@               
             @@@@@@@@@@@@@@@@@@@             
            @@@@@@@@@@@@@@@@@@@@@            
           @@@@@@#*#@@@@@@@@@@@@@@           
          @@@................-@@@@@@         
         @@%....................*@@@         
         @@......................@@@         
         @=..............%@@+....@@@@        
         @.@@@@@@@@..@@@@*..@@@#..@@@        
         @=-......=..=...#%%:..-#.%@@        
         ...@@@@@#*.=*=..+-+@@=....@@.       
         ........+=..+%:..--......:@.+.      
         ..-:...........@......=-.-@...      
         ......#%@@@@@@@-.#.....:.:@..       
         .....#.:%+@*-=@%+==....::@@..       
         =...@@@@%......+@@@@..:+#@@.        
         @+-..*.*@......+@..#..*.=#@         
          #...+...=++++=....*.--.%@@         
           @..=#...........+-..%%@#          
       ...@@@%=@=.......=.+@%+*@@@.+         
     ...@@@@@@@@@@@.*#-+%@@@%%@@@.=@..@      
   ...@@@@@@@..@@@@@@@@@@@@@@@@@..+.=..@     
 ....@@@@@@#....+@@@@@@@@@@@@......-....@@   
....@@@@@@......@..=*%%@#=.............@@@@@@
...@@@@@........+@...................:@@@@@@@
..@@@@@..-.......#-.................@@@@@@@@@
..@@@@..#.........@*+.-.....:=.....@@@@@@@@@@
.#@@@..%-..............+::+=..:...=@@@@@@@@@.
.@@@..=......................:...=@@@@@@@@...
.@...................-.=...-..:..@@@@@@@@....
..........................+.....@@@@@@@@@....
.........................-..:...@@@@@@@@.....
..@.....................=......+@@@@@@@...=..
...............................@@@@@@@@...... `;

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'es';

  const stored = window.localStorage.getItem('portfolio-locale');
  if (stored === 'es' || stored === 'en') return stored;

  return window.navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
}

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-6 border-b border-white/10 pb-4 md:mb-10">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-[#8BFAE5]/80">{kicker}</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#E6EDF3] sm:text-3xl">{title}</h2>
      </div>
      <span aria-hidden="true" className="hidden font-mono text-sm text-[#6B7684] sm:block">
        {'//'}
      </span>
    </div>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[0.7rem] text-[#9BA7B4]">
      {children}
    </span>
  );
}

function AsciiPortrait({ labels: asciiLabels }: { labels: (typeof labels)['es']['ascii'] }) {
  return (
    <aside className="ascii-card relative overflow-hidden rounded-3xl border border-white/10 bg-[#05070A] p-4 shadow-2xl shadow-black/35 sm:p-5" aria-label="ASCII portrait">
      <div aria-hidden="true" className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#8BFAE5]/70 to-transparent" />
      <div className="relative z-10 rounded-2xl border border-white/10 bg-[#0A0D12]/72 p-3 font-mono text-[0.64rem] text-[#9BA7B4] sm:p-4 sm:text-xs">
        <div className="mb-3 flex items-center justify-between gap-3 border-b border-white/10 pb-3">
          <span className="truncate text-[#8BFAE5]">$ {asciiLabels.command}</span>
          <span className="hidden text-[#6B7684] sm:inline">01:ASCII</span>
        </div>
        <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="space-y-1 text-[#6B7684]">
            <p>{asciiLabels.profile}</p>
            <p>{asciiLabels.mode}</p>
            <p>{asciiLabels.status}</p>
            <p className="text-[#8BFAE5]/80">render: characters-only</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-[#6B7684]">
            <p>░▒▓</p>
          </div>
        </div>
      </div>
      <div className="ascii-portrait relative z-10 mt-4 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_18%,rgba(139,250,229,0.10),transparent_17rem),#05070A] p-3 sm:p-5">
        <pre className="ascii-art ascii-art-desktop hidden text-center text-[#9BA7B4] md:block">{portraitAsciiDesktop}</pre>
        <pre className="ascii-art ascii-art-mobile text-center text-[#9BA7B4] md:hidden">{portraitAsciiMobile}</pre>
      </div>
      <div className="relative z-10 mt-4 grid grid-cols-3 gap-2 font-mono text-[0.63rem] text-[#6B7684] sm:text-xs">
        <span className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-2 text-center">backend</span>
        <span className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-2 text-center">cloud</span>
        <span className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-2 text-center">devops</span>
      </div>
    </aside>
  );
}

export default function Portfolio({ data, baseUrl }: PortfolioProps) {
  const [locale, setLocale] = useState<Locale>('es');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = labels[locale];

  const normalizedBase = useMemo(() => (baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`), [baseUrl]);
  const asset = (path: string) => `${normalizedBase}${path.replace(/^\//, '')}`;

  useEffect(() => {
    const nextLocale = detectLocale();
    setLocale(nextLocale);
    document.documentElement.lang = nextLocale;
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const switchLocale = () => {
    const nextLocale = locale === 'es' ? 'en' : 'es';
    setLocale(nextLocale);
    window.localStorage.setItem('portfolio-locale', nextLocale);
  };

  return (
    <div className="min-h-screen overflow-hidden text-[#E6EDF3]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05070A]/88 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Primary navigation">
          <a href="#home" className="group flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <span className="grid size-9 place-items-center rounded-lg border border-white/10 bg-[#0F141B] transition-colors group-hover:border-[#8BFAE5]/40 overflow-hidden">
              <img src={asset('/images/logo.png')} alt="" className="h-full w-full object-contain p-0.5" />
            </span>
            <span className="hidden text-sm font-medium tracking-wide text-[#E6EDF3] sm:block">Rafael Ibarra</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-3 py-2 text-sm text-[#9BA7B4] transition-colors hover:bg-white/[0.04] hover:text-[#E6EDF3]"
              >
                {t.nav[item.index]}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={switchLocale}
              aria-label={t.switchTo}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs text-[#9BA7B4] transition-colors hover:border-[#8BFAE5]/40 hover:text-[#E6EDF3]"
            >
              <span className={locale === 'es' ? 'text-[#8BFAE5]' : ''}>ES</span>
              <span className="mx-2 text-[#6B7684]">/</span>
              <span className={locale === 'en' ? 'text-[#8BFAE5]' : ''}>EN</span>
            </button>
            <button
              type="button"
              className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-[#9BA7B4] lg:hidden"
              aria-label={menuOpen ? t.close : t.menu}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {menuOpen ? (
          <div className="border-t border-white/10 bg-[#05070A] px-5 py-4 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-xl px-4 py-3 text-sm text-[#9BA7B4] hover:bg-white/[0.04] hover:text-[#E6EDF3]"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav[item.index]}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main id="home" className="mx-auto max-w-7xl px-4 pt-24 sm:px-8 lg:pt-36">
        <section className="grid min-h-[calc(100vh-7rem)] items-center gap-10 py-9 sm:gap-14 sm:py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs uppercase tracking-[0.24em] text-[#8BFAE5]/85">
              <Terminal size={14} />
              {t.eyebrow}
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-[#E6EDF3] sm:text-6xl lg:text-7xl">
              {data.profile.name}
            </h1>
            <p className="mt-5 text-xl font-medium text-[#E6EDF3] sm:text-2xl">{data.profile.role}</p>
            <p className="mt-3 font-mono text-sm text-[#8BFAE5] sm:text-base">{data.profile.positioning}</p>
            <p className="mt-7 max-w-2xl text-base leading-7 text-[#9BA7B4] sm:text-lg sm:leading-8">{data.profile.intro[locale]}</p>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <a className={primaryBtn} href={data.profile.links.linkedin.href} target="_blank" rel="noreferrer">
                <ArrowUpRight size={17} /> {t.ctas.linkedin}
              </a>
              <a className={secondaryBtn} href={data.profile.links.github.href} target="_blank" rel="noreferrer">
                <Code2 size={17} /> {t.ctas.github}
              </a>
              <a className={ghostBtn} href="#projects">
                {t.ctas.projects} <ArrowUpRight size={17} />
              </a>
              <a className={ghostBtn} href="#contact">
                {t.ctas.contact}
              </a>
            </div>

            <dl className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <dt className="font-mono text-xs text-[#6B7684]">{t.locationLabel}</dt>
                <dd className="mt-2 text-sm text-[#E6EDF3]">{data.profile.location}</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <dt className="font-mono text-xs text-[#6B7684]">{t.statusLabel}</dt>
                <dd className="mt-2 text-sm text-[#E6EDF3]">2026</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <dt className="font-mono text-xs text-[#6B7684]">{t.focusLabel}</dt>
                <dd className="mt-2 text-sm text-[#E6EDF3]">Backend · Cloud</dd>
              </div>
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:mr-0">
            <div aria-hidden="true" className="ascii-float absolute -left-8 top-8 hidden rotate-[-3deg] rounded-2xl border border-white/10 bg-[#0A0D12]/90 p-4 font-mono text-[0.63rem] leading-3 text-[#6B7684] shadow-2xl shadow-black/30 sm:block">
              <pre>{heroAscii}</pre>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F141B] p-4 shadow-2xl shadow-black/40">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8BFAE5]/60 to-transparent" />
              <div className="relative min-h-[27rem] overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_10%,rgba(139,250,229,0.12),transparent_24rem),#05070A] sm:min-h-[34rem]">
                <img
                  src={asset(data.profile.images.hero)}
                  alt={t.heroAlt}
                  className="absolute bottom-0 left-1/2 w-[95%] max-w-[28rem] -translate-x-1/2 object-contain drop-shadow-2xl sm:w-[92%]"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,transparent_62%,rgba(5,7,10,0.82))]" />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-[#05070A]/82 p-4 font-mono text-xs text-[#9BA7B4] backdrop-blur-md">
                  <p><span className="text-[#8BFAE5]">&gt;</span> whoami</p>
                  <p className="mt-1 text-[#E6EDF3]">{t.terminal.whoami}</p>
                  <p className="mt-3"><span className="text-[#8BFAE5]">&gt;</span> focus</p>
                  <p className="mt-1 text-[#E6EDF3]">{t.terminal.focus}</p>
                  <p className="mt-3"><span className="text-[#8BFAE5]">&gt;</span> status</p>
                  <p className="mt-1 text-[#E6EDF3]">{t.terminal.status}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-28 py-16 sm:py-20">
          <SectionHeading kicker="01" title={t.sections.about} />
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.52fr)]">
            <div className="rounded-3xl border border-white/10 bg-[#0F141B]/78 p-6 sm:p-8">
              <p className="max-w-4xl text-lg leading-8 text-[#9BA7B4]">{data.profile.about[locale]}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <MapPin className="mb-4 text-[#8BFAE5]" size={20} />
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#6B7684]">{t.locationLabel}</p>
                  <p className="mt-2 text-[#E6EDF3]">{data.profile.location}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <Sparkles className="mb-4 text-[#7AA2F7]" size={20} />
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#6B7684]">{t.focusLabel}</p>
                  <p className="mt-2 text-[#E6EDF3]">{data.profile.positioning}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <GraduationCap className="mb-4 text-[#8BFAE5]" size={20} />
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#6B7684]">{t.statusLabel}</p>
                  <p className="mt-2 text-[#E6EDF3]">{data.profile.currentStatus[locale]}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <BriefcaseBusiness className="mb-4 text-[#7AA2F7]" size={20} />
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#6B7684]">{t.availabilityLabel}</p>
                  <p className="mt-2 text-[#E6EDF3]">{data.profile.availability[locale]}</p>
                </div>
              </div>
            </div>
            <AsciiPortrait labels={t.ascii} />
          </div>
        </section>

        <section id="experience" className="scroll-mt-28 py-20">
          <SectionHeading kicker="02" title={t.sections.experience} />
          <div className="grid gap-5">
            {data.experience.map((item) => (
              <article key={`${item.company}-${item.period}`} className="rounded-3xl border border-white/10 bg-[#0F141B]/78 p-6 transition-colors hover:border-[#8BFAE5]/30 sm:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="mb-3 flex items-center gap-3 text-[#8BFAE5]"><BriefcaseBusiness size={18} /><span className="font-mono text-xs uppercase tracking-[0.24em]">{item.period}</span></div>
                    <h3 className="text-xl font-semibold text-[#E6EDF3]">{item.role} — {item.company}</h3>
                    <p className="mt-2 text-sm text-[#6B7684]">{item.location}</p>
                  </div>
                </div>
                <p className="mt-5 leading-7 text-[#9BA7B4]">{item.description[locale]}</p>
                <div className="mt-6 flex flex-wrap gap-2">{item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-28 py-20">
          <SectionHeading kicker="03" title={t.sections.projects} />
          <div className="grid gap-5 lg:grid-cols-2">
            {data.projects.map((project, index) => (
              <article key={project.title} className={index === 0 ? 'rounded-3xl border border-[#8BFAE5]/20 bg-[#0F141B]/86 p-6 transition-colors hover:border-[#8BFAE5]/40 sm:p-8 lg:col-span-2' : 'rounded-3xl border border-white/10 bg-[#0F141B]/78 p-6 transition-colors hover:border-[#8BFAE5]/30 sm:p-8'}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#6B7684]">{String(index + 1).padStart(2, '0')}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-[#E6EDF3]">{project.title}</h3>
                  </div>
                  {'highlight' in project && project.highlight ? (
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#8BFAE5]/20 bg-[#8BFAE5]/10 px-3 py-2 font-mono text-xs text-[#8BFAE5]"><Award size={14} />{project.highlight}</span>
                  ) : null}
                </div>
                <p className="mt-5 leading-7 text-[#9BA7B4]">{project.description[locale]}</p>
                {'contribution' in project && project.contribution ? (
                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#8BFAE5]">{t.contribution}</p>
                    <p className="mt-3 text-sm leading-6 text-[#9BA7B4]">{project.contribution[locale]}</p>
                  </div>
                ) : null}
                <div className="mt-6 flex flex-wrap gap-2">{project.stack.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a key={`${project.title}-${link.href}`} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-[#E6EDF3] transition-colors hover:border-[#8BFAE5]/40">
                      {link.label} <ArrowUpRight size={16} />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="scroll-mt-28 py-20">
          <SectionHeading kicker="04" title={t.sections.stack} />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {data.stackGroups.map((group) => (
              <article key={group.title.en} className="rounded-3xl border border-white/10 bg-[#0F141B]/78 p-6 transition-colors hover:border-[#7AA2F7]/30">
                <Code2 className="mb-5 text-[#7AA2F7]" size={21} />
                <h3 className="text-lg font-semibold text-[#E6EDF3]">{group.title[locale]}</h3>
                <div className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => <Tag key={item}>{item}</Tag>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="scroll-mt-28 py-20">
          <SectionHeading kicker="05" title={t.sections.education} />
          <div className="grid gap-5 lg:grid-cols-2">
            {data.education.map((item) => (
              <article key={item.institution} className="rounded-3xl border border-white/10 bg-[#0F141B]/78 p-6 sm:p-8">
                <GraduationCap className="mb-5 text-[#8BFAE5]" size={22} />
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#6B7684]">{item.period}</p>
                <h3 className="mt-3 text-xl font-semibold text-[#E6EDF3]">{item.institution}</h3>
                <p className="mt-2 text-[#8BFAE5]">{item.degree[locale]}</p>
                <p className="mt-5 leading-7 text-[#9BA7B4]">{item.description[locale]}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="scroll-mt-28 py-20">
          <SectionHeading kicker="06" title={t.sections.certifications} />
          <div className="grid gap-3 sm:grid-cols-2">
            {data.certifications.map((certification) => (
              <div key={certification} className="rounded-2xl border border-white/10 bg-[#0F141B]/72 p-4 font-mono text-sm text-[#9BA7B4]">
                <span className="mr-3 text-[#8BFAE5]">*</span>{certification}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 py-20">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F141B] p-6 sm:p-10 lg:p-12">
            <div aria-hidden="true" className="absolute right-6 top-6 hidden font-mono text-xs leading-4 text-[#6B7684]/70 md:block">
              <pre>{String.raw`{ connect: true,
  channel: "linkedin",
  status: "open" }`}</pre>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[#8BFAE5]/80">07</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[#E6EDF3] sm:text-4xl">{t.sections.contact}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#9BA7B4]">{data.profile.availability[locale]}</p>
            <p className="mt-3 max-w-2xl leading-7 text-[#9BA7B4]">{t.contactIntro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={data.profile.links.linkedin.href} target="_blank" rel="noreferrer" className={primaryBtn}><ArrowUpRight size={17} />{t.contactPrimary}</a>
              <a href={data.profile.links.github.href} target="_blank" rel="noreferrer" className={secondaryBtn}><Code2 size={17} />{t.contactSecondary}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#6B7684] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Rafael Ibarra.</p>
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
