import {Menu, X} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import {useEffect, useState} from 'react';
import {CLIENT_PROFILE} from '../data/clientContent';
import {ScrollProgressBar} from './MotionPrimitives';

const NAV_LINKS = [
  {id: 'inicio', label: 'Inicio', href: '#inicio'},
  {id: 'sobre-mi', label: 'Sobre mí', href: '#sobre-mi'},
  {id: 'servicios', label: 'Servicios', href: '#servicios'},
  {id: 'portafolio', label: 'Portafolio', href: '#portafolio'},
  {id: 'videos', label: 'Videos', href: '#videos'},
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState('inicio');

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {rootMargin: '-35% 0px -45% 0px', threshold: [0.15, 0.4, 0.7]}
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[#B77A7D]/20 bg-[#FFFBF7]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-5 py-3 md:px-10 md:py-4">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#inicio"
          className="font-editorial text-[1.4rem] font-medium tracking-tight text-[#2B1F1E] whitespace-nowrap shrink-0 md:text-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B77A7D]"
        >
          {CLIENT_PROFILE.brandName}
        </a>

        {/* Zone 2: Concise single-line navigation links with gliding rose-gold active underline */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#2B1F1E]/75"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-[#2B1F1E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B77A7D] ${
                  isActive ? 'text-[#2B1F1E]' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="active-nav-underline"
                    transition={{type: 'spring', stiffness: 360, damping: 32}}
                    className="absolute right-0 bottom-0 left-0 h-[1.5px] bg-[#B77A7D]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#2B1F1E] px-5 py-2.5 text-xs font-medium tracking-wide text-[#FFFBF7] whitespace-nowrap shrink-0 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4A3533] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B77A7D]"
          >
            Contacto
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#B77A7D]/35 bg-[#F3E6DA]/40 text-[#2B1F1E] transition-colors hover:bg-[#F3E6DA] active:scale-95 md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B77A7D]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <ScrollProgressBar />

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -10}}
            transition={{duration: 0.24, ease: [0.16, 1, 0.3, 1]}}
            className="border-t border-[#B77A7D]/20 bg-[#FFFBF7] px-6 py-5 shadow-lg md:hidden"
          >
            <nav aria-label="Menú móvil" className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{opacity: 0, x: -10}}
                  animate={{opacity: 1, x: 0}}
                  transition={{duration: 0.22, delay: idx * 0.04}}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-3 py-2.5 text-base font-medium transition-colors ${
                    activeId === link.id
                      ? 'bg-[#F3E6DA]/80 text-[#8A4F53]'
                      : 'text-[#2B1F1E] hover:bg-[#F3E6DA]/50'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#2B1F1E] px-5 py-3 text-sm font-medium text-[#FFFBF7] transition-colors hover:bg-[#4A3533]"
              >
                Contacto directo
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
