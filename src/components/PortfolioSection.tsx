import {ArrowUpRight, ImagePlus, X} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import {useEffect, useState} from 'react';
import {
  CLIENT_PROFILE,
  PORTFOLIO_SLOTS,
  type PortfolioSlot,
} from '../data/clientContent';
import {EditorialHairline, RevealOnScroll} from './MotionPrimitives';

export function PortfolioSection() {
  const [selectedSlot, setSelectedSlot] = useState<PortfolioSlot | null>(null);

  useEffect(() => {
    if (!selectedSlot) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedSlot(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedSlot]);

  return (
    <section
      id="portafolio"
      className="border-b border-[#E8C5C0]/15 bg-[#2B1F1E] py-16 text-[#FFFBF7] md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
        <RevealOnScroll yOffset={18}>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-medium tracking-wider text-[#E8C5C0]">
                Portafolio Signature
              </p>
              <h2 className="font-editorial mt-2.5 text-balance text-3xl font-medium leading-tight text-[#FFFBF7] sm:text-4xl md:text-[2.75rem]">
                Galería editorial reservada para tus trabajos reales
              </h2>
              <EditorialHairline className="mt-4 bg-[#E8C5C0]/60" delay={0.12} />
            </div>

            <a
              href={CLIENT_PROFILE.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 self-start rounded-full border border-[#E8C5C0]/35 bg-[#3A2A29] px-5 py-2.5 text-xs font-medium text-[#FFFBF7] whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E8C5C0] hover:bg-[#4B3635] md:self-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8C5C0]"
            >
              <span>Ver trabajos en {CLIENT_PROFILE.instagramHandle}</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#F3E6DA]/80">
            Para cuidar tu prestigio profesional, no mostramos rostros artificiales ni
            fotos ajenas. Cada marco está listo para recibir tus fotografías reales de
            clientas y looks terminados.
          </p>
        </RevealOnScroll>

        <p className="mt-6 text-xs font-medium text-[#E8C5C0] md:hidden">
          Desliza para recorrer los espacios de la galería →
        </p>

        <div className="no-scrollbar -mx-5 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:mt-12 md:grid md:grid-cols-12 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {PORTFOLIO_SLOTS.map((slot, idx) => (
            <motion.button
              key={slot.id}
              type="button"
              onClick={() => setSelectedSlot(slot)}
              initial={{opacity: 0, y: 26, scale: 0.985}}
              whileInView={{opacity: 1, y: 0, scale: 1}}
              whileHover={{y: -5}}
              whileTap={{scale: 0.985}}
              viewport={{once: false, amount: 0.14}}
              transition={{
                duration: 0.55,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative flex min-h-[260px] w-[78vw] max-w-[320px] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-3xl border border-[#E8C5C0]/20 bg-gradient-to-br from-[#372827] via-[#2F2221] to-[#231817] p-7 text-left transition-colors duration-300 hover:border-[#E8C5C0]/60 hover:bg-[#3B2B2A] md:min-h-[270px] md:w-auto md:max-w-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8C5C0] ${slot.spanClass}`}
            >
              {/* Soft radial aura transition on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-[#E8C5C0]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative flex w-full items-center justify-between text-xs text-[#E8C5C0]/80">
                <span className="tabular-nums">Espacio {slot.slotNumber}</span>
                <ImagePlus
                  className="h-4 w-4 text-[#E8C5C0] transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
              </div>

              <div className="relative my-auto py-6">
                <div className="mb-3 h-[1px] w-10 bg-[#E8C5C0]/60 transition-all duration-300 group-hover:w-20" />
                <h3 className="font-editorial text-2xl font-medium text-[#FFFBF7] transition-colors duration-200 group-hover:text-[#E8C5C0] sm:text-[1.65rem]">
                  {slot.label}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#F3E6DA]/75">
                  {slot.recommendedSubject}
                </p>
              </div>

              <div className="relative flex w-full items-center justify-between border-t border-[#E8C5C0]/15 pt-4 text-xs font-medium text-[#E8C5C0]">
                <span>Fotografía real pendiente</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  Ver detalle
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedSlot && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.22}}
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1211]/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedSlot(null)}
          >
            <motion.div
              initial={{opacity: 0, scale: 0.94, y: 16}}
              animate={{opacity: 1, scale: 1, y: 0}}
              exit={{opacity: 0, scale: 0.96, y: 12}}
              transition={{duration: 0.28, ease: [0.16, 1, 0.3, 1]}}
              className="relative w-full max-w-lg rounded-3xl border border-[#B77A7D]/30 bg-[#FFFBF7] p-7 text-[#2B1F1E] shadow-2xl sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedSlot(null)}
                aria-label="Cerrar vista previa"
                className="absolute top-5 right-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#2B1F1E]/15 text-[#2B1F1E] transition-colors hover:bg-[#F3E6DA]"
              >
                <X className="h-4 w-4" />
              </button>

              <p className="text-xs font-medium text-[#8A4F53] tabular-nums">
                Espacio de portafolio {selectedSlot.slotNumber}
              </p>
              <h3
                id="portfolio-modal-title"
                className="font-editorial mt-2 text-3xl font-medium text-[#2B1F1E]"
              >
                {selectedSlot.label}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#2B1F1E]/80">
                {selectedSlot.recommendedSubject}
              </p>
              <p className="mt-4 text-xs leading-relaxed text-[#2B1F1E]/65">
                En cuanto compartas tus fotografías reales de Instagram, Facebook o
                cámara profesional, este espacio mostrará tu imagen en alta
                resolución sin alterar a ninguna clienta.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={CLIENT_PROFILE.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#2B1F1E] px-5 py-2.5 text-xs font-medium text-[#FFFBF7] transition-colors hover:bg-[#4A3533]"
                >
                  <span>Ir a Instagram</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedSlot(null)}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#2B1F1E]/20 px-5 py-2.5 text-xs font-medium text-[#2B1F1E] transition-colors hover:bg-[#F3E6DA]/60"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
