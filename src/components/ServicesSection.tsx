import {ArrowUpRight} from 'lucide-react';
import {motion} from 'motion/react';
import {useState} from 'react';
import {CLIENT_PROFILE, CONFIRMED_DISCIPLINES} from '../data/clientContent';
import {ParallaxMedia, RevealOnScroll} from './MotionPrimitives';

export function ServicesSection() {
  const [bannerError, setBannerError] = useState(false);
  const [failedCards, setFailedCards] = useState<Record<string, boolean>>({});

  return (
    <section
      id="servicios"
      className="border-b border-[#2B1F1E]/10 bg-[#F3E6DA]/60 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
        <RevealOnScroll yOffset={18}>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-medium tracking-wider text-[#8A4F53]">
                Áreas de belleza confirmadas
              </p>
              <h2 className="font-editorial mt-2.5 text-balance text-3xl font-medium leading-tight text-[#2B1F1E] sm:text-4xl md:text-[2.75rem]">
                Servicios preparados para su menú oficial
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-[#2B1F1E]/75">
              Únicamente áreas verificadas en sus perfiles públicos, listas para
              incorporar sus servicios exactos, duración y tarifas confirmadas.
            </p>
          </div>
        </RevealOnScroll>

        {/* Mobile swipe indicator */}
        <p className="mt-6 text-xs font-medium text-[#8A4F53] md:hidden">
          Desliza horizontalmente para ver las áreas confirmadas →
        </p>

        {/* Horizontal snap carousel on mobile, staggered animated 3-column grid on desktop */}
        <div className="no-scrollbar -mx-5 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:mt-10 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {CONFIRMED_DISCIPLINES.map((item, idx) => (
            <motion.article
              key={item.index}
              initial={{opacity: 0, y: 24}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: false, amount: 0.14}}
              transition={{
                duration: 0.55,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex w-[84vw] max-w-[340px] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-3xl border border-[#B77A7D]/25 bg-[#FFFBF7] shadow-[0_14px_34px_-22px_rgba(43,31,30,0.22)] transition-transform duration-300 md:w-auto md:max-w-none md:hover:-translate-y-1"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E8D7C8]">
                  {!failedCards[item.index] ? (
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedCards((prev) => ({
                          ...prev,
                          [item.index]: true,
                        }))
                      }
                      className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#F3E6DA] to-[#E8C5C0]/60 p-6">
                      <span className="font-editorial text-2xl italic text-[#2B1F1E]">
                        {item.title}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between border-b border-[#2B1F1E]/10 pb-3">
                    <span className="font-editorial text-2xl text-[#8A4F53] tabular-nums">
                      {item.index}.
                    </span>
                    <span className="text-[11px] text-[#2B1F1E]/60">
                      {item.sourceLabel}
                    </span>
                  </div>

                  <h3 className="font-editorial mt-4 text-2xl font-medium text-[#2B1F1E]">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#2B1F1E]/80">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="border-t border-[#2B1F1E]/10 bg-[#F3E6DA]/35 px-6 py-4 sm:px-7">
                <p className="text-xs leading-relaxed text-[#2B1F1E]/65">
                  {item.pendingNote}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Editorial beauty atmosphere strip with parallax */}
        <RevealOnScroll delay={0.08} yOffset={24}>
          <div className="mt-10 grid grid-cols-1 items-stretch overflow-hidden rounded-3xl border border-[#B77A7D]/25 bg-[#FFFFFF] shadow-[0_18px_45px_-26px_rgba(43,31,30,0.2)] lg:grid-cols-12">
            <div className="relative min-h-[220px] bg-[#E8D7C8] lg:col-span-7">
              {!bannerError ? (
                <ParallaxMedia range={16} className="h-full w-full">
                  <img
                    src={CLIENT_PROFILE.assets.editorialBrushes}
                    alt="Brochas de maquillaje, pigmentos satinados y sérum sobre lino color champán"
                    referrerPolicy="no-referrer"
                    onError={() => setBannerError(true)}
                    className="h-full w-full object-cover object-center"
                  />
                </ParallaxMedia>
              ) : (
                <div className="flex h-full min-h-[220px] items-center justify-center bg-gradient-to-r from-[#F3E6DA] to-[#E8C5C0]/50 p-8">
                  <span className="font-editorial text-2xl italic text-[#2B1F1E]">
                    {CLIENT_PROFILE.brandName}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:col-span-5">
              <p className="text-xs font-medium tracking-wider text-[#8A4F53]">
                Atención personalizada
              </p>
              <h3 className="font-editorial mt-2 text-2xl font-medium text-[#2B1F1E] sm:text-3xl">
                ¿Deseas consultar disponibilidad o detalles de atención?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#2B1F1E]/75">
                Comunícate directamente por correo electrónico o llamada telefónica
                para recibir información oficial sobre sus servicios en{' '}
                {CLIENT_PROFILE.location}.
              </p>
              <div className="mt-6">
                <a
                  href="#contacto"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#2B1F1E] px-6 py-3 text-xs font-medium text-[#FFFBF7] whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4A3533] active:scale-[0.98] sm:w-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B77A7D]"
                >
                  <span>Solicitar información</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
