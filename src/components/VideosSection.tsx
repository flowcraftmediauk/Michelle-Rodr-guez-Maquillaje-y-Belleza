import {ArrowUpRight, Play, Video} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import {useState} from 'react';
import {CLIENT_PROFILE, VERIFIED_VIDEO} from '../data/clientContent';
import {EditorialHairline, RevealOnScroll} from './MotionPrimitives';

export function VideosSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbError, setThumbError] = useState(false);

  return (
    <section
      id="videos"
      className="border-b border-[#2B1F1E]/10 bg-[#FFFBF7] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
        <RevealOnScroll yOffset={18}>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-medium tracking-wider text-[#8A4F53]">
                Canal de YouTube · {CLIENT_PROFILE.youtubeChannelName}
              </p>
              <h2 className="font-editorial mt-2.5 text-balance text-3xl font-medium leading-tight text-[#2B1F1E] sm:text-4xl md:text-[2.75rem]">
                Videos y vlogs destacados
              </h2>
              <EditorialHairline className="mt-4 bg-[#B77A7D]/70" delay={0.12} />
            </div>

            <a
              href={CLIENT_PROFILE.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 self-start rounded-full border border-[#B77A7D]/40 bg-[#F3E6DA]/50 px-5 py-2.5 text-xs font-medium text-[#2B1F1E] whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2B1F1E] hover:bg-[#F3E6DA] md:self-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B77A7D]"
            >
              <span>Visitar canal @michellermakeup</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          <RevealOnScroll yOffset={24} className="lg:col-span-7">
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-[#B77A7D]/25 bg-[#2B1F1E] shadow-[0_20px_50px_-24px_rgba(43,31,30,0.28)]">
              <AnimatePresence mode="wait">
                {isPlaying ? (
                  <motion.iframe
                    key="youtube-player"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.3}}
                    src={VERIFIED_VIDEO.embedUrl}
                    title={VERIFIED_VIDEO.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                ) : (
                  <motion.button
                    key="youtube-cover"
                    type="button"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.25}}
                    onClick={() => setIsPlaying(true)}
                    aria-label={`Reproducir video: ${VERIFIED_VIDEO.title}`}
                    className="group relative flex h-full w-full items-center justify-center text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B77A7D]"
                  >
                    {!thumbError ? (
                      <img
                        src={VERIFIED_VIDEO.thumbnailUrl}
                        alt={VERIFIED_VIDEO.title}
                        referrerPolicy="no-referrer"
                        onError={() => setThumbError(true)}
                        className="h-full w-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#2B1F1E] via-[#4A3533] to-[#8A4F53] p-8 text-center">
                        <span className="font-editorial text-3xl italic text-[#FFFBF7]">
                          {CLIENT_PROFILE.youtubeChannelName}
                        </span>
                        <span className="mt-2 text-xs text-[#FFFBF7]/75">
                          {VERIFIED_VIDEO.title}
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#2B1F1E]/85 via-[#2B1F1E]/20 to-transparent" />

                    <div className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-[#FFFBF7] text-[#2B1F1E] shadow-xl transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-0.5 h-6 w-6 fill-current" aria-hidden="true" />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5 text-[#FFFBF7] sm:p-6">
                      <p className="text-xs text-[#E8C5C0]">
                        Video oficial en YouTube · {VERIFIED_VIDEO.publishedDate}
                      </p>
                    </div>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </RevealOnScroll>

          <RevealOnScroll
            delay={0.08}
            yOffset={24}
            className="flex flex-col justify-between rounded-3xl border border-[#B77A7D]/25 bg-[#F3E6DA]/45 p-6 sm:p-8 lg:col-span-5"
          >
            <div>
              <p className="text-xs font-medium text-[#8A4F53]">
                {VERIFIED_VIDEO.channelName} · {VERIFIED_VIDEO.publishedDate}
              </p>
              <h3 className="font-editorial mt-3 text-2xl font-medium leading-snug text-[#2B1F1E] sm:text-3xl">
                {VERIFIED_VIDEO.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#2B1F1E]/80">
                {VERIFIED_VIDEO.description}
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-[#2B1F1E]/10 pt-5">
              {!isPlaying && (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#2B1F1E] px-5 py-2.5 text-xs font-medium text-[#FFFBF7] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4A3533] active:scale-[0.98]"
                >
                  <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  <span>Ver aquí</span>
                </button>
              )}

              <a
                href={VERIFIED_VIDEO.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1.5 text-xs font-medium text-[#2B1F1E] underline-offset-4 hover:text-[#8A4F53] hover:underline"
              >
                <span>Abrir en YouTube</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.1} yOffset={20}>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            <div className="flex items-center gap-4 rounded-2xl border border-[#B77A7D]/20 bg-[#F3E6DA]/30 p-5 transition-colors duration-300 hover:border-[#B77A7D]/45 sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F3E6DA]">
                <Video className="h-5 w-5 text-[#8A4F53]" aria-hidden="true" />
              </div>
              <div>
                <p className="font-editorial text-lg font-medium text-[#2B1F1E]">
                  Próximo tutorial o vlog de belleza
                </p>
                <p className="mt-1 text-xs text-[#2B1F1E]/65">
                  Espacio listo para incorporar nuevos videos publicados en{' '}
                  {CLIENT_PROFILE.youtubeChannelName}.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-[#B77A7D]/20 bg-[#F3E6DA]/30 p-5 transition-colors duration-300 hover:border-[#B77A7D]/45 sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F3E6DA]">
                <Video className="h-5 w-5 text-[#8A4F53]" aria-hidden="true" />
              </div>
              <div>
                <p className="font-editorial text-lg font-medium text-[#2B1F1E]">
                  Reels y procesos detrás de cámaras
                </p>
                <p className="mt-1 text-xs text-[#2B1F1E]/65">
                  Espacio reservado para destacar clips verificados de maquillaje o
                  transformación capilar.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
