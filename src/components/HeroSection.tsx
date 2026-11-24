import {ArrowDownRight, ArrowRight} from 'lucide-react';
import {motion} from 'motion/react';
import {useState} from 'react';
import {CLIENT_PROFILE} from '../data/clientContent';
import {ParallaxMedia, RevealOnScroll} from './MotionPrimitives';

export function HeroSection() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFBF7] via-[#FBF2EA] to-[#F3E6DA]"
    >
      <div className="mx-auto max-w-6xl px-5 pt-7 pb-12 sm:px-6 md:px-10 md:pt-14 md:pb-16">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-14">
          <motion.div
            initial={{opacity: 0, y: 16}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.65, ease: [0.16, 1, 0.3, 1]}}
            className="order-2 flex flex-col justify-between lg:order-1 lg:col-span-6"
          >
            <div className="space-y-4 md:space-y-6">
              <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium tracking-wider text-[#8A4F53]">
                <span>{CLIENT_PROFILE.location}</span>
                <span aria-hidden="true">·</span>
                <span>{CLIENT_PROFILE.category}</span>
              </p>

              <h1 className="font-editorial text-balance text-[2.65rem] font-medium leading-[1.03] tracking-tight text-[#2B1F1E] sm:text-6xl lg:text-[4.25rem]">
                Michelle Rodríguez
                <span className="mt-2 block font-editorial text-2xl font-normal italic text-[#8A4F53] sm:text-4xl">
                  Maquillaje, cabello y belleza con sello propio
                </span>
              </h1>

              <p className="max-w-lg text-[0.95rem] leading-relaxed text-[#2B1F1E]/80 md:text-[1.0625rem]">
                Profesional de la belleza en Arequipa, Perú. Su propuesta une el
                arte del maquillaje, la transformación capilar y el cuidado
                personal bajo una estética femenina, luminosa y cercana.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3.5 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
              <a
                href="#servicios"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full bg-[#2B1F1E] px-7 py-3.5 text-sm font-medium text-[#FFFBF7] whitespace-nowrap shadow-[0_14px_30px_-14px_rgba(43,31,30,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4A3533] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B77A7D]"
              >
                <span>Explorar servicios</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#contacto"
                className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#B77A7D]/45 bg-[#FFFBF7]/80 px-6 py-3 text-sm font-medium text-[#2B1F1E] whitespace-nowrap transition-all duration-200 hover:border-[#2B1F1E] hover:bg-[#FFFBF7] active:scale-[0.98] sm:border-0 sm:bg-transparent sm:px-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B77A7D]"
              >
                <span>Contactar directamente</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </motion.div>

          {/* Arched luxury atelier photograph with scroll-linked parallax */}
          <motion.div
            initial={{opacity: 0, scale: 0.97}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
            className="order-1 lg:order-2 lg:col-span-6"
          >
            <div className="relative mx-auto aspect-[4/4.6] max-h-[420px] w-full overflow-hidden rounded-t-[170px] rounded-b-3xl border border-[#B77A7D]/30 bg-[#E8D7C8] p-2 shadow-[0_24px_60px_-20px_rgba(43,31,30,0.22)] lg:h-full lg:max-h-[540px] lg:aspect-auto">
              <div className="relative h-full w-full overflow-hidden rounded-t-[162px] rounded-b-[1.15rem]">
                {!imgFailed ? (
                  <ParallaxMedia range={14} className="h-full w-full">
                    <img
                      src={CLIENT_PROFILE.assets.heroVanity}
                      alt="Tocador luminoso de estudio de belleza con espejo arqueado dorado, brochas y frasco rosa"
                      referrerPolicy="no-referrer"
                      onError={() => setImgFailed(true)}
                      className="h-full w-full object-cover object-center"
                    />
                  </ParallaxMedia>
                ) : (
                  <div className="flex h-full min-h-[340px] flex-col items-center justify-center bg-gradient-to-br from-[#F3E6DA] via-[#FFFBF7] to-[#E8C5C0]/60 p-8 text-center">
                    <span className="font-editorial text-3xl italic text-[#2B1F1E]">
                      {CLIENT_PROFILE.brandName}
                    </span>
                    <span className="mt-2 text-xs text-[#2B1F1E]/70">
                      {CLIENT_PROFILE.instagramHandle} · {CLIENT_PROFILE.location}
                    </span>
                  </div>
                )}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2B1F1E]/85 via-[#2B1F1E]/35 to-transparent p-5 text-[#FFFBF7] md:p-7">
                  <p className="font-editorial text-lg italic text-[#F3E6DA]">
                    {CLIENT_PROFILE.facebookPageName}
                  </p>
                  <p className="mt-0.5 text-xs tracking-wide text-[#FFFBF7]/85">
                    {CLIENT_PROFILE.instagramHandle} · {CLIENT_PROFILE.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Velvet Espresso signature band below hero */}
      <div className="border-t border-[#E8C5C0]/20 bg-[#2B1F1E] text-[#FFFBF7]">
        <RevealOnScroll yOffset={14}>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-5 px-5 py-7 sm:px-6 md:px-10 lg:grid-cols-4">
            <div>
              <p className="text-[11px] tracking-wider text-[#E8C5C0]/80">
                Ubicación
              </p>
              <p className="mt-1 font-editorial text-lg text-[#FFFBF7] sm:text-xl">
                {CLIENT_PROFILE.location}
              </p>
            </div>
            <div>
              <p className="text-[11px] tracking-wider text-[#E8C5C0]/80">
                Instagram
              </p>
              <a
                href={CLIENT_PROFILE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block font-editorial text-lg text-[#FFFBF7] underline-offset-4 hover:text-[#E8C5C0] hover:underline sm:text-xl"
              >
                {CLIENT_PROFILE.instagramHandle}
              </a>
            </div>
            <div>
              <p className="text-[11px] tracking-wider text-[#E8C5C0]/80">
                Facebook
              </p>
              <a
                href={CLIENT_PROFILE.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block font-editorial text-lg text-[#FFFBF7] underline-offset-4 hover:text-[#E8C5C0] hover:underline sm:text-xl"
              >
                {CLIENT_PROFILE.facebookPageName}
              </a>
            </div>
            <div>
              <p className="text-[11px] tracking-wider text-[#E8C5C0]/80">
                YouTube
              </p>
              <a
                href={CLIENT_PROFILE.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block font-editorial text-lg text-[#FFFBF7] underline-offset-4 hover:text-[#E8C5C0] hover:underline sm:text-xl"
              >
                {CLIENT_PROFILE.youtubeChannelName}
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
